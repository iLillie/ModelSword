import {RequestHandler} from "./index";
import {modelsaber_api} from "./_api";

const ITEM_AMOUNT = 16;

/** @type {import('./[page]').RequestHandler} */
export const get: RequestHandler = async ({ params }) => {

    let categories = ["sabers", "bloqs", "platforms", "avatars"];
    if(!categories.includes(params.category.toLowerCase())) {
        return {
            status: 404,
            error: new Error(`Not found: /${params.path}`)
        }
    }


    let pageNum = Number(params.page);
    let offset =  ((pageNum - 1) * ITEM_AMOUNT);
    let start = 0 + offset;
    let end = ITEM_AMOUNT + offset;

    let searchType = "saber";

    switch (params.category.toLowerCase()) {
        case "sabers":
            searchType = "saber"
            break;
        case "bloqs":
            searchType = "bloq"
            break;
        case "platforms":
            searchType = "platform";
            break;
        case "avatars":
            searchType = "avatar";
            break;
    }

    const response = await modelsaber_api(`get.php?type=${searchType}&start=${start}&end=${end}&sort=date&sortDirection=desc`);


    return {
        body: {
            sabers: await response.json(),
            page: pageNum
        }
    };
};