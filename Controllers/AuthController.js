const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require('express-jwt');
const bcrypt = require("bcryptjs");

require('cookie-parser');

const JWT_SECRET = process.env.JWT_SECRET;

//  signup
exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
          return  res.status(400).json("Please enter email and password.");
        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
           return res.status(409).send("The User already exist!");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });

        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(400).send("Please enter email and password!");
    }

}


//login
exports.login = async (req,res) =>{
    try{
        const {email,password} = req.body;

        if(!(email && password)){
            res.send(400).send("Please enter email and password.");
        }
        const user = await User.findOne({email});

        if(!user){
            res.send(404).json("The user does not exist!");
        }

        const comparePassword = await bcrypt.compare(password,user.password);

        if(comparePassword){
            // The login detail is correct.

            const token = jwt.sign({
                id:user._id,
                email:user.email
            },
            JWT_SECRET,{
                expiresIn:86400  //expires in 24 hours
            })
           
            return res.json({user,token:token});
        } else{
            return res.json({status:'error',error:'Check the password again.'});
        }
        
    }catch (error){
        console.log(error);
    }
}


exports.isLogin = expressJwt({
    secret:JWT_SECRET,
    userProperty:'auth',
    algorithms:['HS256'],
})

