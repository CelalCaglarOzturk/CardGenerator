const CardEditor = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <img src="https://m.media-amazon.com/images/I/515QwAS0JcL._AC_.jpg" alt="İmage" className="m-5 h-96" />
                <label htmlFor="file-upload" className="absolute right-0 bottom-0 h-12 w-12 bg-gray-500 hover:bg-gray-700 focus:outline-none text-white text-center font-bold text-xl cursor-pointer rounded-full">
                    <i className="fas fa-camera"></i>
                    <input type="file" id="file-upload" className="hidden" />
                </label>
            </div>
            <form className="max-w-sm mx-auto">
                <select
                    className="m-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Choose a Type</option>
                    <option value="Trap">Trap</option>
                    <option value="Spell">Spell</option>
                    <option value="Slur">Slur</option>
                    <option value="Attack">Attack</option>
                </select>
            </form>
            <button className=" m-5 focus:outline-none px-8 py-2 border-2 border-green-700 rounded-lg text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:hover:bg-green-700 dark:focus:ring-green-800">
                Create a Card
            </button>
        </div>
    );
};

export default CardEditor;
