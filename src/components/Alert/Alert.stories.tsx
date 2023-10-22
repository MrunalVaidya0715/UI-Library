import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert from './Alert';
import { AlertProps } from './Alert.types';

export default {
  title: 'SimpliUI/Alert',
  component: Alert,
} as Meta;

export const DefaultAlert = () => (
  <Alert variant="default"  title="Default Alert" description="This is a default alert." />
);

export const DestructiveAlert = () => (
  <Alert variant="destructive" title="Destructive Alert" description="This is a destructive alert." />
);
