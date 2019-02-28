import React from 'react'

export default (props) => {

  const handleOnCLick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT' })
  }
  return (
    <div>
      <button>Click Me</button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
