import React from "react"

function List(props) {
  const listdata = props.listdata

  let list = { listdata }.map(animal => animal)

  return <div></div>
}

export default List
