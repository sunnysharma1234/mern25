

const validate = (schema) => async (req,res,next)=>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();

    }catch(err){
        const status = 422;
        const message = 'fill the input properly'
        const extraDetails =  err.errors[0].message;
        console.log(err);
        const error = {
            status,
            message,
            extraDetails
            // extraDetails: "Validation error from backend"
        };
        // res.status(400).json({
        //     // console.log(err)
        //     msg: err.errors[0].message,
        //     // error: error.errors[0].message
        // });
        console.log("validatemiddleware",error)
        next(error);

    }

}

module.exports = validate;