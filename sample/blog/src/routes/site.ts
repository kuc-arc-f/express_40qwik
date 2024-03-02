import HttpCommon from '../lib/HttpCommon';
//
const retObj = {ret: "NG", data: [], message: "Error, Internal Server Error"};
//
const Router = {
    /**
     *
     * @param
     *
     * @return
     */    
    get: async function()
    {
        //console.log("#get");
        try{    
            try{    
                const item = {
                    id: process.env.VITE_SITE_ID,
                };
                const json = await HttpCommon.post(item, "/api/sites/get");
//console.log(json);
                return json.data;
            } catch (e) {
                console.error(e);
                return {};
            } 
        } catch (e) {
            console.error(e);
            return {};
        } 
    },

}
export default Router;