import { getLocationInfo } from '@/src/lib/api';

const LocationPage = async ({ params }: {params: Promise<{ locationId: string }>}) => {
  const { locationId } = await params;
  const selectedLocation = await getLocationInfo(Number(locationId));

  if (!selectedLocation) {
    return (
      <div>Error location</div>
    );
  }

  return (
    <div>{selectedLocation.name}</div>
  );
};

export default LocationPage;
