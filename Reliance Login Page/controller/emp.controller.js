const Emp = require('../Model/emp.model');

let empDetails = (req, res) => {
    const body = req.body;
     // creating a new mongoose doc from user data
    const emp = new Emp(body);
    emp.save().then((doc) => res.status(201).send(doc));
};
let getEmp = (req, res) => {
    Emp.find({}, (err, result) => {
      if (!err) {
        res.json(result);
      }
    });
  };

let getEmpByID = (req, res) => {
    let empname = req.params.empname;
    Emp.find({ empname:empname}, (err, result) => {
      if (!err) {
        res.json(result);
      }
    });
  };
//delete
let deleteEmpById = (req, res) => {
    let pid = req.params.pid; //passing the id through path param
    Emp.deleteOne({ _id: pid }, (err, result) => {
      if (!err) {
        if (result.deletedCount > 0) {
          res.send('Employee deleted successfully');
        } else {
          res.send('No such Employee');
        }
      }
    });
};
let editEmpPro = (req, res) => {
  let eid = req.body.eid;
  let bemail = req.body.email.trim();
  let bempname = req.body.empname.trim();
  let bdept = req.body.dept.trim();
  let blevel = req.body.level.trim();
  Emp.updateOne(
    { _id: eid },
    {
      $set: {
        empname: bempname,
        dept: bdept,
        email: bemail,
        level: blevel,
      },
    }
  )
    .then((obj) => {
      console.log(obj._id);
    })
    .catch((err) => {
      console.log(err);
    });
}; 
module.exports = { empDetails , getEmp, getEmpByID,deleteEmpById,editEmpPro};
