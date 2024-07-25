import { createContext, useState } from "react";
import run from "./gemini";

export const Context = createContext()

const ContextProvider=(props)=>{

   const [input, setinput] = useState("")
   const [recentPrompt, setrecentPrompt] = useState("")
   const [prePrompt, setprePrompt] = useState([])
   const [showResult, setshowResult] = useState(false)
   const [loading, setloading] = useState(false)
   const [resultData, setresultData] = useState("")

   const delayPara=(index,nextword) => {
     setTimeout(()=>{
         setresultData(pre=>pre+nextword)
     },75*index)
   }
   
   const newChat=() => {
     setloading(false)
     setshowResult(false)
   }
   

   const onSent = async (prompt) =>{
      setresultData("")
      setloading(true)
      setshowResult(true)

      let response
      if(prompt !== undefined){
         response=await run(prompt)
         setrecentPrompt(prompt)
      }else{
         setprePrompt(pre=>[...pre,input])
         setrecentPrompt(input)
         response= await run(input)
      }
      let responseArray = response.split("**")
      let newResponse="";
      for (let i=0;i<responseArray.length;i++){
         if (i===0 || i%2!==1)
            newResponse+=responseArray[i]
         else
            newResponse+="<b>"+responseArray[i]+"</b>"
      }
      let newResponse2 =newResponse.split("*").join("<br/>")
      let newResponseArray= newResponse2.split(" ")
      for(let i=0; i<newResponseArray.length;i++){
         const nextword= newResponseArray[i]
         delayPara(i,nextword+" ")
      }
      setloading(false)
      setinput("")
   }

   // onSent("What is React JS")

   const contextValue = {
      prePrompt,
      setprePrompt,
      onSent,
      setrecentPrompt,
      recentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setinput,
      newChat
   }

   return (
      <Context.Provider value={contextValue}>
         {props.children}
      </Context.Provider>
   )
}

export default ContextProvider