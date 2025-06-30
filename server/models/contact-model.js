const{Schema , model} = require('mongoose');
// const { required } = require('nodemon/lib/config');

const contactSchema = new Schema({
    username:{type:String ,required:true},
    email:{type:String ,required:true},
    message:{type:String ,required:true},
});



// create a model
const Contact =new model('Contact', contactSchema);
module.exports = Contact;