import { useState } from "react";
import useInput from "./hooks/use-input";
import GenderSelection from '../components/hooks/GenderSelection'
import GovtIdSelection from "../components/hooks/GovtIdSelection";

import CountrySelection from "./hooks/CountrySelection";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.includes(".");



const BasicForm = (props) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedIdType, setSelectedIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');

  

  const MIN_USERNAME_LENGTH = 3;

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(isEmail);

  const {
    value: mobValue,
    isValid: mobValueIsvalid,
    hasError: mobHasError,
    valueChangeHandler: mobChangeHandler,
    inputBlurHandler: mobBlurHandler,
    reset: resetmobile,
  } = useInput(isNotEmpty)

  const {
    value: dobValue,
    isValid: dobIsvalid,
    hasError: dobHasError,
    valueChangeHandler: dobChangeHandler,
    inputBlurHandler: dobBlurHandler,
    reset: resetdob,
  } = useInput(isNotEmpty)

  const {
    value: streetValue,
    isValid: streetIsvalid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetstreet,
  } = useInput(isNotEmpty)

  const {
    value: cityValue,
    isValid: cityIsvalid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetcity,
  } = useInput(isNotEmpty)

  const {
    value: stateValue,
    isValid: stateIsvalid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetstate,
  } = useInput(isNotEmpty)

  const {
    value: postalCodeValue,
    isValid: postalCodeIsvalid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetpostalcode,
  } = useInput(isNotEmpty)

  
  

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid && mobValueIsvalid
    && dobIsvalid && streetIsvalid && cityIsvalid && stateIsvalid &&
    postalCodeIsvalid) {
    formIsValid = true;
  }

  const formHandler =  async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    //  Database
    try {
      const response = await fetch('http://localhost:3000/Onito-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstNameValue,
          lastName: lastNameValue,
          email: emailValue,
          mobile: mobValue,
          dob: dobValue,
          gender: selectedGender,
          idType: selectedIdType,
          idNumber: idNumber,
          street: streetValue,
          city: cityValue,
          state: stateValue,
          postal: postalCodeValue
          // Include other form data here
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      const responseData = await response.json();
      console.log('Form data submitted successfully:', responseData);

      // Reset form values
      resetFirstName();
      resetlastName();
      resetemail();
      resetmobile();
      resetdob();
      resetstreet();
      resetcity();
      resetstate();
      resetpostalcode();
      
     
      // Reset other components if needed

    } catch (error) {
      console.error('Error submitting form data:', error.message);
      // Handle error (display a message to the user, etc.)
    }

    console.log("Submitted");
    console.log(firstNameValue, lastNameValue, emailValue, mobValue, dobValue,
      streetValue, cityValue, stateValue, postalCodeValue);
    resetFirstName();
    resetlastName();
    resetemail();
    resetmobile();
    resetdob();
    resetstreet();
    resetcity();
    resetstate();
    resetpostalcode();
  };
  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const mobnumberClasses = mobHasError
  ? "form-control invalid"
    : "form-control";
  
  const dobClasses = dobHasError ? "form-control invalid" : "form-control";
  const streetClasses = streetHasError ? "form-control invalid" :
    "form-control";
  const cityClasses = cityHasError ? "form-control invalid" : "form-control";

 
  // -------------------------------------------
  // gender
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    // You can perform additional actions with the selected gender if needed
  };

  // Aadhar 
  const handleIdTypeChange = (idType) => {
    setSelectedIdType(idType);
  };

  const handleIdNumberChange = (newIdNumber) => {
    setIdNumber(newIdNumber);
  };

  
  return (
    <form onSubmit={formHandler}>
      <h2>Personal Details</h2>
      <div className="control-group">
      
        <div className={firstNameClasses}>
          
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {/* {enteredName.length >= MIN_USERNAME_LENGTH && (
        <p>Valid enteredName: {enteredName}</p>
      )}  */}
          {firstNameHasError && (
            <p className="error-text">Please Enter First Name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
        {lastNameHasError && (
          <p className="error-text">Please Enter last Name</p>
        )}
      

      <div className={mobnumberClasses}>
          <label htmlFor="number">Mobile</label>
          <input
            type="tel"
            pattern="[0-9]{10}" required
            id="number"
            value={mobValue}
            onChange={mobChangeHandler}
            onBlur={mobBlurHandler}
          />
        </div>
        {mobHasError && (
          <p className="error-text">Please Enter last Name</p>
        )}

      <div className={dobClasses}>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="date"
          value={dobValue}
          onChange={dobChangeHandler}
          onBlur={dobBlurHandler}
        />
        {dobHasError && (
          <p className="error-text">Please Enter valid DOB</p>
        )}
        </div>

        <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please Enter valid Email</p>
          )}
        </div>
        <div className={emailClasses}>
          
          <GenderSelection onGenderChange={handleGenderChange} />
        </div>
        <div className={emailClasses}>
        <GovtIdSelection
        onIdTypeChange={handleIdTypeChange}
        onIdNumberChange={handleIdNumberChange}
      />
        </div>

        <div className={streetClasses}>
          <h2>Address Details</h2>
          
          <label>
          Street:
          <input
          type="text"
          name="street"
          value={streetValue}
              onChange={streetChangeHandler}
              onBlur={streetBlurHandler}
          placeholder="Enter Street"
            />
            {streetHasError && (
          <p className="error-text">Please Enter valid Street</p>
          )}
      </label>

      <label>
        City:
        <input
          type="text"
          name="city"
          value={cityValue}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
          placeholder="Enter City"
            />
            {cityHasError && (
          <p className="error-text">Please Enter valid City</p>
          )}
      </label>

        <label>
          State:
          <input
            type="text"
            name="state"
            value={stateValue}
            onChange={stateChangeHandler}
              onBlur={stateBlurHandler}
            placeholder="Enter State"
            />
        </label>

        <label>
          Postal Code:
          <input
            type="number"
            name="postalCode"
            value={postalCodeValue}
            onChange={postalChangeHandler}
              onBlur={postalBlurHandler}
            placeholder="Enter Postal Code"
          />
        </label>
          
        <CountrySelection />
        </div>
       
      </div>
      

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
