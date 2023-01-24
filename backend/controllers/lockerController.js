const Locker = require("../models/locker");

// Display Site Home Page
exports.index = (req, res) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all Lockers
exports.locker_list = (req, res) => {
    res.send("NOT IMPLEMENTED: Locker list");
};

// Display detail page for a specific Locker
exports.locker_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: Locker detail: ${req.params.id}`);
};

// Display Locker create form on GET.
exports.locker_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Locker create GET");
};

// Handle Locker create on POST.
exports.locker_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Locker create POST");
};

// Display Locker delete form on GET.
exports.locker_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Locker delete GET");
};

// Handle Locker delete on POST.
exports.locker_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Locker delete POST");
};

// Display Locker update form on GET.
exports.locker_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Locker update GET");
};

// Handle Locker update on POST.
exports.locker_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Locker update POST");
};
