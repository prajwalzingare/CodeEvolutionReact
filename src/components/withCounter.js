import React from "react";
//What is updated component --component which is a function who takes original component / component as parameter and return the new component. new component has a functionality to maintain the state and method to increment that count property ani ha mag state ani method apan pass kelya orignal component le ani original component enhance zala ani return kela new component maja agaya👌👌
//it would be arrow function.
//original component refers to clickcounter and hovercounter.
//original component is also refer as wrapped component
const withCounter = (OriginalComponent, incre) => {
  //NewComponent also refer as name of const component and it Should write in pascle case.
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      //count state
      this.state = {
        count: 0,
      };
    }
    increse = () => {
      //count increasing method
      this.setState((e) => {
        return { count: e.count + incre }; //we pass parameter to get argument and from child component for calculation randomly.
      });
    };
    render() {
      console.log(this.props.name);

      return (
        //original component enance with this props and return.
        <OriginalComponent
          count={this.state.count}
          increse={this.increse}
          {...this.props} //spread operator to pass the props direct from app component to newcomponent
        />
      );
    }
  }
  //we define newcomponent in hoc so we have to return that component thats why we return that.
  //withcounter ekach gosht define karte te mahanje newcomponent as mention below.
  return WithCounter;
};

export default withCounter;
