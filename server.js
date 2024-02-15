import * as dotenv from 'dotenv'
dotenv.config();

import {MongoClient} from 'mongodb';

const client = new MongoClient(process.env.URL);

async function run(){
    try{
        const database = client.db('crud');
        const details = client.collection('details');

        const query = { title: 'back to the future'};
        const detail = await details.findOne(query);
        console.log(detail);
    }finally{
        await client.close();
    }
}


run().catch(console.dir);



app.listen(3001, () => {
    console.log("server is listening to this port")
})