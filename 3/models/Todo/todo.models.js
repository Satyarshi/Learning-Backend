import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // done this because we need a relation between this from our user database/model therfore we have to create a special type and a reference which tells from where are we taking its reference from it like this rest in readme.md
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subToDos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // the subtodo will be array of subtodo coming from subtodo model and each object will contain some specific info
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);

//    |------------------------------^
//    |--> in ref we give this name therefore we also make the export const name same as this name
