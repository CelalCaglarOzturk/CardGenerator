import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
        <h2>Sayfa Bulunamadı</h2>
        <p>ana sayfaya dönmek ister misiniz</p>
        <Link to="/" > Ana Sayfa </Link>
        </div>
     );
}
 
export default NotFound;