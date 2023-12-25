import PropTypes from 'prop-types'
import '../styles/styles.css'
import { useState } from 'react';

Experience.propTypes = {
    experienceInfo: PropTypes.object.isRequired,
    setExperienceInfo: PropTypes.func.isRequired,
};

function Experience({experienceInfo, setExperienceInfo}) {
    const [isSaved, setIsSaved] = useState(false);
    const [editMode, setEditMode] = useState(true);

    const handleJobChange = (e, jobId) => {
        const {name, value} = e.target; 

        //Update jobs array in experienceInfo prop
        const updatedJobs = experienceInfo.jobs.map((job) => 
            job.id === jobId ? {...job, [name]: value} : job
        );            
        
        setExperienceInfo((prevExperience) => ({
            ...prevExperience,
            jobs: updatedJobs,
        }));                
    }
   
    const handleEdit = () => {
        setEditMode(true);
        setIsSaved(false);
    }

    const handleSubmit = () => {
        setEditMode(false);
        setIsSaved(true);
    }

    //Create new job object to be added to the 'experienceInfo' jobs array
   const addJob = () => {
        const newJob = {
            id: experienceInfo.jobs.length + 1,
            jobTitle: '',
            companyName: '',
            dateFrom: '',
            dateTo: '',
            duties: [''],
        };
  
        setExperienceInfo((prevExperience) => ({
            ...prevExperience,
            jobs: [...prevExperience.jobs, newJob],
        }));
   }

   const renderJobField = (job, key) => {
        return (
            <div key={key} className="jobField">
                <input type="text" name="jobTitle" placeholder="Job title..." onChange={(e) => handleJobChange(e, job.id)} value={job.jobTitle}/>
                <input type="text" name="companyName" placeholder="Company name..." onChange={(e) => handleJobChange(e, job.id)} value={job.companyName}/>
                <label htmlFor="dateFrom">From</label>
                <input type="date" name="dateFrom" onChange={(e) => handleJobChange(e, job.id)} value={job.dateFrom}/>
                <label htmlFor="dateTo">To</label>
                <input type="date" name="dateTo" onChange={(e) => handleJobChange(e, job.id)} value={job.dateTo}/>
                <textarea name="duty" placeholder="Duty..." onChange={(e) => handleJobChange(e, job.id)} value={job.duties}/>
                <button type="button" className="add-duty-button">Add job duty</button>
            </div>
        )
   }
   
    return (
        <>
            <div id="experience-form-container" className="form-container">
                <h2>Experience Info</h2>
                {!isSaved && editMode ? (
                    <form id="experience-form">
                        {experienceInfo.jobs.map((job, key) => { 
                            return (renderJobField(job, key));
                        })}
                        <button type="button" className="add-job-button" onClick={addJob}>Add Job</button>
                        <button type="button" className="save-btn" id="experience-save-btn" onClick={handleSubmit}>Save Experience Info</button>
                    </form>
                ): (
                    <>
                        <p>Experience Info is saved!</p>
                        <button type="button" className="edit-btn" id="experience-edit-btn" onClick={handleEdit}>Edit Experience Info</button>
                    </>
                )}
            </div>
        </>
    )
}

export default Experience;