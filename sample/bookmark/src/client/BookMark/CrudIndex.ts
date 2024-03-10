import HttpCommon from '../lib/HttpCommon';
import LibConfig  from '../lib/LibConfig';
import Crud from './Crud';
//
const CrudIndex = {
    /**
     * getList
     * @param
     *
     * @return
     */
    getList :async function (): Promise<any>
    {
        try{
            const postItem = {
                userId: 0,
            }
console.log(postItem); 
            const json = await HttpCommon.serverPost(postItem, "/api/bookmark/get_list");
console.log(json);      
            let items: any[] = [];
//            items = json.data;
            items = json;
//console.log(items);
            return items;
        } catch (e) {
            console.error(e);
            throw new Error("Error, getList");
        } 
    },  
    /**
     *
     * @param
     *
     * @return
     */
    addItem : async function() : Promise<any>
    {
        try{
            let ret = false;
//            const values = Crud.getInputValues();
            let titleValue = "";
            const title = document.querySelector("#title") as HTMLInputElement;
            if(title) {
                titleValue = title.value;
            }
            let urlValue = "";
            const url = document.querySelector("#url") as HTMLInputElement;
            if(url) {
                urlValue = url.value;
            }
            const item = {
                title: titleValue,
                url: urlValue,
//                url: "",
                bmCategoryId: 0,
                userId: 0,
            }          
console.log(item);
//return;
            const json = await HttpCommon.serverPost(item, "/api/bookmark/create"); 
console.log(json);
            if (json.ret ===  LibConfig.OK_CODE) {
                ret = true;
            }
            //clear
            Crud.clearInputValues(); 
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },
   /**
   *
   * @param key: any
   *
   * @return
   */     
    displayAlert: function (idName: string) {
        //console.log("displayAlert=");
        const elm = document.querySelector(`#${idName}`);
        if(elm) {elm.classList.remove('d-none');}
        setTimeout(function(){
            if(elm) {elm.classList.add('d-none');}
        }, 4000)
    },
}

export default CrudIndex;
