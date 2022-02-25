import React from 'react';
// import ParentComponent from './ParentComponent';

function ChildComponent(props) {
  return (<div>

      <button onClick={()=>props.Pcomponent('child')}>Greet parent</button>
  </div>);
}

export default ChildComponent;
