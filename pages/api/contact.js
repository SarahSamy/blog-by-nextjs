import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      email.trim().length === 0 ||
      !name ||
      name.trim().length === 0 ||
      !message ||
      message.trim().length === 0
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // store in database
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://Sarah:admin1234@cluster0.lfhzmyo.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Connect to database failed" });
      return;
    }
    const db = client.db("my-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Storing messages failed" });
      client.close();
      return;
    }
    client.close();
    res.status(201).json({
      message: "Successfully send your message",
      messageSent: newMessage,
    });
  }
}
export default handler;
