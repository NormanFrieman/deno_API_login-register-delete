import {Router} from "https://deno.land/x/oak/mod.ts"

import Hello_World from "./controllers/Hello_World.ts"
import Create from "./controllers/Create.ts"

const router = new Router()

router
    .get("/hello", Hello_World)
    .post("/register", Create)

export default router