import { ItemSelectorDropdown } from '@/src/components/ItemSelectorDropdown';
import { getLocations } from '@/src/lib/api';

const LocationLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const loctionListFromAPI = await getLocations();
  const locations = loctionListFromAPI || [];
  const locaitonList = locations.map((location) => {
    return (
      {
        id: location.id,
        name: location.name,
      }
    );
  });

  return (
    <div>
      <ItemSelectorDropdown
        itemList={locaitonList}
        routerDirection='location'
        paramName='locationId'
        label='select location'
      />
      {children}
    </div>
  );
};

export default LocationLayout;
