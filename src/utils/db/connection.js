require('dotenv').config()
const mongoose = require('mongoose');

(async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
	} catch (error) {
		console.error('Error', error);
	}
})();

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("nodejs-api?").collection("interview");
//   // perform actions on the collection object
//   console.log('Connected successfully to server');
//   client.close();
// });