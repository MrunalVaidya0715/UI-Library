import React from 'react';
import { Meta } from '@storybook/react';
import Form from './Form';

export default {
  title: 'SimpliUI/Form',
  component: Form,
} as Meta;

export const Default = () => (
  <Form
    title="Login Form"
    onSubmit={() => {
      alert('Form submitted!');
    }}
  >
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
  </Form>
);
