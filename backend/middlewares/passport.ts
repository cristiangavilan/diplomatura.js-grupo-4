import { User } from '../models/User.model';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import passport from 'passport';
const JWTKEY = process.env.JWTKEY;

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // en postman agregar en el header AuthHeader y en el Setting agregar el Bearer
  secretOrKey: `${JWTKEY}`,
};

export const validateLogin = passport.authenticate('jwt', { session: false });

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.error(error);
  }
});
