import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Grid, Button, TextField } from "@material-ui/core";

import ForumExploreCard from "../components/ForumExploreCard/ForumExploreCard";
import Layout from "../components/Layout/Layout";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50%",
    height: "40%",
    backgroundColor: "#161b22",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
  },
  input: {
    color: "white",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={{
        top: 200,
        left: 300,
      }}
      className={classes.paper}
    >
      <h2 id="simple-modal-title">Enter the question</h2>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Question"
          variant="outlined"
          multiline
          required
          fullWidth
          onFocus={() => setFocus(false)}
          onBlur={() => setFocus(true)}
          style={{
            border: focus && "1px solid #fff",
            borderRadius: 10,
            color: "white",
          }}
          InputProps={{
            classes: classes.input,
          }}
        />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Button variant="contained" size="large">
          Post the Question
        </Button>
      </div>
    </div>
  );

  return (
    <Layout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 800,
              background: "-webkit-linear-gradient(-70deg,#a2facf,#64acff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Forums
          </h1>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right", margin: "auto" }}>
          <Button variant="contained" size="large" onClick={handleOpen}>
            Ask a Question
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ForumExploreCard />
          <ForumExploreCard />
        </Grid>
      </Grid>
    </Layout>
  );
}
