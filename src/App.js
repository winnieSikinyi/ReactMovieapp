import './App.css';
import GetMovies from './components/GetMovies';
import ImageContainer from './atoms/ImageContainer';
import NavigationBar from './components/GetMovies/NavigationBar/nav';



function App() {
  return (
    <div>
      <NavigationBar/>
      < getCategories/>
      <GetMovies/>
      {/* <ImageContainer/> */}
    </div>
  );
}
export default App;


