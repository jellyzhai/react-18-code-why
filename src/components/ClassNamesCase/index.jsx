import React from 'react'
import TopLineHOC from '../TopLineHOC'
import classNames from 'classnames'

function ClassNamesCase() {
  return (
    <>
        <div className={classNames('aaa', {bbb:false})}>字符创 + 对象 添加 class</div>
        <div className={classNames(['aaa', {bbb: true}])}>(字符创 + 对象) 在数组中，添加 class</div>
    </>
  )
}

export default TopLineHOC(ClassNamesCase)