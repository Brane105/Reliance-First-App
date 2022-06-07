let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);
let EmployeeSchema = mongoose.Schema({
    empname:{
        type: String,
        required: true
    },
    dept:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: true
    },
},{_id:false})
EmployeeSchema.plugin(AutoIncrement , {id: 'employee_id_counter', inc_field: '_id'});
let EmployeeModel = mongoose.model("employee",EmployeeSchema,"Employee")
module.exports = EmployeeModel;     