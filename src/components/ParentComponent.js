import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

constructor(props) {
  super(props)

  this.state = {
     parentName:'parent'
  };
this.greetParent=this.greetParent.bind(this)
};

greetParent(ChildName){

    alert(`Hello ${this.state.parentName} from ${ChildName}`)
}

  render() {
    return (<div>

        <ChildComponent Pcomponent={this.greetParent} />
    </div>); 
  }
}

export default ParentComponent;
