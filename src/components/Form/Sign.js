import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
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
  const handleClick = () => setShow(!show);

  const usernameHandler = (e) => setUsername(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  return (
    <div
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
        <Button
          bg="black"
          _hover={{ color: "white", bg: "gray.700" }}
          color="white"
          w="100%"
          variant="solid"
          size="lg"
          mt="1.5rem"
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default Sign;
