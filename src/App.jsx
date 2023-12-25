import { useState } from 'react'
import General from './components/General'
import Resume from './components/Resume'


function App() {
  const [isSaved, setIsSaved] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phone: ''});

  return (
    <>
      <Resume generalInfo ={generalInfo}/>
      <General generalInfo ={generalInfo} setGeneralInfo={setGeneralInfo} isSaved={isSaved} setIsSaved={setIsSaved} editMode={editMode} setEditMode={setEditMode}/>
    </>
  )
}

export default App