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
  tier: string;
  verify: boolean;
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
  tier: string;
  verify: boolean;
}
const userSchema = new mongoose.Schema({
  password: {
    type: String,
  },
  email: {
    type: String,

    unique: true,
  },
  oauthProvider: {
    // Kullanıcının hangi servis ile giriş yaptığını belirtir (Google, Twitter)
    type: String,
    default: "",
  },

  username: {
    type: String,
    default: "",
  },
  surname: {
    type: String,
    default: "",
  },
  userVerified: { type: Boolean, default: true },
  banned: { type: Boolean, default: false },
  wallets: [
    {
      address: {
        type: String,
        default: "",
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
  tier: {
    type: String,
    enum: ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "None"],
    default: "None", // Varsayılan bir değer belirtmek isterseniz
  },
  verify: {
    type: Boolean,
    default: false,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Acceptproject",
    },
  ],
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
