import React from 'react'

function Loading() {
  return (
      <div style={{width: '100%',
      height: '100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      }}>
          <div
          style={{width: '70px',
      height: '70px'
    
      }}
           className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
      </div>
    
  )
}

export default Loading