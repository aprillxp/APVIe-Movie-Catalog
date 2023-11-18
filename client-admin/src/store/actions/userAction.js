import Swal from "sweetalert2";
import { USER_FETCH_SUCCESS } from "./actionType";

const BASE_URL = "http://localhost:3000";

const swal = (icon, title) => {
  Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const userFetchSuccess = (payload) => {
  return { type: USER_FETCH_SUCCESS, payload };
};

export const handleLogin = (input) => {
  return async () => {
    try {
      const response = await fetch(BASE_URL + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();

      if (!response.ok) throw data;
      console.log(data);

      localStorage.access_token = data.access_token;
      localStorage.name = data.name;

      swal("success", "Login success");
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const handleLogout = () => {
  return async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Logout",
      });

      if (result.isConfirmed) {
        localStorage.clear();
        swal("success", "Bye~");
      }
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const registerAdmin = () => {
  return async () => {
    try {
      const response = await fetch(BASE_URL + "/register", {
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      swal("success", "Success to add new admin");
    } catch (error) {
      swal("error", error.message);
    }
  };
};
