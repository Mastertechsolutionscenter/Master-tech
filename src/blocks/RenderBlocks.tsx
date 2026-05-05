import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ConsultingBlock } from '@/blocks/Consulting/Component'
import { ServicesGridBlock } from '@/blocks/ServicesGrid/Component'
import { HeroBlock } from '@/blocks/Hero/Component'
import { TimelineBlock } from '@/blocks/Timeline/Component'
import { ContactBlock } from '@/blocks/Contact/Component'
import { ServicesBlock } from '@/blocks/Services/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { PostsBlock } from '@/blocks/Posts/Component'
import { MissionVisionBlock } from '@/blocks/MissionVision/Component'
import { ValuesBlock } from '@/blocks/Values/Component'
import { LocalExpertiseBlock } from '@/blocks/LocalExpertise/Component'
import { JourneyBlock } from '@/blocks/Journey/Component'
import { TechStackBlock } from '@/blocks/TechStack/Component'
import { ContactFormBlock } from '@/blocks/ContactForm/Component'
import { LogoMarqueeBlock } from '@/blocks/LogoMarquee/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  consulting: ConsultingBlock,
  servicesGrid: ServicesGridBlock,
  hero: HeroBlock,
  timeline: TimelineBlock,
  contactBlock: ContactBlock,
  servicesBlock: ServicesBlock,
  faqBlock: FAQBlock,
  postsBlock: PostsBlock,
  missionVision: MissionVisionBlock,
  values: ValuesBlock,
  localExpertise: LocalExpertiseBlock,
  journey: JourneyBlock,
  techStack: TechStackBlock,
  contactFormBlock: ContactFormBlock,
  logoMarquee: LogoMarqueeBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
