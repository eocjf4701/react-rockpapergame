import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className="item-img" src="https://mblogthumb-phinf.pstatic.net/20130509_100/sskyes_13680790979837mYJl_PNG/daum_net_20130204_130120.png?type=w2" />
      <h2>{props.title}</h2>

    </div>
  )
}

export default Box