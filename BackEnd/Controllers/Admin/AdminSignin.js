import Admin from "../../Models/AdminModel.js";
import jwt from "jsonwebtoken";
import secretKey from "../../SecretKey.js";

async function adminSignin(req, res) {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ name: username, password: password });

    if (admin) {
      const token = jwt.sign({ adminId: admin._id, D_id: admin.Department_id }, secretKey, { expiresIn: '10h' });
      res.json({ isValid: true, token: token });

    } else {
      res.json({ isValid: false });
    }
  } catch (error) {
    console.error("Error during admin sign-in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default adminSignin;
