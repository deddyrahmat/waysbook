const Joi = require('joi');

const bookValidation = data => {
    const schema = Joi.object({
        title: Joi.string().min(1).required(),
        publicationDate: Joi.string().min(1).required(),
        // publicationDate: Joi.date().required(),
        pages: Joi.number().required(),
        author: Joi.string().min(1).required(),
        isbn: Joi.string().min(1).required(),
        description: Joi.string().min(1).required(),
        price: Joi.number().required(),
        // bookFile: Joi.string().min(1).required(),
        // thumbnail: Joi.string().min(1).required(),
    });

    return schema.validate(data, {
        // option untuk menmapilkan pesan error lebih dari 1
        abortEarly:false
    });
}

const registerValidation = data => {
    const schema = Joi.object({
        fullname: Joi.string().min(2).required(),
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(8).required()
    });

    return schema.validate(data, {
        abortEarly:false
    })
}

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(8).required()
    });

    return schema.validate(data, {
        abortEarly:false
    })
}

const transactionValidation = data => {
    const schema = Joi.object({
        numberAccount: Joi.string().min(1).required()
    });

    return schema.validate(data, {
        abortEarly:false
    })
}


module.exports = {
    bookValidation, registerValidation, loginValidation, transactionValidation
}