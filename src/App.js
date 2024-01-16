import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import projData from "./ProjectsData.js"

function App() {

  let projs = projData.map(data => {
    return(
      <Project
        key={data.id}
        styles={data.styles}
        dets={data.details}
      />
    )
  })

  return(
    <div className="page1">
      <Navbar />
      <Home />
      <div>
        <h1 id='myProj'>My Projects</h1>
      </div>

      {projs}
    </div>
  )
}

export default App;
