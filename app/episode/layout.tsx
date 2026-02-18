import { ItemSelectorDropdown } from '@/src/components/ItemSelectorDropdown';
import { getEpisodes } from '@/src/lib/api';

const EpisodeLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const episodeListFromAPI = await getEpisodes();
  const episodes = episodeListFromAPI || [];
  const episodeList = episodes.map((episode) => {
    return (
      {
        id: episode.id,
        name: episode.name,
      }
    );
  });

  return (
    <div>
      <ItemSelectorDropdown 
        itemList={episodeList} 
        routerDirection='episode'
        paramName='episodeId'
        label='Select the episode...'
      />
      {children}
    </div>
  );
};

export default EpisodeLayout;
