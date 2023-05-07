import React, { useContext } from 'react'
import { UserContext } from '../../App'

export default function HeaderRightContainer() {
    const user = useContext(UserContext)
  return (
    <div>{user.name}</div>
  )
}
