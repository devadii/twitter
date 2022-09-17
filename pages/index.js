import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import styles from "../styles/Home.module.css";

export default function Home({ newsData, usersData }) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex">
      <Sidebar />
      <Feed className="h-5" />
      <Widgets newsData={newsData} usersData={usersData} />
    </div>
  );
}
export async function getServerSideProps() {
  const newsResponse = await fetch(
    "https://saurav.tech/NewsAPI/everything/cnn.json"
  );
  const finalNews = await newsResponse.json();

  // users
  const userResponse = await fetch("https://randomuser.me/api/?results=10");
  const finalUsers = await userResponse.json();
  return {
    props: {
      newsData: finalNews.articles,
      usersData: finalUsers.results,
    },
  };
}
