import React from 'react'

function TopLineHOC(Origin) {
  return (props) => (
    <div style={{marginTop: '30px'}}>
        <hr style={{background: '#eee'}} />
        <Origin {...props} />
    </div>
  )
}

export default TopLineHOC