import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    // Create new user

    const user = await User.create({
      username,
      email,
      password: hasedPassword,
    });
    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log("Error in register:", error.message);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user || user.length === 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    // Generate JWT token
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });
    return res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        name: user.name,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.log("Error in login:", error.message);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ message: "No token found" });
    }
    // Clear the cookie
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    });
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getLoggedUserProfile = async (req, res) => {
  try {
    const { username } = req.user;
    if (!username) {
      return res.status(400).json({ message: "User not found" });
    }
    // Fetch user profile
    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User profile fetched successfully",
      user,
    });
  } catch (error) {
    console.log("Error in getLoggedUserProfile:", error.message);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};
