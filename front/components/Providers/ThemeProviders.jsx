import { DirectionProvider, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';

export function ThemeProviders({ children }) {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>{children}</MantineProvider>
    </DirectionProvider>
  );
} 