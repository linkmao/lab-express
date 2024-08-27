const User = require('../models/User')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy


passport.use(new LocalStrategy({usernameField:'email'},
  async (email , password , done) => {
    const user = await User.findOne({ nickname:email })
    console.log(user)
    if (!user)
      return done(null, false, { message: "Not found" })
    const match = await user.comparePass(password)
    if (match)
      return done(null, user)
    done(null, false, { message: "wrong pass" })
  }
))

passport.serializeUser((user, done) => done(null, user.id))

 passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err, null)
  }})

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => done(null, user))
      .catch(err => done(err, null));
  });