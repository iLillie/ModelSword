import type { RequestHandler } from "@sveltejs/kit";
import {modelsaber_api} from "./_api";

const ITEM_AMOUNT = 16;
const VALID_CATEGORIES = ["sabers", "bloqs", "platforms", "avatars"];



let getSearchType = (category: string) => {
    let searchType = "";
    switch (category) {
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
        default:
            searchType = "saber";
            break;
    }
    return searchType;
}

let isValidCategory = (category: string) => {
    return VALID_CATEGORIES.includes(category);
}
/** @type {import('./[page]').RequestHandler} */
export const get: RequestHandler = async ({ params }) => {
    let category = params.category.toLowerCase();
    let isNotValidCategory = !isValidCategory(category);

    // TODO: 404 showing up as JSON instead of a webpage
    if(isNotValidCategory) {
        return {
            status: 404,
            body: {
                error: new Error(`Path not valid ${params.path}`)
            }
        }
    }

    let currentPage = Number(params.page);
    let offset =  ((currentPage - 1) * ITEM_AMOUNT);
    let start = 0 + offset;
    let end = ITEM_AMOUNT + offset;

    let searchType = getSearchType(params.category.toLowerCase());

    const response = await modelsaber_api(`get.php?type=${searchType}&start=${start}&end=${end}&sort=date&sortDirection=desc`);

    return {
        body: {
            models: await response.json(),
            page: currentPage
        }
    };
};