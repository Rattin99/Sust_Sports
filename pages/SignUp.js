


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
                        <option value="Forestry & Environmental Science">Forestry & Environmental Science</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Petroleum and Mining Engineering">Petroleum and Mining Engineering</option>
                        <option value="Industrial and Production Engineering">Industrial and Production Engineering</option>
                        <option value="Food Engineering & Tea Technology">Food Engineering & Tea Technology</option>
                        <option value="Electrical & Electronic Engineering">Electrical & Electronic Engineering</option>
                        <option value="Civil & Environmental Engineering">Civil & Environmental Engineering</option>
                        <option value="Biochemistry and Molecular Biology">Biochemistry and Molecular Biology</option>
                        <option value="Genetic Engineering & Biotechnology">Genetic Engineering & Biotechnology</option>
                        <option value="Business Administration">Business Administration</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Geography and Environment">Geography and Environment</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Statistics">Statistics</option>
                        <option value="Bangla">Bangla</option>
                        <option value="Economics">Economics</option>
                        <option value="English">English</option>
                        <option value="Political Studies">Political Studies</option>
                        <option value="Public Administration">Public Administration</option>
                        <option value="Social Work">Social Work</option>
                        <option value="Sociology">Sociology</option>
                        <option value="Oceanography">Oceanography</option>
                        <option value="Software Engineering">Anthropology</option>
                        <option value="Anthropology">Anthropology</option>
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