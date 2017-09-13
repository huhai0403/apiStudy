/**
 * Created by pc-20170420 on 2017/5/4.
 */
export const mutations= {
    TEST(state,count){
        console.log(count);
        resolve (count);
    },
    //读取cookie
    /*GETCOOKIE(state,params){
        let name=params;
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
        if (arr = document.cookie.match(reg)) {
            state.token=unescape(arr[2]) ;
        }else {
            state.token=null ;
        }
    },
    IMPORT_XLSX(state,params){  //导入
        function fixData(data) {//文件流转BinaryString
            var o = "",
                l = 0,
                w = 10240;
            for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
            return o;
        }

        var obj = params.obj;
        if(!obj.files) {
            return;
        }
        var f = obj.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = e.target.result;
            if(state.rABS) {
                state.wb = state.XLSX.read(btoa(fixData(data)), {//手动转化
                    type: 'base64'
                });
            } else {
                state.wb = state.XLSX.read(data, {
                    type: 'binary'
                });
            }
            params.resolve(state.XLSX.utils.sheet_to_json(state.wb.Sheets[state.wb.SheetNames[0]]));
        };
        if(state.rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            if(f){
                reader.readAsBinaryString(f);
            }
        }
    },
    FIXDATA(data) { //文件流转BinaryString
        var o = "",
            l = 0,
            w = 10240;
        for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    },
    /!**
     * 以对象的形式传入； 会自动在sessionStorage中生成对应的属性名和值；附带sessionStorage为空时的判断
     *!/
    SETSTORAGE(state,message){ //{phbId:[]}  sessio保存，增加，修改 session
        let key ="jubao56";
        let jubaoStorage =  JSON.parse(window.sessionStorage.getItem(key));
        jubaoStorage=jubaoStorage==null?{}:jubaoStorage;
        for(let i in message){
            jubaoStorage[i]=message[i]
        }
        window.sessionStorage.setItem(key,JSON.stringify(jubaoStorage));
    }*/
};