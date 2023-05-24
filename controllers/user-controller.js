
const userService = require("../services/user-service");




// -----------------register---------------------------------
const register = (req, res) => {
  result = userService.createUser(req.body.email, req.body.name, req.body.password);
  result.then((resobj) => {
    res.status(resobj.statusCode).send(resobj);
  });
};


// ----------------------login-------------------------------
const login = (req, res) => {
  result = userService.loginUser(req.body.email,req.body.password);
  result.then((resobj) => {
    res.status(resobj.statusCode).send(resobj);
  });
};

const addReminder=(req,res)=>{
  result = userService.addData(req.body,req)
  result.then((resobj) => {
    res.status(resobj.statusCode).send(resobj);
  });
}

const viewReminders=(req,res)=>{
  const result = userService.view(req.params.id)
  result.then((resobj) => {
    console.log(resobj)
    res.status(resobj.statusCode).send(resobj);
  });
}

const deletereminder=(req,res)=>{
  const result = userService.remove(req.body.id,req)
  result.then((resobj) => {
    console.log(resobj)
    res.status(resobj.statusCode).send(resobj);
  });
}



module.exports = {
  login,
  register,
  addReminder,
  viewReminders,
  deletereminder
};
