import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Divider,
  Button,
  Avatar,
} from "@material-ui/core";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import HistoryIcon from "@material-ui/icons/History";

import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from "react-markdown";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <ReactMarkdown>
                  ### Hi there 👋 My name is [Aniket
                  Biswas](https://www.linkedin.com/in/aniket-biswas-59394b191/).
                  I'm a Full Stack Web Developer and exploring various other
                  technologies everyday. I am currently pursuing B.E. 💻 at
                  [Thapar Institute of Engineering and
                  Technology](https://thapar.edu)
                  ![](https://komarev.com/ghpvc/?username=aniketbiswas21) Here's
                  more about me - 🔭 I’m currently working on -
                  [Pix](https://github.com/aniketbiswas21/Pix), [Buying Selling
                  Platform](https://github.com/developer-student-club-thapar/buying_selling_devops)
                  and [Thapar
                  App](https://github.com/developer-student-club-thapar/thapar_app)
                  - 🌱 I’m currently learning - ReactJS, NodeJS, GraphQL,
                  Firebase, Typescript and Flutter. - 👯 I’m looking to
                  collaborate on - MERN stack projects - 💬 Ask me about -
                  Anything related to web technologies. :smiley: - 📫 How to
                  reach me - aniket.biswas75@gmail.com - 😄 Pronouns - He/Him -
                  ⚡ Fun fact - . The best way to learn programming you ask?
                  Google it :stuck_out_tongue_closed_eyes: ```javascript const
                  express = require("express");```
                </ReactMarkdown>
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
                    <Avatar alt="" />
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        padding: "0 1rem 0 1rem",
                      }}
                    >
                      <p>username</p>
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Divider
                  style={{
                    backgroundColor: "#fff",
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "0.8rem" }}>
                This is a comment
              </Grid>

              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Divider
                  style={{
                    backgroundColor: "#fff",
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "0.8rem" }}>
                This is a comment
              </Grid>
            </Grid>
          </Grid>
          <Divider
            style={{
              backgroundColor: "#fff",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <p
            style={{
              paddingLeft: "20px",
              fontSize: "1.6rem",
            }}
          >
            1 Answers
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
                <ReactMarkdown>
                  ### Hi there 👋 My name is [Aniket
                  Biswas](https://www.linkedin.com/in/aniket-biswas-59394b191/).
                  I'm a Full Stack Web Developer and exploring various other
                  technologies everyday. I am currently pursuing B.E. 💻 at
                  [Thapar Institute of Engineering and
                  Technology](https://thapar.edu)
                  ![](https://komarev.com/ghpvc/?username=aniketbiswas21) Here's
                  more about me - 🔭 I’m currently working on -
                  [Pix](https://github.com/aniketbiswas21/Pix), [Buying Selling
                  Platform](https://github.com/developer-student-club-thapar/buying_selling_devops)
                  and [Thapar
                  App](https://github.com/developer-student-club-thapar/thapar_app)
                  - 🌱 I’m currently learning - ReactJS, NodeJS, GraphQL,
                  Firebase, Typescript and Flutter. - 👯 I’m looking to
                  collaborate on - MERN stack projects - 💬 Ask me about -
                  Anything related to web technologies. :smiley: - 📫 How to
                  reach me - aniket.biswas75@gmail.com - 😄 Pronouns - He/Him -
                  ⚡ Fun fact - . The best way to learn programming you ask?
                  Google it :stuck_out_tongue_closed_eyes: ```javascript const
                  express = require("express");```
                </ReactMarkdown>
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
                  <h5 style={{ marginBottom: "0px" }}>answered 23 min ago</h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar alt="" />
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        padding: "0 1rem 0 1rem",
                      }}
                    >
                      <p>licencenumber</p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Divider
                  style={{
                    backgroundColor: "#fff",
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "0.8rem" }}>
                This is a comment
              </Grid>
              <Grid item xs={12}>
                <p style={{ fontSize: "1.6rem" }}>Your Answer</p>
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
