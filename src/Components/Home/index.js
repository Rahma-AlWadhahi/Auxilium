import "./Home.css";
import AppNavbar from "../AppNavbar";
import Post from "../Post";

const Home = () => {
  return (
    <div className="Home">
      <AppNavbar />
      <main>
        <Post />
        <Post />
      </main>
    </div>
  );
};

export default Home;
