import PropTypes from 'prop-types'
import '../styles/styles.css'

Experience.propTypes = {
    experienceInfo: PropTypes.object.isRequired,
    setExperienceInfo: PropTypes.func.isRequired,
    isSaved: PropTypes.bool.isRequired,
    setIsSaved: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired,
    setEditMode: PropTypes.func.isRequired
};

function Experience({experienceInfo, setExperienceInfo, isSaved, setIsSaved, editMode, setEditMode}) {
    return (
        <>
            <div id="experience-form-container" className="form-container">
                <h2>Experience Info</h2>
            </div>
        </>
    )
}

export default Experience;