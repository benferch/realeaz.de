export default {
	widgets: [
		{
			name: 'document-list',
			options: {
				title: 'Recent articles',
				types: ['post'],
			},
			layout: {
				width: 'medium',
				height: 'small',
			},
		},
		{
			name: 'notes',
			layout: {
				width: 'large',
				height: 'auto',
			},
		},
		{
			name: 'project-users',
			layout: {
				width: 'small',
				height: 'small',
			},
		},
		{
			name: 'project-info',
			layout: {
				width: 'small',
				height: 'small',
			},
		},
	],
};
