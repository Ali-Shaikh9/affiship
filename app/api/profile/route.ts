import userModel from "@/models/user.model"
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/AffiShipUsers');

export async function GET() {

    const profile = await userModel.find()

    console.log(profile)

    return Response.json({result : profile})

}