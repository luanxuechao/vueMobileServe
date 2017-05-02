/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  register: function (req, res) {
    console.log(req.allParams());
    var userBean = req.allParams();

    User.create(userBean).exec(function (err, user) {
      if (err) return res.serverError(err);
      console.log(user)
      res.json(user);
      return res.end();
    })
  },
  login: function (req, res) {
    var userBean = req.allParams();
    User.findOne({where: {userName: userBean.userName}}).exec(function (err, user) {
      if (err) return res.serverError(err);
      if (user.password == userBean.userName) {
        res.json({result: true});
        return res.end();
      } else {
        res.json({result: true});
        return res.end();
      }

    });

  }
};

