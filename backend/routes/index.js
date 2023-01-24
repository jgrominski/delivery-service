const express = require("express");
const router = express.Router();

// Require controller modules.
const locker_controller = require("../controllers/lockerController");
const user_controller = require("../controllers/userController");
const parcel_controller = require("../controllers/parcelController");

/// LOCKER ROUTES ///

// GET home page
router.get("/", locker_controller.index);

// GET request for creating a Locker
router.get("/locker/create", locker_controller.locker_create_get);

// POST request for creating a Locker
router.post("/locker/create", locker_controller.locker_create_post);

// GET request to delete a Locker
router.get("/locker/:id/delete", locker_controller.locker_delete_get);

// POST request to delete a Locker
router.post("/locker/:id/delete", locker_controller.locker_delete_post);

// GET request to update a Locker
router.get("/locker/:id/update", locker_controller.locker_update_get);

// POST request to update a Locker
router.post("/locker/:id/update", locker_controller.locker_update_post);

// GET request for one Locker
router.get("/locker/:id", locker_controller.locker_detail);

// GET request for list of all Locker items
router.get("/lockers", locker_controller.locker_list);

/// USER ROUTES ///

// GET request for creating an User
router.get("/user/create", user_controller.user_create_get);

// POST request for creating an User
router.post("/user/create", user_controller.user_create_post);

// GET request to delete an User
router.get("/user/:id/delete", user_controller.user_delete_get);

// POST request to delete an User
router.post("/user/:id/delete", user_controller.user_delete_post);

// GET request to update an User
router.get("/user/:id/update", user_controller.user_update_get);

// POST request to update an User
router.post("/user/:id/update", user_controller.user_update_post);

// GET request for one User
router.get("/user/:id", user_controller.user_detail);

// GET request for list of all Users
router.get("/users", user_controller.user_list);

/// PARCEL ROUTES ///

// GET request for creating a Parcel
router.get("/parcel/create", parcel_controller.parcel_create_get);

//POST request for creating a Parcel
router.post("/parcel/create", parcel_controller.parcel_create_post);

// GET request to delete a Parcel
router.get("/parcel/:id/delete", parcel_controller.parcel_delete_get);

// POST request to delete a Parcel
router.post("/parcel/:id/delete", parcel_controller.parcel_delete_post);

// GET request to update a Parcel
router.get("/parcel/:id/update", parcel_controller.parcel_update_get);

// POST request to update a Parcel
router.post("/parcel/:id/update", parcel_controller.parcel_update_post);

// GET request for one Parcel
router.get("/parcel/:id", parcel_controller.parcel_detail);

// GET request for list of all Parcels
router.get("/parcels", parcel_controller.parcel_list);

module.exports = router;
