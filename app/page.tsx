import Link from 'next/link';

import { getCharacters } from '@/src/lib/api'
import CharacterCard from '@/src/components/CharacterCard';
import { SearchInput } from '@/src/components/SearchInput';
import { FilterBar } from '@/src/components/FilterBar';

export default async function Home({ 
  searchParams 
}: { searchParams: Promise<{ 
  name?: string, 
  page?: string, 
  status?: string,
  species?: string,
  gender?: string,
  }>
}) {
  const { name, page, status, species, gender } = await searchParams;
  const charactersFromAPI = 
    await getCharacters(Number(page) || 1, name, status, species, gender);

  console.log('SERVER RENGER WITH THIS PARAMS: ', (await searchParams).gender);

  console.log(charactersFromAPI);

  return (
    <div>
      <div className='flex justify-center py-5 w-full'>
        <SearchInput labelText='Characters' />
      </div>

      <aside>
        <FilterBar />
      </aside>

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
          <div>No characters with name <b>{name}</b> was found :/</div>
        )
      }
    </div>
  );
}
