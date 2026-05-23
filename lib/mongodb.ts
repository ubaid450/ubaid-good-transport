import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "ubaid_good_transport";

type CachedMongo = {
  client?: MongoClient;
  promise?: Promise<MongoClient>;
};

declare global {
  var mongoCache: CachedMongo | undefined;
}

const cache = globalThis.mongoCache || { client: undefined, promise: undefined };

if (!globalThis.mongoCache) {
  globalThis.mongoCache = cache;
}

export async function getMongoDb(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (cache.client) {
    return cache.client.db(dbName);
  }

  if (!cache.promise) {
    cache.promise = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000
    }).connect();
  }

  cache.client = await cache.promise;
  return cache.client.db(dbName);
}
