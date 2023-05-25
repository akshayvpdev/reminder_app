
const userService = require("../services/user-service");




// -----------------register---------------------------------
const register = (req, res) => {
  const result = userService.createUser(req.body.email, req.body.name, req.body.password);
  result
    .then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    })
    .catch((error) => {
      // Handle the promise rejection here
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
};


// ----------------------login-------------------------------
const login = (req, res) => {
  const result = userService.loginUser(req.body.email, req.body.password);
  result
    .then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    })
    .catch((error) => {
      // Handle the promise rejection here
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
};

const addReminder = (req, res) => {
  const result = userService.addData(req.body, req);
  result
    .then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    })
    .catch((error) => {
      // Handle the promise rejection here
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
};
// -------------------------------------------------------------------------------
const viewReminders = (req, res) => {
  const result = userService.view(req.params.id);
  result
    .then((resobj) => {
      console.log(resobj);
      res.status(resobj.statusCode).send(resobj);
    })
    .catch((error) => {
      // Handle the promise rejection here
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
};
// ---------------------------------------------------------------------------------------
const deletereminder = (req, res) => {
  const result = userService.remove(req.body.id, req);
  result
    .then((resobj) => {
      console.log(resobj);
      res.status(resobj.statusCode).send(resobj);
    })
    .catch((error) => {
      // Handle the promise rejection here
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
};


module.exports = {
  login,
  register,
  addReminder,
  viewReminders,
  deletereminder
};
