const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    present: {
        type: Boolean,
        deafult: true
    }
});

const Student = mongoose.model('student',StudentSchema);
module.exports = Student;