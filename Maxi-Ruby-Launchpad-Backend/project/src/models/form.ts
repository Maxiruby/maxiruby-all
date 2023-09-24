import mongoose from "mongoose";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  timestamp?: Date;
  projectName: string;
  desiredNetwork: string;
  discoverySource?: string;
  projectDescription: string;
  projectStatus: string;
  teamVisibility: "Anon" | "Public";
  plannedIDOAmount: number;
  websiteURL: string;
  coingeckoLink?: string;
  telegramAddress: string;
  applicantName: string;
  applicantEmail: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: any): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  timestamp?: Date;
  projectName: string;
  desiredNetwork: string;
  discoverySource?: string;
  projectDescription: string;
  projectStatus: string;
  teamVisibility: "Anon" | "Public";
  plannedIDOAmount: number;
  websiteURL: string;
  coingeckoLink?: string;
  telegramAddress: string;
  applicantName: string;
  applicantEmail: string;
}
const userSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  projectName: {
    type: String,
    required: true,
  },
  desiredNetwork: {
    type: String,
    required: true,
  },
  discoverySource: {
    type: String,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectStatus: {
    type: String,
    required: true,
  },
  teamVisibility: {
    type: String,
    required: true,
    enum: ["Anon", "Public"], // Sadece 'Anon' ve 'Public' değerlerini alabilir.
  },
  plannedIDOAmount: {
    type: Number,
    required: true,
  },
  websiteURL: {
    type: String,
    required: true,
  },
  coingeckoLink: {
    type: String,
  },
  telegramAddress: {
    type: String,
    required: true,
  },
  applicantName: {
    type: String,
    required: true,
  },
  applicantEmail: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // Basit bir e-posta doğrulama regex'i
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new ProjectApplication(attrs);
};

const ProjectApplication = mongoose.model<UserDoc, UserModel>(
  "ProjectApplication",
  userSchema
);

export { ProjectApplication };
