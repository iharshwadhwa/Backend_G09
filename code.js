// Microsoft Windows [Version 10.0.22631.4037]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\harsh>mongosh mongodb://localhost:27017
// Current Mongosh Log ID: 66cffeea3daab146892710bb
// Connecting to:          mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.9
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


// To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
// You can opt-out by running the disableTelemetry() command.

// ------
//    The server generated these startup warnings when booting
//    2024-08-29T10:21:33.809+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// CrudDb  72.00 KiB
// admin   40.00 KiB
// config  72.00 KiB
// local   72.00 KiB
// sigma   56.00 KiB
// test    40.00 KiB
// test> use harshit
// switched to db harshit
// harshit> show dbs
// CrudDb  72.00 KiB
// admin   40.00 KiB
// config  72.00 KiB
// local   72.00 KiB
// sigma   56.00 KiB
// test    40.00 KiB
// harshit> db.myCollection.insertOne({name: arshit Mahajan"})
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:40)

// > 1 | db.myCollection.insertOne({name: arshit Mahajan"})
//     |                                         ^
//   2 |

// harshit> db.myCollection.insertOne({x : 1})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66cfff9e3daab146892710bc')
// }
// harshit> db.myCollection.insertOne({date: ISODate()})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d008753daab146892710bd')
// }
// harshit> db.myCollection.find()
// [
//   { _id: ObjectId('66cfff9e3daab146892710bc'), x: 1 },
//   {
//     _id: ObjectId('66d008753daab146892710bd'),
//     date: ISODate('2024-08-29T05:34:45.617Z')
//   }
// ]
// harshit>