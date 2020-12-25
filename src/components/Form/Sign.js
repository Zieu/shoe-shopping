import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, signup } from "redux/auth/authActions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";

import eye from "imgs/eye.svg";
import eyeOff from "imgs/eye-off.svg";

const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters")
    .matches(/^[A-Za-z]+$/i, "Only English letters are allowed"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Sign = ({ signType }) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClick = () => setShow(!show);

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    if (signType === "Sign up") dispatch(signup(data));
    if (signType === "Sign in") dispatch(signin(data));
    console.log(data);
  };

  const RequiredError = ({ err }) => (
    <span style={{ fontSize: 12, color: "red" }}>{err}</span>
  );
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="d-flex justify-content-center align-items-center pb-5"
      style={{
        height: "calc(100vh - 70px)",
        minHeight: "450px",
      }}
    >
      <FormControl className="col-4">
        <Heading className="mb-4">{signType}</Heading>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          name="username"
          placeholder="Enter username"
          id="username"
          ref={register}
        />
        <RequiredError err={errors.username?.message} />
        <FormLabel mt="1rem" htmlFor="pass">
          Password
        </FormLabel>
        <InputGroup>
          <Input
            name="password"
            pr="4rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            ref={register}
            id="pass"
          />
          <InputRightElement>
            <Button className="p-2" size="sm" onClick={handleClick}>
              {show ? (
                <img src={eye} alt="hide" />
              ) : (
                <img src={eyeOff} alt="show" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        <RequiredError err={errors.password?.message} />
        {signType === "Sign up" && (
          <>
            <FormLabel mt="1rem" htmlFor="pass2">
              Password
            </FormLabel>
            <InputGroup>
              <Input
                name="passwordConfirm"
                pr="4rem"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                ref={register}
                id="pass2"
              />
              <InputRightElement>
                <Button className="p-2" size="sm" onClick={handleClick}>
                  {show ? (
                    <img src={eye} alt="hide" />
                  ) : (
                    <img src={eyeOff} alt="show" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <RequiredError err={errors.passwordConfirm?.message} />
          </>
        )}
        <Button
          bg="black"
          _hover={{ color: "white", bg: "gray.700" }}
          color="white"
          w="100%"
          variant="solid"
          size="lg"
          mt="1.5rem"
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default Sign;
