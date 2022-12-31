import './components/css/App.css'
import NavBar from './components/js/NavBar'
import Introduction from './components/js/Introduction'
import Skills from './components/js/Skills'
import MyWork from './components/js/MyWork'


function App() {
  return (
    <div class="NavBar">
    <NavBar />
    <Introduction />
    <Skills />
    <MyWork />
  </div>


  );
}

export default App;

