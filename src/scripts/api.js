import { utils } from './utils';
export const api = {
    getUniversities,
    getMenuData
};

function getUniversities(country){
    return utils.makeWebRequest(`http://universities.hipolabs.com/search?country=${country}`,"GET");
}
function getMenuData(){
    return {id:1,menuItem:'Hello'}
}