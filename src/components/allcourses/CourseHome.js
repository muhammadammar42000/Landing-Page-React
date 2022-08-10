import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'


export default function CourseHome() {
    return (
        <>
            <Back title='Explore Courses' />
            <CoursesCard />
            <OnlineCourses />
        </>
    )
}
