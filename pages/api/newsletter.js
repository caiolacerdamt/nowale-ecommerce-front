import { Newsletter } from "@/models/NewsLetter";
import { mongooseConnect } from "../lib/mongoose";

export default async function handle(req,res) {
    await mongooseConnect();
    if(req.method === 'POST') {
        const { emailNewsletter } = req.body;
        res.json(await Newsletter.create({
            emailNewsletter: emailNewsletter
        }))
    }
}