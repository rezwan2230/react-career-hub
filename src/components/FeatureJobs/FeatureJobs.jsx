import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState([4])
   

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])


    return (
        <div className="text-center">
            <h2 className="text-5xl font-semibold">Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={jobs.length===dataLength && "hidden"}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary my-7">See all jobs</button>
            </div>
        </div>
    );
};

export default FeatureJobs;