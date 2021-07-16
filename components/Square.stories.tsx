import { Meta, Story } from '@storybook/react/';
import Square, { SquareProps } from './Square';

export default {
	title: 'Square',
	component: Square,
} as Meta;

export const Default: Story<SquareProps> = (args: any) => {
	return <Square {...args} />;
};

Default.args = {
	className: 'w-32 h-32 bg-gray-700 rounded shadow-inner',
};
