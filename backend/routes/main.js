import { Router } from "express";
import { getMainPage } from "../controllers/main.js";

const router = Router();

/**
 * @route   GET / 
 * @desc    Afficher la page principale
 * @access  Public
 */
router.get("/", getMainPage);

export default router;