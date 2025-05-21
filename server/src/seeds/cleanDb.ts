// import models from '../models/index.js';
import db from '../config/connection.js';

export default async (collectionName: string) => {
  try {
    if (!db.db) {
      throw new Error('MongoDB connection not established');
    }

    let modelExists = await db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
    
  } catch (err) {
    throw err;
  }
}
