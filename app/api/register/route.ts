import userModel from "@/models/user.model"
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/AffiShipUsers');

export async function POST(request: Request) {
    const body = await request.json()
    console.log(body.name, body.email)
    userModel.create({imageUrl:body.imageUrl ,name:body.name, email:body.email ,password:body.password})

    return Response.json({ result:body.name })
}