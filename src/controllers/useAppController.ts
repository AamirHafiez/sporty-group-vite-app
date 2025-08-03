import { useState } from 'react';
import { useFilterAllLeagues } from '../features/leagues/useAllLeagues';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { League } from '../data/models/AllLeaguesModel';

function useAppController() {
  const [searchFilter, setSearchFilter] = useState('');
  const [selectFilter, setSelectFilter] = useState('All');
  const [selectedLeagueId, setSelectedLeagueId] = useState<null | League['idLeague']>(null);

  const { allLeagues, sportsTypeList } = useFilterAllLeagues({
    strLeague: searchFilter,
    strSport: selectFilter,
  });

  const handleChangeSportsType = (event: SelectChangeEvent) => setSelectFilter(event.target.value);

  const handleChangeSearchFilter = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setSearchFilter(event.target.value);

  const handleClickLeague = (idLeague: League['idLeague']) => setSelectedLeagueId(idLeague);

  const onCloseLeagueId = () => setSelectedLeagueId(null);

  return {
    isLoading: allLeagues.isLoading,
    error: allLeagues.error,
    data: allLeagues.data,
    sportsTypeList: ['All', ...sportsTypeList],
    handleChangeSportsType,
    selectFilter,
    searchFilter,
    handleChangeSearchFilter,
    selectedLeagueId,
    handleClickLeague,
    onCloseLeagueId,
  };
}

export default useAppController;
