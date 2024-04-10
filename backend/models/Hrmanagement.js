const mongoose = require('mongoose');
 
const hrManagement = new mongoose.Schema(
    {
        Department:[{
            type:String,
            require:true,
            maxLength:50,
        }],
        Employ_Name:[{
            type:String,
            require:true,
            maxLength:50,
        }],
        Mobile:[{
            type:String,
            require:true,
            maxLength:50
        }],
        Gender:[{
            type:String,
            require:true,
            maxLength:50
        }],
        Joining_Date:[{
            type:String,
            require:true,
            maxLength:50
        }],
        Email:[{
            type:String,
            require:true,
            maxLength:50
        }]
    }
)
module.exports = mongoose.model('hrManagement',hrManagement)