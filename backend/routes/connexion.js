import { Router } from "express";
import { getConnexionPage } from "../controllers/connexion.js";

const router = Router();

/**
 * @route   GET / 
 * @desc    Afficher la page principale
 * @access  Public
 */
router.get("/", getConnexionPage);

export default router;