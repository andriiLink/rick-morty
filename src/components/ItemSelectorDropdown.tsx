"use client";

import { 
  Listbox, 
  ListboxButton, 
  ListboxOptions, 
  ListboxOption 
} from '@headlessui/react';
import { EpisodeType } from '@/src/types/EpisodeType';
import { useRouter, useParams } from 'next/navigation';

interface BaseItem {
  id: number,
  name: string,
};

type Props<T extends BaseItem> = {
  itemList: T[],
  routerDirection: string,
  paramName: string,
  label?: string,
};

export const ItemSelectorDropdown = <T extends BaseItem>({ 
  itemList,
  routerDirection,
  paramName,
  label,
 }: Props<T>) => {
  const router = useRouter();
  const params = useParams();

  const selectedItem = itemList.find(
    (item) => item.id.toString() === params[paramName]
  ) || itemList[0];

  const handleChangeEpisode = (value: T) => {
    router.push(`/${routerDirection}/${value.id}`);
  };

  return (
    <div>
      <Listbox value={selectedItem} onChange={handleChangeEpisode}>
        <ListboxButton>{selectedItem.name}</ListboxButton>

        <ListboxOptions>
          {itemList.map((item) => {
            return(
              <ListboxOption 
                key={item.id}
                value={item}
              >
                {item.name}
              </ListboxOption>
            );
          })}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
