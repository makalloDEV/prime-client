function UploadSongPage() {
  return (
    <div className="flex justify-center mt-14">
      <div className="max-w-md mx-auto p-4 bg-zinc-700 rounded-lg">
        <div className="mb-3">
          <h2 className="text-md font-medium text-white">Cover</h2>
        </div>

        <div className="w-24 h-24 bg-gray-200 rounded-md mb-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
          <span className="text-3xl text-gray-500 mb-0.5">+</span>
          <span className="text-xs text-gray-500">Add cover</span>
        </div>

        <div className="space-y-3 bg-zinc-300 p-4 rounded-md shadow-xs">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Artist
            </label>
            <input
              type="text"
              className="w-full px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Artist name"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Song name
            </label>
            <input
              type="text"
              className="w-full px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Song name"
            />
          </div>

          <div className="pt-1">
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-200 transition-colors hover:cursor-pointer">
              <span className="text-gray-600">Upload audio</span>
              <span className="text-lg text-gray-500">+</span>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full py-2 text-sm bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors font-medium hover:cursor-pointer">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadSongPage;
