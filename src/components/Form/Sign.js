import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "redux/auth/authActions";
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

const Sign = ({ signType }) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleClick = () => setShow(!show);

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const usernameHandler = (e) => setUsername(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const passwordConfirmHandler = (e) => setPasswordConfirm(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) dispatch(auth(username, password));
  };
  console.log(authState.authStarted);

  return (
    <form
      onSubmit={submitHandler}
      className="d-flex justify-content-center align-items-center pb-5"
      style={{
        height: "calc(100vh - 70px)",
        minHeight: "450px",
      }}
    >
      <FormControl className="col-4">
        <Heading className="mb-4">{signType}</Heading>
        <FormLabel htmlFor="name">Username</FormLabel>
        <Input
          mb="1rem"
          placeholder="Enter username"
          id="name"
          value={username}
          onChange={usernameHandler}
        />
        <FormLabel htmlFor="pass">Password</FormLabel>
        <InputGroup>
          <Input
            pr="4rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={passwordHandler}
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
        {signType === "Sign up" && (
          <>
            <FormLabel mt="1rem" htmlFor="pass2">
              Password
            </FormLabel>
            <InputGroup>
              <Input
                pr="4rem"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                value={passwordConfirm}
                onChange={passwordConfirmHandler}
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
