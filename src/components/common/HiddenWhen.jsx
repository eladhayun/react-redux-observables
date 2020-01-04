import React from 'react'

const HiddenWhen = ({ condition, not, children }) => (
  <>{condition === true || not === false ? null : children}</>
)

export default HiddenWhen
