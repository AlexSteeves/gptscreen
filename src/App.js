import MainPage from "./components/MainPage";
import Research from "./components/Research.js";
function App() {
  return (
    <main className="overscroll-none overflow-hidden w-screen min-h-screen" >
      <div className=" justify-center flex flex-col overscroll-none overflow-hidden">
        <MainPage className="overscroll-none overflow-hidden" />
        <Research className="overscroll-none overflow-hidden" />
      </div>
    </main>
  );
}

export default App;
