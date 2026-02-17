"use client";

import { 
  Listbox, 
  ListboxButton, 
  ListboxOptions, 
  ListboxOption 
} from '@headlessui/react';
import { EpisodeType } from '@/src/types/EpisodeType';
// import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

type EpisodeOption = Pick<EpisodeType, "id" | "name">;

type Props = {
  episodeList: Pick<EpisodeType, "id" | "name">[],
};

export const EpisodeSelectorDropdown: React.FC<Props> = ({ episodeList }) => {
  // const [episode, setEpisode] = useState<EpisodeOption | null>(null);
  const router = useRouter();
  const params = useParams();

  const selectedEpisode = episodeList.find(
    (episode) => episode.id.toString() === params.episodeId
  ) || episodeList[0];

  const handleChangeEpisode = (value: EpisodeOption) => {
    router.push(`/episode/${value.id}`);
  };

  return (
    <div>
      <Listbox value={selectedEpisode} onChange={handleChangeEpisode}>
        <ListboxButton>Button</ListboxButton>

        <ListboxOptions>
          {episodeList.map((episode) => {
            return(
              <ListboxOption 
                key={episode.id}
                value={episode}
              >
                {episode.name}
              </ListboxOption>
            );
          })}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
