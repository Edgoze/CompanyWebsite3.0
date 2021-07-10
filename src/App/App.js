import './App.css';
import NavBar from '../NavBar/NavBar.js'
import MissionSection from '../MissionSection/MissionSection.js'
import MemberPerksSection from '../MemberPerksSection/MemberPerks.js';
import PatronsSection from '../PatronsSection/PatronsSection.js'
import Footer from '../Footer/Footer.js'

function App() {
  return (
    <div id='App'>
      <NavBar/>
      {/* These anchor tags are necessary for the internal references to land us where we want. Otherwise it lands you, say, halfway
      through the products section. */}
      <a id='Mission' className='anchor'></a>
      <MissionSection/>
      <a id='MemberPerks' className='anchor'></a>
      <MemberPerksSection/>
      <a id='Patrons' className='anchor'></a>
      <PatronsSection/>
      <Footer/>
    </div>
  )
}

export default App;
