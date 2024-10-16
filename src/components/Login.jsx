import React from 'react'

function Login() {
  const [Inputdata, setInputdata] = usesState({
    Uasername:"",
    Email:"",
  });
  const [Inputed,setInputed]
  const HandleUsernameinput = (e) => {
    setInputdata({...Inputdata,Username: e.target.value});
  };
  const HandleEmailinput = (e) => {
    setInputdata({...Inputdata,Email: e.target.value});
     
    const submit = (e) => {
      e.preventDefault();

      if 
    }
  };
  return (
    <div className=' backgrond h-screen flex flex-col items-center justify-center'>
      <div className='backdrop-blur-md border bg-green-500/20 border'>THIS IS A TEXT MEASSAGE</div>
     <div className='border-2 border-white/30 py-32 w-[20rem] flex flex-col relative items-center backdrop-blur-md rounded-lg'>
       <div className='absolute top-16 flex flex-col items-center'>
       <span className='absolute top-2 text-4xl font-semibold'>Login</span>
       </div>
        <form action="">
            <input type="text" placeholder='Uasername' className='w-[18rem] h-[2.5rem] bg-inherit text-white border-2 rounded-md pl-3 outline-none mb-5' />
            <br />
            <input type="text" placeholder='Email' className='w-[18rem] h-[2.5rem] text-black border-2 rounded-md pl-3 outline-none bg-inherit' />
        </form>
        <button className='absolute bottom-14 text-gray-300/60 border-2 border-white w-[8rem] h-[2.5rem] rounded-lg hover:border-white/60 text-gray-'>submit</button>
     </div>
    </div>
  )
}

export default Login
