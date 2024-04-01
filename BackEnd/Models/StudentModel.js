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

const currentCourseSchema = new mongoose.Schema({
    institute: String,
    department: String,
    program: String,
    branch: String,
    cgpa: Number,
    session: String,
    semester: Number
});

const personalInfoSchema = new mongoose.Schema({
    RollNo: Number,
    Mentor: String,
    fullName: String,
    Gender: String,
    DOB: String,
    ContactNumber: String,
    Email: String,
    session_id:String
});

const studentSchema = new mongoose.Schema({
    personalInfo: personalInfoSchema,
    CodingInfo: [codingInfoSchema],
    academicinfo: [currentCourseSchema]
});

const Student = mongoose.model('students', studentSchema);

export default Student;
