#! /usr/bin/env node

console.log('This script populates some test lockers, users, and parcels to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"');

const userArgs = process.argv.slice(2);

const async = require('async');
const Locker = require('./models/locker');
const User = require('./models/user');
const Parcel = require('./models/parcel');


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

const lockers = [];
const users = [];
const parcels = [];

function lockerCreate(name, cb) {
    const locker = new Locker({ name: name });

    locker.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New Locker: ' + locker);
        lockers.push(locker);
        cb(null, locker);
    });
}

function userCreate(username, cb) {
    const user = new User({ username: username });

    user.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New User: ' + user);
        users.push(user);
        cb(null, user);
    });
}

function parcelCreate(name, sender, recipient, start_locker, destination_locker, status, cb) {
    parceldetail = {
        name: name,
        sender: sender,
        recipient: recipient,
        start_locker: start_locker,
        destination_locker: destination_locker
    };
    if (status != false) parceldetail.status = status;

    const parcel = new Parcel(parceldetail);
    parcel.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New Parcel: ' + parcel);
        parcels.push(parcel);
        cb(null, parcel);
    });
}

function createLockers(cb) {
    async.series([
        function (callback) {
            lockerCreate('Warszawa 1', callback);
        },
        function (callback) {
            lockerCreate('Warszawa 2', callback);
        },
        function (callback) {
            lockerCreate('Kraków', callback);
        },
        function (callback) {
            lockerCreate('Wrocław', callback);
        }
    ],
        cb);
}

function createUsers(cb) {
    async.series([
        function (callback) {
            userCreate('jkowalski', callback);
        },
        function (callback) {
            userCreate('anowak', callback);
        },
        function (callback) {
            userCreate('user7', callback);
        }
    ],
        cb);
}

function createParcels(cb) {
    async.parallel([
        function (callback) {
            parcelCreate('Birthday Present', users[0], users[1], lockers[2], lockers[1], false, callback);
        },
        function (callback) {
            parcelCreate('Care Package', users[1], users[0], lockers[0], lockers[2], 'In Delivery', callback);
        },
        function (callback) {
            parcelCreate('Test Parcel', users[2], users[1], lockers[3], lockers[2], 'Delivered', callback);
        }
    ],
        cb);
}


async.series([
    createLockers,
    createUsers,
    createParcels
],
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Parcels: ' + parcels);
        }
        mongoose.connection.close();
    }
);
