import React, { useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import {
  FormControl,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { ClearActiveFile, writeCode } from "../../redux/actions";
import { debounce } from "lodash";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2rem 0 0 0",
    display: "flex",
    flexDirection: "column",
  },
  languageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  select: {
    color: "#fff",
    width: "200px",
    border: "2px solid #3f51b5",
  },
  tabs: {
    backgroundColor: "rgba(88,88,88,.5)",
    color: "#fff",
    borderRadius: "10px 10px 0 0",
    padding: "0.6rem",
    width: "fit-content",
    display: "flex",
    border: "0.5px solid #48494B",
  },
  closeIcon: {
    "&:hover": {
      color: "#3f51b5",
      cursor: "pointer",
    },
  },
}));

const EditorComponent = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState("javascript");
  const dispatch = useDispatch();
  const code = useSelector((state) => state.code);
  const handleEditorChange = (e, value) => {
    console.log(value);
    debounce(dispatch(writeCode(value)), 3000);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.languageContainer}>
          <span style={{ fontSize: "1.3rem", margin: "auto 0 auto 0" }}>
            Language&nbsp;&nbsp;
          </span>
          <FormControl variant="filled" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              inputProps={{
                className: classes.select,
              }}
              variant="outlined"
            >
              <MenuItem value={"javascript"}>javascript</MenuItem>
              <MenuItem value={"typescript"}>typescript</MenuItem>
              <MenuItem value={"python"}>python</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br />
        <div className={classes.languageContainer}>
          {code.activeFile && (
            <Paper elevation={0} className={classes.tabs}>
              <span>{code.activeFile?.name}</span>
              <span>
                <CloseIcon
                  fontSize="small"
                  className={classes.closeIcon}
                  onClick={() => {
                    dispatch(ClearActiveFile());
                  }}
                />
              </span>
            </Paper>
          )}
        </div>
        {code.activeFile ? (
          <ControlledEditor
            height="80vh"
            value={code.activeFile.code}
            onChange={handleEditorChange}
            theme="dark"
            language={language}
          />
        ) : (
          <h1>Select A File</h1>
        )}
      </div>
    </>
  );
};

export default EditorComponent;
