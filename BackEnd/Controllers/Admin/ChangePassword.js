import Admin from "../../Models/AdminModel.js";

function ChangePassword(req,res){
  const adminId=req.user.adminId;
  
  const oldPassword=req.body.oldPassword;
  const newPassword=req.body.newPassword;
  console.log(adminId);
  console.log(oldPassword);
  console.log(newPassword);
  Admin.findOneAndUpdate({_id:adminId,password:oldPassword},{$set:{password:newPassword}},{new:true}).then((updatedDocument)=>{
    if(updatedDocument){
      res.json({passwordChanged:true});
    }else{
      res.json({passwordChanged:false});
    }
  }).catch((err)=>{
    console.log(err);
  })
}
export default ChangePassword;