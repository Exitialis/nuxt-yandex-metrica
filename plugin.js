try {
  window['yaCounter<%= options.id %>'] = new Ya.Metrika(<%= JSON.stringify(options) %>)
} catch(e) {
  console.error(e)
}

export default ({app: {router}}) => {
  if (!window['yaCounter<%= options.id %>']) {
    console.warn('Yandex metrika is not available')
    return
  }

  router.afterEach((to, from) => {
    console.log('route changed', to, from)
    window['yaCounter<%= options.id %>'].hit(to.fullPath, {
      referer: from.fullPath
    })
  })
}
