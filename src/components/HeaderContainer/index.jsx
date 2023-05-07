import React from 'react'
import classes from './index.module.css'

export default function HeaderContainer(props) {
  return (
    <div className={classes.headerContainer}>
        <div>
            {props.left}
        </div>
        <div>
            {props.center}
        </div>
        <div>
            {props.right}
        </div>
    </div>
  )
}
