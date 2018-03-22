import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount() {

    window.xMousePos = 0
    window.yMousePos = 0
    window.lastScrolledLeft = 0
    window.lastScrolledTop = 0

    $(document).mousemove(function(event) {
      captureMousePosition(event)
      changeOverlayOpacity()
    }) 

    $(window).scroll(function(event) {
      if(lastScrolledLeft != $(document).scrollLeft()){
          window.xMousePos -= lastScrolledLeft
          lastScrolledLeft = $(document).scrollLeft()
          window.xMousePos += lastScrolledLeft
      }
      if(lastScrolledTop != $(document).scrollTop()){
          window.yMousePos -= lastScrolledTop
          lastScrolledTop = $(document).scrollTop()
          window.yMousePos += lastScrolledTop
      }
      window.status = "x = " + xMousePos + " y = " + yMousePos
      changeOverlayOpacity()
    });

    function captureMousePosition(event){
      window.xMousePos = event.pageX;
      window.yMousePos = event.pageY;
      window.status = "x = " + xMousePos + " y = " + yMousePos;
    }

    function changeOverlayOpacity(){
      let change = (window.yMousePos - (window.xMousePos/10))/1500
      $('#text-overlay').css('opacity', 0.6 - change)
    }
  }

  render() {
    return (
      <div id="home">
        <div id="hero">
          <video autoPlay loop muted>
            <source src="/assets/video/allsmall.webm" type="video/webm"/>
            Switch to Chrome or Firefox browser
          </video>
          <img id="text-overlay" src="/assets/img/barofdreams.png"/>
          <div className="under-text">
            <a href='https://www.artful.ly/store/events/14826'><button className="btn buy-tx-btn">Get Tickets</button></a>

            <i className="fa fa-chevron-down faa-flash animated"/>
          </div>
          <div className="corner-ribbon top-right sticky blue">Limited Free Tickets!</div>
        </div>

        <div id="copy">
          {/*<video autoPlay loop muted>
            <source src="/assets/video/allsmall.webm" type="video/webm"/>
            Switch to Chrome or Firefox browser
          </video>*/}
          <div className='text-container'>
            <div className='data'>
              <div className='section'>
                <i className="fa icon fa-question"/>
                A comedic immersive puzzle room for 4 people
              </div> 
              <div className='section'>
                <i className="fa icon fa-map-marker"/>
                The show takes place inside an apartment in Northampton, MA
              </div>
              <div className='section'>
                <i className="fa icon fa-clock-o"/>
                Thu-Sat at 5pm and 7pm <a href='mailto:pedigojon@gmail.com'>Other times available</a> Around 90 minutes
              </div> 
            </div>
            <p>
              Rumours are that a bar has opened in Northampton that serves dream-inducing concoctions. People claim they met Santa Claus there, healed a plumbers leg, and some say they got mixed up with He-Who-Must-Not-Be-Named. At a bar? Yeah right. Find out the truth for yourself.
            </p>
            <p>
               Ticket price includes 3 drinks and a souvenir. Tickets available March 29-April 14
            </p>
            <p>
               Learn about more shows from the creator of Bar of Dreams on <a href='https://www.instagram.com/jonathan_pedigo/'>Instagram</a> or <a href='https://twitter.com/jonpedigo'>Twitter</a>
            </p>
            <a href='https://www.artful.ly/store/events/14826'><button className="btn buy-tx-btn">Get Tickets</button></a>

            <div className="faq">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;