import React from 'react';
import CoolButton from './CoolButton.js';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar is-transparent">
                  <div className="navbar-brand">
                  <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                  </a>
                  <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                  <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                      Home
                    </a>
                    {/* <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                        Docs
                      </a>
                      <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                          Overview
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                          Modifiers
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                          Columns
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                          Layout
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                          Form
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                          Elements
                        </a>
                        <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                          Components
                        </a>
                      </div>
                    </div> */}
                  </div>

                  <div className="navbar-end">
                    <div className="navbar-item">
                      <div className="field is-grouped">
                        <div className="control">
                        <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
                        </div>
                        <div className="control">
                        <CoolButton isSmall isDanger className="is-rounded my-class">Sign Up</CoolButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
        );
    }
};

export default Navbar;