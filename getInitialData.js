const IA_INITIAL_DATA = {
	screens: {
		categories: {
			id: 'categories',
			title: 'What do you want to talk to our doctor?',
			subTitle:
				'Your responses will help us assign the most relevant doctor for you',
			buttonText: 'Next',
		},
		concerns: {
			id: 'concerns',
			title: 'Which of the following best describes your concern?',
			subTitle:
				'Your responses will help us assign the most relevant doctor for you',
			buttonText: 'Next',
		},
		concernsDescription: {
			id: 'concernsDescription',
			title: 'Which of the following best describes your hair loss', // to get the dynamic issue we need to send data to the backend once the user selects the concern
			subTitle:
				'Your responses will help us assign the most relevant doctor for you',
			buttonText: 'Next',
		},
		confirmConsultation: {
			id: 'confirmConsultation',
			title: 'Take a doctor consultation call',
			subTitle: 'Doctors are available within the next 2 minutes',
			buttonText: 'Confirm',
		},
	},
	categories: [
		{
			id: '19246ef1-5b05-4a15-9fba-ee5117a5b4bb',
			text: 'Hair',
			value: 'hair',
			isSelected: false,
		},
	],
	concerns: {
		hair: [
			{
				id: 'b3d818c7-3375-4bec-8ef5-ff285ada036',
				text: 'Hair Loss and Thinning',
				isSelected: false,
			},
			{
				id: '7a712896-5c64-409c-a913-f9757d255e14',
				text: 'Hair Greying',
				isSelected: false,
			},
		],
	},
	concernDescription: {
		hair: [
			{
				id: '9b6c15d3-b574-44b6-9ccf-b550da61cf3c',
				text: 'Hairline and Crown',
			},
			{
				id: 'd6e61200-c2ae-4cf2-b890-bcb551a5b079',
				text: 'Head full of Hair',
			},
		],
	},
	consultationCard: {
		title: 'Your Doctor is ready now for the consultation call',
		typesOfCall: [
			{
				id: 'audio',
				text: 'Audio',
				isSelected: true,
			},
			{
				id: 'video',
				text: 'Video',
				isSelected: false,
			},
		],
		languages: [
			{
				id: 'english',
				text: 'English',
				isSelected: true,
			},
			{
				id: 'hindi',
				text: 'Hindi',
				isSelected: false,
			},
			{
				id: 'marathi',
				text: 'Marathi',
				isSelected: false,
			},
			{
				id: 'telugu',
				text: 'Telugu',
				isSelected: false,
			},
		],
	},
};

// req GET initial data
// res IA_INITIAL_DATA
