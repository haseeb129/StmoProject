export const removeUser = () => {
  localStorage.removeItem("userObject");
};
export const addUser = (obj) => {
  console.log("Adduser", obj);
  localStorage.setItem("userObject", JSON.stringify(obj));
};

export const getUser = () => {
  try {
    const userObject = JSON.parse(localStorage.getItem("userObject"));
    return userObject;
  } catch (e) {
    return null;
  }
};

export default {
  removeUser,
  addUser,
  getUser,
};
