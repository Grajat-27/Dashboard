import React from 'react'
import classes from "./SideNav.module.css";
import {ReactComponent as NavMenu} from "../util/icons/menu_open.svg";
import {ReactComponent as Unfold} from "../util/icons/unfold_more.svg";
import avatarImage from '../util/pics/avatar.webp';
import SideNavLists from './SideNavLists';

import { data } from '../data';

function SideNav() {
  return (
    <div className={classes.sideNav}>
        <div className={classes.heading}>
          <h1>Dashboard</h1>
          <NavMenu className={classes.navMenu}/>
        </div>
        <div className={classes.user}>
          <img src={avatarImage} alt="User" className={classes.userImg}/>
          <div className={classes.info}>
            <h1>Nancy Martino</h1>
            <p>Designer</p>
          </div>
          <Unfold className={classes.unfold}/>
        </div>
        <div className={classes.dashboards}>
          <SideNavLists data={data}/>
        </div>
    </div>
  )
}

export default SideNav;