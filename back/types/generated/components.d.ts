import type { Schema, Struct } from '@strapi/strapi';

export interface PageElementInnerBackground extends Struct.ComponentSchema {
  collectionName: 'components_page_element_inner_backgrounds';
  info: {
    displayName: 'inner-background';
  };
  attributes: {
    color: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageElementOuterBackground extends Struct.ComponentSchema {
  collectionName: 'components_page_element_outer_backgrounds';
  info: {
    displayName: 'outer-background';
  };
  attributes: {
    color: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_page_section_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    inner_background: Schema.Attribute.Component<
      'page-element.inner-background',
      false
    >;
    outer_background: Schema.Attribute.Component<
      'page-element.outer-background',
      false
    >;
    two_columns: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-element.inner-background': PageElementInnerBackground;
      'page-element.outer-background': PageElementOuterBackground;
      'page-section.hero-section': PageSectionHeroSection;
    }
  }
}
