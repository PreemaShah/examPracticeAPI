let mongoose=require('../config/databaseConfig');
let {deptModel}=require('../model/deptModel');
exports.getAll=(req,res)=>{
    deptModel.find({isDel:true}).then((dept)=>{

        if(!dept)
        {
            res.status(401).send("dept not found");
        }
            res.send(dept);

    }).catch((err)=>{
        res.send(err);
        })
};
exports.getOne=(req,res)=>{
    deptModel.findOne({_id:req.params.id,isDel:true}).then((dept)=>{
        if(!dept)
        {
            res.status(401).send("dept not found");
        }
        res.send(dept);
    }).catch((err)=>{
        res.send(err);
    })
};
exports.insert=(req,res)=>{

     var dep=new deptModel({
         deptName:req.body.deptName
     });
    dep.save().then((dept)=>{
        if(!dept)
        {
            res.status(401).send("dept not found");
        }
        res.send(dept);
    }).catch((err)=>{
        res.send(err);
    });
};
exports.update=(req,res)=>{
    deptModel.findOneAndUpdate({_id:req.params.id,isDel:true},{
        $set:{
            deptName:req.body.deptName
        }
    }).then((dept)=>{

        if(!dept)
        {
            res.status(404).send("dept not found");
        }
        res.send(dept);
    }).catch((err)=>{
        res.send(err);
    });
};
exports.delete=(req,res)=>{
    deptModel.findOneAndUpdate({_id:req.params.id,isDel:true},{
        $set:{
            isDel:false
        }
    }).then((dept)=>{
        if(!dept)
        {
            res.status(401).send("dept not found");
        }
        res.send(dept);
    }).catch((err)=>{
        res.send(err);
    });
};