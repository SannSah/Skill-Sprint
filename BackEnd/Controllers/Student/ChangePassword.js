import User from "../../Models/UserModel.js";

function ChangePassword(req,res){
  const rollNo=req.rollNo;
  const oldPassword=req.body.oldPassword;
  console.log(oldPassword);
  const newPassword=req.body.newPassword;
  console.log(newPassword);
  User.findOneAndUpdate({username:rollNo,password:oldPassword},{$set:{password:newPassword}},{new:true}).then((updatedDocument)=>{
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