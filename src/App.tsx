
import './App.css';

import Navbar from './components/navbar/Navbar';
import HomeComp from './components/homecomp/HomeComp';
import ProjectsComp from './components/projectscomp/ProjectsComp';

function App() {
  
    
  return (
      <div className={`mt-6 base_button`}>
          
      <Navbar />
      <HomeComp />
      <ProjectsComp />
      </div>
  )
}


export default App
