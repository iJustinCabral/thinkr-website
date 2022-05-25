import React, {useState} from 'react'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { Container, Form, Field, SubmitButton, Divider } from './ScholarshipForm.elements'

const ScholarshipForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [resume, setResume] = useState("");
  const [reference, setReference] = useState("");




  const [loader, setLoader] = useState(false)

  const handleSubmit = async (e) => {
      e.preventDefault();

      setLoader(true)

      const docRef = await addDoc(collection(db, "scholarship-application"), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            college: college,
            year: year,
            resume: resume,
            reference: reference,
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
      setPhone('')
      setCollege('')
      setYear('')
      setReference('')
  }


  return (
    <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Field>
                    <h4>Name</h4>
                    <input name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <h6>First Name</h6>
                </Field>

                <Field>
                    <h4 style={{color: 'white'}}>-</h4>
                    <input name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <h6>Last Name</h6>
                </Field>

                <Field>
                    <h4>College Email</h4>
                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h6>example@university.com</h6>
                </Field>

                <Field>
                    <h4>Phone Number</h4>
                    <input name="phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <h6>Ex: 555-555-5555</h6>
                </Field>

                <Field>
                    <h4>College of Attendance</h4>
                    <input name="college" value={college} onChange={(e) => setCollege(e.target.value)}/>
                    <h6>Example University</h6>
                </Field>

                <Field>
                    <h4>Academic Year</h4>
                    <input name="year" value={year} onChange={(e) => setYear(e.target.value)}/>
                    <h6>Ex: Freshman</h6>
                </Field>

            </Form>

            <h3>Experience / Whats your why?</h3>
            <Divider/>

            <Form>
                <Field>
                    <h4>Resume</h4>
                    <input name="resume" type="file" value={resume} onChange={(e) => setResume(e.target.value)}/>
                    <h6>PDF / .Docx</h6>
                </Field>

                <Field>
                    <h4>Statement of Interest</h4>
                    <input name="resume" type="file" value={resume} onChange={(e) => setResume(e.target.value)}/>
                    <h6>1,000 word minimum</h6>
                </Field>
            </Form>

            <h3>Proof of Enrollment</h3>
            <Divider/>

            <Form>
                <Field>
                    <h4>Current Class Schedule</h4>
                    <input name="resume" type="file" value={resume} onChange={(e) => setResume(e.target.value)}/>
                    <h6>Image or PDF</h6>
                </Field>

                <Field>
                    <h4>Reference Email</h4>
                    <input name="reference" value={reference} onChange={(e) => setReference(e.target.value)}/>
                    <h6>Must be professor at current college</h6>
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