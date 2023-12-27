import PropTypes from 'prop-types'
import '../styles/styles.css'
import { useState } from "react";

Education.propTypes = {
    educationInfo: PropTypes.object.isRequired,
    setEducationInfo: PropTypes.func.isRequired
};

function Education({educationInfo, setEducationInfo}) {
    const [isSaved, setIsSaved] = useState(false);
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e, educationId) => {
        //Destructuring the 'name' & 'value' properties from the event target
        const {name, value} = e.target;

        const updatedEducation = educationInfo.education.map((education) =>
            education.id === educationId ? {...education, [name]: value} : education
        );

        setEducationInfo((prevEducation) => ({
            ...prevEducation,
            education: updatedEducation
        }));
    }

    //Set the appropriate saved and edit values so the proper info can be rendered
    const handleSubmit = () => {
        setIsSaved(true);
        setEditMode(false);
    }
    
    const handleEdit = () => {
        setIsSaved(false);
        setEditMode(true);
    }

    const renderEducationField = (education, key) => {
        return (
            <div key={key}>
                <input
                    type="text"
                    name="schoolName"
                    placeholder="School / University"
                    value={education.schoolName}
                    onChange={(e) => handleChange(e, education.id)}
                />
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree / Field of study"
                    value={education.degree}
                    onChange={(e) => handleChange(e, education.id)}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={education.location}
                    onChange={(e) => handleChange(e, education.id)}
                />
            </div>
        )
    }

    const addEducation = () => {
        const newEducation = {
            id: educationInfo.education.length + 1,
            schoolName: '',
            degree: '',
            location: ''
        }

        setEducationInfo((prevEducation) => ({
            ...prevEducation,
            education: [...prevEducation.education, newEducation]
        }));
    };

    return (
        <>
            <div id="education-form-container" className='form-container'>
                <h2>Education Info</h2>
                {!isSaved && editMode ? (
                    <form id="education-info-form">
                       {educationInfo.education.map((education, key) => {
                            return (renderEducationField(education, key));
                       })}
                        <button type="button" className="add-education-button" onClick={addEducation}>Add Education</button>
                        <button type="button" className="save-btn" id="education-save-btn" onClick={handleSubmit}>Save Education Info</button>
                    </form>
                ): (
                    <>
                        <p>Education Info is saved!</p>
                        <button type="button" className="edit-btn" id="education-edit-btn" onClick={handleEdit}>Edit Education Info</button>
                    </>
                )}
            </div>
        </>
    )
}

export default Education;