import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";

const useStyles = makeStyles((theme) => ({
  participantsText: {
    fontSize: "1.6rem",
    fontWeight: "bold",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0 0 0",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    margin: "1rem 0 0 0",
  },
  voiceText: {
    fontSize: "0.8rem",
    color: "rgb(88, 228, 17)",
  },
  userText: {
    margin: "auto 0 auto 0",
    fontWeight: "bold",
    paddingLeft: "8px",
  },
}));

const CodeParticipants = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.flexCol}>
        <span className={classes.participantsText}>Participants</span>
        <span className={classes.voiceText}>Voice Connected</span>
        <div className={classes.flexRow}>
          <Avatar alt="p" />
          <span className={classes.userText}>Aniket Biswas</span>
          <span className={classes.userText}>
            <MicNoneOutlinedIcon />
          </span>
        </div>
        <div className={classes.flexRow}>
          <Avatar alt="p" />
          <span className={classes.userText}>Aniket Biswas</span>
          <span className={classes.userText}>
            <MicNoneOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default CodeParticipants;
