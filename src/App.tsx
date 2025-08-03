import Grid from '@mui/material/Grid';
import './App.css';
import TTextInput from './components/atoms/TTextInput/TTextInput';
import TSelect from './components/molecules/TSelect/TSelect';
import LeagueCard from './components/organisms/LeagueCard/LeagueCard';
import TScreen from './components/organisms/TScreen/TScreen';
import AppConfig from './config/AppConfig';
import useAppController from './controllers/useAppController';
import TModal from './components/molecules/TModal/TModal';
import SeasonBadgeImage from './components/organisms/SeasonBadgeImage/SeasonBadgeImage';

function App() {
  const {
    data,
    error,
    isLoading,
    sportsTypeList,
    handleChangeSportsType,
    selectFilter,
    handleChangeSearchFilter,
    searchFilter,
    handleClickLeague,
    onCloseLeagueId,
    selectedLeagueId,
  } = useAppController();

  return (
    <TScreen isLoading={isLoading} errorString={error ? AppConfig.GENERIC_ERROR_STRING : undefined}>
      <Grid sx={{ m: 2 }} container spacing={3}>
        <Grid size={{ xs: 6, md: 8 }}>
          <TTextInput value={searchFilter} onChange={handleChangeSearchFilter} label="Search" />
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <TSelect
            options={sportsTypeList}
            label="Sports Type"
            onChange={handleChangeSportsType}
            value={selectFilter}
          />
        </Grid>
      </Grid>
      {data &&
        data.map((league) => {
          return <LeagueCard key={league.idLeague} data={league} onClick={() => handleClickLeague(league.idLeague)} />;
        })}
      <TModal open={selectedLeagueId != null} onClose={onCloseLeagueId}>
        <SeasonBadgeImage idLeague={selectedLeagueId!} />
      </TModal>
    </TScreen>
  );
}

export default App;
