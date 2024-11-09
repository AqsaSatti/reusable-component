import type { Meta, StoryObj } from '@storybook/react';
import Button from "../Components/Button/Button";
import { fn } from '@storybook/test';
// import Icon from '../Components/Icon';

const meta = {
    title: 'Components/Button/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // Enable controls for the `variant` property
        variant: {
          control: 'select',
          options: ['contained', 'outlined', 'link', 'delete', 'send'], // List your button variants here
        },
        // Enable controls for the `size` property
        size: {
          control: 'select',
          options: ['small', 'medium', 'large'],
        },
        // Enable controls for the `children` property (label of the button)
        children: {
          control: 'text',
        },
        // Enable controls for `endIcon`
        // endIcon: {
        //   control: 'text', // Typically you'd set an icon library here if applicable
        // },
        // Enable onClick as an action in Storybook
        onClick: { action: 'clicked' },
        
        color:{
            control: 'select',
            options: ['red', 'green'],
        }
      },
    
    // args: { onClick: fn() },
  } satisfies Meta<typeof Button>;

  export default meta;

  type Story = StoryObj<typeof meta>;

  export const Contained: Story = {
    args: {
      variant: "contained",
      children:"Contained",
      onClick: () => alert("Contained button clicked"),
      size: "medium"
    },
  };
  export const Link: Story = {
    args: {
      variant: "link",
      children:"Link"
    },
  };


  export const Send: Story = {
    args: {
      variant: "send",
      children:"Send",
      size: "medium",
      startIcon:"fa-paper-plane",
      
    },
  };
  export const Error: Story = {
    args: {
      children:"Error",
      size: "medium",
      color: "red"

    },
  };
  export const Success: Story = {
    args: {
      children:"Success",
      size: "medium",
      color: "green"

    },
  };

  export const Outlined: Story = {
    args: {
      variant: "outlined",
      children:"Outlined"
    },
  };
  export const Disabled: Story = {
    args: {
      variant: "disabled",
      children:"Disabled",
      size: "medium",
      disabled: true,
      onClick: () => alert("Disabled button clicked"),
    },
  };


