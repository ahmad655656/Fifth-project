import Home from './Pages/Home/Home';
import Footer from './Section/Navbar/Footer/Footer';
import Navbar from './Section/Navbar/Navbar';

function App() {
  return (
    <div className="relative m-auto w-maxWidth h-maxHeight">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
