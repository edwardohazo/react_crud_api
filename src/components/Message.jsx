/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Message = ({msg, bgColor}) => {
  console.log(msg);
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor
  }

  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}
