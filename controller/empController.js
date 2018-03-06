let mongoose=require('../config/databaseConfig');
let {empModel}=require('../model/empModel');
exports.getAll=(req,res)=>{
    empModel.find({isDel:true}).then((emp)=>{

        if(!emp)
        {
            res.status(401).send("dept not found");
        }
        res.send(emp);

    }).catch((err)=>{
        res.send(err);
    })
};
exports.getOne=(req,res)=>{
    empModel.findOne({_id:req.params.id,isDel:true}).then((emp)=>{
        if(!emp)
        {
            res.status(401).send("dept not found");
        }
        res.send(emp);
    }).catch((err)=>{
        res.send(err);
    })
};
exports.insert=(req,res)=>{

    var emp=new empModel({
        deptId:req.body.deptId,
        empName:req.body.empName,
        empGender:req.body.empGender,
        empHobby:req.body.empHobby,
        empDesignation:req.body.empDesignation,
        empSalary:req.body.empSalary
    });
    emp.save().then((emp)=>{
        if(!emp)
        {
            res.status(401).send("dept not found");
        }
        res.send(emp);
    }).catch((err)=>{
        res.send(err);
    });
};
exports.update=(req,res)=>{
    empModel.findOneAndUpdate({_id:req.params.id,isDel:true},{
        $set:{
            deptId:req.body.deptId,
            empName:req.body.empName,
            empGender:req.body.empGender,
            empHobby:req.body.empHobby,
            empDesignation:req.body.empDesignation,
            empSalary:req.body.empSalary
        }
    }).then((emp)=>{

        if(!emp)
        {
            res.status(404).send("dept not found");
        }
        res.send(emp);
    }).catch((err)=>{
        res.send(err);
    });
};
exports.delete=(req,res)=>{
    empModel.findOneAndUpdate({_id:req.params.id,isDel:true},{
        $set:{
            isDel:false
        }
    }).then((emp)=>{
        if(!emp)
        {
            res.status(401).send("dept not found");
        }
        res.send(emp);
    }).catch((err)=>{
        res.send(err);
    });
};