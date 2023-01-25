import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import UserRepository from '../repository/UserRepository';

const router = Router();

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

router.post('/', controller.validateUser);
router.get('/validate', controller.validateToken);

export default router;
