import { Box, Container } from '@mantine/core';

const SectionLayout = ({
  children,
  outerBg,
  innerBg,
  py = 'xl',
  outerSx,
  innerSx,
  // Carousel props that might be passed down
  slideSize,
  slideGap,
  loop,
  align,
  slidesToScroll,
  withIndicators,
  ...rest
}) => {
  return (
    <Box bg={outerBg} py={py} {...rest} sx={{ ...outerSx }}>
      <Container size="xl" bg={innerBg} sx={{ ...innerSx }}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionLayout;
