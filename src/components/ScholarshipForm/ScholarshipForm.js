import React, {useState} from 'react'
import { db, storage } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from  'uuid'
import { Container, Form, Field, SubmitButton, Input, FileInput, FormWrapper } from './ScholarshipForm.elements'

//TODO: set required fields, do not let user hit submit if fields/uploads are not filled out
//TODO: style the forms correctly

const ScholarshipForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [resume, setResume] = useState(null);
  const [statement, setStatement] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [reference, setReference] = useState("");
  const [loader, setLoader] = useState(false)

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      setLoader(true)

      const resumeRef = ref(storage, `resumes/${resume.name + v4()}`)
      const statementRef = ref(storage, `statements/${statement.name + v4()}`)
      const scheduleRef = ref(storage, `schedules/${schedule.name + v4()}`)

      const docRef = await addDoc(collection(db, "scholarship-application"), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            college: college,
            year: year,
            reference: reference,
      }).then(() => {
        uploadBytes(resumeRef, resume)
        uploadBytes(statementRef, statement)
        uploadBytes(scheduleRef, schedule)  
      })
      .then(() => {
          alert("Your Application has been submitted! We will reach out to you by email if you're being considered.")
          setLoader(false)
      })
      .then(() => {
          window.location.href="https://thinkr.online";  
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
      setResume(null)
      setStatement(null)
      setSchedule(null)
  }


  return (
    <>
        <Container>
            <FormWrapper>
            <Form onSubmit={handleSubmit}>

                <Field>
                    <h4>Name</h4>
                    <Input required name="first_name"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <h5>First Name</h5>
                </Field>

                <Field>
                    <h4 style={{color: 'white'}}>-</h4>
                    <Input required name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <h5>Last Name</h5>
                </Field>

                <Field>
                    <h4>College Email</h4>
                    <Input required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>example@college.com</h5>
                </Field>

                <Field>
                    <h4>Phone Number</h4>
                    <Input required name="phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <h5>Ex: 555-555-5555</h5>
                </Field>

                <Field>
                    <h4>College of Attendance</h4>
                    <Input required name="college" value={college} onChange={(e) => setCollege(e.target.value)} />
                    <h5>Example University</h5>
                </Field>

                <Field>
                    <h4>Academic Year</h4>
                    <Input requried name="year" value={year} onChange={(e) => setYear(e.target.value)} />
                    <h5>Ex: Freshman</h5>
                </Field>

            <h3>Experience / Whats your why?</h3>
            <h3></h3>
       
                <Field>
                    <h4>Resume</h4>
                    <FileInput required name="resume" type="file" onChange={(e) => setResume(e.target.files[0])} />
                    <h5>PDF / .Docx</h5>
                </Field>

                <Field>
                    <h4>Statement of Interest</h4>
                    <FileInput required name="statement" type="file" onChange={(e) => setStatement(e.target.files[0])} />
                    <h5>1,000 word minimum</h5>
                </Field>
            

            <h3>Proof of Enrollment</h3>
            <h3></h3>

                <Field>
                    <h4>Reference Email</h4>
                    <Input required name="reference" value={reference} onChange={(e) => setReference(e.target.value)} />
                    <h5>Professor or Advisor at current college</h5>
                </Field>

                <Field>
                    <h4>Current Class Schedule</h4>
                    <FileInput required id="schedule" name="schedule" type="file" onChange={(e) => setSchedule(e.target.files[0])} />
                    <h5>Image or PDF</h5>
                </Field>

                <SubmitButton
                    type="submit" 
                    style={{ background: loader ? "#ccc" : "#49BA6F"}}> Submit Application 
                 </SubmitButton>

                </Form>
            </FormWrapper>
        </Container>
    </>
  )
}

export default ScholarshipForm