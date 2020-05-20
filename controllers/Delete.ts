import {Request, Response} from "https://deno.land/x/oak/mod.ts"
import {deleteUser, listAll} from "../services/users.ts"

export default async({
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
        value: {user_name}
    } = await request.body()
    const users = await listAll()
    let verify = false

    users.forEach((doc) => {
        if(doc.user_name == user_name){
            verify = true
        }
    })

    if(!verify){
        response.status = 404
        response.body = {msg: `${user_name} not found`}
        return
    }

    await deleteUser(user_name)

    response.body = {msg: "User deleted"}
}