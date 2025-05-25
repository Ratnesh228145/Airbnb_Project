const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        desciption: Joi.string().required(),
        location: Joi.string().required(),
        country:Joi.string().required(),
        place: Joi.string().required(),
        image: Joi.string().allow("",null),
    }).required(),
})