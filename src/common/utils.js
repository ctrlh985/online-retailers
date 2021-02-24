export function debounce(func,delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}


// export function formatDate(date, fmt) {
//   if (/(y+)/.test(fmt)) {
//     //获取当前时间替换原来的时间
//     fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length));
//   }
//   let o = {
//     'M+': date.getMonth() + 1,
//     'd+': date.getDate(),
//     'h+': date.getHours(),
//     'm+': date.getMinutes(),
//     's+': date.getSeconds()
//   };
//   for (let k in o) {
//     if (new RegExp('(${k})').test(fmt)) {
//       let str = o[k] + '';
//       fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str));
//     }
//   }
//   return fmt;
// };
//算法
//假如传入的字符串是 1，该函数会处理成 01
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatDate(date) {
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
  var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
  var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
  var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
  return Y+M+D+h+m+s;
  }
