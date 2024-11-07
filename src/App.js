import './App.css';
import Header from './components/Header';
import Playground from './components/Playground';
import Footer from './components/Footer';
import './input.css';

function App() {
  return (
    <>
    <Header></Header>
    <main>
      Tailwind is used
      <Playground></Playground>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
