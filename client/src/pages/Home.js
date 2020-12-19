import { Button, Grid } from "@material-ui/core";
import React from "react";
import HomeCard from "../components/HomeCard/HomeCard";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
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
              Home
            </h1>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right", margin: "auto" }}>
            <Button variant="contained" size="large">
              Add a Post
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={6} direction="column">
              <HomeCard />
              <HomeCard />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
