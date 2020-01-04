import React from 'react'

const Either = ({ condition, ifTrue, ifFalse }) => (
  <>{condition === true ? ifTrue : ifFalse}</>
)

export default Either
