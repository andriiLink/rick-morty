"use client";

type Params = {
  labelText: string,
};

export const SearchInput: React.FC<Params> = ({ labelText }) => {
  return (
    <div className="flex flex-col items-center gap-5 w-1/2">
      <label className="text-5xl font-semibold">{labelText}</label>
      <div className="flex flex-row justify-between w-full gap-4">
        <input 
          placeholder="Search for characters"
          className="
            placeholder-gray-500
            placeholder:font-light
            pl-4
            py-5
            h-10 w-full
            border-2
            border-blue-500
            rounded-md
            focus:outline-none
            focus:shadow-lg        
            focus:shadow-blue-500/50
            font-semibold
          "></input>
        <div 
          className="bg-blue-500 text-white p-2 rounded font-medium
            cursor-pointer
          "
          onClick={() => {}}
        >
          Search
        </div>
      </div>
    </div>
  );
};