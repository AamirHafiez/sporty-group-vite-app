import TCard from '../../molecules/TCard/TCard';
import type { League } from '../../../data/models/AllLeaguesModel';
import TText from '../../atoms/TText/TText';

type LeagueCardProps = {
  data: League;
  onClick?: () => void;
};

function LeagueCard(props: LeagueCardProps) {
  const { data, onClick } = props;
  return (
    <TCard.Card onClick={onClick} sx={{ m: 2, cursor: 'pointer' }}>
      <TCard.Content>
        <TText>{data.strLeague}</TText>
      </TCard.Content>
    </TCard.Card>
  );
}

export default LeagueCard;
