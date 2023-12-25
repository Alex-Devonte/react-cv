import { useState } from 'react'
import General from './components/General'
import Resume from './components/Resume'
import Experience from './components/Experience'

function App() {
  const [isSaved, setIsSaved] = useState(false);
  const [editMode, setEditMode] = useState(true);

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
        setExperienceInfo={setExperienceInfo}
      />

      <General
        generalInfo ={generalInfo} 
        setGeneralInfo={setGeneralInfo} 
        isSaved={isSaved} 
        setIsSaved={setIsSaved} 
        editMode={editMode} 
        setEditMode={setEditMode}
      />

      <Experience 
        experienceInfo={experienceInfo} 
        setExperienceInfo={setExperienceInfo}
        isSaved={isSaved} 
        setIsSaved={setIsSaved} 
        editMode={editMode} 
        setEditMode={setEditMode}
      />
    </>
  )
}

export default App