import { createTheme } from '@mantine/core';

export const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontFamily: 'IRANSansXVF, sans-serif',
  lineHeight: '1.5',
  headings: {
    fontFamily: 'IRANSansXVF, sans-serif',
    fontWeight: '500',
  },
  components: {
    Text: {
      styles: {
        root: {
          lineHeight: ' 1',
        },
      },
    },
  },
});
