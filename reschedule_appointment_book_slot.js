const rescheduleAppointmentBookSlot = {
  // appointmentHistoryCard will come if appointment history is there
  appointmentHistoryCard: {
    title: "Appointment Reschedule",
    icon: "https://raw.githubusercontent.com/omkarmosaic1234/TestImages/main/info_square.png",
    appointmentDateTime: {
      appointmentDate: "22 Feb, 2022",
      appointmentTime: "12:00 - 12:30 PM",
    },
    consultationBanner: {
      displayImage: true,
      image:
        "https://raw.githubusercontent.com/omkarmosaic1234/TestImages/main/ic_purple_video.png",
      label: "Consultations will be done on video call with Doctors",
    },
    actions: {
      onInfoSquareclick,
    },
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
  note: "Please select a date and time slot for your free doctor consultation. Depending on your case, the consultation may last for 10 to 15 mins and will start at anytime during your selected time slot.",
};
