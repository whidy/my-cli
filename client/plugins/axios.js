import { Message } from 'element-ui'
export default function({ $axios, query, redirect, app }) {
  $axios.onRequest((config) => {
    // 报表接口自动带上comId
    if (/^\/api\/report\/.+/.test(config.url)) {
      const currentComId = query.comId || app.$cookies.get('currentComId')
      if (config.data) {
        config.data = Object.assign(config.data, { comId: currentComId })
      } else {
        config.data = { comId: currentComId }
      }
    }
  })

  $axios.onResponse((response) => {
    if (response.status === 200) {
      return response.data
    } else {
      Message.error('网络异常，请稍候再试！')
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
