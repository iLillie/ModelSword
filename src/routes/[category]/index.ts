import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('./[category]').RequestHandler} */
export const get: RequestHandler = async ({ params }) => {
    let categories = ["sabers", "bloqs", "platforms", "avatars"];
    if(!categories.includes(params.category.toLowerCase())) {
        return {
            status: 404,
            body: {
                "error": "notfound",
                "message": "Not Found"
            }
        }
    }
    return {
            status: 303,
            headers: {
                location: `/${params.category}/1`
            }
    };
};