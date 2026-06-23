const React = require('react')

const Link = ({ children, href = '', passHref, prefetch, replace, scroll, shallow, ...props }) => {
  const resolvedHref = typeof href === 'string' ? href : href?.pathname || ''

  return React.createElement(
    'a',
    {
      ...props,
      href: resolvedHref
    },
    children
  )
}

module.exports = Link
module.exports.default = Link
