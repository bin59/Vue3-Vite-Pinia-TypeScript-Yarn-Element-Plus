// 格式化时间
export default function FormatDate2(time: string) {
  if (time) {
    const date = new Date(time)
    // 注意js里面的getMonth是从0开始的
    let FormattedDateTime = null
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let h: string | number = date.getHours()
    let m: string | number = date.getMinutes()
    let s: string | number = date.getSeconds()
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    FormattedDateTime =
      year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s
    return FormattedDateTime
  }
  return null
}
