export const signup = async (req, res) => {
  //   console.log("signup:", signup);

  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {
    console.log("error:", error.message);
  }
};

export const login = (req, send) => {
  console.log("login:", login);
};

export const logout = (req, res) => {
  console.log("logout:", logout);
};
