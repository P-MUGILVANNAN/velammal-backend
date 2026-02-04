const { get } = require('mongoose');
const Student = require('../models/Student');

// create students
const createStudent = async(req, res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(201).json({
            success: true,
            student
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            err
        })
    }
}

// get students
const getStudents = async(req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json({
            success: true,
            students
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            err
        })
    }
}

// get single student
const getSingleStudent = async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        res.status(200).json({
            success: true,
            student
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            err
        })
    }
}

// update student
const updateStudent = async(req,res)=>{
    try{
        const student = await Student.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            student
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            err
        })
    }
}

// delete student
const deleteStudent = async(req,res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            student
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent
};