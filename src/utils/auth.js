// utils/auth.js

// Register a new user
export const registerUser = (name, email, password) => {
  // get saved users from localStorage or empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // check if user already exists
  if (users.find(u => u.email === email)) return false;

  // add new user
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

// Login user
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // find user with matching email and password
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user)); // save logged-in user
    return true;
  }

  return false;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};