/**
 * Created by pc-20170420 on 2017/5/4.
 */
// export const incrementCounter = function ({ dispatch, state }) {
//     dispatch('INCREMENT', 1)
// };
export const actions = {
   /* //写法1
    setApp({commit},count){
        commit('SET_APP',count)
    },
    //写法2
    // setApp(store,count){
    //     store.commit('SET_APP',count)
    // },
    //promise案例
    add(store,param){
        return new Promise(function(resolve, reject) {
                store.commit('ADD',param);
                resolve("ok");
        })
    },
    //导入xlsx
    importXlsx(store,obj){
        return new Promise(function(resolve, reject) {
            store.commit('IMPORT_XLSX',{obj:obj,resolve:resolve});
        })
    },
    //获取cookie
    getCookie(store,name){
        store.commit('GETCOOKIE',name);
    },*/
    test(store,count){
        console.log('111111111111');
        store.commit('TEST',count);
    }
};