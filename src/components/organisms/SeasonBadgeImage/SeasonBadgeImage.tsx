import AppConfig from '../../../config/AppConfig';
import type { League } from '../../../data/models/AllLeaguesModel';
import useSeasonBadge from '../../../features/leagues/useSeasonBadge';
import TBox from '../../atoms/TBox/TBox';
import TImage from '../../atoms/TImage/TImage';
import TText from '../../atoms/TText/TText';
import TScreen from '../TScreen/TScreen';

type SeasonBadgeImageProps = {
  idLeague: League['idLeague'];
};

function SeasonBadgeImage(props: SeasonBadgeImageProps) {
  const { idLeague } = props;

  const { seasonBadgeLeagues } = useSeasonBadge({ idLeague });

  return (
    <TScreen
      isLoading={seasonBadgeLeagues.isLoading}
      errorString={seasonBadgeLeagues.error ? AppConfig.GENERIC_ERROR_STRING : undefined}
    >
      {seasonBadgeLeagues?.data?.[0].strBadge ? (
        <TBox sx={{ maxWidth: '80vw' }}>
          <TImage style={{ width: '100%' }} src={seasonBadgeLeagues?.data?.[0].strBadge} />
        </TBox>
      ) : (
        <TText>Image not found...</TText>
      )}
    </TScreen>
  );
}

export default SeasonBadgeImage;
