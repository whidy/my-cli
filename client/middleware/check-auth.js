export default async({
  redirect,
  route,
  store,
  req,
  $axios,
  query
}) => {
  const result = await $axios.get('/users')
}
