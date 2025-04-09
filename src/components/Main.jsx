import React, { useContext } from 'react'
import { Context } from '../config/Context'

const Main = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,setinput,input} = useContext(Context)

  return (
    <div className=' flex-1 min-h-screen pb-[15vh] relative bg-[#0e0e0f]'>

      <nav className='flex items-center
       justify-between text-[22px] p-8 text-gray-300'>

         <p>Gemini</p>

         <img className='size-8 ' src="user.png" alt="" />

      </nav>

      <main className=' max-w-[900px] m-auto'>

         {!showResult?<>
         
            <div className="greet mx-[50px] font-medium p-8 text-6xl">

               <p><span>Hello, Chinmaya...</span></p>

               <p className=' text-gray-400/40'>How can I help you today?</p>

            </div>

            
            <div className="cards">

               <div className="card">
                  <p>Suggest beautiful places to see on  an upcoming road trip</p>
                  <img className='size-8 invert' src="compass.png" alt="" />
               </div>

               <div className="card">
                  <p>Briefly summarize this concept:  Urban Planning</p>
                  <img className='size-9 invert'   src="bulb.png" alt="" />
               </div>

               <div className="card">
                  <p>Brainstorm team bonding activities  for out work retreat</p>
                  <img className='size-8 msg invert'  src="comment.png" alt="" />
               </div>

               <div className="card">
                  <p>Improve the readability of the   following code</p>
                  <img className='size-8 invert'   src="code.png" alt="" />
               </div>
            </div>
            
         </>
         : <div className="result py-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title mx-10 flex items-center gap-5 mb-5">
               <img className=' size-8 my-3' src="user.png" alt="" />
               <p className=' text-gray-300 my-2'>{recentPrompt}</p>
            </div>
            <div className="result-data flex mx-10 items-start gap-5">
               <img className=' size-8' src="gemini.png" alt="" />
               {loading
               ? <div className="loader w-full flex flex-col gap-[10px]">
                  <hr />
                  <hr />
                  <hr />
               </div>
               :<p className=' text-gray-300 text-[16px] leading-[1.8]' dangerouslySetInnerHTML={{__html:resultData}}></p>

               }
            </div>
         </div>

         }


         <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-5 m-auto">

            <div onKeyDown={(e)=>{
               if (e.key==="Enter")
                  onSent()
            }} className="search-button search-box flex justify-between items-center gap-5 bg-[#131314] px-[10px] py-4 rounded-full">

               <input onChange={(e)=>setinput(e.target.value)} className=' flex-1 bg-transparent border-none outline-none p-2 text-[18px] text-white' type="text" value={input} name="" id="" placeholder='Enter a prompt here...'/>

               <div className=" flex items-center gap-4">
                  <img className='size-5 cursor-pointer invert' src="gallery.png" alt="" />
                  {input?<img onClick={()=>onSent()} className='size-6 cursor-pointer ' src="send.png" alt="" />:null}
               </div>
            </div>
            <p className="bottom-info text-xs mx-4 my-auto text-center font-semibold text-gray-300">
                  Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
            </p>
            
         </div>
      </main>
    </div>
  )
}

export default Main
