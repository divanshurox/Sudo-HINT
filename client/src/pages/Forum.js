import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Divider,
  Button,
} from "@material-ui/core";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import HistoryIcon from "@material-ui/icons/History";

import MDEditor from "@uiw/react-md-editor";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  heading: {
    fontSize: "30px",
  },
}));

const mkdStr = `# Your answer here!

**Hello world!!!**


`;

const Forum = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(mkdStr);
  return (
    <>
      <Layout>
        <Grid item xs={12} className={classes.root}>
          <Typography variant="h4" gutterBottom className={classes.heading}>
            Delete button doesn't show up on some of the tasks on the todo list
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10px" }}>Asked today</p>
            <p style={{ marginRight: "10px" }}>Active Today</p>
            <p>Asked 15 times</p>
          </div>
          <Divider
            variant="middle"
            style={{
              backgroundColor: "#fff",
            }}
          />
          <Grid container spacing={2} style={{ marginTop: 10 }}>
            <Grid
              item
              xs={1}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ArrowUpwardIcon size={15} color="#ccc" />
              <p>10</p>
              <ArrowDownwardIcon size={15} color="#ccc" />
              <BookmarksIcon size={15} color="#ccc" />
              <p style={{ color: "#ccc" }}>1</p>
              <HistoryIcon size={15} color="#ccc" />
            </Grid>
            <Grid container item xs={11}>
              <Grid item xs={12}>
                <p>
                  I made a new todo app, but you can't delete some f them. I
                  tried a lot o stuff, but doesn't work :( I would also
                  appreciate it if the "answerer" could give me a way to
                  increase the character limit. I would also appreciate it if
                  the "answerer" could also explain the reason of these errors.
                  if you can, please help.
                </p>
                <div
                  style={{
                    backgroundColor: "#ccc",
                    height: 500,
                    width: "90%",
                    overflowY: "scroll",
                  }}
                ></div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  marginRight: "10%",
                  marginTop: "50px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#000015",
                    color: "white",
                    borderRadius: 10,
                    padding: "5px 15px",
                  }}
                >
                  <h5 style={{ marginBottom: "0px" }}>asked 23 min ago</h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ height: 30, width: 30, backgroundColor: "#ccc" }}
                    />
                    <div style={{ alignItems: "center", display: "flex" }}>
                      <p>licencenumber</p>
                      <p>41</p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            style={{
              backgroundColor: "#fff",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <p
            style={{
              paddingLeft: "20px",
            }}
          >
            One Answer
          </p>
          <Grid container spacing={2} style={{ marginTop: 10 }}>
            <Grid
              item
              xs={1}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ArrowUpwardIcon size={15} color="#ccc" />
              <p>10</p>
              <ArrowDownwardIcon size={15} color="#ccc" />
              <BookmarksIcon size={15} color="#ccc" />
              <p style={{ color: "#ccc" }}>1</p>
              <HistoryIcon size={15} color="#ccc" />
            </Grid>
            <Grid container item xs={11}>
              <Grid item xs={12}>
                <p>
                  I made a new todo app, but you can't delete some f them. I
                  tried a lot o stuff, but doesn't work :( I would also
                  appreciate it if the "answerer" could give me a way to
                  increase the character limit. I would also appreciate it if
                  the "answerer" could also explain the reason of these errors.
                  if you can, please help.
                </p>
                <div
                  style={{
                    backgroundColor: "#ccc",
                    height: 500,
                    width: "90%",
                    overflowY: "scroll",
                  }}
                ></div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  marginRight: "10%",
                  marginTop: "50px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#000015",
                    color: "white",
                    borderRadius: 10,
                    padding: "5px 15px",
                  }}
                >
                  <h5 style={{ marginBottom: "0px" }}>asked 23 min ago</h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ height: 30, width: 30, backgroundColor: "#ccc" }}
                    />
                    <div style={{ alignItems: "center", display: "flex" }}>
                      <p>licencenumber</p>
                      <p>41</p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <p>Your Answer</p>
                <MDEditor value={value} onChange={setValue} />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  Post Your Answer
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Forum;
