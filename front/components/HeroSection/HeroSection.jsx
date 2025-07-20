import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { AspectRatio, Box, Center, Grid } from '@mantine/core';
import { getBackground } from '../../lib/getBackground';
import { CMS_BASE_URL } from '../../lib/strapi';
import Button from '../Button/Button';
import SectionLayout from '../Layout/SectionLayout';
import MarkdownDisplay from '../MarkdownDisplay/MarkdownDisplay';

const ColorSchemeToggle = dynamic(
  () => import('../ColorSchemeToggle/ColorSchemeToggle').then((mod) => mod.ColorSchemeToggle),
  {
    ssr: false,
  }
);

export default function HeroSection({ sectionData }) {
  const outerBg = getBackground(sectionData?.outer_background);
  return (
    <SectionLayout outerBg={outerBg.background}>
      <ColorSchemeToggle />
      <Grid align="center">
        <Grid.Col span={{ base: 12, md: sectionData?.two_columns ? 6 : 12 }}>
          <MarkdownDisplay markdownContent={sectionData?.content} />
          {sectionData?.buttons && (
            <Center mt="xl" gap="md">
              {sectionData.buttons.map((button) => {
                return <Button key={button.id} {...button} variant={button.variant || 'filled'} />;
              })}
            </Center>
          )}
        </Grid.Col>
        <Grid.Col mt={sectionData?.two_columns ? '0' : 'xl'} span={{ base: 12, md: sectionData?.two_columns ? 6 : 12 }}>
          <Box w="100%" h="300px" pos="relative">
            <AspectRatio ratio={16 / 9}>
              <Image
                priority
                src={`${CMS_BASE_URL}${sectionData?.image?.url}`}
                fill
                alt={sectionData?.outer_background?.image?.alt || ''}
              />
            </AspectRatio>
          </Box>
        </Grid.Col>
      </Grid>
    </SectionLayout>
  );
}
