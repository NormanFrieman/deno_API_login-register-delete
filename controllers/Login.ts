import {Request, Response} from "https://deno.land/x/oak/mod.ts"
import {login} from "../services/users.ts"

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
        value: {user_name, password}
    } = await request.body()

    const verification = await login({user_name, password})

    response.body = {msg: `Status login: ${verification}`}
}