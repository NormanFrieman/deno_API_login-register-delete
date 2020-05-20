import {Application} from "https://deno.land/x/oak/mod.ts"
import {APP_HOST, APP_PORT} from "./config.ts"
import router from "./router.ts"
import error from "./middlewares/error.ts"

const app = new Application()

app.use(error)
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`${APP_HOST}:${APP_PORT}`)
await app.listen(`${APP_HOST}:${APP_PORT}`)