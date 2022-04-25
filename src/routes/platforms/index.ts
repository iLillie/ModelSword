import {RequestHandler} from "./index";


export const get: RequestHandler = async ({ locals }) => {
    // locals.userid comes from src/hooks.js
    //const response = await modelsaber_api("get.php?type=saber&start=0&end=8");
    return {
            status: 303,
            headers: {
                location: '/platforms/1'
            }
    };
};