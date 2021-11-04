const Task = require('../model/task_model')

const getAllTask = async(req,res)=>{

    try {
       const tasks = await Task.find({}) 
       res.status(200).send( tasks )
    } catch (error) {
        
    }
}
const createTask = async(req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json( task )    
    } catch (error) {
        res.status(500).send({message:error.errors.name.message})
        
    }
}
const getSingleTask = async (req,res)=>{
    try {
        const task = await Task.findOne({_id:req.params.id})
        res.status(200).json( task )
    } catch (error) {
        res.status(500).json(error)
    }
    //console.log(req.params.id);
}
const updateTask = (req,res)=>{
    res.status(200).send('update a task')
}
const deleteTask = async (req,res)=>{
    try {
        const taskID = req.params.id;
        const task = await Task.deleteOne({_id : taskID})
        res.status(200).send({success:true,task:task})
    } catch (error) {
        res.status(500).json(error)    
    }
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    deleteTask,
    updateTask,
}