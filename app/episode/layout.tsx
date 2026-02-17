import { EpisodeSelectorDropdown } from '@/src/components/EpisodeSelectorDropdown';
import { getEpisodes } from '@/src/lib/api';

const EpisodeLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const episodeListInfoFromAPI = await getEpisodes();
  const episodes = episodeListInfoFromAPI?.results || [];
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
      <EpisodeSelectorDropdown episodeList={episodeList} />
      {children}
    </div>
  );
};

export default EpisodeLayout;
