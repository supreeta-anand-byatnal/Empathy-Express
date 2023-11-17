const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb'); 

const app = express();
const port = process.env.PORT || 3005;

app.use(express.static('public'));
app.use(express.json());

const mongoURI = "mongodb+srv://sab9920:abcdefghij@cluster0.lzjhc9j.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'empathy-express'; 

app.get('/', async (req, res) => {
    try {
        console.log('Connecting to MongoDB...');
        const client = new MongoClient(mongoURI, { useNewUrlParser: true });
        await client.connect();
        console.log('Connected to MongoDB successfully.');

        const db = client.db(dbName);

        console.log('Fetching random act of kindness...');
        const randomAct = await getRandomActOfKindnessFromDatabase(db);
        console.log('Random act fetched:', randomAct); 

        res.json({ act: randomAct });

        client.close();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error fetching from the database', error: error });
    }
    

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

async function getRandomActOfKindnessFromDatabase(db) {
    const collection = db.collection('collection');
    const randomAct = await collection.aggregate([{ $sample: { size: 1 } }]).toArray();
    return randomAct[0];
}
