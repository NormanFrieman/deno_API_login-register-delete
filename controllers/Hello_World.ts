import {Response} from "https://deno.land/x/oak/mod.ts"

export default async ({
        response
    }: {
        response: Response;
    }) => {
        response.body = {msg: "Hello World"}
}