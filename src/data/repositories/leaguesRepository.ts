import type { ApiAdapterInstance } from '../adapters/types';
import type { AllLeaguesModel, League } from '../models/AllLeaguesModel';
import type { SeasonBadgeModel } from '../models/SeasonBadgeModel';

const LeaguesRepository = (apiAdapter: ApiAdapterInstance) => ({
  getAllLeagues: () => apiAdapter.get<AllLeaguesModel>('/v1/json/3/all_leagues.php').then((res) => res.data.leagues),
  getSeasonBadge: (idLeague: League['idLeague']) =>
    apiAdapter
      .get<SeasonBadgeModel>(`/v1/json/3/search_all_seasons.php?badge=1&id=${idLeague}`)
      .then((res) => res.data.seasons),
});

export default LeaguesRepository;
