import "./css/LoginSignup.css"
function LoginSignup()
{
    return(
        <div className="loginSignup">
            <div className="loginSignup-container">
                <h1>Sign Up</h1>
                <div className="loginSignup-fields">
                    <input type="text"placeholder="Your Name"/>
                    <input type="email"placeholder="Your Email"/>
                    <input type="password"placeholder="Create Password"/>
                    <input type="password"placeholder="Confirm Password"/>
                </div>
                <div className="continue-button"><button>Continue</button></div>
                <p className="loginSignup-login">
                    Already have an account? <span>Login</span>
                </p>
                <div className="terms">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup