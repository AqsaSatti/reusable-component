import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Components/Input/Input';
import { fn } from '@storybook/test';


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
          onChange:fn(),
    },
  };
  export const Filled: Story = {
    args: {
          variant:"filled",
          placeholder:"Username",
          startIcon:"fa-regular fa-user",
    },
  };
  export const filled_with_icons: Story = {
    args: {
          variant:"filled",
          placeholder:"Username",
          startIcon:"fa-regular fa-user",
           endIcon : "fas fa-search",
    },
  };
  export const Underlined: Story = {
    args: {
          variant:"underlined",
          placeholder:"Username",
    },
  };
  export const Disabled: Story = {
    args: {
          variant:"filled",
          placeholder:"Username",
          disabled:true,
          startIcon:"fa-regular fa-user",
    },
  };
  export const Rounded: Story = {
    args: {
          variant:"rounded",
          placeholder:"Username",
          
    },
  };

