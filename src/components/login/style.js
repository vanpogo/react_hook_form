import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    title: {
      "&.MuiTypography-root": {
        fontSize: "28px",
        fontWeight: "bold",
      },
    },
    btn: {
      "&.MuiButton-root": {
        backgroundColor: "#7F8694",
        marginTop: "20px",
        padding: "10px",
        width: "100%",
      },
      "&.MuiButton-root:hover": {
        backgroundColor: "#515761",
      },
      "&.MuiButton-contained": {
        fontSize: "15px",
        // color: "red",
      },
    },
    error: {
      "&.MuiTypography-h6": {
        fontSize: "14px",
        color: "red",
      },
    },
  };
});
