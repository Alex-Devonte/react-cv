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
    <div id="page-container">
      <div id="forms-container">
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
      </div>
      <div id="resume-container">
        <Resume
          generalInfo ={generalInfo}
          experienceInfo={experienceInfo}
          educationInfo={educationInfo}
        />
      </div>
    </div>
  )
}

export default App