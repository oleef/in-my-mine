import React, { useState, useEffect, Fragment } from "react";
import { LOGO, LOGO_TITLE } from "../../configs/logo.config";
import { MENU_LIST } from "../../configs/menu.config";
import { isEmpty, has } from "lodash";
import Link from "next/link";

const Navbar = () => {
  const Logo = () => {
    return (
      <a href="../../index3.html" className="navbar-brand">
        <img {...LOGO} />
        <span className="brand-text ml-2 font-weight-bold">
          {LOGO_TITLE.label}
        </span>
      </a>
    );
  };
  const Nav = () => {
    console.log("Nav", MENU_LIST);
    if (!isEmpty(MENU_LIST) && has(MENU_LIST, "menuList")) {
      return (
        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
          <ul className="navbar-nav">
            {!isEmpty(MENU_LIST.menuList)
              ? MENU_LIST.menuList.map((item, index) => {
                  if (has(item, "subMenu") && !isEmpty(item.subMenu)) {
                    return <NavItemDropDown item={item} key={index} />;
                  } else {
                    return <NavItem item={item} key={index} />;
                  }
                })
              : null}
          </ul>
        </div>
      );
    }
  };
  const NavItem = ({ item }) => {
    return (
      <li className="nav-item" id={item.id}>
        <Link href={item.link}>
          <a className="nav-link">{item.label}</a>
        </Link>
      </li>
    );
  };
  const NavItemDropDown = ({ item }) => {
    return (
      <li className="nav-item dropdown">
        <Link href="#">
          <a
            id={item.id}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            className="nav-link dropdown-toggle"
          >
            {item.label}
          </a>
        </Link>
        <ul aria-labelledby={item.id} className="dropdown-menu border-0 shadow">
          {item.subMenu.map(sub => {
            return <DropDownItem sub={sub} />;
          })}
        </ul>
      </li>
    );
  };
  const DropDownItem = ({ sub }) => {
    return (
      <li>
        <Link href={sub.link}>
          <a className="dropdown-item">{sub.label}</a>
        </Link>
      </li>
    );
  };
  return (
    <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
      <div className="container">
        <Logo />
        <Nav />

        {/* <button
          className="navbar-toggler order-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fas fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="../static/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="../static/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="../static/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-header">15 Notifications</span>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2"></i> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2"></i> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
            >
              <i className="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
