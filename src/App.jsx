import DisplayDiffculty from "./DisplayDifficulty/DisplayDifficulty";
import MenuList from "./MenuList/MenuList";
import s from "./style.module.css";
function App() {
  return (
    <>
    <h1>Select react difficulty</h1>
    <div className={s.homePage}>
      
      <MenuList></MenuList>
      <DisplayDiffculty difficulty="low"></DisplayDiffculty>
    </div>
    </>
  );
}

export default App;
