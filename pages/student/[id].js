import { useRouter } from 'next/router'
import React from 'react'
import getStudents from '../../components/student'

const Student = () => {
    const router = useRouter()
    const { id } = router.query
    const students = getStudents()

    const selectedStudents = students.filter(student => student.id == id)

    console.log(students, selectedStudents, id)

    return (
        <>
            <h1>Student Information</h1>
            <h2>{selectedStudents[0]?.name}</h2>
            <p>Student: {id}</p>
        </>
    )
}

export default Student