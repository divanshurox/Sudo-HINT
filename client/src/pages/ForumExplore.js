import { Grid } from "@material-ui/core";
import React from "react";
import ForumExploreCard from "../components/ForumExploreCard/ForumExploreCard";
import Layout from "../components/Layout/Layout";

const ForumExplore = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Forums</h2>
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
