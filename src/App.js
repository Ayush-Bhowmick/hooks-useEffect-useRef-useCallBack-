import { useState, useCallback } from "react";

function App() {
   const [length, setLength] = useState(8);
   const [numberAllowed, setNumberAllowed] = useState(false);
   const [CharAllowed, setCharAllowed] = useState(false);
   const [password, setPassword] = useState(" ");

const PasswordGenerator = useCallback(()=>{
   let pass=''
   let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   if(numberAllowed) str += "1234567890"
   if(CharAllowed) str += "~!@#$%^&*()_-=+/?{}[]"
    for(let i=1; i< length; i++ ){
      //fetching index
     let char = Math.floor(Math.random()*str.length +1)
     //fatching values
     pass = str.charAt(char)
    };
    setPassword(pass)
     },[ length, numberAllowed, CharAllowed, setPassword ]

   )

  return (
    <>
   <div className= 'w-auto h-auto max-w-md mx-auto shadow-md rounded-ld px-4 py-4 gap-y-15 my-8 font-bold text-3xl text-center text-purple-600 bg-gray-800'> Password Generator
   
    <div className="py-2 flex-shadow rounded-lg overflow-hidden  mb-4 flex items-center ">
      <input type="text" value={password}  className="outline-none w-full py-1 px-3 rounded-l-lg" placeholder="password" 
      readOnly
      />   
      <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-r-lg ">Copy</button>
    </div>
     <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
           <input
           type="range"
           min={6}
           max={100}
           value={length}
           className="cursor-pointer "
           onChange={(e)=>(setLength(e.target.value))}
           />
           <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">

          </div>
           <div className="flex items-center gap-x-1">
            
           </div>
     </div>
   </div>
    </>
  );
}

export default App;
