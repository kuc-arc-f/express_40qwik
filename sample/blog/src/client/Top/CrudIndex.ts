
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
            const json = await HttpCommon.serverPost(postItem, "/test/get_list");
//console.log(json);      
            let items: any[] = [];
            items = json.data;
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
            const values = Crud.getInputValues();
            const item = {
                "api_key": "",
                "title": values.title,
                "content": "content1",
                "completed": 0,
                "userId": 0
            };            
console.log(item);
//return;
            const json = await HttpCommon.serverPost(item, "/test/create");
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
  /**
   *
   * @param
   *
   * @return
   */   
  search : async function(): Promise<any>
  {
      try{
          const siteId = import.meta.env.VITE_SITE_ID;
          const searchKey = (<HTMLInputElement>document.querySelector("#searchKey")).value;
          let ret: any[] = [];
          const item = {
              siteId: siteId,
              seachKey: searchKey,
          }
//console.log(item);
          const json = await HttpCommon.serverPost(item, "/api/posts/search");
//console.log(json);
          ret = json.data;
          return ret;
      } catch (e) {
          console.error(e);
          throw new Error('Error , search');
      }
  },     
   /**
   *
   * @param key: any
   *
   * @return
   */     
  /*
  initProc: async function() {
    const siteId = import.meta.env.VITE_SITE_ID;
    const btn_search = document.querySelector('#btn_search');
    btn_search?.addEventListener('click', async () => {
        const post_list_wrap = document.querySelector(`.post_list_wrap`) as HTMLInputElement;
        if (!post_list_wrap.classList.contains('d-none')) {
            post_list_wrap?.classList.add('d-none');
        }
        const res = await this.search(Number(siteId));
        this.displayItems(res);
console.log(res);
    });  
  },
  */

}

export default CrudIndex;
