import CardEditor from "./CardEditor";


const Create = () => {
    return (
         <div className="text-center">
        <h1 className="text-4xl mb-8 font-bold">Create your card</h1>
       
        <CardEditor/>
        
        <h1 className="mt-16 mb-16 text-3xl">Import Section</h1>
        <input className="block w-full text-lg border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400" id="file_input_help">only accepts .csv file</p>

        <div className="mt-16 flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 p-4 dark:hover:bg-gray-800 dark:border-gray-600">
                <div className="flex flex-col items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">only accepts images</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>

        </div>
        </div>
     );
}
 
export default Create;