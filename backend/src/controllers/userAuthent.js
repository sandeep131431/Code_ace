const redisClient = require("../config/redis");
const User =  require("../models/user")
const validate = require('../utils/validator');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Submission = require("../models/submission")


const register = async (req,res)=>{
    
    try{
        // validate the data;
      validate(req.body); 
      const {firstName, emailId, password}  = req.body;

      req.body.password = await bcrypt.hash(password, 10);
      req.body.role = 'user'
      req.body.point = 0;
      
    
     const user =  await User.create(req.body);

     const token =  jwt.sign({_id:user._id , emailId:emailId, role:'user'},process.env.JWT_KEY,{expiresIn: 60*60});
     res.cookie('token',token,{maxAge: 60*60*1000});

     const reply = {
        firstName: user.firstName,
        emailId: user.emailId,
        _id: user._id,
        role:user.role,
        point:user.point,
        buyProblem:user.buyProblem,
    }
     
     res.status(201).json({
        user:reply,
        message:"Loggin Successfully"
    })


    }
    catch(err){
        res.status(400).send("fjwsuroeur");
    }
}


const login = async (req,res)=>{

    try{
        const {emailId, password} = req.body;

        if(!emailId)
            throw new Error("Invalid Credentials");
        if(!password)
            throw new Error("Invalid Credentials");

        const user = await User.findOne({emailId});

        const match = await bcrypt.compare(password,user.password);

        if(!match)
            throw new Error("Invalid Credentials");

        const reply = {
            firstName: user.firstName,
            emailId: user.emailId,
            _id: user._id,
            role:user.role,
            point:user.point,
            buyProblem:user.buyProblem,
        }

        const token =  jwt.sign({_id:user._id , emailId:emailId, role:user.role},process.env.JWT_KEY,{expiresIn: 60*60});
        res.cookie('token',token,{maxAge: 60*60*1000});
        res.status(201).json({
            user:reply,
            message:"Loggin Successfully"
        })
    }
    catch(err){
        res.status(401).send("Error: "+err);
    }
}


// logOut feature

const logout = async(req,res)=>{

    try{
        const {token} = req.cookies;
        const payload = jwt.decode(token);


        await redisClient.set(`token:${token}`,'Blocked');
        await redisClient.expireAt(`token:${token}`,payload.exp);
    //    Token add kar dung Redis ke blockList
    //    Cookies ko clear kar dena.....

    res.cookie("token",null,{expires: new Date(Date.now())});
    res.send("Logged Out Succesfully");

    }
    catch(err){
       res.status(503).send("Error: "+err);
    }
}


const adminRegister = async(req,res)=>{
    try{
        // validate the data;
    //   if(req.result.role!='admin')
    //     throw new Error("Invalid Credentials");  
      validate(req.body); 
      const {firstName, emailId, password}  = req.body;

      req.body.password = await bcrypt.hash(password, 10);
    //
    
     const user =  await User.create(req.body);
     const token =  jwt.sign({_id:user._id , emailId:emailId, role:user.role},process.env.JWT_KEY,{expiresIn: 60*60});
     res.cookie('token',token,{maxAge: 60*60*1000});
     res.status(201).send("User Registered Successfully");
    }
    catch(err){
        res.status(400).send("Error: "+err);
    }
}

const deleteProfile = async(req,res)=>{
  
    try{
       const userId = req.result._id;
      
    // userSchema delete
    await User.findByIdAndDelete(userId);

    // Submission se bhi delete karo...
    
    // await Submission.deleteMany({userId});
    
    res.status(200).send("Deleted Successfully");

    }
    catch(err){
      
        res.status(500).send("Internal Server Error");
    }
}

const updatePoint = async (req, res) => {
    try {
        const {user,cost } = req.body;
        
        const useri = await User.findById(user);
       

        const newPoint = useri.point=cost;
        console.log(newPoint);

        useri.point=newPoint;
        await useri.save();
        res.send(1);

    } catch (error) {
        console.error('Error updating points:', error);
        res.status(500).json({ 
            success: false,
            message: 'Internal server error',
            error: error.message 
        });
    }
};

const finduser = async(req,res)=>{ 
    try{
     const {id}=req.body;
     const user = await User.findById(id);
    
     res.status(200).send(user);
    }catch(err){
        res.send(err);
    }
}

module.exports = {register, login,logout,adminRegister,deleteProfile,updatePoint,finduser};