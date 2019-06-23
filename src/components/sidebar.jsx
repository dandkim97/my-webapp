import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Dan Kim</a></h1>
              <span className="position"><i className="icon-mail5" aria-hidden="true" /><a href="https://github.com/dandkim97"> Aspiring Developer</a> in New York</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="skills">Skills</a></li>
                  <li><a href="#" data-nav-section="experience">History</a></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p><small>{/*&copy;  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}{/*Copyright &copy; All rights reserved |*/}
                  Inspiration from <a href="https://colorlib.com" target="_blank">Colorlib</a> <i className="icon-heart" aria-hidden="true" />
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  {/* <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span> */} </small></p>
              <ul>
                <li><a href="#"><i className="icon-facebook2" /></a></li>
                <li><a href="#"><i className="icon-twitter2" /></a></li>
                <li><a href="#"><i className="icon-instagram" /></a></li>
                <li><a href="#"><i className="icon-linkedin2" /></a></li>
              </ul>
            </div>
          </aside>
      </div>
    )
  }
}
