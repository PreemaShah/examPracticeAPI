let mongoose=require('mongoose');
var deptSchema=mongoose.Schema;
var dept=new deptSchema({

    deptName:{
        type:String,
        required:true
    },
    isDel:{
        type:Boolean,
        default:true
    }
});
let deptModel=mongoose.model('deptDetails',dept);
module.exports={deptModel};