import Vue from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export default () => {
  Vue.prototype.$dayjs = dayjs
}
