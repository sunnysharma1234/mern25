const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({},{password:0});
    console.log(users);
    if(!users || users.length===0){
        return res.statu(404).json({message:"No usrs found"})
    }
   return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};


// get all contacts
const getAllContacts = async(req,res)=>{
    try{
        const contacts = await Contact.find();
        if(!contacts || contacts.length ===0){
            return res.status(404).json({message:"No contacts found"})
        }
        return res.status(200).json(contacts);

    }catch(error){
        console.log(error);
        next(error);
    }
}


// getuser by id 

const getUserById= async(req,res)=>{
  try{
    const id = req.params.id;
   const data = await User.findOne({_id:id},{password:0});
   return res.status(200).json(data);


  }catch(error){
    next(error)
  }

}


// updateuser

const updateUserById = async(req,res,next)=>{
  try{
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne({_id:id},{
      $set:updatedUserData
    })

    return res.status(200).json(updatedData)


  }catch(error){
    next(error);
  }
}





// delete by user

const deleteUserById =  async(req,res) =>{
  try{
    const id= req.params.id;
    await User.deleteOne({_id:id})
    return res.status(200).json({message:"User Deleted successfully"})

  }catch(error){
next(error);
  }

}



// contacts by user

const deleteContactById =  async(req,res) =>{
  try{
    const id= req.params.id;
    await Contact.deleteOne({_id:id})
    return res.status(200).json({message:"Contact Deleted successfully"})

  }catch(error){
next(error);
  }

}

module.exports={getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById};