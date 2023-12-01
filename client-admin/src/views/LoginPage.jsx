import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { handleLogin } from "../store/actions";
import { useDispatch } from "react-redux";

export default function Login() {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeState = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLoginForm = () => {
    dispatch(handleLogin(input)).finally(() => navigate("/"));
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center w-screen bg-black">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Welcome home soldier.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={(e) => handleLoginForm(e.preventDefault())}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                name="email"
                onChange={changeState}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                name="password"
                onChange={changeState}
              />
            </div>
            <Button
              className="mt-6 bg-yellow-500 hover:bg-yellow-700 text-black"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
