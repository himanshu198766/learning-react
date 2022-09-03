import React from 'react'

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>
          {props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}
        </strong>
        {' : '}
        {props.alert.message}
      </div>
    )
  )
}
