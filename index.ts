import {Application} from "https://deno.land/x/oak/mod.ts"
import {APP_HOST, APP_PORT} from "./config.ts"

import {Router, Response, Request} from "https://deno.land/x/oak/mod.ts"

const app = new Application()

const router = new Router()
router.get("/", ({
    request,
    response
}: {
    request: Request;
    response: Response
}) => {
    response.body = {msg: "Hello World"}
})

app.use(router.routes())

console.log(`${APP_HOST}:${APP_PORT}`)
await app.listen(`${APP_HOST}:${APP_PORT}`)