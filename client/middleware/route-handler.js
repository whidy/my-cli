export default async({
  redirect,
  route,
  store,
  $axios
}) => {
  switch (route.name) {
    case 'admin':
      redirect('/admin/overviews')
      break

    default:
      break
  }
}
