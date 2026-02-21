import Link from 'next/link';

import { getCharacters } from '@/src/lib/api'
import CharacterCard from '@/src/components/CharacterCard';
import { SearchInput } from '@/src/components/SearchInput';

export default async function Home({ 
  searchParams 
}: { searchParams: Promise<{ name?: string, page?: string }>
}) {
  const { name, page } = await searchParams;
  const charactersFromAPI = await getCharacters(Number(page) || 1, name);

  console.log(charactersFromAPI);

  console.log('data from api');

  return (
    <div>
      <div className='flex justify-center py-5'>
        <SearchInput labelText='Characters' />
      </div>
      {
        charactersFromAPI ? (
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
        ) : (
          <div>No characters with name {name} was found :/</div>
        )
      }
    </div>
  );
}
