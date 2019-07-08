import Vue from 'vue'
import dayjs from 'dayjs'
export default () => {
  /**
   * 保留两位小数的百分比
   * 例如：0.363347 -> 36.33%
   * @param {Number} value
   */
  Vue.filter('percent', function(value) {
    if (!value) { return '0%' }
    return Number(value * 100).toFixed(2) + '%'
  })
  /**
   * 千分位转换
   * 例如：245562 -> 245,562
   * @param {Number} value
   */
  Vue.filter('commafy', function(value) {
    if (!value) { return 0 }
    value = value.toLocaleString()
    return value
  })
  // 时间转换（毫秒） 比如440000 转换后 00:07:20
  Vue.filter('timeDuration', function(value) {
    if (!value) { return '00:00:00' }
    return dayjs
      .unix(value / 1000)
      .utc()
      .format('HH:mm:ss')
  })
}
