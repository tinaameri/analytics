import React, { Fragment } from 'react';
import HeroSection from './HeroSection/HeroSection';

export default function DynamicPage({ pageData }) {
  const data = pageData?.page_dynamic_sections;
  return (
    <Fragment>
      {data?.map((section) =>
        section.__typename === 'ComponentPageSectionHeroSection' ? (
          <Fragment key={section.id}>
            <HeroSection sectionData={section} />
          </Fragment>
        ) : null
      )}
    </Fragment>
  );
}
