import { select } from '@storybook/addon-knobs';
import React from 'react';
import Text from '../Text';
import { List } from './List';
import { Props } from './types';

const variant: Props['variant'][] = ['horizontal', 'vertical'];

export const Basic = () => (
    <List variant={select('Variant', variant, 'vertical')}>
        <Text> Item 1</Text>
        <Text> Item 2</Text>
        <Text> Item 3</Text>
    </List>
);
