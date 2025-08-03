import { useQuery } from '@tanstack/react-query';
import leaguesQueryKeys from './leaguesQueryKeys';
import leaguesNetworkAdapter from './leaguesNetworkAdapter';
import type { League } from '../../data/models/AllLeaguesModel';

export default function useSeasonBadge(options: { idLeague: League['idLeague'] }) {
  const { idLeague } = options;

  const seasonBadgeLeagues = useQuery({
    queryKey: leaguesQueryKeys.seasonBadges(idLeague),
    queryFn: ({ queryKey }) => leaguesNetworkAdapter.getSeasonBadge(queryKey[0].idLeague),
    staleTime: Infinity,
  });

  return {
    seasonBadgeLeagues,
  };
}
