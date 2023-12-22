import './Register.css'


function Register() {
    return (
        <div className='register'>
            <div className="container">
                <div className="register-container">
                    <div className="register-call">
                        <a className='register-call-link-num' href="">+998 78 148-88-88</a>
                        <br />
                        <a className='register-call-link-deck' href="">REQUEST A CALL BACK</a>
                    </div>

                    <h2 className="register-form-deck">Subscribe! News, promotions, offers!</h2>

                    <form className='register-form' >
                        <input className='register-input' type="text" />
                        <button className='register-btn'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register