import React, { useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
const AdmissionForm = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const [dob, setDob] = useState("");

    const changeHandler = value => {
        setValue(value)
    }
    const [gender, setGender] = useState("");

    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        phoneNumber: '',
        email: '',
        citizenshipStatus: '',
        emergencyContactName: '',
        emergencyContactRelationship: '',
        emergencyContactPhone: '',
        previousEducation: '',
        educationLocation: '',
        testScores: '',
        achievements: '',
        extracurricularActivities: '',
        programOfInterest: '',
        intendedMajor: '',
        academicGoals: '',
        counselingReason: '',
        counselingChallenges: '',
        counselingExperience: '',
        allergies: '',
        medicalHistory: '',
        mentalHealthHistory: '',
        wellnessNeeds: '',
        financialAidRequirements: '',
        scholarshipsAppliedFor: '',
        abilityToPay: '',
        legalGuardianName: '',
        legalGuardianRelationship: '',
        legalGuardianContact: '',
        legalIssues: '',
        compliance: '',
        languageProficiency: '',
        housingPreferences: '',
        specialAccommodations: '',
        consent: false,
        languageProficiency: {
            marathi: false,
            hindi: false,
            english: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                languageProficiency: {
                    ...prevData.languageProficiency,
                    [name]: checked,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="container mx-auto p-4 ">
            <h1 className="text-2xl font-bold mb-4 flex  justify-center text-purple-500">Student Counseling and Admission Information Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="mb-4">
                    <label className='p-3  '>Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="border p-1 mb-5"
                        required
                    />
                    <div className="flex  mb-3">
                        <label className="text-sm mb-1" >Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="flex  mb-3">
                        <label className="text-sm mb-1" >Gender</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="px-4 py-2 border rounded-lg"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <label className='p-3'>Address:</label>

                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border p-1"
                        required
                    />
                    <label className='p-3'>PhoneNumber:</label>

                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border p-1"
                        required
                    />
                    <br />
                    <div className='flex items-center p-3 '>
                        <label className='p-3'>Citizenship/Residency Status : </label>
                        <Select className='w-40' options={options} value={value} onChange={changeHandler} />
                    </div>
                    <label className='p-3 '>Citizenship Status:</label>

                    <input
                        type="citizenshipStatus"
                        id="citizenshipStatus"
                        name="citizenshipStatus"
                        value={formData.citizenshipStatus}
                        onChange={handleChange}
                        className="border p-1 mb-3"
                        required
                    />
                    <label className='p-3 '>Emergency Contact Name:</label>

                    <input
                        type="text"
                        id="emergencyContactName"
                        name="emergencyContactName"
                        value={formData.emergencyContactName}
                        onChange={handleChange}
                        className="border p-1 mb-3"
                        required
                    />
                    <label className='p-3 '>Emergency Contact Relationship:</label>

                    <input
                        type="tel"
                        id="emergencyContactRelationship"
                        name="emergencyContactRelationship"
                        value={formData.emergencyContactRelationship}
                        onChange={handleChange}
                        className="border p-1 mb-3"
                        required
                    />
                    <label className='p-3 '>Emergency Contact Phone:</label>

                    <input
                        type="tel"
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        value={formData.emergencyContactPhone}
                        onChange={handleChange}
                        className="border p-1"
                        required
                    />
                    <label className='p-3 '>Previous Education:</label>

                    <input
                        type="text"
                        id="previousEducation"
                        name="previousEducation"
                        value={formData.previousEducation}
                        onChange={handleChange}
                        className="border p-1 mb-3"
                        required
                    />
                    <label className='p-3 '>Education Location:</label>

                    <input
                        type="text"
                        id="educationLocation"
                        name="educationLocation"
                        value={formData.educationLocation}
                        onChange={handleChange}
                        className="border p-1 mb-3"
                        required
                    />
                    <label className='p-3 '>testScores:</label>

                    <input
                        type="number"
                        id="testScores"
                        name="testScores"
                        value={formData.testScores}
                        onChange={handleChange}
                        className="border p-1 mb-3"
                        required
                    />
                </div>

                {/* Academic Background */}
                <div className="mb-4">
                    <label htmlFor="previousEducation">Previous Education History:</label>
                    <input
                        type="text"
                        id="previousEducation"
                        name="previousEducation"
                        value={formData.previousEducation}
                        onChange={handleChange}
                        className="border p-1"
                        required
                    />
                    {/* Add other academic background fields similarly */}
                </div>

                {/* Program of Interest */}
                <div className="mb-4">
                    <label htmlFor="programOfInterest">Program of Interest:</label>
                    <input
                        type="text"
                        id="programOfInterest"
                        name="programOfInterest"
                        value={formData.programOfInterest}
                        onChange={handleChange}
                        className="border p-1"
                        required
                    />
                    {/* Add other program of interest fields similarly */}
                </div>
                <div className=' flex w-full items-center m-3 '>
                    <h6 className='p-3'>Country</h6>
                    <CountrySelect
                        onChange={(e) => {
                            setCountryid(e.id);
                        }}
                        placeHolder="Select Country"

                    />
                    <h6 className='p-3'>State</h6>
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                            setstateid(e.id);
                        }}
                        placeHolder="Select State"
                    />
                    <h6 className='p-3'>City</h6>
                    <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        onChange={(e) => {
                            console.log(e);
                        }}
                        placeHolder="Select City"
                    />
                </div>
                {/* Consent and Authorization */}
                <div>
                    <label>Language Proficiency:</label>
                    <div className="flex flex-wrap">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="marathi"
                                checked={formData.languageProficiency.marathi}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Marathi</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="hindi"
                                checked={formData.languageProficiency.hindi}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Hindi</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="english"
                                checked={formData.languageProficiency.english}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">English</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <label >I hereby consent to the use of my personal data...</label>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default AdmissionForm;
