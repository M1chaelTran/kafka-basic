import avro from "avsc";

export default avro.Type.forSchema({
  type: "record",
  fields: [
    {
      name: "task",
      type: "string",
    },
    {
      name: "complete",
      type: "boolean",
    },
  ],
});
