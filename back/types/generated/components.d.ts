import type { Schema, Struct } from '@strapi/strapi';

export interface PageElementButton extends Struct.ComponentSchema {
  collectionName: 'components_page_element_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    color: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    radius: Schema.Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.DefaultTo<'sm'>;
    size: Schema.Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.DefaultTo<'md'>;
    variant: Schema.Attribute.Enumeration<
      ['filled', 'outline', 'light', 'white', 'default', 'subtle', 'gradient']
    > &
      Schema.Attribute.DefaultTo<'filled'>;
  };
}

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
    buttons: Schema.Attribute.Component<'page-element.button', true>;
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

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-element.button': PageElementButton;
      'page-element.inner-background': PageElementInnerBackground;
      'page-element.outer-background': PageElementOuterBackground;
      'page-section.hero-section': PageSectionHeroSection;
      'shared.seo': SharedSeo;
    }
  }
}
