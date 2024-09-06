import Home from './Pages/Home/Home';
import Footer from './Section/Navbar/Footer/Footer';
import Navbar from './Section/Navbar/Navbar';

function App() {
  return (
    <div className="relative m-auto overflow-x-hidden no-scrollbar w-maxWidth sm:max-md:w-widthMobile sm:max-md:h-heightMobile h-maxHeight">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
