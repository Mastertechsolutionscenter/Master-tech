## Gemini Added Memories
- The user is running the dev servers for the `web-tours-ltd` project on their own terminals. I should not start or restart them. I will inform the user when a restart is needed.

---
## Project Context Details - Further Information

To further enhance my understanding and assistance for this project, here is additional context regarding its setup, workflows, and operational considerations:

1.  **Developer Environment:**
    *   **Question:** Are there particular versions of Node.js, pnpm, or other core development tools that are critical for this project?
    *   **Description:** Ensuring compatibility with specific tool versions can prevent unexpected build or runtime issues.
    *   **Question:** Any specific global configurations or environment variables that are essential for local development?
    *   **Description:** Understanding these helps in setting up a consistent local environment and troubleshooting setup problems.

2.  **Project-Specific Commands:**
    *   **Question:** Beyond `pnpm dev` and `pnpm build`, are there other important custom scripts in your `package.json` that I should be aware of for maintenance, testing, or specific tasks?
    *   **Description:** Knowing custom scripts allows for efficient execution of project-specific operations.

3.  **Deployment Process:**
    *   **Question:** How is the application typically deployed? Are there specific steps, configurations, or targets (e.g., staging, production environments)?
    *   **Description:** Understanding the deployment pipeline is crucial for ensuring changes are integrated correctly and for troubleshooting deployment-related issues.

4.  **Testing Strategy:**
    *   **Question:** What are the commands to run tests (unit, integration, end-to-end)?
    *   **Description:** Knowing the testing commands is essential for verifying changes and ensuring code quality.
    *   **Question:** Are there specific linting or code quality checks that are routinely performed (e.g., `pnpm lint`, `ruff check`)?
    *   **Description:** Adhering to established code quality standards maintains project consistency.

5.  **Security Considerations:**
    *   **Question:** Beyond general security practices, are there any specific security-sensitive areas or policies I should be aware of when making changes? (e.g., specific data handling regulations beyond ODPC).
    *   **Description:** Awareness of sensitive data handling and compliance requirements is critical for maintaining security and privacy.

6.  **User Roles and Permissions:**
    *   **Question:** Are there distinct user roles within the application (beyond admin/client), and what are their specific permissions or limitations?
    *   **Description:** Understanding user roles helps in implementing features or making changes that respect access controls and user privileges.

7.  **External Service Integrations:**
    *   **Question:** Beyond what's evident (like email sending, though currently console-logged), are there other critical third-party services or APIs that are fundamental to the application's operation?
    *   **Description:** Knowledge of external dependencies is vital for understanding the application's architecture and for troubleshooting integration issues.

## Recent Backend & Content Updates (April 2026)
- **Blog Content Enrichment:** Created 7 SEO-optimized, long-form blog posts (~1,500 words each) with detailed technical insights and Kenyan market context.
- **Service & Sub-Service Core Data:** Updated titles, descriptions, and meta tags for key services and sub-services programmatically. `extraContent` blocks require manual addition in the CMS.
- **Search & Sitemap Expansion:** Implemented dynamic sitemaps for `services`, `sub-services`, and `case-studies`. Expanded site search indexing to include these collections.
- **Global Arcjet Protection:** Configured site-wide security via `middleware.ts` for bot detection, rate limiting, and attack shielding.
- **Task Automation:** Implemented and scheduled the `weeklyLeadReport` task for automated lead summaries.
- **Build Optimization:** Resolved a critical Next.js build error in `RenderBlocks.tsx` by removing an unused TypeScript directive.
- **Card Component Fix:** Updated blog card logic to correctly display images using `heroImage` as a fallback.

---

## Pending Tasks & Next Steps
- [ ] **About/Contact Page Migration:**
    - **Status:** Programmatic creation failed due to strict image field validation. Manual creation in CMS is the recommended path.
    - **Action:** User to manually create 'About Us' and 'Contact Us' pages in the CMS, paste provided JSON content, upload required images, and then delete old globals.
- [ ] **Email Handling & SMTP Configuration:**
    - **Status:** Email sending mechanism exists, but `.env` needs actual SMTP credentials.
    - **Action:** User to update `.env` with real SMTP details (provider, port, user, pass). Optionally, configure Payload's integrated email adapter.
- [ ] **Admin Account Email Update:**
    *   **Status:** Admin user has a placeholder email.
    *   **Action:** Determine admin user creation method (seed vs. manual) to provide specific update instructions.
- [ ] **Service/Sub-Service Block Content:**
    *   **Status:** Top-level fields (title, description, meta) are updated. `extraContent` blocks require manual addition in the CMS.
    *   **Action:** User to manually add `extraContent` blocks into the appropriate fields in the Payload CMS for services and sub-services.
- [ ] **Client Portal Enhancements:**
    *   **Status:** Pending.
    *   **Action:** Add "Quick Action" buttons for invoice downloads and direct meeting scheduling.
- [ ] **Codebase Research (Ongoing):** Continue analyzing backend/frontend code to identify further improvements, dependencies, or potential issues.
- [ ] **Testing:** Implement comprehensive E2E tests for critical user flows.
