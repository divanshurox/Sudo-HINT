import React from "react";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default Home;
