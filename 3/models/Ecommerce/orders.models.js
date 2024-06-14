import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderPrice: {
      type: Number,
      required: true,
    },
    orderItems: {
      type: [orderItemSchema],
    },
    /* can write like this :-

    orderItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    }] 
    
    but we have to add quantity therfore we created a minischema*/
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Cancelled", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
