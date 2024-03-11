import { ChangeEvent } from "react";

interface ISortControlProps {
  sortByValues: string[];
  sortByDefaultValue: string;
  onChanges: (val: string) => void;
}

export const SortControl = ({
  sortByValues,
  sortByDefaultValue,
  onChanges,
}: ISortControlProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChanges(event.target.value);
  };

  return (
    <div className="max-w-full p-2 ">
      <form className="flex justify-end  place-items-center">
        <label
          htmlFor="sortby"
          className="text-sm font-medium mr-2  text-white"
        >
          Sort by
        </label>
        <select
          defaultValue={sortByDefaultValue}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-1  "
        >
          {sortByValues.map((i, j) => (
            <option key={j} value={i}>
              {i}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
