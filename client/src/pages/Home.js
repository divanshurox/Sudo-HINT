import { Grid } from "@material-ui/core";
import React from "react";
import HomeCard from "../components/HomeCard/HomeCard";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
