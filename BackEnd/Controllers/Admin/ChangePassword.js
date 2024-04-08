import Admin from "../../Models/AdminModel.js";

function ChangePassword(req,res){
  const adminId=req.user.adminId;
  const oldPassword=req.oldPassword;
  const newPassword=req.newPassword;
  Admin.findOneAndUpdate({_id:adminId,password:oldPassword},{$set:{password:newPassword}},{new:true}).then((updatedDocument)=>{
    console.log(updatedDocument);
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