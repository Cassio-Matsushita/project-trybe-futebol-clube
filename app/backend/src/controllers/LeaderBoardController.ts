import { NextFunction, Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  constructor(private leaderboardService: LeaderboardService) {}

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const [result] = await this.leaderboardService.getAll();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
