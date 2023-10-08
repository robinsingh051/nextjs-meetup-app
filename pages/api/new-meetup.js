import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetUp = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json(meetUp);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
