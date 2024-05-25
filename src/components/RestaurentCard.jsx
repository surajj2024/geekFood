import React, { memo } from 'react'

 function RestaurentCard(item) {
  return (
    <div key={item.id}>
        <h1>{item.name}</h1>
    </div>
  )
}

export default memo(RestaurentCard)
