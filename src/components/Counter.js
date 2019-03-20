import React from 'react'
 
export default (props) => {

  const handleOnClick = (e) => {
    props.store.dispatch({ type: e.target.name });
  }

  return (
    <div>
      <button name="INCREASE_COUNT" onClick={handleOnClick}>
        Increase Count
      </button>
      <button name="DECREASE_COUNT" onClick={handleOnClick}>
        Decrease Count
      </button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
