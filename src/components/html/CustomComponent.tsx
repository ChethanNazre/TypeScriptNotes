
import { Greet } from '../Greet'
import React from 'react'

export const CustomComponent = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.name}
        {props.messageCount}
        {props.isLoggedIn ? 'true' : 'false'}
    </div>
  )
}


