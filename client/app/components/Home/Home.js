import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="hero">
        <video autoPlay loop muted>
          <source src="/assets/video/opening.webm" type="video/webm"/>
          Switch to Chrome or Firefox browser
        </video>
        <img id="text-overlay" src="/assets/img/barofdreams.png"/>
        <div className="under-text">
          {/*<button className="btn">Buy Tickets</button>*/}
          <i className="fa fa-chevron-down faa-float animated"/>
        </div>
      </div>
    );
  }
}

export default Home;
