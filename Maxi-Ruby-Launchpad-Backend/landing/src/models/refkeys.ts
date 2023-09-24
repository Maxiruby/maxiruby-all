import mongoose from "mongoose";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  key: string;
  wallet: string;
  using: boolean;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: any): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  key: string;
  wallet: string;
  using: boolean;
}
const userSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  },
  using: {
    type: Boolean,
    required: true,
    default: false,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new Keys(attrs);
};

const Keys = mongoose.model<UserDoc, UserModel>("Keys", userSchema);

export { Keys };
