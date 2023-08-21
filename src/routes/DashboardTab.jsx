import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import { ReactComponent as Edit } from "../util/icons/edit.svg";
import { ReactComponent as Add } from "../util/icons/add_button.svg";

import avatar1 from "../util/pics/avatar-1.webp";
import avatar2 from "../util/pics/avatar-2.webp";
import avatar3 from "../util/pics/avatar-3.webp";
import avatar4 from "../util/pics/avatar-4.webp";
import avatar5 from "../util/pics/avatar-5.webp";
import { Outlet, useNavigate } from "react-router-dom";

function DashboardTab() {
  const [value, setValue] = React.useState("timeline");

  const navigate = useNavigate();

  React.useEffect(()=>{
    navigate(`/dashboard/${value}`);
  },[navigate,value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const listStyle = {
    textTransform: "capitalize",
    fontSize: "1.1rem",
    fontWeight: "600",
    fontFamily: "Inter, sans-serif",
    padding: "0",
  };

  const imgStyle = {
    width: "4rem",
    height: "4rem",
    outline: "1px solid white",
    fontFamily: "Inter, sans-serif",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.8rem 3.6rem",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          Task Boards
          <Edit style={{ width: "2rem", height: "2rem" }} />
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "rgb(59,130,246)",
              bottom: "1rem",
              height: ".1px",
            },
          }}
          sx={{
            "& .MuiTabs-flexContainer": { gap: "3.22rem" },
            "& .MuiTab-root": { minWidth: "unset", width: "auto" },
          }}
        >
          <Tab
            value="timeline"
            label="Timeline"
            style={{
              ...listStyle,
              color:
                value === "timeline" ? "rgb(59,130,246)" : "rgb(122,134,153)",
            }}
            // component={Link}
            // to="/dashboard/timeline"
          />

          <Tab
            value="calendar"
            label="Calendar"
            style={{
              ...listStyle,
              color:
                value === "calendar" ? "rgb(59,130,246)" : "rgb(122,134,153)",
            }}
            // component={Link}
            // to="/dashboard/calender"
          />
          <Tab
            value="task_dashboard"
            label="Dashboard"
            style={{
              ...listStyle,
              color:
                value === "task_dashboard" ? "rgb(59,130,246)" : "rgb(122,134,153)",
            }}
            // component={Link}
            // to="/dashboard/task_dashboard"
          />

          <Tab
            value="progress"
            label="Progress"
            style={{
              ...listStyle,
              color:
                value === "progress" ? "rgb(59,130,246)" : "rgb(122,134,153)",
            }}
            // component={Link}
            // to="/dashboard/progress"
          />
          <Tab
            value="forms"
            label="Forms"
            style={{
              ...listStyle,
              color: value === "forms" ? "rgb(59,130,246)" : "rgb(122,134,153)",
            }}
            // component={Link}
            // to="/dashboard/forms"
          />
          <Tab
            value="more"
            label="More"
            style={{
              ...listStyle,
              color: value === "more" ? "rgb(59,130,246)" : "rgb(122,134,153)",
            }}
            // component={Link}
            // to="/dashboard/more"
          />
        </Tabs>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AvatarGroup max={5} spacing={15}>
            <Avatar alt="Remy Sharp" src={avatar1} style={imgStyle} />
            <Avatar alt="Travis Howard" src={avatar2} style={imgStyle} />
            <Avatar alt="Cindy Baker" src={avatar3} style={imgStyle} />
            <Avatar alt="Agnes Walker" src={avatar4} style={imgStyle} />
            <Avatar alt="Trevor Henderson" src={avatar5} style={imgStyle} />
            <Avatar alt="Trevor Henderson" src={avatar1} style={imgStyle} />
            <Avatar alt="Trevor Henderson" src={avatar2} style={imgStyle} />
            <Avatar alt="Trevor Henderson" src={avatar3} style={imgStyle} />
            <Avatar alt="Trevor Henderson" src={avatar4} style={imgStyle} />
          </AvatarGroup>
          <Add />
        </Box>
      </Box>
      <Outlet/>
    </>
  );
}

export default DashboardTab;