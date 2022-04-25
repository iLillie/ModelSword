import {RequestHandler} from "./index";


export const get: RequestHandler = async ({ locals }) => {
    return {
            status: 303,
            headers: {
                location: '/avatars/1'
            }
    };
};