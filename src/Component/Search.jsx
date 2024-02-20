const Search = ({ updateSearch }) => {
  return (
    <div className="flex gap-5 justify-center m-5">
      <input
        type="search"
        name=""
        id=""
        placeholder="Enter the name"
        className="border-2 border-black  rounded-md w-2/4 p-2"
        onChange={(e) => updateSearch(e.target.value)}
      />
      <button className="bg-blue-600 font-semibold text-white rounded-md px-4">
        Search
      </button>
    </div>
  );
};
export default Search;
