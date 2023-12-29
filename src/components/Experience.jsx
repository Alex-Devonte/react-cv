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

    const handleJobChange = (e, jobId, dutyIndex) => {
        const {name, value} = e.target; 
        //Check if a duty is being changed
        if (name === 'duty') {
            const updatedJobs = experienceInfo.jobs.map((job) =>
            job.id === jobId
              ? {
                  ...job,
                  duties: job.duties.map((duty, index) =>
                    index === dutyIndex ? value : duty
                  ),
                }
              : job
          );
    
          setExperienceInfo((prevExperience) => ({
            ...prevExperience,
            jobs: updatedJobs,
          }));
        } else {
            //Update jobs array in experienceInfo prop
            const updatedJobs = experienceInfo.jobs.map((job) => 
            job.id === jobId ? {...job, [name]: value} : job
            );            

            setExperienceInfo((prevExperience) => ({
            ...prevExperience,
            jobs: updatedJobs,
            }));                
        }  
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

   //Create new duty for specific job
   const addDuty = (jobId) => {
        //Create new jobs array where the duties array of that specific job is updated
        const updatedJobs = experienceInfo.jobs.map((job) =>
        job.id === jobId ? { ...job, duties: [...job.duties, ''] } : job
    );

    setExperienceInfo((prevExperience) => ({
        ...prevExperience,
        jobs: updatedJobs,
    }));
  };

   const renderJobField = (job, key) => {
        return (
            <div key={key} className="job-field">
                <div className="job-title">
                    <input type="text" name="jobTitle" placeholder="Job title..." onChange={(e) => handleJobChange(e, job.id)} value={job.jobTitle}/>
                </div>
                <div className="company-name">
                    <input type="text" name="companyName" placeholder="Company name..." onChange={(e) => handleJobChange(e, job.id)} value={job.companyName}/>
                </div>
                <div className="date-from">
                    <label htmlFor="dateFrom">From</label>
                    <input type="date" name="dateFrom" onChange={(e) => handleJobChange(e, job.id)} value={job.dateFrom || ''}/>
                </div>
                <div className="date-to">
                    <label htmlFor="dateTo">To</label>
                    <input type="date" name="dateTo" onChange={(e) => handleJobChange(e, job.id)} value={job.dateTo || ''}/>
                </div>
                {job.duties.map((duty, index) => {
                    return (
                        <div key={index} className="job-duty">
                            <textarea key={index} name="duty" placeholder="Job duty..." value={duty} onChange={(e) => handleJobChange(e, job.id, index)}/>
                        </div>
                    )
                })}
                <button type="button" className="add-duty-button" onClick={() => addDuty(job.id)}>Add job duty</button>
            </div>
        )
   }
   
    return (
        <>
            <div id="experience-form-container" className="form-container">
                <h2>Experience Info</h2>
                {!isSaved && editMode ? (
                    <form id="experience-info-form">
                        {experienceInfo.jobs.map((job, key) => { 
                            return (renderJobField(job, key));
                        })}
                        <div className="button-container">
                            <button type="button" className="add-job-button" onClick={addJob}>Add Job</button>
                            <button type="button" className="save-btn" id="experience-save-btn" onClick={handleSubmit}>Save Experience Info</button>
                        </div>
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