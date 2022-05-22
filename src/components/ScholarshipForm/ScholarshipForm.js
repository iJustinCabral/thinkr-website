import React, {useState} from 'react'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { Container, Form, Field, SubmitButton } from './ScholarshipForm.elements'

const ScholarshipForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false)

  const handleSubmit = async (e) => {
      e.preventDefault();

      setLoader(true)

      const docRef = await addDoc(collection(db, "scholarship-application"), {
            firstName: firstName,
            lastName: lastName,
            email: email,
      })
      .then(() => {
          alert("Your Application has been submitted!")
          setLoader(false)
      })
      .catch(error => {
          alert(error.message)
          setLoader(false)
      })

      setFirstName('')
      setLastName('')
      setEmail('')
  }


  return (
    <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Field>
                    <h3>Name</h3>
                    <input name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <h6>First Name</h6>
                </Field>

                <Field>
                    <h3>-</h3>
                    <input name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <h6>Last Name</h6>
                </Field>

                <Field>
                <h3>Email</h3>
                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h6>example@example.com</h6>
                </Field>
            </Form>

            <SubmitButton 
                type="submit" 
                onClick={handleSubmit}
                style={{ background: loader ? "#ccc" : "#C13A2C"}}> Submit Application </SubmitButton>
        </Container>
    </>
  )
}

export default ScholarshipForm