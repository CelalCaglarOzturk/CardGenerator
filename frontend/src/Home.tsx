import useFetch from "./useFetch";
import BlogList from "./BlogList";
import AddCard from "./AddCard";



const Home = () => {

 const {data:blogs , isLoading, error} = useFetch('http://localhost:8000/blogs')

  return (
    
    <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading ...</div>}
      {blogs  !== 'never' && <BlogList blogs={blogs} />}
      <AddCard/>
      
      
    </div>
  );
}
 
export default Home;