import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'sadasdada sdadadas dasdasdad asdadaadada asdsadad',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'sadasdada asdsdadadas dasdasdad asdadaadada asdsadad',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
