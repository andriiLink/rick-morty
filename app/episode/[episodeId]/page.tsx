import { getEpisodeInfo } from '@/src/lib/api';

const EpisodePage = async ({ params }: {params: Promise<{ episodeId: string }>}) => {
  const { episodeId } = await params;
  const selectedEpisode =  await getEpisodeInfo(Number(episodeId));

  if (!selectedEpisode) {
    return (
      <div>Error!</div>
    );
  }

  return (
    <div>{selectedEpisode.name}</div>
  );
};

export default EpisodePage;
