import {
  Avatar,
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React from "react";
import Linkify from "react-linkify";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "transparent",
    color: "white",
    padding: "1rem",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    margin: "auto 0 auto 0",
    paddingLeft: "5px",
    fontWeight: "500",
  },
}));

const HomeCard = () => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper elevation={4} className={classes.card}>
        <div className={classes.flexColumn}>
          <div className={classes.flexRow}>
            <Avatar alt="" />
            <span className={classes.text}>Aniket Biswas</span>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <Linkify>
              Found a really good article:
              https://dev.to/rahxuls/free-ultimate-resources-for-front-end-development-in-2021-giveaway-3838.
              Really awesome stuff!
            </Linkify>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <img
              src={"https://picsum.photos/750"}
              alt=""
              style={{ width: "100%", objectFit: "contain", borderRadius: 10 }}
            />
          </div>
          <div className={classes.flexRow}>
            <span>
              <ArrowUpwardIcon />
            </span>
            <span style={{ margin: "auto 0 auto 0" }}>100</span>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <Divider style={{ backgroundColor: "#fff" }} />
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <Button startIcon={<ArrowUpwardIcon />} style={{ color: "white" }}>
              Upvote
            </Button>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default HomeCard;
