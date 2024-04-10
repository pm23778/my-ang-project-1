const express = require('express');
const route = express.Router();
// import controller 

const {getEmploy ,updateEmploy,deleteEmploy,createEmploy} = require('../controllers/hrManagement');
 

// define Api routes 
route.post('/createEmploy',createEmploy)
route.get('/getAllData',getEmploy);
route.put('/updateTodo/:id',updateEmploy);
route.delete('/deleteTodo/:id',deleteEmploy)




module.exports = route;
