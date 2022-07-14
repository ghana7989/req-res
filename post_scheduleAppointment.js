const req = {
	doctorId: 0,
	languageId: 2,
	dateId: 1,
	timeId: 1,
	appointmentSlotId: 3,
};

const res = {
	data: {
		isScheduled: true,
		statusText: 'Consultation scheduled successfully',
		miniBannerInfo: {
			displayImage: true,
			image:
				'https://raw.githubusercontent.com/omkarmosaic1234/TestImages/main/ic_purple_video.png',
			label: 'Consultations will be done on video call with Doctors',
		},
		appointmentScheduled: {
			date: '22 Feb,2029',
			time: '12:00PM',
			appointmentDate: 'Appointment Date',
			appointmentTime: 'Appointment Time',
		},
		healthDetailsCard: {
			title: 'Health Details',
			categories: ['Hair', 'Skin', 'Performance', 'Weight', 'Beard'],
			icons: {
				EDIT_ICON_URL:
					'https://res.cloudinary.com/mosaic-wellness/image/upload/v1655109442/Man%20Matters%20App/Miscellaneous/edit_icon.svg',
				CLOSE:
					'https://res.cloudinary.com/mosaic-wellness/image/upload/v1655112135/Man%20Matters%20App/Miscellaneous/exit.svg',
				DOWN_ARROW:
					'https://res.cloudinary.com/mosaic-wellness/image/upload/v1655112805/Man%20Matters%20App/Miscellaneous/dropdown.svg',
			},
			questionsAndAnswers: [
				{
					id: '1',
					question: 'What do you need help with?',
					answer: 'Hair',
				},
				{
					id: '2',
					question: 'What do you want to improve?',
					answer: 'Stopping Hair Loss, Hair Growth & Dandruff Issues',
				},
			],
		},
	},
};

// If the Health Details Card is edited we need to make an api call to update it
const dataToSendToUpdateHealthDetailsCard = {
	questionsAndAnswers: [
		{
			id: '1',
			question: 'What do you need help with?',
			answer: 'Hair',
		},
		{
			id: '2',
			question: 'What do you want to improve?',
			answer: 'Stopping Hair Loss, Hair Growth & Dandruff Issues',
		},
	],
};
