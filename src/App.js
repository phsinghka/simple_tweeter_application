import logo from "./logo.svg";
import "./App.css";

import TweetContainer from "./components/post-container/tweet-container.component";

const staticPosts = [
  {
    id: "1",
    label: "Stop COVID-19, Take out only !",
  },
  {
    id: "2",
    label: "At Home, binge watching Breaking Bad for a second time !",
  },
  {
    id: "3",
    label: "When is the beach opening up? Can't wait..",
  },
];

function App() {
  return (
    <div className="App ">
      {staticPosts.map((post) => (
        <TweetContainer key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
