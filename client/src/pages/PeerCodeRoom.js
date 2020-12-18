import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CodeExplorer from "../components/CodeExplorer/CodeExplorer";
import EditorComponent from "../components/Editor/Editor";
import CodeParticipants from "../components/CodeParticipants/CodeParticipants";
import RoomInfo from "../components/RoomInfo/RoomInfo";
import Terminal from "../components/Terminal/Terminal";

const useStyles = makeStyles((theme) => ({
  sideNav: {
    borderRight: "1px solid grey",
    height: "100vh",
  },
  borderClass: {
    border: "1px solid grey",
  },
  heightClass: {
    height: "50vh",
  },
}));

const PeerCodeRoom = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2} className={classes.sideNav}>
          <CodeExplorer />
        </Grid>
        <Grid item xs={6}>
          <EditorComponent />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              className={`${classes.borderClass} ${classes.heightClass}`}
            >
              <CodeParticipants />
            </Grid>
            <Grid
              item
              xs={6}
              className={`${classes.borderClass} ${classes.heightClass}`}
            >
              <RoomInfo />
            </Grid>
            <Grid item xs={12}>
              <Terminal />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PeerCodeRoom;
