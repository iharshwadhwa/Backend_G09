 db.myCollection.countDocuments()
  db.myCollection.estimatedDocumentCount()

db.myCollection.updateMany(
...  {},                          // Empty filter matches all documents
...  { $set: { subject: "datascine" } } // Update operation to set the new value
...)

db.myCollection.updateMany({}, { $set: {address: "Chitkara University"}})

db.myCollection.find()