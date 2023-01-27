import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatchesService from '../services/MatchesService';
import MatchesRepository from '../repository/MatchesRepository';

const router = Router();

const repository = new MatchesRepository();
const service = new MatchesService(repository);
const controller = new MatchesController(service);

router.get('/', controller.getAllMatches);
router.post('/', controller.verifyTeams, controller.saveMatches);
router.patch('/:id', controller.updateMatchResult);
router.patch('/:id/finish', controller.updateMatch);

export default router;
