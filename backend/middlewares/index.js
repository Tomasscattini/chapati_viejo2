exports.isAuth = (req, res, next) => {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
  }

exports.catchErrs = ctl => (req, res, next) => ctl(req, res).catch(next)

exports.checkRole = role => (req, res, next) => {
  if (role.includes(req.user.role)) return next()
  return res.status(400).json({message: "You have to be an artist to get here"})
}