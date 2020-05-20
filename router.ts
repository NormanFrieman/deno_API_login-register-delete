import {Router} from "https://deno.land/x/oak/mod.ts"

import Hello_World from "./controllers/Hello_World.ts"
import Create from "./controllers/Create.ts"
import List from "./controllers/List.ts"
import Delete from "./controllers/Delete.ts"

const router = new Router()

router
    .get("/", List)
    .get("/hello", Hello_World)
    .post("/register", Create)
    .delete("/delete", Delete)

export default router