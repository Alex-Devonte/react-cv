import { useState } from 'react'
import General from './components/General'
import Resume from './components/Resume'
import Experience from './components/Experience'
import Education from './components/Education';

function App() {
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phone: ''});

  const [experienceInfo, setExperienceInfo] = useState({
    jobs: [
      {
        id: 1,
        jobTitle: '',
        companyName: '',
        dateFrom: '',
        dateTo: '',
        duties: [''],
      }
    ],
  });

  const [educationInfo, setEducationInfo] = useState({
    education: [
      {
        id: 1,
        schoolName: '',
        degree: '',
        location: ''
      }
    ]
  });

  return (
    <>
      <Resume 
        generalInfo ={generalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />

      <General
        generalInfo ={generalInfo} 
        setGeneralInfo={setGeneralInfo} 
      />

      <Experience 
        experienceInfo={experienceInfo} 
        setExperienceInfo={setExperienceInfo}
      />

      <Education
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
    </>
  )
}

export default App