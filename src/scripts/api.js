import { utils } from './utils';
export const api = {
    getUniversities,
    getMenuData,
    getProductInfo,
    getSchemaRecords,
    getSchemaRecordCount,
    getApplicableFilters,
    getManufacturerName
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
function getSchemaRecords(payload){
    return utils.makeWebRequest('https://localhost:9500/generic/getSchemaRecords','POST',payload)
}
function getSchemaRecordCount(payload){
    return utils.makeWebRequest('https://localhost:9500/generic/getSchemaRecords','POST',payload)
}
function getApplicableFilters(payload){
    return utils.makeWebRequest('https://localhost:9500/generic/getApplicableFilters','POST',payload)
}
function getManufacturerName(payload){
    return utils.makeWebRequest('https://localhost:9500/generic/getSchemaRecordForView?data='+JSON.stringify(payload))
}