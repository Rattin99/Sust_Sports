import Link from 'next/link' 



const Landing = () => {
    return ( 
       <div className =" flex flex-col justify-between ">
            <main className="container min-w-full flex flex-col justify-center items-center ">
                <div className="logo m-20 ">
                    <h1 className =" text-5xl ">SUST.SPORTS</h1>
                </div>
                <form className ="min-w-full flex flex-col justify-center items-center" action="" method ="get" >
                    <div className = "w-3/6  m-2">
                        <input className = "shadow h-8 appearance-none border rounded-sm min-w-full " type="email" name ="email" id = "email" placeholder="email" required />
                    </div>
                    <div  className = "w-3/6 m-2 ">
                        <input className = "shadow h-8  appearance-none border rounded-sm min-w-full" type="password" name ="password" id = "password" placeholder ="password" required />
                    </div>
                    <div className ="flex m-3 flex-col justify-center items-center">
                        <input className ="bg-black rounded text-white font-bold py-2 px-4 shadow " type="submit" value ="log in" />
                    </div>
                </form>
                <div className =" min-w-full m-3 flex justify-center items-center">
                    <div className = "bg-black m-3 w-2/6 h-1"></div>
                        <p className ="text-center text-xs">dont have an account?</p>
                    <div className = "bg-black  m-3 w-2/6 h-1"></div>
                </div>
                <Link href="/SignUp">
                    <a >
                        <button className ="bg-gray-500 rounded text-white font-bold py-2 px-4">sign up</button>
                    </a>
                </Link>
            </main>
            <footer className= " fixed inset-x-0 bottom-0  flex flex-col justify-center items-center ">
                <p className ="text-center text-sm"> 
                sust games was made by asif ahmed kowshiq and rattin sadman. using next.js, firebase, tailwind css, redux-toolkit.
                </p>
            </footer>
       </div>
     );
}
 
export default Landing;