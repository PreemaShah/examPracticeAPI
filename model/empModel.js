let mongoose=require('mongoose');
var empSchema=mongoose.Schema;
var emp=new empSchema({
    deptId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['deptDetails'],
        required:true
    },
    empName:{
      type:String,
      required:true
    },
    empGender:{
        type:String,
        required:true
    },
    empHobby:{
        type:Array,
        required:true
    },
    empDesignation:{
        type:String,
        required:true
    },
    empSalary:{
        type:Number,
        required:true
    },
    isdel:{
        type:Boolean,
        default:true
    }
});
let empModel=mongoose.model('empDetails',emp);
module.exports={empModel};