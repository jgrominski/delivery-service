const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LockerSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100 }
});

LockerSchema.virtual("url").get(function () {
    return `/locker/${this._id}`;
});

module.exports = mongoose.model("Locker", LockerSchema);
