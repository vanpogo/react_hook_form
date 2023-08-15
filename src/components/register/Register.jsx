import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/yup/index.js";
import LoadingButton from "@mui/lab/LoadingButton";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    reset();
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
          boxShadow: "15px 15px 5px #C2C5CC",
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
              Регистрация
            </Typography>
          </Box>
          <TextField
            {...register("name")}
            error={!!errors?.name}
            helperText={errors?.name?.message}
            variant="outlined"
            label="Name"
            fullWidth
            margin="normal"
          />

          <TextField
            {...register("email")}
            error={errors.email}
            helperText={errors?.email?.message}
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
          />

          <TextField
            {...register("password")}
            error={errors?.password}
            helperText={errors?.password?.message}
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />

          <LoadingButton
            className={classes.btn}
            variant="contained"
            fullWidth
            type="submit"
            loading={isLoading}
          >
            Зарегистрироваться
          </LoadingButton>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
