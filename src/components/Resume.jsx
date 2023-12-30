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
                <div className="header">
                    <h1 className="name">{fullName.trim()}</h1>
                    <div className="contact-info">
                        <div className="phone-info">{generalInfo.phone }</div>
                        <div className="email-info">{generalInfo.email}</div>
                    </div>
                </div>
            </section>
            <section className="experience-section">
                <h2 className="section-header">Experience</h2>
                {experienceInfo.jobs.map((job, key) => {
                    //Conditionally add hyphen to date if both 'from' & 'to' are set
                    const jobDates = job.dateFrom && job.dateTo ? job.dateFrom + ' - ' + job.dateTo : job.dateFrom || job.dateTo;
                    return (
                        <div key={key} className="job">
                            <p className="job-title">{job.jobTitle}</p>
                            <p className="company-name">{job.companyName}</p>
                            <p className="job-date">{jobDates}</p>
                            <ul className="job-duties">
                                {job.duties
                                    //Filter out empty duties
                                    .filter((duty) => duty.trim() !== '')
                                    .map((duty, index) => (
                                        <li key={index} className="duty">
                                            {duty}
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
                            <p className="school">{education.schoolName}</p>
                            <p className="degree">{education.degree}</p>
                            <p className="location">{education.location}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Resume;