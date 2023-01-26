import { NextFunction, Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  constructor(private matchesService: MatchesService) {}

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
}
