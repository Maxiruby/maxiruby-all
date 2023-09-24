import mongoose from "mongoose";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  startTime: number;
  endTime: number;
  price: string;
  tokenToSell: string;
  tokenDecimal: string;
  vestingStartTime: number;
  vestingCliffTime: number;
  vestingPeriod: number;
  enableByEther: number;
  enableByUsdt: number;
  owner: string;
  project_burn_address: string;
  project_coingecko_tokenID: string;
  project_coin_stats_url: string;
  project_image: string;
  project_linkedin_url: string;
  project_name: string;
  project_description: string;
  project_total_user: number;
  project_swap_rate: string;
  project_token_symbol: string;
  project_hard_cap: string;
  project_total_fund_participated: string;
  project_fcfs_open_time: number;
  soft_cap: string;
  audit_url: string;
  whitelist?: boolean;
  tier?: boolean;
  minimumPayment: string;
  maximumPayment: string;
  status?: string;
  referans_key: string;
  projects_appy?: mongoose.Types.ObjectId[];
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: any): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  startTime: number;
  endTime: number;
  price: string;
  tokenToSell: string;
  tokenDecimal: string;
  vestingStartTime: number;
  vestingCliffTime: number;
  vestingPeriod: number;
  enableByEther: number;
  enableByUsdt: number;
  owner: string;
  project_burn_address: string;
  project_coingecko_tokenID: string;
  project_coin_stats_url: string;
  project_image: string;
  project_linkedin_url: string;
  project_name: string;
  project_description: string;
  project_total_user: number;
  project_swap_rate: string;
  project_token_symbol: string;
  project_hard_cap: string;
  project_total_fund_participated: string;
  project_fcfs_open_time: number;
  soft_cap: string;
  audit_url: string;
  whitelist?: boolean;
  tier?: boolean;
  minimumPayment: string;
  maximumPayment: string;
  status?: string;
  referans_key: string;
  projects_appy?: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema({
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  tokenToSell: {
    type: String,
    required: true,
  },
  tokenDecimal: {
    type: String,
    required: true,
  },
  vestingStartTime: {
    type: Number,
    required: true,
  },
  vestingCliffTime: {
    type: Number,
    required: true,
  },
  vestingPeriod: {
    type: Number,
    required: true,
  },
  enableByEther: {
    type: Number,
    required: true,
    default: 0,
  },
  enableByUsdt: {
    type: Number,
    required: true,
    default: 0,
  },
  owner: {
    type: String,
    required: true,
  },
  project_burn_address: {
    type: String,
    required: true,
  },
  project_coingecko_tokenID: {
    type: String,
    required: true,
  },
  project_coin_stats_url: {
    type: String,
    required: true,
  },
  project_image: {
    type: String,
    required: true,
  },
  // social medya
  project_linkedin_url: {
    type: String,
    required: true,
  },
  project_name: {
    type: String,
    required: true,
  },
  project_description: {
    type: String,
    required: true,
  },
  project_total_user: {
    type: Number,
    required: true,
  },
  project_swap_rate: {
    type: String,
    required: true,
  },
  project_token_symbol: {
    type: String,
    required: true,
  },
  project_hard_cap: {
    type: String,
    required: true,
  },
  project_total_fund_participated: {
    type: String,
    required: true,
  },
  project_fcfs_open_time: {
    type: Number,
    required: true,
  },
  soft_cap: {
    type: String,
    required: true,
  },
  audit_url: {
    type: String,
    required: true,
  },
  whitelist: {
    type: Boolean,
    required: true,
    default: false,
  },
  tier: {
    type: Boolean,
    required: true,
    default: false,
  },
  minimumPayment: {
    type: String,
    required: true,
  },
  maximumPayment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },
  referans_key: {
    type: String,
    required: true,
  },
  projects_appy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new Project(attrs);
};

const Project = mongoose.model<UserDoc, UserModel>("Project", userSchema);

export { Project };
