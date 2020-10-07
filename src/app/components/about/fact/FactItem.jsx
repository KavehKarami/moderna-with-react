import React from 'react';

const FactItem = (props) => {
  return (
    <div className="col-lg-3 col-6 text-center">
      <span data-toggle="counter-up">{props.counter}</span>
      <p>{props.name}</p>
    </div>
  );
}

export default FactItem;