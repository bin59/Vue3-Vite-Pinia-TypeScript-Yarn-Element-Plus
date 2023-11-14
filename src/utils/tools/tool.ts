export {}
// //此处存放可能大量使用的换算逻辑
// exports.install = function (Vue, options) {
//   // 小数位处理
//   Vue.prototype.$toDecimal = function toDecimal(x, d) {
//     let f = parseFloat(x)
//     if (isNaN(f)) return 0
//     if (d == undefined || d == Number || d == null) d = 0
//     if (d <= 0) return Math.round(f)
//     // debugger
//     f = parseFloat(x).toFixed(d)
//     let s = f.toString(),
//       rs = s.indexOf('.')
//     if (rs < 0) {
//       rs = s.length
//       s += '.'
//     }
//     while (s.length <= rs + d) {
//       s += '0'
//     }
//     return s
//   }

//   //
//   Vue.prototype.$downLoadFile = function downLoadFile(data, filename) {
//     if (window.navigator.msSaveBlob) {
//       let blobObject = new Blob([data])
//       window.navigator.msSaveBlob(blobObject, filename)
//     } else {
//       let url = window.URL.createObjectURL(new Blob([data]))
//       let link = document.createElement('a')
//       link.style.display = 'none'
//       link.href = url
//       link.setAttribute('download', filename)
//       document.body.appendChild(link)
//       link.click()
//     }
//   }
//   //驼峰转下划线
//   Vue.prototype.$humpToLine = function humpToLine(val) {
//     return val.replace(/([A-Z])/g, '_$1').toLowerCase()
//   }
//   // 下划线转换驼峰
//   Vue.prototype.$lineToHump = function lineToHump(val) {
//     return val.replace(/\_(\w)/g, function (all, letter) {
//       return letter.toUpperCase()
//     })
//   }
//   // 连划线转换驼峰
//   Vue.prototype.$lineZToHump = function lineZToHump(val) {
//     if (val.indexOf('-') != -1) {
//       return val.replace(/\-(\w)/g, function (all, letter) {
//         return letter.toUpperCase()
//       })
//     } else {
//       return val
//     }
//   }

//   //根据数组中对象中的某个唯一值来进行去重
//   Vue.prototype.$arrObjUnique = function arrObjUnique(arr, key) {
//     const res = new Map()
//     return arr.filter(a => !res.has(a[key]) && res.set(a[key], 1))
//   }

//   // 转大写为下划线加小写
//   Vue.prototype.$Upperto_Lower = function Upperto_Lower(val) {
//     for (let i = 0; i < val.length; i++) {
//       let c = val.charAt(i)
//       // A-Z 对应的 Unicode 编码是 65 - 90
//       // a-z 对应的 Unicode 编码是 97 - 122
//       if (!(c < 'A' || c > 'Z')) {
//         return val.replace(c, `_${c.toLowerCase()}`)
//       }
//     }
//   }

//   //阿拉伯数字数字转大写中文
//   Vue.prototype.$moneyToCapital = function moneyToCapital(n) {
//     if (n == 0) {
//       return '零'
//     }
//     if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return ''
//     var unit = '千百拾亿千百拾万千百拾元角分',
//       str = ''
//     n += '00'
//     var p = n.indexOf('.')
//     if (p >= 0) n = n.substring(0, p) + n.substr(p + 1, 2)
//     unit = unit.substr(unit.length - n.length)
//     for (let i = 0; i < n.length; i++)
//       str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i)
//     return str
//       .replace(/零(千|百|拾|角)/g, '零')
//       .replace(/(零)+/g, '零')
//       .replace(/零(万|亿|元)/g, '$1')
//       .replace(/(亿)万|壹(拾)/g, '$1$2')
//       .replace(/^元零?|零分/g, '')
//       .replace(/元$/g, '元整')
//   }
// }
