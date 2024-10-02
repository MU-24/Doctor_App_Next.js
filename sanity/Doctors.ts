import { title } from "process";

export default {
  name: "doctor",
  type: "document",
  title: "Doctors",
  fields: [
    {
      name: "dname",
      type: "string",
      title: "Name of a doctor",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "image",
    },
  ],
};
