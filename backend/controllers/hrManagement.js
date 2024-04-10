const Todo = require("../models/Hrmanagement");


exports.getEmploy = async(req,res)=>{
    try{
        const todos = await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"entey Successfully"
            }
        )
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
          success:false,
          data:"internal server err",
          message:err.message
        })
    }
}

exports.updateEmploy = async(req,res)=>{
  try{
    const {id} = req.params
    const {Department,Employ_Name,Mobile,Gender,Joining_Date,Email} = req.body;
    const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {Department,Employ_Name,Mobile,Gender,Joining_Date,Email,updatedAt:Date.now()},
    )
    res.status(200).json({
        success:true,
        data:todo,
        message:`Update Successfully`
    })

  }
  catch(err){
    console.log(err); 
    res.status(500)
    .json({
      success:false,
      data:"internal server err",
      message:"Server Err"
    })
}
}

exports.deleteEmploy = async(req,res)=>{
    try{
   const {id} = req.params;
     await Todo.findByIdAndDelete(id);
     res.status(200).json({
        success:true,
        message:'delete Successfully',

     })
    }
    catch(err){
console.log(err); 
    res.status(500)
    .json({
      success:false,
      data:"internal server err",
      message:"Server Err"
    })
    }
}

exports.createEmploy = async(req,res)=>{
  try{
      // extrect title and description from request body
       const {Department,Employ_Name,Mobile,Gender,Joining_Date,Email}  =  req.body;
      //  create a new Todo Obj and insert in  database 
      const response = await Todo.create({Department,Employ_Name,Mobile,Gender,Joining_Date,Email});
      // send a json response with a success flag 
      res.status(200).json(
          {
              success:true,
              data:response,
              message:"entey Successfully"
          }
      )

  }catch(err){
    console.err(err);
    console.log(err);
    res.status(500)
    .json({
      success:false,
      data:"internal server err",
      message:err.message
    })

  }
}