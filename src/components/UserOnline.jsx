import React from "react";
import classes from "./UserOnline.module.css";
import { ReactComponent as Close } from "../util/icons/close.svg";
import { ReactComponent as Back } from "../util/icons/arrow_forward.svg";
import { data } from "../data";

import avatar0 from "../util/pics/avatar.webp";
import avatar1 from "../util/pics/avatar-1.webp";
import avatar2 from "../util/pics/avatar-2.webp";
import avatar3 from "../util/pics/avatar-3.webp";
import avatar4 from "../util/pics/avatar-4.webp";
import avatar5 from "../util/pics/avatar-5.webp";

function UserOnline() {
  const users = data.Users;
  return (
    <div className={classes.userContainer}>
      <div className={classes.closeBtn}>
        <Close className={classes.icon} />
      </div>
      <div className={classes.users}>
        {Object.values(users).map((user) => (
          <div
            key={user.id * Math.floor(Math.random() * 100)}
            className={`${classes.user} ${
              user.status === "online" ? classes.online : ""
            }`}
          >
            <img src={avatar1} alt={`avatar${user.id}`} className={classes.userImg} />
            <span className={user.message<1 ? "": classes.message}>{user.message<1 ? "": user.message}</span>
          </div>
        ))}
      </div>
      <div className={classes.closeBtn}>
        <Back className={classes.icon}/>
      </div>
    </div>
  );
}

export default UserOnline;
