import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'

export const beforeSyncWithSearch: BeforeSync = async ({ req, originalDoc, searchDoc }) => {
  const {
    doc: { relationTo: collection },
  } = searchDoc

  // Common fields across many collections
  const commonFields = {
    slug: originalDoc?.slug,
    title: originalDoc?.title,
    description: originalDoc?.description,
    updatedAt: originalDoc?.updatedAt,
    createdAt: originalDoc?.createdAt,
  };

  let modifiedDoc: DocToSync = {
    ...searchDoc,
    ...commonFields,
    categories: [], // Initialize or ensure it's an array
  };

  // Specific handling for different collections
  if (collection === 'posts') {
    const { categories, meta } = originalDoc as any; // Type assertion for clarity
    modifiedDoc = {
      ...searchDoc,
      ...commonFields,
      meta: {
        ...meta,
        title: meta?.title || originalDoc?.title,
        image: meta?.image?.id || meta?.image, // Handle potential image ID vs object
        description: meta?.description,
      },
      categories: [],
    };

    if (categories && Array.isArray(categories) && categories.length > 0) {
      const populatedCategories: { id: string | number; title: string }[] = [];
      for (const category of categories) {
        if (!category) continue;

        if (typeof category === 'object') {
          populatedCategories.push(category);
          continue;
        }

        const doc = await req.payload.findByID({
          collection: 'categories',
          id: category,
          disableErrors: true,
          depth: 0,
          select: { title: true },
          req,
        });

        if (doc !== null) {
          populatedCategories.push(doc);
        } else {
          console.error(`Category not found for post ${originalDoc?.id}.`);
        }
      }
      modifiedDoc.categories = populatedCategories.map((each) => ({
        relationTo: 'categories',
        categoryID: String(each.id),
        title: each.title,
      }));
    }
  } else if (collection === 'services') {
    const { title, slug, description, kenyanContext, subServices } = originalDoc as any;
    modifiedDoc = {
      ...searchDoc,
      slug: slug,
      title: title,
      description: kenyanContext || description, // Use Kenyan context if available, else general description
      updatedAt: originalDoc?.updatedAt,
      createdAt: originalDoc?.createdAt,
      // services: subServices would link to sub-services, but for search, we might want to list them
      // For now, keep it simple; the main service is indexed.
      // If sub-services are linked, we can decide how to represent them here.
    };
  } else if (collection === 'sub-services') {
    const { title, slug, description, kenyanContext, service } = originalDoc as any;
    modifiedDoc = {
      ...searchDoc,
      slug: slug,
      title: title,
      description: kenyanContext || description, // Use Kenyan context if available, else general description
      updatedAt: originalDoc?.updatedAt,
      createdAt: originalDoc?.createdAt,
      parentService: service?.slug || 'general', // Link to parent service slug
    };
  } else if (collection === 'case-studies') {
    const { title, slug, client, resultMetric, challenge, solution, updatedAt, createdAt } = originalDoc as any;
    modifiedDoc = {
      ...searchDoc,
      slug: slug,
      title: title,
      client: client,
      resultMetric: resultMetric,
      description: challenge || solution, // Use challenge or solution as description
      updatedAt: updatedAt,
      createdAt: createdAt,
    };
  }

  return modifiedDoc
}
