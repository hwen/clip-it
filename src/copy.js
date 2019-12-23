export default ($el, value, options) => {
  const copyHandler = e => {
    e.clipboardData.setData(options.contentType || 'text/plain', value)
    $el.removeEventListener('copy', copyHandler)
    setTimeout(() => {
      document.body.removeChild($el)
    })
  }
  /* istanbul ignore next */
  $el.addEventListener('copy', copyHandler)  
  const result = document.execCommand('copy')
  return result
}
