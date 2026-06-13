import type { Meta } from '@storybook/react-vite';
import IconDocs from './icon-docs';

const meta = {
  title: 'DesignSystem/Icons',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

export const Default = {
  render: () => <IconDocs />,
};
