const mongoose = require('mongoose');

const jobsScheme = new mongoose.Schema({

    companyname:{
        type:String,
        required:true
    },

    vactype:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    
    contactno:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('jobs', jobsScheme);