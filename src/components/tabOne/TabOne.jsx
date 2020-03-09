import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Actions from '../../actions'

const TabOne = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.requestTabOneData())
  }, [dispatch])

  return <div>Tab One</div>
}

export default TabOne
