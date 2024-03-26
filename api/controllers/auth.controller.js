import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import errorHandler from '../util/error.js';
const signup = async (req,res,next)=>{
      let {username,password,email}=req.body
      if(!username || !password||!email||username==""||password==""||email=="")
      {
          next(errorHandler(500,"All credentials are required"))
          return;
      }
      try{
          const hashpass=bcryptjs.hashSync(password,10);
      const user= await new User({
          username,
          password:hashpass,
          email
      }).save()
      res.send(user);
     }
     catch(err){
          next(err);
     }
}
export default signup;