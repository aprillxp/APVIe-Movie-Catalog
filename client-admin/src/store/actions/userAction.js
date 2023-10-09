const BASE_URL = "http://localhost:3000";

export const handleLogin = (value, callback) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(BASE_URL + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();

      if (response.ok) {
        callback({ status: true });
        localStorage.access_token = data.access_token;
      } else {
        throw { ...data };
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};