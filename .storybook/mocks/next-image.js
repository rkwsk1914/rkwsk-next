const React = require('react')

const Image = ({ alt = '', fill, priority, quality, sizes, src, ...props }) => {
  const resolvedSrc = typeof src === 'string' ? src : src?.src

  return React.createElement('img', {
    ...props,
    alt,
    src: resolvedSrc
  })
}

module.exports = Image
module.exports.default = Image
