import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderBoardController';
import LeaderboardService from '../services/LeaderboardService';

const router = Router();

const service = new LeaderboardService();
const controller = new LeaderboardController(service);

router.get('/home', controller.getAll);

export default router;
