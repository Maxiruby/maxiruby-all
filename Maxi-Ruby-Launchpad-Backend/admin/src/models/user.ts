import mongoose from "mongoose";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  password: string;
  email: string;
  oauthProvider: string;

  wallets: any;
  holderCount: number;
  isWhitelisted: boolean;
  userVerified: boolean;
  username: string;
  surname: string;
  isAdmin: boolean;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: any): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  password: string;
  email: string;
  oauthProvider: string;

  wallets: any;
  holderCount: number;
  isWhitelisted: boolean;
  userVerified: boolean;
  username: string;
  surname: string;
  isAdmin: boolean;
}
const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  oauthProvider: {
    // Kullanıcının hangi servis ile giriş yaptığını belirtir (Google, Twitter)
    type: String,
  },

  username: {
    type: String,
  },
  surname: {
    type: String,
  },
  userVerified: { type: Boolean, default: false },
  wallets: [
    {
      address: {
        type: String,
      },
      isActive: {
        type: Boolean,
        default: false,
      },
    },
  ],
  holderCount: {
    type: Number,
    default: 0,
  },
  isWhitelisted: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
