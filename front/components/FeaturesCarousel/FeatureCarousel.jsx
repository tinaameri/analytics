import { useRef } from 'react';
import classes from './FeaturesCarousel.module.scss';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Box, Card, Image } from '@mantine/core';

import '@mantine/carousel/styles.css';

import { IMAGES_BASE_URL } from '../../lib/strapi';
import SectionLayout from '../Layout/SectionLayout';
import MarkdownDisplay from '../MarkdownDisplay/MarkdownDisplay';

function FeatureCard({ image, title, content }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      className={classes.card}
      withBorder={false} // We have a custom border
    >
      <Card.Section>
        <Image src={image} height={480} alt={title} className={classes.image} />
        <Box className={classes.content}>
          <MarkdownDisplay markdownContent={content} />
        </Box>
      </Card.Section>

      {/* <div style={{ padding: 'var(--mantine-spacing-md)' }}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>

        <Text size="sm" mt="xs" className={classes.description}>
          {description}
        </Text>
      </div> */}
    </Card>
  );
}

export function FeaturesCarousel({ features }) {
  const slides = features.features.map((feature) => (
    <Carousel.Slide key={feature.title}>
      <FeatureCard image={IMAGES_BASE_URL + feature.image.url} content={feature.content} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  console.log(features.features, 'features----------');
  return (
    //     <Carousel
    //     slideSize="70%"
    //     height={200}
    //     slideGap="md"
    //     controlsOffset="sm"
    //     controlSize={26}
    //     withControls
    //     withIndicators={false}
    //   >
    //           <Carousel.Slide>1</Carousel.Slide>
    //           <Carousel.Slide>3</Carousel.Slide>
    //           <Carousel.Slide>4</Carousel.Slide>

    //     {/* ...slides */}
    //   </Carousel>
    <>
      {console.log(features?.info, 'features')}
      <SectionLayout>
        <MarkdownDisplay markdownContent={features?.info} />
      </SectionLayout>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        slideSize={{ base: '70%', sm: '50%', md: '33.333333%', lg: '29%' }}
        slideGap={{ base: 0, sm: 'md' }}
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: 'start',
        }}
        align="start"
        slidesToScroll={1}
        withIndicators
        height="100%"
        pr={{ xs: 10, sm: 10, md: 10, lg: 100 }}
        pb={100}

        //   slideSize="70%"
        //   height={200}
        //   slideGap="md"
        //   controlsOffset="sm"
        //   controlSize={26}
        //   withControls
        //   withIndicators={false}
      >
        {slides}
      </Carousel>
    </>
  );
}
