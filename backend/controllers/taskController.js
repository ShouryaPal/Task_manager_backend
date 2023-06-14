const TaskModel = require("../models/taskModel");

module.exports.getTask = async (req, res) => {
    const task = await TaskModel.find();
    res.send(task);
}

module.exports.saveTask = (req, res) => {
    const { text } = req.body;

    TaskModel
        .create({ text })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteTask= (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    TaskModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateTask= (req, res) => {
    const { _id, text } = req.body;

    TaskModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}