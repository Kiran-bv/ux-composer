import { utils } from './utils';
export const api = {
    getUniversities,
    getMenuData,
    getProductInfo
};

function getUniversities(country){
    return utils.makeWebRequest(`http://universities.hipolabs.com/search?country=${country}`,"GET");
}
function getMenuData(){
    return {id:1,menuItem:'Hello'}
}
function getProductInfo(slugInfo){
    return utils.makeWebRequest('https://localhost:9500/generic/getSlugDetails','POST',{slug:slugInfo});
}