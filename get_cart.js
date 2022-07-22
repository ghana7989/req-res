//Same as getCartWithdata_WithRxProducts pls refer that
const resRXProductWhenIAAvailable = {
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
      consultationCard: {
        title: "Your Doctor is ready now for the consultation call",
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
          {
            id: "telugu",
            text: "Telugu",
            isSelected: false,
          },
        ],
      },
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
const resRXProductWhenIANOTAvailable = {
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
const getScheduleAppointmentData = {
  miniInfoBanner: {
    displayImage: true,
    image:
      "https://raw.githubusercontent.com/omkarmosaic1234/TestImages/main/ic_purple_video.png",
    label: "Consultations will be done on video call with Doctors",
  },
  selectAvailable: {
    data: [
      {
        title: "Select Language",
        data: [
          {
            id: "1",
            text: "English",
          },
          {
            id: "2",
            text: "Hindi",
          },
          {
            id: "3",
            text: "Telugu",
          },
          {
            id: "4",
            text: "Urdu",
          },
        ],
      },
      {
        title: "Select Date",
        data: [
          {
            id: "5",
            text: "14",
            heading: "Mon",
          },
          {
            id: "6",
            text: "15",
            heading: "Tue",
          },
          {
            id: "7",
            text: "16",
            heading: "Wed",
          },
          {
            id: "8",
            text: "17",
            heading: "Thu",
          },
          {
            id: "9",
            text: "18",
            heading: "Fri",
          },
          {
            id: "10",
            text: "19",
            heading: "Sat",
          },
          {
            id: "11",
            text: "20",
            heading: "Sun",
          },
        ],
      },
      {
        title: "Select Time",
        data: [
          {
            id: "12",
            text: "10:00AM to 11:00AM",
          },
          {
            id: "13",
            text: "11:00AM to 12:00PM",
          },
          {
            id: "14",
            text: "12:00PM to 1:00PM",
          },
          {
            id: "15",
            text: "1:00PM to 2:00PM",
          },
          {
            id: "16",
            text: "2:00PM to 3:00PM",
          },
          {
            id: "17",
            text: "3:00PM to 4:00PM",
          },
          {
            id: "18",
            text: "4:00PM to 5:00PM",
          },
        ],
      },
      {
        title: "Appointment Slot",
        data: [
          {
            id: "19",
            text: "10:00 to 10:15",
          },
          {
            id: "20",
            text: "10:15 to 10:30",
          },
          {
            id: "21",
            text: "10:30 to 10:45",
            isDisabled: true,
          },
          {
            id: "22",
            text: "10:45 to 11:00",
          },
          {
            id: "23",
            text: "11:00 to 11:15",
          },
          {
            id: "24",
            text: "11:15 to 11:30",
            isDisabled: true,
          },
          {
            id: "25",
            text: "11:30 to 11:45",
          },
          {
            id: "26",
            text: "11:45 to 12:00",
          },
          {
            id: "27",
            text: "12:00 to 12:15",
          },
          {
            id: "280",
            text: "12:15 to 12:30",
            isDisabled: true,
          },
          {
            id: "291",
            text: "12:30 to 12:45",
          },
          {
            id: "302",
            text: "12:45 to 1:00",
          },
          {
            id: "313",
            text: "1:00 to 1:15",
          },
          {
            id: "324",
            text: "1:15 to 1:30",
          },
          {
            id: "335",
            text: "1:30 to 1:45",
          },
          {
            id: "346",
            text: "1:45 to 2:00",
          },
        ],
      },
    ],
  },
  bottomInfoText:
    "Please select a date and time slot for your free doctor consultation. Depending on your case, the consultation may last for 10 to 15 mins and will start at anytime during your selected time slot.",
};
