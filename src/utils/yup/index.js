import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("введите корректный email")
    .required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
      "Пароль должен содержать спецсимвол, один заглавный символ, одну цифру"
    ),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Обязательное поле"),
  email: yup
    .string()
    .email("введите корректный email")
    .required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
      "Пароль должен содержать спецсимвол, один заглавный символ, одну цифру"
    ),
});
