import React from "react";
import classes from "./CardUi.module.css";

import { ReactComponent as Tasks } from "../util/icons/task-1.svg";
import { ReactComponent as Files } from "../util/icons/file_present.svg";
import { ReactComponent as Message } from "../util/icons/message.svg";
import { ReactComponent as Add } from "../util/icons/add_button.svg";

const colors = {
  tech: "rgb(37,99,235)",
  Backlog: {
    rgb:"rgb(202,138,4)",
    bg: "rgb(202,138,4, .1)"
  },
  "To Do":{
    rgb:"rgb(219,39,119)",
    bg: "rgb(219,39,119, .1)"
  },
  "In Progress":
  {
    rgb:"rgb(147,51,234)",
    bg: "rgb(147,51,234, .1)"
  },
  Done:
  {
    rgb:"rgb(22,163,74)",
    bg: "rgb(22,163,74, .1)"
  },
};

function CardUi(props) {
  const cardData = props.cardData;

  return (
    <div className={classes.cardContainer}>
      <div className={classes.heading}>
        <p className={classes.title}>{cardData.title}</p>
        <span className={classes.number}>
          <Tasks className={classes.icons} />
          <p>4</p>
        </span>
      </div>
      <div className={classes.tags}>
        <p className={classes.tag}>{cardData.id}</p>
        {cardData.tag ? (<p className={classes.tag} style={{border:"none",color:"rgb(37,99,235)", backgroundColor:"rgb(37,99,235, .1)"}}>{cardData.tag}</p>): ""}
        <p className={classes.tag} style={{border:"none",color:`${colors[cardData.category].rgb}`, backgroundColor:`${colors[cardData.category].bg}`}}>{cardData.category}</p>
      </div>
      <div className={classes.misc}>
        <Add style={{marginRight:"auto", width:"3.2rem", height:"3.2rem"}}/>
        {cardData.files ? (<span className={classes.number}>
          <Files className={classes.icons} />
          <p>{cardData.files}</p>
        </span>) : "" }

        {cardData.comment ? (<span className={classes.number}>
          <Message className={classes.icons} />
          <p>{cardData.comment}</p>
        </span>) : "" }
      </div>
    </div>
  );
}

export default CardUi;
