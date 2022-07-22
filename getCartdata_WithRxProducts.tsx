export const resRXProductWhenIAAvailable = {
  status: true,
  errorCode: 200,
  message: "User Cart",
  data: {
    appliedDiscount: {
      discount: {
        coupon: {
          isApplied: false,
          value: "",
        },
        wallet: {
          isApplied: false,
          value: "",
        },
        message: {
          type: "none",
          label: "",
        },
      },
    },
    id: "50018490",
    totalItems: 2,
    totalAmount: 839,
    discountedPrice: 839,
    discountText: "",
    pricing: [
      {
        label: "Health Cart",
        value: "₹839",
        subLabel: {
          text: "2 Items",
          color: "#6E788B",
        },
      },
      {
        label: "Shipping Charges",
        value: "₹0",
        subLabel: {
          text: "Free!",
          color: "#379F8E",
        },
      },
      {
        label: "Discount",
        value: "₹0",
        subLabel: {
          text: "",
          color: "#379F8E",
        },
      },
      {
        label: "Coupon Code",
        subLabel: {
          color: "#379F8E",
        },
        backgroundColor: "#EBF5F4",
      },
      {
        label: "To Pay",
        value: "₹839",
      },
    ],
    products: [
      {
        item: {
          title: "Biotin Hair Gummies (No Added Sugar) (60 N)",
          image:
            "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1651567922/Man%20Matters/Hair%20Gummies/New%202m%20pack/0_Dark%20Blue/Biotin-Hair-Gummies-with-ingredients-_1200X1200_-6.png",
          urlKey: "/6102393",
          sku: "MWMMHRK.6074.AAAA.B0_N",
          pricing: {
            actualPrice: 839,
            discountedPrice: 0,
            discountText: "",
          },
          concerns: [
            {
              label: "For",
              text: "Hair Nourishment",
            },
            {
              label: "With",
              text: "Biotin<br/>Vit A, Vit C, Zinc",
            },
          ],
          category: "hair",
        },
        quantity: 1,
      },
      null,
    ],
    bookAnAppointment: {
      isIA: true,
      title: "Book an Appointment",
      subTitle:
        "John, some of your products require a doctor consultation. Take your consultation now!",
      title1: "Doctors are available within the next 2 minutes",
      noteText1:
        "Your order contains some products that require a prescription. In case the doctor finds it unsuitable for you, the order will be shipped without that product and appropriate refund will be processed.",
      noteText2:
        "You will get a free doctor consultation and prescription when you place an order.",
      consultationCard: {
        title: "Your Doctor is ready now for the consultation call",
        call: "Select type of call",
        language: "Select language",
        typesOfCall: [
          {
            id: "audio",
            text: "Audio",
            isSelected: true,
          },
          {
            id: "video",
            text: "Video",
            isSelected: false,
          },
        ],
        languages: [
          {
            id: "english",
            text: "English",
            isSelected: true,
          },
          {
            id: "hindi",
            text: "Hindi",
            isSelected: false,
          },
          {
            id: "marathi",
            text: "Marathi",
            isSelected: false,
          },
        ],
      },
      notFree: "not free right now",
      isScheduleAppointment: true,
      scheduleApppointment: "Schedule Appointment",
    },
    selectAvailable: {
      title: "Select Date",
      data: [
        {
          id: "3ce789b9-2823-4005-bf8c-64965c35cfec",
          text: "14",
          heading: "Mon",
          times: [
            {
              id: "39cbaec6-622e-412f-8fac-9d335a1c99a8",
              title: "select time",
              time: "10:00 AM-10:30 AM",
              data: {
                title: "select slots",
                slots: [
                  {
                    id: "3f309923-3f47-4e4b-bdc0-303a661a0508",
                    data: "10:00 AM-10:10 AM",
                  },
                ],
              },
            },
            {
              id: "5edf2c28-bae9-4bd7-bbdd-2a7e024a9767",
              title: "select time",
              time: "10:30 AM-11:00 AM",
              data: {
                title: "select slots",
                slots: [
                  {
                    id: "c415918d-402a-4236-9fc7-fb718d03f70d",
                    data: "10:00 AM-10:10 AM",
                  },
                ],
              },
            },
          ],
        },
        {
          id: "b5343bf6-33ea-4d17-a37b-f0588e8b67ed",
          text: "15",
          heading: "Tue",
          times: [
            {
              id: "69dbec19-f4af-42cb-a725-af68c6afd08a",
              title: "select time",
              time: "10:00 AM-7:30 AM",
              data: {
                title: "select slots",
                slots: [
                  {
                    id: "e6fada57-6576-4f50-bbca-8ceac2c89b83",
                    data: "10:00-10:10",
                  },
                  {
                    id: "e6fada57-6576-4f50-bbca-8ceac2iehufghjedfjhc89b83",
                    data: "10:00-10:10",
                  },
                ],
              },
            },
          ],
        },
      ],
      languages: [
        {
          id: "english",
          text: "English",
        },
        {
          id: "hindi",
          text: "Hindi",
        },
        {
          id: "marathi",
          text: "Marathi",
        },
      ],
    },

    recommended: [
      {
        urlKey: "/1596",
        sku: "MWMMHRP.0001.AAAA.B0_N",
        title: "Anti Hair Fall Shampoo for Men",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668774/New%20hero%20images/Anti-Hairfall-Shampoo_200ml.png",
        pricing: {
          actualPrice: 399,
          discountedPrice: 359,
        },
        concerns: [
          {
            label: "For",
            text: "Preventing Hair Fall",
          },
          {
            label: "With",
            text: "DHT Blockers - 1% Saw Palmetto & Caffeine",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/1613",
        sku: "MWMMHRP.0006.AAAA.B0_R",
        title: "Minoxidil 5% Solution",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668775/New%20hero%20images/Minoxidil-5_-Solution_60ml.png",
        pricing: {
          actualPrice: 699,
        },
        concerns: [
          {
            label: "For",
            text: "Hair Regrowth",
          },
          {
            label: "With",
            text: "5% Minoxidil<br/>2% Procapil",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/1144207",
        sku: "MWMMHRP.1001.AAAA.B0_N",
        title: "1% Ketoconazole Anti Dandruff Shampoo",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668773/New%20hero%20images/Anti-Dandruff-Shampoo_100ml.png",
        pricing: {
          actualPrice: 299,
        },
        concerns: [
          {
            label: "For",
            text: "Dandruff Control",
          },
          {
            label: "With",
            text: "1% Ketoconazole",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/1182231",
        sku: "MWMMSKP.5002.AAAA.B0_N",
        title: "Men's Face Wash for Oily Skin",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668773/New%20hero%20images/CLEAN-Oil-Control-Face-Wash.png",
        pricing: {
          actualPrice: 349,
        },
        concerns: [
          {
            label: "For",
            text: "Acne Prevention",
          },
          {
            label: "With",
            text: "1% Glycolic Acid<br/>1% Salicylic Acid",
          },
        ],
        category: "skin",
      },
      {
        urlKey: "/3053009",
        sku: "MWMMHRP.0005.AAAA.B0_N",
        title: "Hair Tonic",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668776/New%20hero%20images/RPB-Advanced-Hair-Tonic-1.png",
        pricing: {
          actualPrice: 899,
        },
        concerns: [
          {
            label: "For",
            text: "Hair Regrowth & Thicker Hair",
          },
          {
            label: "With",
            text: "Procapil 3%, Baicapil 2%, Redensyl 3%",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/13410495",
        sku: "MWMMNTP.0004.AAAA.B0_N",
        title: "Multivitamin Gummies",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1634012381/Man%20Matters/Random/Xyz/Multivitamin_Gummies.png",
        pricing: {
          actualPrice: 599,
          discountedPrice: 549,
        },
        concerns: [
          {
            label: "For",
            text: "Improved strength, energy, and hormonal levels",
          },
          {
            label: "With",
            text: "7 Vitamins and 3 Minerals",
          },
        ],
        category: "nutrition",
      },
    ],
  },
};
export const resRXProductWhenIANOTAvailable = {
  status: true,
  errorCode: 200,
  message: "User Cart",
  data: {
    appliedDiscount: {
      discount: {
        coupon: {
          isApplied: false,
          value: "",
        },
        wallet: {
          isApplied: false,
          value: "",
        },
        message: {
          type: "none",
          label: "",
        },
      },
    },
    id: "50018490",
    totalItems: 2,
    totalAmount: 839,
    discountedPrice: 839,
    discountText: "",
    pricing: [
      {
        label: "Health Cart",
        value: "₹839",
        subLabel: {
          text: "2 Items",
          color: "#6E788B",
        },
      },
      {
        label: "Shipping Charges",
        value: "₹0",
        subLabel: {
          text: "Free!",
          color: "#379F8E",
        },
      },
      {
        label: "Discount",
        value: "₹0",
        subLabel: {
          text: "",
          color: "#379F8E",
        },
      },
      {
        label: "Coupon Code",
        subLabel: {
          color: "#379F8E",
        },
        backgroundColor: "#EBF5F4",
      },
      {
        label: "To Pay",
        value: "₹839",
      },
    ],
    products: [
      {
        item: {
          title: "Biotin Hair Gummies (No Added Sugar) (60 N)",
          image:
            "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1651567922/Man%20Matters/Hair%20Gummies/New%202m%20pack/0_Dark%20Blue/Biotin-Hair-Gummies-with-ingredients-_1200X1200_-6.png",
          urlKey: "/6102393",
          sku: "MWMMHRK.6074.AAAA.B0_N",
          pricing: {
            actualPrice: 839,
            discountedPrice: 0,
            discountText: "",
          },
          concerns: [
            {
              label: "For",
              text: "Hair Nourishment",
            },
            {
              label: "With",
              text: "Biotin<br/>Vit A, Vit C, Zinc",
            },
          ],
          category: "hair",
        },
        quantity: 1,
      },
      null,
    ],
    bookAnAppointment: {
      isIA: false,
      title: "Book an Appointment",
      subTitle:
        "John, some of your products require a doctor consultation. Take your consultation now!",
      buttonText: "Book an Appointment",
      noteText1:
        "Your order contains some products that require a prescription. In case the doctor finds it unsuitable for you, the order will be shipped without that product and appropriate refund will be processed.",
      noteText2:
        "You will get a free doctor consultation and prescription when you place an order.",
    },
    recommended: [
      {
        urlKey: "/1596",
        sku: "MWMMHRP.0001.AAAA.B0_N",
        title: "Anti Hair Fall Shampoo for Men",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668774/New%20hero%20images/Anti-Hairfall-Shampoo_200ml.png",
        pricing: {
          actualPrice: 399,
          discountedPrice: 359,
        },
        concerns: [
          {
            label: "For",
            text: "Preventing Hair Fall",
          },
          {
            label: "With",
            text: "DHT Blockers - 1% Saw Palmetto & Caffeine",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/1613",
        sku: "MWMMHRP.0006.AAAA.B0_R",
        title: "Minoxidil 5% Solution",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668775/New%20hero%20images/Minoxidil-5_-Solution_60ml.png",
        pricing: {
          actualPrice: 699,
        },
        concerns: [
          {
            label: "For",
            text: "Hair Regrowth",
          },
          {
            label: "With",
            text: "5% Minoxidil<br/>2% Procapil",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/1144207",
        sku: "MWMMHRP.1001.AAAA.B0_N",
        title: "1% Ketoconazole Anti Dandruff Shampoo",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668773/New%20hero%20images/Anti-Dandruff-Shampoo_100ml.png",
        pricing: {
          actualPrice: 299,
        },
        concerns: [
          {
            label: "For",
            text: "Dandruff Control",
          },
          {
            label: "With",
            text: "1% Ketoconazole",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/1182231",
        sku: "MWMMSKP.5002.AAAA.B0_N",
        title: "Men's Face Wash for Oily Skin",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668773/New%20hero%20images/CLEAN-Oil-Control-Face-Wash.png",
        pricing: {
          actualPrice: 349,
        },
        concerns: [
          {
            label: "For",
            text: "Acne Prevention",
          },
          {
            label: "With",
            text: "1% Glycolic Acid<br/>1% Salicylic Acid",
          },
        ],
        category: "skin",
      },
      {
        urlKey: "/3053009",
        sku: "MWMMHRP.0005.AAAA.B0_N",
        title: "Hair Tonic",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642668776/New%20hero%20images/RPB-Advanced-Hair-Tonic-1.png",
        pricing: {
          actualPrice: 899,
        },
        concerns: [
          {
            label: "For",
            text: "Hair Regrowth & Thicker Hair",
          },
          {
            label: "With",
            text: "Procapil 3%, Baicapil 2%, Redensyl 3%",
          },
        ],
        category: "hair",
      },
      {
        urlKey: "/13410495",
        sku: "MWMMNTP.0004.AAAA.B0_N",
        title: "Multivitamin Gummies",
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1634012381/Man%20Matters/Random/Xyz/Multivitamin_Gummies.png",
        pricing: {
          actualPrice: 599,
          discountedPrice: 549,
        },
        concerns: [
          {
            label: "For",
            text: "Improved strength, energy, and hormonal levels",
          },
          {
            label: "With",
            text: "7 Vitamins and 3 Minerals",
          },
        ],
        category: "nutrition",
      },
    ],
  },
};

// This data should go the bottomsheet component
export const getScheduleAppointmentData = {
  miniInfoBanner: {
    displayImage: true,
    image:
      "https://raw.githubusercontent.com/omkarmosaic1234/TestImages/main/ic_purple_video.png",
    label: "Consultations will be done on video call with Doctors",
  },
  title: "Schedule Appointment",
  selectAvailable: {
    title: "Select Date",
    data: [
      {
        id: "3ce789b9-2823-4005-bf8c-64965c35cfec",
        text: "14",
        heading: "Mon",
        times: [
          {
            id: "39cbaec6-622e-412f-8fac-9d335a1c99a8",
            title: "select time",
            time: "10:00 AM-10:30 AM",
            data: {
              title: "select slots",
              slots: [
                {
                  id: "3f309923-3f47-4e4b-bdc0-303a661a0508",
                  data: "10:00 AM-10:10 AM",
                },
              ],
            },
          },
          {
            id: "5edf2c28-bae9-4bd7-bbdd-2a7e024a9767",
            title: "select time",
            time: "10:30 AM-11:00 AM",
            data: {
              title: "select slots",
              slots: [
                {
                  id: "c415918d-402a-4236-9fc7-fb718d03f70d",
                  data: "10:00 AM-10:10 AM",
                },
              ],
            },
          },
        ],
      },
      {
        id: "b5343bf6-33ea-4d17-a37b-f0588e8b67ed",
        text: "15",
        heading: "Tue",
        times: [
          {
            id: "69dbec19-f4af-42cb-a725-af68c6afd08a",
            title: "select time",
            time: "10:00 AM-7:30 AM",
            data: {
              title: "select slots",
              slots: [
                {
                  id: "e6fada57-6576-4f50-bbca-8ceac2c89b83",
                  data: "10:00-10:10",
                },
                {
                  id: "e6fada57-6576-4f50-bbca-8ceac2iehufghjedfjhc89b83",
                  data: "10:00-10:10",
                },
              ],
            },
          },
        ],
      },
    ],
    languages: [
      {
        id: "english",
        text: "English",
      },
      {
        id: "hindi",
        text: "Hindi",
      },
      {
        id: "marathi",
        text: "Marathi",
      },
    ],
  },
  ctaButtonText: "Confirm",
  bottomInfoText:
    "Please select a date and time slot for your free doctor consultation. Depending on your case, the consultation may last for 10 to 15 mins and will start at anytime during your selected time slot.",
};
