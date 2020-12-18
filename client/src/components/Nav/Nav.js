import React from "react";
import { Avatar, Grid, makeStyles, MenuItem, Menu } from "@material-ui/core";
import CodeLogo from "../../assets/code.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  parent: {
    top: "0",
    backgroundColor: "#000015",
    position: "sticky",
    width: "100%",
  },
  appbar: {
    height: "70px",
    placeItems: "center",
    width: "100%",
    boxShadow: "0px 3px 5px 0px rgba(50, 50, 50, 0.75)",
    padding: "0 1rem 0 1rem",
  },
  logo: {
    fontWeight: "bolder",
    fontSize: "1.6rem",
    margin: "auto 0 auto 0",
    paddingLeft: "0.5rem",
  },
  logoImg: {
    height: "auto",
    width: "3rem",
    objectFit: "contain",
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        className={classes.parent}
      >
        <Grid item xs={12} className={classes.appbar}>
          <Grid
            container
            spacing={0}
            style={{ height: "70px", placeItems: "center" }}
            justify="space-between"
          >
            <Grid item xs={4} style={{ display: "flex" }}>
              <img src={CodeLogo} alt="logo" className={classes.logoImg} />
              <span className={classes.logo}>Sudo</span>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Avatar alt="profile" />
              <span
                style={{
                  margin: "auto 0 auto 0",
                  paddingLeft: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Aniket Biswas
              </span>
              <span style={{ margin: "auto 0 auto 0" }}>
                <ArrowDropDownIcon onClick={handleClick} />
              </span>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Nav;
