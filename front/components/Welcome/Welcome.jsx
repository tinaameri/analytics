import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Text
          variant="gradient"
          component="a"
          href="https://mantine.dev/guides/next/"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          this guide
        </Text>
        . To get started edit &lt;code&gt;pages/index.tsx&lt;/code&gt; file.
      </Text>
    </>
  );
}
