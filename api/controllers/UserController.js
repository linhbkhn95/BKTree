/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if (req.body.password !== req.body.confirmPassword) {
          return           res.send(OutputInterface.errServer('khong trung pass'))

        }
        console.log('req',req.body)
        User.create(req.body).exec(function (err, user) {
          if (err) {
            return  res.send(OutputInterface.errServer(err))

          }
          // If user created successfuly we return user and token as response
          if (user) {
            // NOTE: payload is { id: user.id}
                res.send(OutputInterface.success(user))

            // res.json(200, {user: user, token: jwToken.issue({id: user.id})});
          }
          return  res.send(OutputInterface.errServer('not user'))

        });
      }
};

