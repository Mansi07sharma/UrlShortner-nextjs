import clientPromise from '@/db/connectDB'

export async function POST(request) {
    // Connect to the database
    const client=await clientPromise;
    const db=client.db("shorturl");
    const collection=db.collection("urls");
    
    const doc=await request.json();

    //find
    const existUrl=await collection.findOne({shorturl:doc.shorturl});

    if(existUrl){
        return Response.json({
            message:'Short URL already exists',
            shorturl:existUrl.shorturl,
            longurl:existUrl.longurl
        })
    }

    //insert
    const result=await collection.insertOne({
        shorturl: doc.shorturl,
        longurl: doc.longurl
    })
    return Response.json({ 
        message: 'Short URL generated successfully',
     })
}


export async function GET(){
    const client=await clientPromise;
    const db=client.db("shorturl");
    const collection=db.collection("urls");

    const allUrls=await collection.find({}).toArray();
    return Response.json({
        urls: allUrls
    })
}