import express, {Request, Response} from 'express'
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
    body('email').isEmail().withMessage("Email must be valid"),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4-20 charaters long')
],  (req: Request, res: Response)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new Error("Invalid username or password")
    }
    const {email, password} = req.body;
    console.log("creating a user");

    console.log("Error in connecting to the database");
    
    

    res.send({})
})

export {router as signupRouter}