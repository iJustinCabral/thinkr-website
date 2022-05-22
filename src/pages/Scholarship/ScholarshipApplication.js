import React from 'react'
import ScholarshipInfoHeader from '../../components/ScholarshipInfoHeader/ScholarshipInfoHeader'
import ScholarshipForm from '../../components/ScholarshipForm/ScholarshipForm'

const ScholarshipApplication = () => {
  return (
    <>
        <ScholarshipInfoHeader txt={"Lovelace Scholarship Application"}/>
        <ScholarshipForm />
    </>
  )
}

export default ScholarshipApplication