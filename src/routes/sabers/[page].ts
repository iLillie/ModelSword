import {RequestHandler} from "./index";
import {modelsaber_api} from "./_api";

/** @type {import('./[page]').RequestHandler} */
export const get: RequestHandler = async ({ params }) => {
    let pageNum = Number(params.page);
    let offset =  ((pageNum - 1) * 16);
    let start = 0 + offset;
    let end = 16 + offset;

    const response = await modelsaber_api(`get.php?type=saber&start=${start}&end=${end}&sort=date&sortDirection=desc`);


    return {
        body: {
            sabers: await response.json(),
            page: pageNum
        }
    };
};