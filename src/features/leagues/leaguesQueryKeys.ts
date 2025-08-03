import type { League } from '../../data/models/AllLeaguesModel';

const leaguesQueryKeys = Object.freeze({
  scope: [{ scope: 'leagues' }] as const,
  allLeagues: () => [{ ...leaguesQueryKeys.scope[0], type: 'all-leagues' }] as const,
  seasonBadges: (idLeague: League['idLeague']) => [{ ...leaguesQueryKeys.scope[0], type: 'season-badges', idLeague }],
});

export default leaguesQueryKeys;
