const usermodel = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// -------------------------------------------------------------------------------
const createUser = (email, username, password) => {
  return usermodel.User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return {
          status: false,
          message: "Account already exists! Please login.",
          statusCode: 404,
        };
      } else {
        let user = new usermodel.User({
          email: email,
          name: username,
          password: password,
          reminders: [],
        });
        user.save();
        return {
          status: true,
          message: "Registration completed",
          statusCode: 201,
        };
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        status: false,
        message: "An error occurred while creating the user",
        statusCode: 500,
      };
    });
};

// --------------------------------------------------------------------------------

const loginUser = (email, password) => {
  return usermodel.User.findOne({
    email: email,
    password: password,
  })
    .then((res) => {
      if (res) {
        currentUser = res.name;
        currentUserEmail = email;
        id = res._id;
        console.log(id + "from loginuser-client");
        token = jwt.sign({ currentUserEmail: email }, "secretsuperkey1234");
        return {
          status: true,
          message: "Login successful",
          statusCode: 200,
          token,
          currentUser,
          currentUserEmail,
          id,
        };
      } else {
        return {
          status: false,
          message: "Invalid password or account number",
          statusCode: 400,
        };
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        status: false,
        message: "An error occurred while logging in",
        statusCode: 500,
      };
    });
};

// -------------------------------------------------------------------------------------
const addData = (data, req) => {
  const formattedDate = moment(data.date).format("DD-MM-YYYY");
  return usermodel.User.findOne({
    email: req.currentUserEmail,
  })
    .then((res) => {
      if (res) {
        const newReminder = {
          date: formattedDate,
          description: data.description,
        };

        res.reminders.push(newReminder);
        res.save();
        return {
          status: true,
          message: "Reminder successfully added",
          statusCode: 200,
        };
      } else {
        return {
          status: false,
          message: "Not authenticated",
          statusCode: 400,
        };
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        status: false,
        message: "An error occurred while adding the reminder",
        statusCode: 500,
      };
    });
};

// --------------------------------------------------------------------------------------------------

const view = (id) => {
  return usermodel.User.findOne({
    _id: id,
  })
    .then((res) => {
      if (res) {
        console.log(res);
        return {
          status: true,
          message: "Get all reminders",
          data: res.reminders,
          statusCode: 200,
        };
      } else {
        return {
          status: false,
          message: "Cannot access reminders",
          statusCode: 400,
        };
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        status: false,
        message: "An error occurred while retrieving the reminders",
        statusCode: 500,
      };
    });
};

const remove = (id, req) => {
  return usermodel.User.findOne({
    email: req.currentUserEmail,
  })
    .then((res) => {
      if (res) {
        res.reminders.splice(id, 1);
        res.save();
        return {
          status: true,
          message: "Reminder deleted successfully",
          statusCode: 200,
        };
      } else {
        return {
          status: false,
          message: "An error occurred while deleting the reminder",
          statusCode: 400,
        };
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createUser,
  loginUser,
  addData,
  view,
  remove,
};
