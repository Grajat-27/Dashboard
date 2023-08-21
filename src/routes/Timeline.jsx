import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { ReactComponent as DashBoard } from "../util/icons/dashboard.svg";
import { ReactComponent as Hamburger } from "../util/icons/hamburger.svg";
import { ReactComponent as Lock } from "../util/icons/lock.svg";
import { ReactComponent as ArrowDown } from "../util/icons/keyboard_arrow_down.svg";
import { ReactComponent as Twitter } from "../util/icons/twitter.svg";
import { ReactComponent as Search } from "../util/icons/search.svg";
import { ReactComponent as SelectFile } from "../util/icons/select_file.svg";
import { ReactComponent as CenterAlign } from "../util/icons/center_align.svg";
import { ReactComponent as LeftAlign } from "../util/icons/left_align.svg";
import { ReactComponent as ShapeCircle } from "../util/icons/shape_circles.svg";
import { ReactComponent as Customize } from "../util/icons/customize_arrangement.svg";
import { ReactComponent as More } from "../util/icons/more_horiz.svg";

import { Box } from "@mui/material";
import CardUi from "../components/CardUi";
import { useLoaderData } from "react-router-dom";
import { data } from "../data";

const flexStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
};

const fontStyle = {
  fontFamily: "Inter, sans-serif",
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "rgb(96,108,128)",
  padding: ".8rem",
};

const iconstyle = {
  minWidth: "2rem",
  minHeight: "2rem",
};

function Timeline() {
  const cardData = useLoaderData();

  return (
    <>
      <Box sx={{ ...flexStyle, padding: "0 3.6rem 2.8rem 3.6rem" }}>
        <Box sx={{ ...flexStyle, gap: "2rem" }}>
          <Box sx={flexStyle}>
            <Box
              sx={{
                ...flexStyle,
                backgroundColor: "white",
                border: "1px solid rgb(235,238,242)",
                borderRadius: "5px",
                padding: "8px",
              }}
            >
              <DashBoard style={iconstyle} />
              <Typography sx={fontStyle}>Board View</Typography>
            </Box>
            <Box
              sx={{
                ...flexStyle,
                backgroundColor: "white",
                border: "1px solid rgb(235,238,242)",
                borderRadius: "5px",
                padding: "8px",
              }}
            >
              <Hamburger style={iconstyle} />
              <Typography sx={fontStyle}>Board View</Typography>
            </Box>
          </Box>
          <Box sx={flexStyle}>
            <Lock style={iconstyle} />
            <Typography sx={{ ...fontStyle, color: "rgb(152,162,178)" }}>
              Limited Access
            </Typography>
            <ArrowDown style={iconstyle} />
          </Box>
          <Box sx={flexStyle}>
            <Typography sx={{ ...fontStyle, color: "rgb(152,162,178)" }}>
              Owners
            </Typography>
            <Twitter style={{ width: "3rem", height: "3rem" }} />
            <Typography sx={fontStyle}>Twitter Team</Typography>
          </Box>
        </Box>
        <Box sx={flexStyle}>
          <Search style={iconstyle} />
          <TextField
            id="input"
            placeholder="Search"
            variant="outlined"
            sx={{
              backgroundColor: "rgb(255, 255, 255)",
              "& .MuiInputBase-input::placeholder": {
                color: "rgba(37, 38, 40, 0.762)",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.2rem",
                fontWeight: "600",
              },
              "& input": {
                padding: "1.2rem",
              },
            }}
          />
        </Box>
        <Box sx={{ ...flexStyle, gap: "1.5rem" }}>
          <SelectFile style={iconstyle} />
          <CenterAlign style={iconstyle} />
          <LeftAlign style={iconstyle} />
          <ShapeCircle style={iconstyle} />
          <Customize style={iconstyle} />
        </Box>
      </Box>

      <Box sx={{ ...flexStyle, padding: "0 3.6rem 2.8rem 3.6rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: "2.4rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                paddingBottom: "2.8rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.4rem",
                fontWeight: "500",
                width: "100%",
              }}
            >
              <p>Backlog tasks</p>
              <p
                style={{
                  color: "rgb(202,138,4)",
                  fontSize: "1rem",
                  padding: ".4rem .8rem",
                  backgroundColor: "rgb(202,138,4,.1)",
                  borderRadius: "9999px",
                }}
              >
                {cardData.Backlog.total}
              </p>
              <More
                style={{ width: "2rem", height: "2rem", marginLeft: "auto" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {cardData.Backlog.content.map((item) => {
                return <CardUi key={item.id} cardData={item} />;
              })}
            </div>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                paddingBottom: "2.8rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.4rem",
                fontWeight: "500",
                width: "100%",
              }}
            >
              <p>To Do tasks</p>
              <p
                style={{
                  color: "rgb(202,138,4)",
                  fontSize: "1rem",
                  padding: ".4rem .8rem",
                  backgroundColor: "rgb(202,138,4,.1)",
                  borderRadius: "9999px",
                }}
              >
                {cardData.Todo.total}
              </p>
              <More
                style={{ width: "2rem", height: "2rem", marginLeft: "auto" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {cardData.Todo.content.map((item) => {
                return <CardUi key={item.id} cardData={item} />;
              })}
            </div>
          </Box>
          
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: "2.4rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                paddingBottom: "2.8rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.4rem",
                fontWeight: "500",
                width: "100%",
              }}
            >
              <p>In Progress Tasks</p>
              <p
                style={{
                  color: "rgb(202,138,4)",
                  fontSize: "1rem",
                  padding: ".4rem .8rem",
                  backgroundColor: "rgb(202,138,4,.1)",
                  borderRadius: "9999px",
                }}
              >
                {cardData.InProgress.total}
              </p>
              <More
                style={{ width: "2rem", height: "2rem", marginLeft: "auto" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {cardData.InProgress.content.map((item) => {
                return <CardUi key={item.id} cardData={item} />;
              })}
            </div>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                paddingBottom: "2.8rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.4rem",
                fontWeight: "500",
                width: "100%",
              }}
            >
              <p>Done</p>
              <p
                style={{
                  color: "rgb(202,138,4)",
                  fontSize: "1rem",
                  padding: ".4rem .8rem",
                  backgroundColor: "rgb(202,138,4,.1)",
                  borderRadius: "9999px",
                }}
              >
                {cardData.Done.total}
              </p>
              <More
                style={{ width: "2rem", height: "2rem", marginLeft: "auto" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {cardData.Done.content.map((item) => {
                return <CardUi key={item.id} cardData={item} />;
              })}
            </div>
          </Box>
          
        </Box>
      </Box>
    </>
  );
}

export default Timeline;

export async function loader() {
  const response = await data.Timeline;
  return response;
}
