     export function getQueryString(name){
     	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r === null) return null; return (r[2]);
     }