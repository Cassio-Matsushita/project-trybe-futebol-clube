import { NextFunction, Request, Response } from 'express';
import TeamsModel from '../database/models/TeamsModel';
import TeamService from '../services/TeamService';

export default class TeamController {
  constructor(private teamService: TeamService) {}

  public getAllTeams = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.teamService.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getTeamById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await this.teamService.getById(Number(id));
      res.status(200).json(result as TeamsModel);
    } catch (error) {
      next(error);
    }
  };
}
