import { NextFunction, Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import { validateToken } from '../utils/Jwt';
import verifyTeams from '../validations/MatchesValidations';

export default class MatchesController {
  constructor(private matchesService: MatchesService) {
  }

  public getAllMatches = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { inProgress } = req.query;

      if (inProgress) {
        const result = await this.matchesService.getAllByQueryString(inProgress as string);
        return res.status(200).json(result);
      }
      const result = await this.matchesService.getAll();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public verifyTeams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeamId, awayTeamId } = req.body;
      const result = await verifyTeams(Number(homeTeamId), Number(awayTeamId));

      if (result) {
        return res.status(result.status).json({ message: result.message });
      }
      next();
    } catch (error) {
      next(error);
    }
  };

  public saveMatches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      const user = validateToken(authorization as string);

      if (!authorization || !user) {
        return res.status(401).json({ message: 'Token must be a valid token' });
      }

      const result = await this.matchesService.saveMatch(req.body);
      return res.status(201).json(result);
    } catch (error) {
      if (error) {
        return res.status(401).json({ message: 'Token must be a valid token' });
      }
      next(error);
    }
  };

  public updateMatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const result = await this.matchesService.updateMatch(Number(id));
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public updateMatchResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;

      if (homeTeamGoals && awayTeamGoals) {
        const result = await this.matchesService
          .updateMatchResult(Number(id), homeTeamGoals, awayTeamGoals);
        return res.status(200).json(result);
      }
    } catch (error) {
      next(error);
    }
  };
}
