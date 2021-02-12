import { Request,Router,Response } from 'express'

import {addUser} from './auth-controller'


export const authRoute=()=>{
    const app=Router();
    app.post('/signUp',handelSignUp)
    return app;
}

const handelSignUp=async (req: Request,res: Response)=>{
    try{
      await addUser(req.body);
      res.status(200).json({success: true,message: 'Successful'})
    }catch(err){
        res.status(501).json({success: false,message: 'User Not Added'})
    }
}

