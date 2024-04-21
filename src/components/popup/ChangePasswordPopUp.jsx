const ChangePasswordPopUp = (props) => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center font-montserrat bg-[#66666654]">
      <div className="w-[40%] h-[40%]  rounded-lg flex flex-col justify-center items-center gap-4 p-4 bg-[#91919161] backdrop-blur-md ring-1 ring-[#C0C0C0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <path
            fill="#ee3e54"
            d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"
          ></path>
          <path
            fill="#f1bc19"
            d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"
          ></path>
          <path
            fill="#f9dbd2"
            d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
          ></path>
          <path
            fill="#f1bc19"
            d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"
          ></path>
          <path
            fill="#ee3e54"
            d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
          ></path>
          <path
            fill="#fbcd59"
            d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
          ></path>
          <path
            fill="#ee3e54"
            d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
          ></path>
          <path
            fill="#fff"
            d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"
          ></path>
          <path
            fill="#f1bc19"
            d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"
          ></path>
          <path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"></path>
          <g>
            <path
              fill="#fdfcee"
              d="M50 26A24 24 0 1 0 50 74A24 24 0 1 0 50 26Z"
            ></path>
            <path
              fill="#472b29"
              d="M50,26.4C63,26.4,73.6,37,73.6,50S63,73.6,50,73.6S26.4,63,26.4,50S37,26.4,50,26.4 M50,25 c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S63.8,25,50,25L50,25z"
            ></path>
            <path
              fill="#ee3e54"
              d="M50 30.4A19.6 19.6 0 1 0 50 69.6A19.6 19.6 0 1 0 50 30.4Z"
            ></path>
            <path
              fill="#f06272"
              d="M50,33.4c10.3,0,18.8,8,19.5,18.1c0-0.5,0.1-1,0.1-1.5c0-10.8-8.8-19.6-19.6-19.6S30.4,39.2,30.4,50 c0,0.5,0,1,0.1,1.5C31.2,41.4,39.7,33.4,50,33.4z"
            ></path>
            <path
              fill="#472b29"
              d="M50,30.8c10.6,0,19.3,8.6,19.3,19.2c0,10.6-8.6,19.3-19.3,19.3c-10.6,0-19.2-8.6-19.2-19.3 C30.8,39.4,39.4,30.8,50,30.8 M50,30c-11,0-20,9-20,20c0,11,9,20,20,20c11,0,20-9,20-20S61,30,50,30L50,30z"
            ></path>
          </g>
          <g>
            <path
              fill="#fdfcee"
              d="M52.3,50l5.9-5.9c0.3-0.3,0.5-0.7,0.5-1.1s-0.2-0.8-0.5-1.1c-0.6-0.6-1.7-0.6-2.3,0L50,47.7 l-5.9-5.9c-0.6-0.6-1.7-0.6-2.3,0c-0.6,0.6-0.6,1.7,0,2.3l5.9,5.9l-5.9,5.9c-0.6,0.6-0.6,1.7,0,2.3c0.6,0.6,1.7,0.6,2.3,0l5.9-5.9 l5.9,5.9c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.2,1.1-0.5c0.6-0.6,0.6-1.7,0-2.3L52.3,50z"
            ></path>
            <path
              fill="#472b29"
              d="M43,59c-0.5,0-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8l5.6-5.6l-5.6-5.6C41.2,44,41,43.5,41,43 s0.2-1,0.6-1.4c0.8-0.8,2.1-0.8,2.8,0l5.6,5.6l5.6-5.6c0.8-0.8,2-0.8,2.8,0C58.8,42,59,42.5,59,43s-0.2,1-0.6,1.4L52.8,50l5.6,5.6 c0.8,0.8,0.8,2,0,2.8c-0.8,0.8-2.1,0.8-2.8,0L50,52.8l-5.6,5.6C44,58.8,43.5,59,43,59z M43,41.7c-0.3,0-0.6,0.1-0.9,0.4 c-0.2,0.2-0.4,0.5-0.4,0.9s0.1,0.6,0.4,0.9l6.1,6.1l-6.1,6.1c-0.5,0.5-0.5,1.3,0,1.8c0.5,0.5,1.3,0.5,1.8,0l6.1-6.1l6.1,6.1 c0.5,0.5,1.3,0.5,1.8,0c0.5-0.5,0.5-1.3,0-1.8L51.8,50l6.1-6.1c0.2-0.2,0.4-0.6,0.4-0.9s-0.1-0.6-0.4-0.9c-0.5-0.5-1.3-0.5-1.8,0 L50,48.2l-6.1-6.1C43.6,41.9,43.3,41.7,43,41.7z"
            ></path>
          </g>
        </svg>
        <p className="text-2xl text-slate-200 font-medium font-montserrat text-center z-10">
          New Password & Confirm Password doesn't match
        </p>
        <button className="bg-red-500 min-w-40 min-h-14 text-lg rounded-lg text-white hover:bg-transparent hover:ring-2 hover:ring-red-500" onClick={() => props.setButtonPopup(false)}>Confirm</button>
      </div>
    </div>
  );
};

export default ChangePasswordPopUp;
