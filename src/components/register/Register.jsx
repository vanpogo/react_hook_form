import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useStyles } from "./style";
import { useForm } from "react-hook-form";

const Register = () => {
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
  });

  const onSubmit = (data) => {
    console.log(data);
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
            {...register("name", {
              required: "Обязательное поле",
              minLength: {
                value: 3,
                message: "Не меньше 3 букв",
              },
              maxLength: {
                value: 30,
                message: "Максимальное Количество букв 30",
              },
              pattern: /^[a-z]+/g,
            })}
            error={!!errors?.name}
            helperText={errors?.name?.message}
            variant="outlined"
            label="Name"
            fullWidth
            margin="normal"
          />

          <TextField
            {...register("email", {
              required: "Обязательное поле",
              pattern: /@/,
            })}
            error={errors.email}
            helperText={errors?.email?.message}
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
          />

          <TextField
            {...register("password", {
              required: "Обязательное поле",
              maxLength: {
                value: 20,
                message: "Не больше 20 символов",
              },
              minLength: {
                value: 5,
                message: "Не менше 5 символов",
              },
            })}
            error={errors?.password}
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
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
