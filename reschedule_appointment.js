const rescheduleAppointment = {
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
  },
  bookAppointment: {
    title: "Your doctor is ready now for the consultation call",
    availability: "Doctors are available within the next 2 minutes",
    sections: [
      {
        title: "Select a call type",
        items: [
          {
            id: "audio",
            text: "Audio",
          },
          {
            id: "video",
            text: "Video",
          },
        ],
      },
      {
        title: "Select Language",
        items: [
          {
            id: "english",
            text: "English",
          },
          {
            id: "hindi",
            text: "Hindi",
          },
          {
            id: "tamil",
            text: "Tamil",
          },
        ],
      },
    ],
  },
  notFree: "Not free right now",
};
