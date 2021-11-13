


import Link from 'next/link';

const SignUp = () => {
    return ( 
        <div className ="container ">
        <form action="">
           <div className=" flex flex-col justify-center items-center">
           <div className="names flex justify-center items-center min-w-full">
                <div className="firstname m-1">
                    <input className = " h-8  border rounded shadow" type="text" placeholder ="first name" />
                </div>
                <div className="surname m-1">
                    <input className ="h-8 border rounded shadow" type="text" placeholder= "surname" />
                </div>
            </div>
            <div className="info min-w-full flex justify-center">
                <div className="reg m-1">
                    <input className ="h-8  border rounded shadow" type="number" placeholder = "registration number"  />
                </div>
                <div className="dept m-1 ">
                    <select className =" appearance-none focus:outline-none shadow h-8 w-44 " name="depts" id="depts">
                        <option value="" disabled selected>department</option>
                        <option value="Computer Science and Engineering"> Computer Science and Engineering</option>
                        <option value="Chemical Engineering & Polymer Science">Chemical Engineering & Polymer Science</option>
                        <option value="Architecture">Architecture</option>
                    </select>
                </div>
                </div>

                <div className="email m-1">
                    <input className ="h-8  border rounded shadow" type="email" placeholder ="email" />
                </div>
                <div className="password m-1">
                    <input className ="h-8  border rounded shadow" type="password"  placeholder= "password" />
                </div>
                <div className="confirm_password m-1">
                    <input className ="h-8  border rounded shadow" type="password"  placeholder= "confirm password" />
                <div/>
            </div>

            <div className="signUp_btn m-2">
                <input  className ="bg-gray-500  text-white font-bold py-2 px-4 rounded" type ="submit" value ="sign up" />
            </div>
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