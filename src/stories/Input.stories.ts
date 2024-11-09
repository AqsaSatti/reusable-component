import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Components/Input/Input';


const meta = {
    title: 'Components/Input/Input',
    component: Input,
    tags: ['autodocs'],
   
  } satisfies Meta<typeof Input>;

  export default meta;

  type Story = StoryObj<typeof meta>;

  export const Outlined: Story = {
    args: {
        variant:"outlined",
          placeholder:"Username",
          startIcon:"fa-regular fa-user",
          onChange: (e) => console.log('Input value:', e.target.value),
    },
  };