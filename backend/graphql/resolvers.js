import User from "../models/userModel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
const resolvers = {
  Query: {
    async getAllUsers(_, {}) {
      return await User.find();
    },
  },
  Mutation: {
    async createUser(_, { userNew }) {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("User already Exists!");
      }
      const hashedPassword = await bycrypt.hash(userNew.password, 10);
      const newuser = new User({
        ...userNew,
        password: hashedPassword,
        registeredAt: new Date().toISOString(),
      });
      return await newuser.save();
    },
    async loginUser(_,{loginInput}){
        const user = await User.findOne({email:loginInput.email});
        if (!user) {
            throw new Error("Invalid Email or Password!");
        }
      const chkPassword = await bycrypt.compare(loginInput.password,user.password);
      if (!chkPassword) {
        throw new Error("Invalid Email or Password!");
      }
      const token = jwt.sign({id:user._id,email:user.email},"KHGSFHJKKLBN123dgvvgtyyuujbbb",{
        expiresIn:"7d",
      })
      return {token};
    }
  },
};
export default resolvers;
