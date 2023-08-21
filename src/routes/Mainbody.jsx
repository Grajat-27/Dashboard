import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./Mainbody.module.css";
import avatarImage from "../util/pics/avatar.webp";

import { ReactComponent as SearchIcon } from "../util/icons/search.svg";
import { ReactComponent as InputIcon } from "../util/icons/input.svg";
import { ReactComponent as Mic } from "../util/icons/keyboard_voice.svg";
import { ReactComponent as Folder } from "../util/icons/folder_open.svg";
import { ReactComponent as Bell } from "../util/icons/notifications_none.svg";
function Mainbody() {
  const [selectedNav, setSelectedNav] = useState("dashboard");
  const navigate = useNavigate();

  useEffect(()=>{
    navigate(`/${selectedNav}`);
  },[navigate,selectedNav]);

  const selectedNavHandler = (nav) => {
    return nav === selectedNav
      ? `${classes.link} ${classes.selected}`
      : classes.link;
  };

  const clickHandler = (value) => {
    setSelectedNav(value);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.mainNav}>
        <div className={classes.search}>
          <SearchIcon className={`${classes.icon} ${classes.searchIcon}`} />
          <input
            type="text"
            placeholder={"Search Tasks"}
            className={classes.searchBar}
          />
          <InputIcon className={`${classes.icon} ${classes.inputIcon}`} />
          <Mic className={`${classes.icon} ${classes.mic}`} />
        </div>
        <div className={classes.nav}>
          <p
            className={selectedNavHandler("dashboard")}
            onClick={() => { clickHandler("dashboard");}}
          >
            Dashboard
          </p>
          <p
            className={selectedNavHandler("my_tasks")}
            onClick={() => {
              clickHandler("my_tasks");
            }}
          >
            My Tasks
          </p>
          <p
            className={selectedNavHandler("reporting")}
            onClick={()=>clickHandler("reporting")}
          >
            Reporting
          </p>
          <p
            className={selectedNavHandler("portfolios")}
            onClick={()=>clickHandler("portfolios")}
          >
            Portfolios
          </p>
          <p
            className={selectedNavHandler("goals")}
            onClick={()=>clickHandler("goals")}
          >
            Goals
          </p>
        </div>
        <div className={classes.userDetail}>
          <Folder className={classes.icon} />
          <Bell className={classes.icon} />
          <div className={classes.profile}>
            <img src={avatarImage} alt="User" className={classes.userImg} />
            <span>9</span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Mainbody;
