import React, { Fragment } from 'react';
import HeroSection from './HeroSection/HeroSection';
import { FeaturesCarousel } from './FeaturesCarousel/FeatureCarousel';

export default function DynamicPage({ pageData }) {
  const data = pageData?.page_dynamic_sections;
  return (
    <Fragment>
      {data?.map((section) =>
        section.__typename === 'ComponentPageSectionHeroSection' ? (
          <Fragment key={section.id}>
            <HeroSection sectionData={section} />
          </Fragment>
        ) : section.__typename === 'ComponentPageSectionFeatureCarousel' ? (
          <Fragment key={section.id}>
            {console.log(section,'seeeeeee')}
            <FeaturesCarousel features={section} />
          </Fragment>
        ) : null
      )}
    </Fragment>
  );
}
