module.exports.ensureAuthenticated = (req, res, next) => {

      console.log("Are you logged in? ", req.isAuthenticated())
      if (req.isAuthenticated()) {
        // return next();
        return true;
      }else{
        return false;
      }
      // res.redirect('/login/employer');
    }
  