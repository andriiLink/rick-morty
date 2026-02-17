import { getCharacterInfo } from '@/src/lib/api';

const CharacterInfo = async ({ params }: {params: Promise<{characterId: string}>}) => {
  const { characterId } = await params;
  console.log(characterId);
  const selectedCharacter = await getCharacterInfo(Number(characterId));

  if (!selectedCharacter) {
    return (
      <div>Error!</div>
    );
  }

  return (
    <div>{selectedCharacter.id}</div>
  );
};

export default CharacterInfo;
