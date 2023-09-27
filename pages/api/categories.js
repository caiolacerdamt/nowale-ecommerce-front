import { Category } from "@/models/Category";
import { mongooseConnect } from "../lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const { method } = req;

    if (method === 'GET') {
        const {properties} = req.query;
        const category = await Category.find(properties)
        res.json(category)
    }
}