import { networkApiAdapter } from '../../data/adapters';
import LeaguesRepository from '../../data/repositories/leaguesRepository';

const leaguesNetworkAdapter = LeaguesRepository(networkApiAdapter);

export default leaguesNetworkAdapter;
