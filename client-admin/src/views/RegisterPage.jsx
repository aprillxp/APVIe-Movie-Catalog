import Navbar from "../components/Navbar";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function Register() {
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
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Username" />
              <Input size="lg" label="Email" />
              <Input size="lg" label="PhoneNumber" />
              <Input size="lg" label="Address" />
              <Input type="password" size="lg" label="Password" />
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
