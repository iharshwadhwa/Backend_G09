Microsoft Windows [Version 10.0.22631.4037]
(c) Microsoft Corporation. All rights reserved.

C:\Users\harsh>mongosh mongodb://localhost:27017
Current Mongosh Log ID: 66d145bf16a609e5bd2710bb
Connecting to:          mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017, connect ECONNREFUSED ::1:27017

C:\Users\harsh>services.msc

C:\Users\harsh>mongosh mongodb://localhost:27017
Current Mongosh Log ID: 66d14627a88439eff12710bb
Connecting to:          mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
Using MongoDB:          7.0.9
Using Mongosh:          2.3.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-08-30T09:39:55.378+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> exit

C:\Users\harsh>mongosh mongodb://localhost:27017/
Current Mongosh Log ID: 66d1465eeee988ce4d2710bb
Connecting to:          mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
Using MongoDB:          7.0.9
Using Mongosh:          2.3.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-08-30T09:39:55.378+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
CrudDb   72.00 KiB
admin    40.00 KiB
config   84.00 KiB
harshit  72.00 KiB
local    72.00 KiB
sigma    56.00 KiB
test     40.00 KiB
test> use harshit
switched to db harshit
harshit> show collections
myCollection
harshit> db.myCollection.find()
[
  { _id: ObjectId('66cfff9e3daab146892710bc'), x: 1 },
  {
    _id: ObjectId('66d008753daab146892710bd'),
    date: ISODate('2024-08-29T05:34:45.617Z')
  }
]
harshit> db.myCollection.countDocuments()
2
harshit> db.myCollection.estimatedDocumentCount()
2
harshit> db.myCollection.insertMany({name: "Harshit", subject: "web"}, {name: "Ram", subject: "mern"})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
harshit> db.myCollection.insertMany({name: Harshit, subject: web}, {name: Ram, subject: mern})
ReferenceError: Harshit is not defined
harshit> db.myCollection.insertMany([{name: "Harshit", subject: "web"}, {name: "Ram", subject: "mern"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d14b0eeee988ce4d2710bc'),
    '1': ObjectId('66d14b0eeee988ce4d2710bd')
  }
}
harshit> db.myCollection.updateMany(
...   {},                          // Empty filter matches all documents
...   { $set: { subject: "datascine" } } // Update operation to set the new value
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
harshit> db.myCollection.find()
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine'
  },
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine'
  }
]
harshit> db.myCollection.updateMany({}, { $set: {address: "Chitkara University"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
harshit> db.myCollection.find()
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine',
    address: 'Chitkara University'
  }
]
harshit> db.students.updateOne(
...   { name: "Harshit" }, // Filter to match the document where the name is "Harshit"
...   { $set: { grades: "A+" } } // Update operation to set the "grades" field to "A+"
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
harshit> db.myCollection.find()
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine',
    address: 'Chitkara University'
  }
]
harshit> db.myCollection.updateOne( { name: "Harshit" }, /* Filter to match the document where the name is "Harshit"*/ { $set: { grades: "A+" } } /* Update operation to set the "grades" field to "A+"*/ )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
harshit> db.myCollection.find()
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A+'
  },
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine',
    address: 'Chitkara University'
  }
]
harshit> db.myCollection.updateOne( { name: "Ram" }, /* Filter to match the document where the name is "Harshit"*/ { $set: { grades: "A" } } /* Update operation to set the "grades" field to "A+"*/ )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
harshit> db.myCollection.find()
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A+'
  },
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A'
  }
]
harshit> db.myCollection.find(
... age: 22
Uncaught:
SyntaxError: Unexpected token, expected "," (2:3)

  1 | db.myCollection.find(
> 2 | age: 22
    |    ^
  3 |

harshit> db.myCollection.find(age: 22)
Uncaught:
SyntaxError: Unexpected token, expected "," (1:24)

> 1 | db.myCollection.find(age: 22)
    |                         ^
  2 |

harshit> db.myCollection.find({age: 22})

harshit> db.myCollection.find({age: "22"})
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A+',
    marks: '95',
    age: '22'
  }
]
harshit> db.myCollection.find({age: "22", marks: "95"})
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A+',
    marks: '95',
    age: '22'
  }
]
harshit> db.myCollection.find({age: "22", marks: "95"})
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A+',
    marks: '95',
    age: '22'
  }
]
harshit> db.myCollection.find({age: {$gte:17}, marks: {$gte:80}})

harshit> db.myCollection.find({age: {$gte:"17"}, marks: {$gte:"80"}})
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A+',
    marks: '95',
    age: '22'
  },
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A',
    marks: '85',
    age: '18'
  }
]
harshit> db.myCollection.find( $and {age:"17"}, marks:"80"}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:27)

> 1 | db.myCollection.find( $and {age:"17"}, marks:"80"}})
    |                            ^
  2 |

harshit> db.myCollection.find( $and [{age:"18"}, {marks:"85"}] )
ReferenceError: $and is not defined
harshit> db.myCollection.find( { $and [{age:"18"}, {marks:"85"}] })
Uncaught:
SyntaxError: Unexpected token, expected "," (1:29)

> 1 | db.myCollection.find( { $and [{age:"18"}, {marks:"85"}] })
    |                              ^
  2 |

harshit> db.myCollection.find( { $and: [{age:"18"}, {marks:"85"}] })
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A',
    marks: '85',
    age: '18'
  }
]
harshit> db.myCollection.find( { $or: [{age:"18"}, {marks:"95"}] })
[
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bc'),
    name: 'Harshit',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A+',
    marks: '95',
    age: '22'
  },
  {
    _id: ObjectId('66d14b0eeee988ce4d2710bd'),
    name: 'Ram',
    subject: 'datascine',
    address: 'Chitkara University',
    grades: 'A',
    marks: '85',
    age: '18'
  }
]
harshit>