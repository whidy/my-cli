export default async({
  redirect,
  route,
  store,
  req,
  $axios,
  query,
  app
}) => {
  // const result = await $axios.get('/users')
  let authUser = null
  if (process.server) {
    // const token = app.$cookies.get('token') // you can also check cookies
    const result = await $axios.post('/auth/whois')
    result.code === 200 && (authUser = result.data)
  }
  if (process.client) {
    authUser = store.state.authUser
  }
  if (!authUser && route.path.match(/^\/admin/)) {
    redirect('/')
  }
}
