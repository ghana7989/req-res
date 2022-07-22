// rxStatus means whether a prescription has been generated or not
// status means the status of the actual audio or video call
const RX_RUNNING_STATUS_LIST = [
  "c",
  "rf",
  "ns",
  "otc",
  "csp",
  "csd",
  "cq",
  "rs",
  "s",
];
const RX_COMPLETED_STATUS_LIST = ["c", "rf", "ns", "otc", "csp", "csd", "cq"];

const req = {
  schedule_token: "524967e0-ec5e-4f12-b963-b80a58a7e074",
  appointment_id: 16206,
};

const res = {
  rxStatus: "s",
  status: "reschedule",
  mode: "bw_call",
};
