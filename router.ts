import {Router, Response, Request} from "https://deno.land/x/oak/mod.ts"

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

export default router