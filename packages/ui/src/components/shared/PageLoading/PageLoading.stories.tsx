import type { Meta, StoryObj } from '@storybook/react-vite';
import PageLoading from './PageLoading';

const meta: Meta<typeof PageLoading> = {
  title: 'Components/Shared/PageLoading',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Page Loading spinner while fetching the page from database`,
      },
    },
  },
  tags: ['autodocs'],
  component: PageLoading,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
