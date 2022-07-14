// View Prescription
const viewPrescription = {
	link: 'https://pdf link',
};

// GET prescription from server
const res = {
	status: true,
	errorCode: 200,
	message: 'User Cart',
	data: {
		appliedDiscount: {
			discount: {
				coupon: {
					isApplied: false,
					value: '',
				},
				wallet: {
					isApplied: false,
					value: '',
				},
				message: {
					type: 'none',
					label: '',
				},
			},
		},
		prescription: {
			doctorName: 'Mosaic Doctor',
			designation: 'MBBS',
			regNo: '1234',
			date: '09 May 2022',
		},
		id: '50018490',
		totalItems: 2,
		totalAmount: 839,
		discountedPrice: 839,
		discountText: '',
		pricing: [
			{
				label: 'Health Cart',
				value: '₹839',
				subLabel: {
					text: '2 Items',
					color: '#6E788B',
				},
			},
			{
				label: 'Shipping Charges',
				value: '₹0',
				subLabel: {
					text: 'Free!',
					color: '#379F8E',
				},
			},
			{
				label: 'Discount',
				value: '₹0',
				subLabel: {
					text: '',
					color: '#379F8E',
				},
			},
			{
				label: 'Coupon Code',
				subLabel: {
					color: '#379F8E',
				},
				backgroundColor: '#EBF5F4',
			},
			{
				label: 'To Pay',
				value: '₹839',
			},
		],
		products: [
			{
				item: {
					title: 'Biotin Hair Gummies (No Added Sugar) (60 N)',
					image:
						'https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1651567922/Man%20Matters/Hair%20Gummies/New%202m%20pack/0_Dark%20Blue/Biotin-Hair-Gummies-with-ingredients-_1200X1200_-6.png',
					urlKey: '/6102393',
					sku: 'MWMMHRK.6074.AAAA.B0_N',
					pricing: {
						actualPrice: 839,
						discountedPrice: 0,
						discountText: '',
					},
					concerns: [
						{
							label: 'For',
							text: 'Hair Nourishment',
						},
						{
							label: 'With',
							text: 'Biotin<br/>Vit A, Vit C, Zinc',
						},
					],
					category: 'hair',
				},
				quantity: 1,
			},
			null,
		],
	},
};
