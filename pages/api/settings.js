import { Setting } from "@/models/Setting";
import { mongooseConnect } from "../lib/mongoose";

export default async function handle(req, res) {

    await mongooseConnect()

    if(req.method === 'GET') {
        const {name} = req.query;
        res.json( await Setting.findOne({name}) )
    }
}