import { Request, Response } from "https://deno.land/x/oak/mod.ts"
import {createUser} from "../services/users.ts"

export default async ({
    request,
    response
}: {
    request: Request;
    response: Response;
}) => {
    if(!request.hasBody){
        response.status = 400
        response.body = {msg: "Invalid user data"}
        return
    }
    const {
        value: {user_name, password, age}
    } = await request.body()
    
    await createUser({user_name, password, age})
    response.body = {msg: "User created"}
}