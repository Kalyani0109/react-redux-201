const baseUrl = process.env.LOGIN_URL;

export function checkLogInDetails(user) {
  return fetch(baseUrl + "/login/", {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Unauthorized");
    })
    .catch((err) => {
      console.log("Log in Auth Failed", err);
      throw err;
    });
}

export function getLogInDetails() {
  return fetch(baseUrl + "/loginSuccess/")
    .then((response) => {
      if (response.status === 200) return response.json();
    })
    .catch((err) => {
      console.log("", err);
      throw err;
    });
}
