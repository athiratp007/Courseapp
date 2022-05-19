import React, { useState } from 'react'
import Nave from './Nave'

const CourseEntry = () => {
    var[CourseTitle,setTitle]=useState("")
    var[courseDuration,setDuration]=useState("")
    var[courseDescription,setDescription]=useState("")
    var[courseVenue,setVenue]=useState("")
    var[courseDate,setDate]=useState("")
    const subData=()=>{
        const data={"courseTitle":CourseTitle,"courseDuration":courseDuration,"courseDescription":courseDescription,"courseVenue":courseVenue,"courseDate":courseDate}
       console.log(data)
    }

  return (
    <div>
        <Nave/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">CourseTitle</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">CourseDuration</label>
                    <input onChange={(e)=>{setDuration(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">CourseDescription</label>
                    <textarea onChange={(e)=>{setDescription(e.target.value)}} name="" id="" cols="10" rows="5" class="form-control"></textarea>

                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">CourseVenue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" name="" id="" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <button onClick={subData} class=" btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default CourseEntry