import '../styles/resume.css'
import PropTypes from 'prop-types'

Resume.propTypes = {
    generalInfo: PropTypes.object.isRequired,
    experienceInfo: PropTypes.object.isRequired,
    educationInfo: PropTypes.object.isRequired
};

function Resume({generalInfo, experienceInfo, educationInfo}) {
    const fullName = generalInfo.firstName + ' ' + generalInfo.lastName;

    return (
        <div id="resume">
            <section className="general-section">
                <h1 className="name">{fullName.trim() || 'John Doe'}</h1>
                <div className="contact-info">
                    <div className="phone-info">{generalInfo.phone ||  '555-555-5555'}</div>
                    <div className="email-info">{generalInfo.email || 'email@gmail.com'}</div>
                </div>
            </section>
            <section className="experience-section">
                <h2 className="section-header">Experience</h2>
                {experienceInfo.jobs.map((job, key) => {
                    const jobDates = job.dateFrom + ' - ' + job.dateTo;
                    return (
                        <div key={key} className="job">
                            <p className="job-title">{job.jobTitle || 'Title'}</p>
                            <p className="company-name">{job.companyName || 'Company Name'}</p>
                            <p className="job-date">{jobDates}</p>
                            <ul className="job-duties">
                                {job.duties.map((duty, index) => (
                                     <li key={index} className="duty">
                                     {duty || 'Task ' + (index + 1)}
                                   </li>
                                ))}
                            </ul>
                        </div>
                    )}       
                )}
            </section>
            <section className="education-section">
                <h2 className="section-header">Education</h2>
                {educationInfo.education.map((education, key) => {
                    return (
                        <div key={key} className="education">
                            <p className="school">{education.schoolName || 'School/University'}</p>
                            <p className="degree">{education.degree || 'Degree/Field of Study'}</p>
                            <p className="location">{education.location || 'Location'}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Resume;