import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

const AllTheProviders = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender };
