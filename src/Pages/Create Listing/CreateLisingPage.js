import React from 'react'
import InputField from '../../components/InputField/InputField'
import  "./CreateListingPage.css";

const CreateLisingPage = () => {
  return (
    <div>
      <h1>Submit Your Bussines Listing</h1>
      <form >
        <InputField title='Username:' type='text'/>
        <InputField title='Password:' type='password'/>
        <InputField title='Confirm Password:' type='password'/>
        <InputField title='Bussines Name:' type='text'/>
        <InputField title='Company Address:' type='text'/>
        <InputField title='Phone*:' type='text'/>
        <InputField title='Latitude*:' type='text'/>
        <InputField title='Longitude*:' type='text'/>
        <label for='description'>Description*:</label>
        <textarea id='description' name='discription' required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateLisingPage
