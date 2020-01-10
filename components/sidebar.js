import React, { Component } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";

import Card from "../components/card/card";

import { SIDEBAR_ITEM } from "../configs/sidebar.config";

const Sidebar = () => {
  return (
    <Card size={12}>
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        {!isEmpty(SIDEBAR_ITEM)
          ? SIDEBAR_ITEM.map(item => {
              return <SidebarItem item={item} />;
            })
          : null}
      </ul>
    </Card>
  );
};
export default Sidebar;

const SidebarItem = ({ item }) => {
  return (
    <li className="nav-item">
      <Link href={item.link}>
        <a className="nav-link">
          {/* <i className="nav-icon fas fa-th"></i> */}
          <p>
            {item.label}
            <span className="right badge badge-danger">New</span>
          </p>
        </a>
      </Link>
    </li>
  );
};
