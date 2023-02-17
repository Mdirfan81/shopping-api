const user = require("../data/user");

const authUser = (req, res) => {
  let { username, password } = req.body;
  try {
    for (let i of user.user) {
      if (username === i.username && password === i.password) {
        return res.status(200).send(i);
      }
    }
    return res.status(200).send("Not Found");
  } catch (error) {
    return error;
  }
};

module.exports = {
  authUser,
};
