import { Router } from 'express';
import { healthcheck } from "../controllers/healthcheck.controllers.js"

const router = Router();

router.route('/test').get(healthcheck);

export default router