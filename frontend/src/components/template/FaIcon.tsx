import React from 'react'

const FaIcon = (props: any) => {
  return (
    <>
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </>
  )
}

export default FaIcon