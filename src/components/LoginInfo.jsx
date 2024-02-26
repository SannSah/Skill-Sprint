const LoginInfo = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
        <h2 className="font-montserrat font-bold text-3xl text-white mt-4">Admin Login</h2>
        <div className="flex flex-col gap-4 mt-6 w-[80%]">
            <input type="text" placeholder="Admin Id" className="login-input login-input-hover font-montserrat" />
            <input type="password" placeholder="Password" className="login-input login-input-hover font-montserrat" />
            <a href="#" className="text-right text-white text-sm hover:text-base_red font-montserrat">Forget Password?</a>
            <button className="login-button">Login</button>
        </div>
    </div>
  )
}

export default LoginInfo