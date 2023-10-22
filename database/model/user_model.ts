
import { mongoose } from "../db";
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamp: true }
);

userSchema.pre('save', function (this: any, next: any | void) {
  let user = this;
  if (user.isModified('password')) {
    return bcrypt.hash(user.password, 12, function (err: any, hash: string) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password: string, next: any) {
  bcrypt.compare(password, this.password, function (err: any, match: any) {
    if (err) {
      return next(err, false);
    }

    return next(null, match);
  });
};

const UserModel = mongoose.model('User', userSchema);


// Why does it work??? https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam

module.exports = UserModel;