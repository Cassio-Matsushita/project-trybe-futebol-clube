const verifyTeams = async (homeTeamId: number, awayTeamId: number) => {
  if (homeTeamId === awayTeamId) {
    return { status: 422,
      message: 'It is not possible to create a match with two equal teams' };
  }

  if (homeTeamId > 16 || homeTeamId < 1 || awayTeamId > 16 || awayTeamId < 1) {
    return { status: 404,
      message: 'There is no team with such id!' };
  }
};

export default verifyTeams;
