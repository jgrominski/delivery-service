const Parcel = require("../models/parcel");

// Display list of all Parcels
exports.parcel_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Parcel list");
};

// Display detail page for a specific Parcel
exports.parcel_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Parcel detail: ${req.params.id}`);
};

// Display Parcel create form on GET.
exports.parcel_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Parcel create GET");
};

// Handle Parcel create on POST.
exports.parcel_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Parcel create POST");
};

// Display Parcel delete form on GET.
exports.parcel_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Parcel delete GET");
};

// Handle Parcel delete on POST.
exports.parcel_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Parcel delete POST");
};

// Display Parcel update form on GET.
exports.parcel_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Parcel update GET");
};

// Handle Parcel update on POST.
exports.parcel_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Parcel update POST");
};
