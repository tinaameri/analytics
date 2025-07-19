import { createTheme } from '@mantine/core';

export const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontFamily: 'IRANSans, sans-serif',
  lineHeight: '1.5',
  headings: {
    fontFamily: 'IRANSans, sans-serif',
    fontWeight: '900',
    sizes: {
      h1: {
        fontSize: '60px',
        lineHeight: '1.2',
      },
    },
  },
  primaryColor: 'primary',
  colors: {
    'primary': ['#005CB7', '#005CB7', '#005CB7', '#005CB7', '#005CB7', '#005CB7', '##005CB7', '#005CB7', '#005CB7', '#147885'],
    //'blue': '#66ABEF',
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
