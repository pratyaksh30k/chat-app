import { Router } from "express";
import {
  getUserInfo,
  login,
  signup,
  updateProfile,
  addProfileImage,
  removeProfileImage,
} from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";

const upload = multer({ dest: "uploads/profiles/" });

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/userInfo", verifyToken, getUserInfo);
authRoutes.post("/updateProfile", verifyToken, updateProfile);
authRoutes.post(
  "/addProfileImage",
  verifyToken,
  upload.single("profileImage"),
  addProfileImage
);
authRoutes.delete("/removeProfileImage", verifyToken, removeProfileImage);

export default authRoutes;
