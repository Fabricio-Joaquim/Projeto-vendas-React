import NavBar from './components/NavBar/'
import Footer from './components/Footer'
import DataTable from './components/DataTable'

function App() {
  return (
    <div className="container">
          <NavBar/>
          <h1 className="text-primary">iriri</h1>
      <DataTable/>
  <Footer/>
    </div>
  );
}

export default App;
