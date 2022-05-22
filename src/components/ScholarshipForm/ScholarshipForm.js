import React from 'react'
import { Container, Form, Field, SubmitButton } from './ScholarshipForm.elements'

const ScholarshipForm = () => {
  return (
    <>
        <Container>
            <Form>
                <Field>
                    <h3>Name</h3>
                    <input name="first_name" />
                    <h6>First Name</h6>
                </Field>

                <Field>
                    <h3>-</h3>
                    <input name="last_name" />
                    <h6>Last Name</h6>
                </Field>

                <Field>
                <h3>Email</h3>
                    <input name="email" />
                    <h6>example@example.com</h6>
                </Field>
            </Form>

            <SubmitButton type="submit"> Submit Application </SubmitButton>
        </Container>
    </>
  )
}

export default ScholarshipForm