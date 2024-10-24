import mongoose, { Document, Schema, Model } from "mongoose";
import crypto from "crypto";

// Define an interface representing a User document in MongoDB
interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  title?: string;
  about?: string;
  profile?: mongoose.Types.ObjectId;
  plan: string;
  role: string;
  password: string;
  status: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  verified: boolean;
  verificationHash: string;
  loginVerificationCode: string;
  emailVerificationCode: string;
  created_at: Date;
  updated_at: Date;

  // Methods
  generateResetPasswordToken: () => void;
  generateVerificationHash: () => void;
}

const UserSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  role: {
    type: String,
    default: "admin",
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationHash: {
    type: String,
    default: "",
  },
  loginVerificationCode: {
    type: String,
    default: "",
  },
  emailVerificationCode: {
    type: String,
    default: "",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Method to generate a reset password token
UserSchema.methods.generateResetPasswordToken = function (): void {
  this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
};

// Method to generate an email verification hash
UserSchema.methods.generateVerificationHash = function (): void {
  this.verificationHash = crypto.randomBytes(64).toString("hex");
};

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
