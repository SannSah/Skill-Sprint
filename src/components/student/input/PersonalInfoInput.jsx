import { useContext, useState } from "react";
import StudentInputStyle from "../StudentInput.module.css";
import { StudentInputInfo } from "../../../store/student-store/student-input";
import { profilePlaceholder } from "../../../images";
const PersonalInfoInput = (props) => {
  const {
    fullName,
    rollNo,
    gender,
    dob,
    phoneNumber,
    collegeMailId,
    mentor,
    session,
    image,
    setImage,
  } = useContext(StudentInputInfo);
  
  const [imageName, setImageName] = useState("Choose Profile Picture");
  const [currImage, setCurrImage] = useState(null);
  function handleOnImageChange(event) {
    console.log(URL.createObjectURL(event.target.files[0]));

    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      console.log(event.target.files[0]);
      setCurrImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0].name);
    }
    console.log(event.target.files[0]);

  }
  return (
    <div className="mx-20 my-14 text-white font-montserrat">
      <p className="text-lg font-medium">Personal Info</p>
      <div className="mx-8 my-4 grid grid-cols-4 gap-4 ">
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={fullName}
          />
          <div className={`${StudentInputStyle.label_input}`}>Full Name</div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            readOnly
            value={props.user.username}
            ref={rollNo}
          />
          <div className={`${StudentInputStyle.label_input}`}>Roll Number</div>
        </div>

        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <div className="flex justify-center">
            <p className="absolute top-[-12px] left-2 font-medium text-sm bg-primary px-2 ">
              Gender
            </p>
            <select
              className="bg-transparent w-full h-full px-4 absolute top-[1px] focus:outline-none"
              ref={gender}
            >
              <option className="bg-primary" value={"Male"}>
                Male
              </option>
              <option className="bg-primary" value={"Female"}>
                Female
              </option>
              <option className="bg-primary" value={"Other"}>
                Other
              </option>
            </select>
          </div>
          <div className={`${StudentInputStyle.label_input}`}></div>
        </div>
        <div className="row-span-4 p-2 ring-2 ring-highlight rounded-md flex flex-col gap-2 justify-center items-center cursor-pointer" onClick={() => document.querySelector(".input-image").click()}>
          <div className="w-[160px] h-[190px]">
            {currImage == null ? (
              <img src={profilePlaceholder} alt="" className="object-cover object-center w-full h-full rounded-md" />
            ) : (
              <img src={currImage} alt="" className="object-cover object-center w-full h-full rounded-md" />
            )}
          </div>
          <p>{imageName}</p>
          <input
            onChange={handleOnImageChange} hidden
            type="file"
            accept="image/jpeg, image/jpg" className="input-image"
          />
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="date"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={dob}
          />
          <div className={`${StudentInputStyle.label_input}`}>DOB</div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={phoneNumber}
          />
          <div className={`${StudentInputStyle.label_input}`}>Phone Number</div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={collegeMailId}
          />
          <div className={`${StudentInputStyle.label_input}`}>
            Collage Mail Id
          </div>
        </div>
        
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={mentor}
          />
          <div className={`${StudentInputStyle.label_input}`}>Mentor</div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            readOnly
            value={props.user.session}
            ref={session}
          />
          <div className={`${StudentInputStyle.label_input}`}>Session</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoInput;
