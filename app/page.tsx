import Link from 'next/link';

import { getCharacters } from '@/src/lib/api'

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
        charactersFromAPI.results.map((item) => {
          return (
            <Link 
              key={item.id}
              href={`/characters/${item.id}`}
            >
              {item.name}
            </Link>
          );
        })
      }
    </div>
  );
}
