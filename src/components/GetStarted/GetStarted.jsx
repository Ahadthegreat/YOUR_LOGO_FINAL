import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import axios from "axios"
import { useAuth } from '@clerk/clerk-react';

function GetStarted() {
    const [inputText, setInputText] = useState('none');
    const [message, setMessage] = useState('none ');
    const [url,setUrl]=useState("")
    const [load,setLoad]=useState(true);
    const [url1,setUrl1]=useState("")
    const { isLoaded, isSignedIn } = useAuth();
    const y="Generate an image about my company for "

    if (!isLoaded) {
        return <div>Please login to get started...</div>;
      }
    
    if(!isSignedIn){
        return <div className=" h-[1000px] w-[1000px] mx-auto">
            <p className='py-[100px] px-[100px] text-4xl'>Please login first !</p>
        </div> 
    }

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setInputText(event.target.value); 
    };

    const handleSendClick = async () => {
        if(inputText.length==0) return;
        setMessage(inputText);
        setInputText('')
        const response1=await axios.post('https://your-logo-backend.onrender.com/generate',{
            prompt:y+inputText,
        })
        setLoad(false)
        setUrl(response1.data)
        setInputText('');
    };
    return (
        <div className="py-16 h-[450px] relative">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 border-red-700 bottom-0">
                {!load && <div className='flex mx-auto w-fit px-[10px]'>
                    <img src={`data:image/jpeg;charset=utf-8;base64,${url}`} className='h-[250px] w-[400px]' alt="LOADING" /> 
                    {/* <img src={url1} alt="LOADING" />  */}
                    
                </div>  } 
                {load && <div className='mx-auto w-fit'>Loading</div>}
                <div className="">
                <a
                                href={`data:image/jpeg;charset=utf-8;base64,${url}`}
                                download="generated-image.jpg"
                                className="absolute top-[320px] right-1/3 transform -translate-x-1/2 p-2 bg-blue-400 text-white rounded-lg flex items-center justify-center"
                            >
                                ⬆️ 
                            </a>
                </div>
                    <div className="absolute  bottom-[20px] h-[60px] w-[500px] left-1/2 transform -translate-x-1/2 flex items-center p-3 bg-slate-300  rounded-xl">
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Enter text"
                            className="p-2  bg-slate-300 text-[18px] border w-[450px] rounded-md border-gray-300"
                        />
                        <button
                            onClick={handleSendClick}
                            onSubmit={()=>{setMessage('')}}
                            className="ml-3 p-2 text-sm font-semibold text-white bg-orange-700 rounded-lg hover:bg-green-600"
                        >
                            Send
                        </button>
                        
                    </div>
                    {message && <div className="mt-4 absolute left-[400px] w-[450px] text-slate-500 bottom-[100px] text-lg">Input: {message}</div>}
                </div>
            </div>
        </div>
    )
}

export default GetStarted