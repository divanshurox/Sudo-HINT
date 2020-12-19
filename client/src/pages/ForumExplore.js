import { Button, Grid } from "@material-ui/core";
import React from "react";
import ForumExploreCard from "../components/ForumExploreCard/ForumExploreCard";
import Layout from "../components/Layout/Layout";

const ForumExplore = () => {
  return (
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
            Forums
          </h1>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right", margin: "auto" }}>
          <Button variant="contained" size="large">
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
};

export default ForumExplore;
