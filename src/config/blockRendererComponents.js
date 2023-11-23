import React from "react";
import {
  getStyles,
  getClasses,
  BlockRenderer,
} from "@webdeveducation/wp-block-tools";

// Skecja w któej będziemy pobierać nasze komponenty
import {
  PersonalCtaButton,
  PersonalTickItem,
  PersonalCoworkersSlideshow,
  Group,
  Columns,
  MediaText,
  Gallery,
  Cover,
  Embed,
  ContactForm7,
} from "../components/GutenbergBlocks";
import { GatsbyImage } from "gatsby-plugin-image";

export const blockRendererComponents = (block) => {
  switch (block.name) {
    case "contact-form-7/contact-form-selector": {
      return (
        <ContactForm7
          key={block.id}
          formId={block.attributes.id}
          formMarkup={block.attributes.formMarkup
            .replace('novalidate="novalidate"', "")
            .split('aria-required="true"')
            .join('aria-required="true" required')}
        />
      );
    }
    case "tgg/ctabutton": {
      const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      };

      return (
        <div className={alignMap[block.attributes.data.align]}>
          <PersonalCtaButton
            key={block.id}
            destination={block.attributes.data.destination}
            label={block.attributes.data.label}
          />
        </div>
      );
    }
    case "tgg/tickitem": {
      return (
        <PersonalTickItem key={block.id}>
          <BlockRenderer blocks={block.innerBlocks} />
        </PersonalTickItem>
      );
    }
    case "tgg/coworkersslideshow": {
      const sliderItems = [];
      for (let i = 0; i < block.attributes.data.slider_items; i++) {
        const item = {
          title: block.attributes.data[`slider_items_${i}_title`],
          image: block.attributes.data[`slider_items_${i}_image`],
          company_website_link:
            block.attributes.data[`slider_items_${i}_company_website_link`],
        };
        sliderItems.push(item);
      }

      return (
        <PersonalCoworkersSlideshow
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
          sliderItems={sliderItems}
        />
      );
    }
    case "core/cover": {
      return (
        <Cover
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
          gatsbyImage={block.attributes.gatsbyImage}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Cover>
      );
    }
    case "core/group": {
      return (
        <Group
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
          gatsbyImage={block.attributes.gatsbyImage}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Group>
      );
    }
    case "core/columns": {
      return (
        <Columns
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
          gatsbyImage={block.attributes.gatsbyImage}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Columns>
      );
    }
    case "core/image": {
      return (
        <figure key={block.id} className={getClasses(block)}>
          <GatsbyImage
            style={getStyles(block)}
            image={block.attributes.gatsbyImage}
            alt={block.attributes.alt || ""}
            width={block.attributes.width}
            height={block.attributes.height}
          />
        </figure>
      );
    }
    case "core/media-text": {
      return (
        <MediaText
          key={block.id}
          className={getClasses(block)}
          style={getStyles(block)}
          verticalAlignment={block.attributes.verticalAlignment}
          gatsbyImage={block.attributes.gatsbyImage}
          mediaPosition={block.attributes.mediaPosition}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </MediaText>
      );
    }
    case "core/gallery": {
      return (
        <Gallery
          key={block.id}
          className={getClasses(block)}
          images={block.innerBlocks}
          attributes={block.attributes}
        />
      );
    }
    case "core/embed": {
      return (
        <Embed
          key={block.id}
          className={getClasses(block)}
          images={block.innerBlocks}
          attributes={block.attributes}
        />
      );
    }

    default:
      return null;
  }
};
