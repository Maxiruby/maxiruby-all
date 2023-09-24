import mongoose from "mongoose";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  tier_one: any;
  tier_two: any;
  tier_three: any;
  tier_four: any;
  tier_five: any;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: any): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  tier_one: any;
  tier_two: any;
  tier_three: any;
  tier_four: any;
  tier_five: any;
}
const userSchema = new mongoose.Schema({
  tier_one: [
    {
      type: String,
    },
  ],
  tier_two: [
    {
      type: String,
    },
  ],
  tier_three: [
    {
      type: String,
    },
  ],
  tier_four: [
    {
      type: String,
    },
  ],
  tier_five: [
    {
      type: String,
    },
  ],
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new Tiers(attrs);
};

const Tiers = mongoose.model<UserDoc, UserModel>("Tier", userSchema);

export { Tiers };
