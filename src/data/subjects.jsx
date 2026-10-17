import CNXH from "./subjects/CNXH";

// Each subject is an object with display metadata and a lessons array.
// Subject files such as CNXH.js export the lessons array directly.
export const subjects = [
  {
    id: "cnxh",
    title: "Chủ nghĩa xã hội khoa học",
    lessons: Array.isArray(CNXH) ? CNXH : [],
  },
];
