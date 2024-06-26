const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
  clientID: '307615114273-rtlvo54ajimkji09f6h8s6c8dfotr57c.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:8084/api/users/oauth2/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
            user = new User({
                googleId: profile.id,
                username: profile.displayName,
                email: profile.emails[0].value
            });
            await user.save();
        }
        done(null, user);
    } catch (err) {
        done(err, false);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, false);
    }
});
