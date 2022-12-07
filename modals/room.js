import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [ture, "Please enter room name"],
    trim: true,
    maxLength: [100, "room name cant exceed 100 characters"],
  },
  name: {
    type: Number,
    required: [ture, "Please enter room price"],
    maxLength: [5, "room price cant exceed 5 characters"],
    default: 0.0,
  },
  desciprtion: {
    type: String,
    required: [ture, "Please enter room description"],
  },
  adress: {
    type: String,
    required: [ture, "Please enter room adress"],
  },
  guestCapacity: {
    type: Number,
    required: [ture, "Please enter guest Capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [ture, "Please enter number beds in room"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select category for room",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model.Room || mongoose.model("Room", roomSchema);
