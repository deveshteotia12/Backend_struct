import {Db, MongoClient} from 'mongodb'


let db: Db;

async function intializeDatabase(): Promise<Db>{
    const client=await MongoClient.connect('mongodb://localhost:27017',{
        useNewUrlParser : true,
        useUnifiedTopology: true,
        ignoreUndefined: true
    })
    return client.db();
}


export default async (): Promise<Db>=>{
    if(!db)
    {
        db=await intializeDatabase();
    }
    return db;
}