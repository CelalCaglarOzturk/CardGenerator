const Rules = () => {
    return ( 
        <div className="p-10 rounded-lg bg-gray-200 dark:bg-gray-800">
            <h1 className="text-4xl font-bold mb-4">Game Rules</h1>
            <ul className="list-decimal list-inside">
                <li className="mt-2">Every pack includes 5 cards</li>
                <li className="mt-2">Minimum card name length is 3 characters</li>
                <li className="mt-2">Maximum card name length is 50 characters</li>
                <li className="mt-2">Minimum card description length is 5 characters</li>
                <li className="mt-2">Maximum card description length is 500 characters</li>
                <li className="mt-2">Minimum card cost is 0</li>
                <li className="mt-2">Maximum card cost is 99999</li>
            </ul>
        </div>
     );
}
 
export default Rules;


