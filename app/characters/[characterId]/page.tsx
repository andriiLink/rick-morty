const CharacterInfo = async ({ params }: {params: Promise<{characterId: string}>}) => {
  const { characterId } = await params;
  console.log(characterId);
  return (
    <div></div>
  );
};

export default CharacterInfo;
