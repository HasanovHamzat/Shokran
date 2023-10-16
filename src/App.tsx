import "./app/styles/index.scss";
import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Cards />
    </div>
  );
};
