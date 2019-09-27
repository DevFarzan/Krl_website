import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Comman/Button/button';
import './header2.css';

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false
    };
  }
  openNav = () => {
    this.setState({ response: true });
  }
  closeNav = () => {
    this.setState({ response: false });
  }


  render() {
    return (
      <div>
        {this.state.response ?
          <div>
            <div className="d-none d-sm-block">
              <div className="naVBar_aliGN">
                <div className="row">
                  <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                    <img href="#" className="logo" src={require('../../Assets/Images/logo.png')} />
                  </div>
                  <div className="col-12 col-md-7 col-lg-7 col-xl-7"></div>
                  <div className="col-12 col-md-1 col-lg-1 col-xl-1">
                    <img className="menu" src={require('../../Assets/Images/close.png')} onClick={this.closeNav} />
                  </div>
                  <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                    <div className="row" style={{ paddingTop: '16vw' }}>
                      <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                        <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Home'
                          />
                          <div>
                            <hr align="center" width="50%" />
                          </div>
                        </Link>
                      </div>
                      <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                        <Link rel="noopener noreferrer" to={`/services`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Service'
                          />
                          <hr className="texTt_bottom" />
                        </Link>
                      </div>
                      <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                        <Link rel="noopener noreferrer" to={`/project`} onClick={this.closeNav}>
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Project'
                          />
                          <hr className="texTt_bottom" />
                        </Link>
                      </div>
                      <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                        <Link rel="noopener noreferrer" to={`/about`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='About'
                          />
                          <hr className="texTt_bottom" />
                        </Link>
                      </div>
                      <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                        <Link rel="noopener noreferrer" to={`/contact`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Contact'
                          />
                          <hr className="texTt_bottom" />
                        </Link>
                      </div>
                      <div className="col-12 col-md-2 col-lg-2 col-xl-2 btNCenter">
                        <Link rel="noopener noreferrer" to={`/blog`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Blog'
                          />
                          <hr className="texTt_bottom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                </div>
              </div>
            </div>
            <div className="d-block d-sm-none">
              <div className="naVBar_aliGN">
                <div className="row">
                  <div className="col-6">
                    <img href="#" className="logO_MoB" src={require('../../Assets/Images/logo.png')} />
                  </div>
                  <div className="col-6" style={{ textAlign: 'right' }}>
                    <img className="menU_MoB" onClick={this.closeNav} src={require('../../Assets/Images/close.png')} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row" style={{ paddingTop: '16vw' }}>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Home'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/services`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Service'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/project`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Project'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/about`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='About'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/contact`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Contact'
                          />
                        </Link>
                      </div>
                      <div className="col-12 btNCenter_MoBB">
                        <Link rel="noopener noreferrer" to={`/blog`} onClick={this.closeNav} >
                          <Button
                            classMd="nav_bTnTeXt"
                            label='Blog'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            <div className="d-none d-sm-block">
              <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-6 loGo_devv">
                  <img href="#" className="logo" src={require('../../Assets/Images/logo.png')} />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-1">
                  {/* <ul className="menu_List">
                <li className="nav_List">
                  <Link rel="noopener noreferrer" to={`/`} >
                    Home
              </Link>
                </li>
                <li className="nav_List">
                  <Link rel="noopener noreferrer" to={`/about`}>
                    About
              </Link>
                </li>
                <li className="nav_List">
                  <Link rel="noopener noreferrer" to={`/contact`}>
                    Contact Us
              </Link>
                </li>
                <li className="nav_List">
                  <Link rel="noopener noreferrer" to={`/services`}>
                    Services
              </Link>
                </li>
                <li className="nav_List">
                  <Link rel="noopener noreferrer" to={`/project`}>
                    Projects
              </Link>
                </li>
                <li className="nav_List">
                  <Link rel="noopener noreferrer" to={`/blog`}>
                    Blogs
              </Link>
                </li>
              </ul> */}
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-3 mt-5">
                  <img className="menu" src={require('../../Assets/Images/menu.png')} onClick={this.openNav} />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
              </div>
            </div>
            <div className="d-block d-sm-none">
              <div className="row">
                <div className="col-6">
                  <img href="#" className="logoo_Mob" src={require('../../Assets/Images/logo.png')} />
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                  <img className="heaD_Mob" onClick={this.openNav} src={require('../../Assets/Images/menu.png')} />
                </div>
              </div>

            </div>
          </div>
        }

      </div>

    );
  }
}

export default Header2;



{/* <div id="myNavbar" className="overlay">
            <div className="row">
              <div className="col-8"></div>
              <div className="col-4">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="menu_ListMoB">
                  <li className="nav_ListMOB">
                    <a href="/" onClick={this.closeNav} >
                      Home
                  </a>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/about`} onClick={this.closeNav}>
                      About
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/contact`} onClick={this.closeNav}>
                      Contact Us
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/services`} onClick={this.closeNav}>
                      Services
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/project`} onClick={this.closeNav}>
                      Projects
                  </Link>
                  </li>
                  <li className="nav_ListMOB">
                    <Link rel="noopener noreferrer" to={`/blog`} onClick={this.closeNav}>
                      Blogs
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}