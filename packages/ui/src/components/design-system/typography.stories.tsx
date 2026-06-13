import type { Meta } from '@storybook/react-vite';
import TypographyDocs from './typography-docs';

const meta = {
  title: 'DesignSystem/Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

export const Docs = { render: () => <TypographyDocs /> };
