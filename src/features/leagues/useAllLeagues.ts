import { useQuery } from '@tanstack/react-query';
import leaguesQueryKeys from './leaguesQueryKeys';
import leaguesNetworkAdapter from './leaguesNetworkAdapter';
import type { League } from '../../data/models/AllLeaguesModel';
import { useDeferredValue, useMemo, useRef } from 'react';

export default function useAllLeagues(options?: { select?: ((data: League[]) => League[]) | undefined }) {
  const allSportsTypes = useRef<string[]>([]);

  const allLeagues = useQuery({
    queryKey: leaguesQueryKeys.allLeagues(),
    queryFn: leaguesNetworkAdapter.getAllLeagues,
    staleTime: Infinity,
    select: options?.select,
  });

  const sportsTypeList = useMemo(() => {
    if (allSportsTypes.current.length > 0) {
      return allSportsTypes.current;
    }
    const allTypes = Array.from(new Set(allLeagues.data?.map((item) => item.strSport)));
    allSportsTypes.current = allTypes;
    return allTypes;
  }, [allLeagues.data]);

  return {
    allLeagues,
    sportsTypeList,
  };
}

export const useFilterAllLeagues = ({
  strLeague = '',
  strSport = 'all',
}: {
  strLeague: League['strLeague'];
  strSport: League['strSport'] | 'All';
}) => {
  const deferredFilter = useDeferredValue({
    strLeague,
    strSport,
  });
  return useAllLeagues({
    select: (data) => {
      if (deferredFilter.strSport === 'All') {
        return data.filter((item) => item.strLeague.toLowerCase().startsWith(deferredFilter.strLeague.toLowerCase()));
      } else {
        return data.filter(
          (item) =>
            item.strLeague.toLowerCase().startsWith(deferredFilter.strLeague.toLowerCase()) &&
            item.strSport === deferredFilter.strSport,
        );
      }
    },
  });
};
