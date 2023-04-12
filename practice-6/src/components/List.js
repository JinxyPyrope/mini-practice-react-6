import React from "react"

function List(props) {
  const listdata = props.listdata

  const list = listdata.map(animal => animal)

  return <div>{list}</div>
}

export default List
