import Link from 'next/link';

import { getCharacters } from '@/src/lib/api'
import CharacterCard from '@/src/components/CharacterCard';

export default async function Home() {
  const charactersFromAPI = await getCharacters();

  console.log(charactersFromAPI);

  console.log('data from api');

  if (!charactersFromAPI) {
    return (
      <div>Error!</div>
    );
  }

  return (
    <div>
      {
        charactersFromAPI.results.map((chatacter) => {
          return (
            <Link 
              key={chatacter.id}
              href={`/characters/${chatacter.id}`}
            >
              <CharacterCard chatacter={chatacter} />
            </Link>
          );
        })
      }
    </div>
  );
}
