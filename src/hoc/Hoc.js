import React from 'react'; 
const HOC = (Component, initialState) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState; 
    }
    render() {
      return <Component {...this.props}  state={this.state} setState={this.setState.bind(this)}/>;
    }
  };

export default HOC; 