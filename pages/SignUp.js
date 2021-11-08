


import Link from 'next/link';

const SignUp = () => {
    return ( 
        <div className ="container">
        <form action="">
            <div className="names">
                <div className="firstname">
                    <input type="text" placeholder ="first name" />
                </div>
                <div className="surname">
                    <input type="text" placeholder= "surname" />
                </div>
            </div>
            <div className="info">
                <div className="reg">
                    <input type="number" placeholder = "registration number"  />
                </div>
                <div className="dept">
                    <select name="depts" id="depts">
                        <option value="" disabled selected>department</option>
                        <option value="Computer Science and Engineering"> Computer Science and Engineering</option>
                        <option value="Chemical Engineering & Polymer Science">Chemical Engineering & Polymer Science</option>
                        <option value="Architecture">Architecture</option>
                    </select>
                </div>
            </div>

            <div className="email">
                    <input type="email" placeholder ="email" />
                </div>
                <div className="password">
                    <input type="password"  placeholder= "placeholder" />
                </div>
                <div className="confirm_password">
                    <input type="password"  placeholder= "confirm placeholder" />
                <div/>
            </div>

            <div className="signUp_btn">
                
            </div>
        </form>

        <Link href="/Landing">
            <a >
            <div>already have an account?</div>
            </a>
        </Link>
        
        </div>
     );
}
 
export default SignUp;