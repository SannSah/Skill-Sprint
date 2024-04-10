import mongoose from "mongoose";

const codingInfoSchema = new mongoose.Schema({
    CodeChef: {
        UserID: String,
        TotalQuestionSolver: Number,
        Ranking: Number,
        Easy: String,
        Medium: String,
        Hard: String
    },
    LeetCode: {
        UserID: String,
        TotalQuestionSolver: Number,
        Ranking: Number,
        Easy: String,
        Medium: String,
        Hard: String
    },
    GFG: {
        UserID: String,
        TotalQuestionSolver: Number,
        Ranking: Number,
        Easy: String,
        Medium: String,
        Hard: String
    },
    HackerRank: {
        UserID: String,
        TotalQuestionSolver: Number,
        Ranking: Number,
        Easy: String,
        Medium: String,
        Hard: String
    }
});

const academicInfoSchema = new mongoose.Schema({
    CurrentCourse: {
        Institute: String,
        Department: String,
        Program: String,
        Specialization: String,
        CGPA: Number,
        CurrentSemester: Number
    },
    twelfth: {
        Board: String,
        Stream: String,
        Percentage: Number,
        PassingYear: Number
    },
    tenth: {
        Board: String,
        Stream: String,
        Percentage: Number,
        PassingYear: Number
    }
});

const personalInfoSchema = new mongoose.Schema({
    RollNo: String,
    Mentor: String,
    fullName: String,
    Gender: String,
    DOB: String,
    ContactNumber: String,
    Email: String,
    session: String,
    EditInfo:String
});


const studentSchema = new mongoose.Schema({
    personalInfo: personalInfoSchema,
    CodingInfo: [codingInfoSchema],
    academicinfo: [academicInfoSchema]
});

const Student = mongoose.model('students', studentSchema);

export default Student;
