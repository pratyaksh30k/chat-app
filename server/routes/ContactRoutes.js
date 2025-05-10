import { Router } from "express";
import { getContacts, searchContacts } from "../controllers/ContactController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const contactRoutes = Router();

contactRoutes.post("/search",verifyToken,searchContacts);
contactRoutes.get("/get-contacts",verifyToken,getContacts);

export default contactRoutes;