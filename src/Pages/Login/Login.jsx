import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password at least 6 characters")
    .required("Please enter your password"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="model">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className={classNames("form-control", {
                "border border-danger": errors.email?.message,
              })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className={classNames("form-control", {
                "border border-danger": errors.password?.message,
              })}
              id="exampleInputPassword1"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="form-bottom">
            Do not have an account?
            <Link to={"/register"} className="text-decoration-none">
              {" "}
              <p className="text-danger ">Register Now!</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
