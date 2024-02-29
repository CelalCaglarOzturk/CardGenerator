const CardEditor = () => {
    return ( <>
        <div>
            <h1>Card Editor</h1>
            <img src="https://m.media-amazon.com/images/I/515QwAS0JcL._AC_.jpg" alt="React Logo" /> 
            <h1>card type</h1>

<form className="max-w-sm mx-auto">
 
  <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a Type</option>
    <option value="Trap">Trap</option>
    <option value="Spell">Spell</option>
    <option value="Slur">Slur</option>
    <option value="Hero">Hero</option>
  </select>
</form>


        </div>
        <div>
            <h1>Progress</h1>
<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-blue-600 h-2.5 rounded-full width: 45%"></div>
</div>

        </div>
        </>
     );
}
 
export default CardEditor;