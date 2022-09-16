import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex">
      <Sidebar />
      <Feed className="h-5" />
      <Widgets />
    </div>
  );
}
