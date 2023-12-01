import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Loader from "../components/Loader";
import { useState } from "react";
import { registerAdmin } from "../store/actions";

export default function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);

  const [inputAdmin, setInputAdmin] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeState = (e) => {
    const { value, name } = e.target;
    setInputAdmin({
      ...inputAdmin,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerAdmin(inputAdmin)).then(() => {
      setInputAdmin({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });
    });
  };

  if (loading) {
    return (
      <div className="flex max-h-10">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center items-center w-full bg-black">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Here to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={submitHandler}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Username"
                onChange={changeState}
                value={inputAdmin.username}
                name="username"
                type="text"
                placeholder="username"
              />
              <Input
                size="lg"
                label="Email"
                onChange={changeState}
                value={inputAdmin.email}
                name="email"
                type="email"
                placeholder="email"
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                onChange={changeState}
                value={inputAdmin.password}
                name="password"
                placeholder="password"
              />
              <Input
                size="lg"
                label="PhoneNumber"
                onChange={changeState}
                value={inputAdmin.phoneNumber}
                name="phoneNumber"
                type="text"
                placeholder="phone number"
              />
              <Input
                size="lg"
                label="Address"
                onChange={changeState}
                value={inputAdmin.address}
                name="address"
                type="text"
                placeholder="address"
              />
            </div>
            <Button
              className="mt-10 bg-yellow-500 hover:bg-yellow-700 text-black"
              fullWidth
            >
              Register
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
