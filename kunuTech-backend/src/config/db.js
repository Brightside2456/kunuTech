var admin = require("firebase-admin");
var serviceAccount = require("./kunuTech-config.json");
const { getFirestore } = require("firebase-admin/firestore");
require('dotenv').config();

const FS_URL = process.env.FIRESTORE_URL;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://kunutech-95763.firebaseio.com"
  databaseURL: FS_URL
});


const db = getFirestore();

module.exports = db;