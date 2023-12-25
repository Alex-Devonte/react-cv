import PropTypes from 'prop-types'
import '../styles/styles.css'
import { useState } from 'react';

General.propTypes = {
    generalInfo: PropTypes.object.isRequired,
    setGeneralInfo: PropTypes.func.isRequired,
};

function General({generalInfo, setGeneralInfo}) {
    const [isSaved, setIsSaved] = useState(false);
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        //Destructuring the 'name' & 'value' properties from the event target
        const {name, value} = e.target;

        //Update 'generalInfo' object by creating new object with existing data
        const updatedGeneralInfo = {...generalInfo, [name]: value};
        setGeneralInfo(updatedGeneralInfo);
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

    return (
        <>
            <div id="general-form-container" className='form-container'>
                <h2>General Info</h2>
                {!isSaved && editMode ? (
                    <form id="general-info-form">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={generalInfo.firstName}
                            onChange={(e) => handleChange(e)}
                            />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={generalInfo.lastName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={generalInfo.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={generalInfo.phone}
                            onChange={handleChange}
                        />
                        <button type="button" className="save-btn" id="general-save-btn" onClick={handleSubmit}>Save General Info</button>
                    </form>
                ): (
                    <>
                        <p>General Info is saved!</p>
                        <button type="button" className="edit-btn" id="general-edit-btn" onClick={handleEdit}>Edit General Info</button>
                    </>
                )}
            </div>
        </>
    )
}

export default General;