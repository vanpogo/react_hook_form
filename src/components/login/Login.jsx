import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/yup/index.js";

const Login = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "calc(100%/4)",
          padding: "30px",
          borderRadius: "5px",
          boxShadow: "10px 5px 5px #C2C5CC",
          background: "#CDD0D5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Typography className={classes.title} variant="h4">
              Авторизация{" "}
            </Typography>
          </Box>
          <TextField
            {...register("email")}
            error={!!errors.email}
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            helperText={errors?.email?.message}
          />

          <TextField
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />

          <Button
            className={classes.btn}
            variant="contained"
            // fullWidth
            type="submit"
          >
            Войти
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
