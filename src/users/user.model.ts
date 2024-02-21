import { Document, model, Schema} from "mongoose";
import IUser from "./user.interface";

const userSchema = new Schema<IUser & Document>({
  name: String,
  email: String,
  password: String,
},
{
  versionKey: false
});

const userModel = model<IUser & Document>("User", userSchema);

export default userModel;
