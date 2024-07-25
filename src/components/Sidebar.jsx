import React,{useContext, useState} from 'react'
import { Context } from '../config/Context'

const Sidebar = () => {

   const [extended, setextended] = useState(false)
   const {onSent, prePrompt, setrecentPrompt, newChat} = useContext(Context)

   const loadPrompt=async(prompt)=>{
      setrecentPrompt(prompt)
      await onSent(prompt)
   }
  return (
    <div className='sidebar outfit'>

      <div className="topp">
         <img onClick={()=>setextended(pre=>!pre)} className='menu size-5 block cursor-pointer ml-[10px] invert' src="menu.png" alt="" />

         <div onClick={()=>newChat()} className="new-chat mt-[50px] inline-flex items-center gap-[10px] p-3 bg-[#2a2a2a] rounded-full text-xl text-gray-500 cursor-pointer">
            <img className=' size-5 invert' src="plus.png" alt="" />
            {extended?<p className=' text-gray-300'>New Chat</p>:null}
         </div>

         {extended?<div className="recent flex flex-col">
            <p className="recent-title mt-[30px] mb-5 text-gray-300">Recent</p>
            {prePrompt.map((x)=>{
               return (
                  <div onClick={()=>loadPrompt(x)} className=" recent-entry text-gray-300">
                     <img className=' size-5 invert' src="messages.png" alt="" />
                     <p>{x.slice(0,15)} ...</p>
                  </div>
               )
            })}
            
         </div>
         :null
      }

         
      </div>

      <div className="bottomm flex flex-col">
         <div className="bottom-item recent-entry text-gray-300">
            <img className=' size-5 invert' src="question.png" alt="" />
           {extended?<p>Help</p>:null}
         </div>

         <div className="bottom-item recent-entry text-gray-300">
            <img className=' size-5 invert ' src="history.png" alt="" />
            {extended?<p>Activity</p>:null}
         </div>

         <div className="bottom-item recent-entry text-gray-300">
            <img className=' size-6' src="settings.png" alt="" />
            {extended?<p>Settings</p>:null}
         </div>
      </div>
    </div>
  )
}

export default Sidebar
