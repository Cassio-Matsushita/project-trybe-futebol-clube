import { Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamService';
import TeamRepository from '../repository/TeamRepository';

const router = Router();

const repository = new TeamRepository();
const service = new TeamService(repository);
const controller = new TeamController(service);

router.get('/', controller.getAllTeams);
router.get('/:id', controller.getTeamById);

export default router;
