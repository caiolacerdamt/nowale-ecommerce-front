import {model, models, Schema} from 'mongoose'

const NewsletterSchema = new Schema({
    emailNewsletter: {type:String, unique:true},
})

export const Newsletter = models?.Newsletter || model('Newsletter', NewsletterSchema)