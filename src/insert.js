const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/empathy-express'; // Replace with your MongoDB URI
const dbName = 'empathy-express'; // Replace with your database name

const actsOfKindness = [
   {
      "title": "Bake Cookies for Neighbors",
      "details": "Bake a batch of cookies and deliver them to your neighbors. It's a sweet way to build community and show you care.",
      "category": "Acts for Neighbors",
      "difficulty": "Easy",
      "tags": ["neighbors", "baking", "community", "gift"]
   },
   {
      // Add more acts of kindness JSON objects here
   }
];

async function insertActsOfKindness() {
   const client = new MongoClient(mongoURI, { useNewUrlParser: true });

   try {
      await client.connect();

      const db = client.db(dbName);
      const collection = db.collection('collection'); // Replace with your collection name

      const result = await collection.insertMany(actsOfKindness);
      console.log(`Inserted ${result.insertedCount} acts of kindness into the collection.`);
   } finally {
      client.close();
   }
}

insertActsOfKindness();
