import {fetchData, persistData} from "./db.ts"
import {User} from "../models/user.ts"

type UserData = Pick<User, "user_name" | "age" | "password">

export const createUser = async (userData: UserData): Promise<void> => {
    const users = await fetchData()
    
    const newUser: User = {
        user_name: String(userData.user_name),
        password: String(userData.password),
        age: Number(userData.age)
    }

    await persistData([...users, newUser])
}

export const listAll = async (): Promise<User[]> => {
    const users = await fetchData()
    
    return users
}