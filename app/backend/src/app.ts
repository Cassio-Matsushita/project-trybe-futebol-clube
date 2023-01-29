import * as express from 'express';
import ErrorHandler from './middleware/ErrorHandler';
import UserRoutes from './routes/UserRoutes';
import TeamRoutes from './routes/TeamRoutes';
import MatchesRoutes from './routes/MatchesRoutes';
import LeaderboardRoutes from './routes/LeaderboardRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.app.use('/login', UserRoutes);

    this.app.use('/teams', TeamRoutes);

    this.app.use('/matches', MatchesRoutes);

    this.app.use('/leaderboard', LeaderboardRoutes);

    this.app.use(ErrorHandler.handle);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
