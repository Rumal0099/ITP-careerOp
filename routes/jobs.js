const express =require('express');
const jobs = require('../models/jobs');

const router = express.Router();

//---------------create

router.post('/jobs/save', (req,res)=>{
    let newJobs = new jobs(req.body);
    newJobs.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Vacancy saved successfully"
        });
    });
});


//---------------read

router.get('/jobs', (req,res)=>{
    jobs.find().exec((err,jobs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingJobs:jobs
        });
    });
});


//--------------read specific job

router.get("/jobs/:id",(req,res) =>{

    let jobsId = req.params.id;

    jobs.findById(jobsId,(err,jobs) =>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true,
            jobs
        });
    });
});

//--------------update

router.put('/jobs/update/:id',(req,res)=>{
    jobs.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,jobs)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success: "Update Successful"
            });
        }
    );
});


//-----------delete

router.delete('/jobs/delete/:id',(req,res) =>{
    jobs.findByIdAndRemove(req.params.id).exec((err,deletedjobs) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });

        return res.json({
            message:"Delete Successful",deletedjobs
        });
    });
});


module.exports = router;