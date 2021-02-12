import dataBase from '../database_conf'

type signUp={
  email: string,
  password: string
}

export const addUser=async (body: signUp)=>{
       await (await dataBase()).collection("demo").insertOne({...body})
}