const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParcelSchema = new Schema({
    name: { type: String, required: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
    start_locker: { type: Schema.Types.ObjectId, ref: "Locker", required: true },
    destination_locker: { type: Schema.Types.ObjectId, ref: "Locker", required: true },
    status: {
        type: String,
        required: true,
        enum: ["Sent", "In Delivery", "Delivered", "Recieved"],
        default: "Sent",
    },
});

// Virtual for book's URL
ParcelSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/parcel/${this._id}`;
});

// Export model
module.exports = mongoose.model("Parcel", ParcelSchema);
