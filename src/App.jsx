import { useState } from 'react'
import General from './components/General'
import Resume from './components/Resume'
import Experience from './components/Experience'

function App() {
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phone: ''});
  const [experienceInfo, setExperienceInfo] = useState({
    jobs: [
      {
        jobTitle: '',
        companyName: '',
        jobDate: '',
        duties: [],
      }
    ],
  });
  

  return (
    <>
      <Resume 
        generalInfo ={generalInfo}
        experienceInfo={experienceInfo}
      />

      <General
        generalInfo ={generalInfo} 
        setGeneralInfo={setGeneralInfo} 
      />

      <Experience 
        experienceInfo={experienceInfo} 
        setExperienceInfo={setExperienceInfo}
      />
    </>
  )
}

export default App