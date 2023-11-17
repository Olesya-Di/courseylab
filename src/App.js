import styles from "./assets/styles/App.module.scss";
import { Outlet } from "react-router-dom";
import { Footer, Header, MainBlock } from "./components";

function App() {
  return (
    <article className={styles.app}>
      <Header />
      <MainBlock>
        <Outlet />
      </MainBlock>
      <Footer />
    </article>
  );
}

export default App;
