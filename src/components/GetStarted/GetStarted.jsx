import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import axios from "axios"

function GetStarted() {
    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState('create ');
    const [url,setUrl]=useState("")
    const [load,setLoad]=useState(true);
    const [url1,setUrl1]=useState("")

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendClick = async () => {
        setMessage(inputText);
        const {data1}=await axios.post('http://localhost:3000/generate-image',{
            text:message,
            width:600,
            height:400,
            steps:1
        })
        const {data2}=await axios.post('http://localhost:3000/generate-image',{
            text:message,
            width:600,
            height:400,
            steps:1
        })
        setLoad(false)
        setUrl(data1.generated_image)
        setUrl1(data2.generated_image)
        setInputText('');
    };
    return (
        <div className="py-16 h-[450px]">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 border-red-700 bottom-0">
                {!load && <div>
                    <img src={url} alt="LOADING" /> 
                    <img src={url1} alt="LOADING" /> 
                </div>  } 
                {load && <div>Loading</div>}

                    <div className="fixed bottom-0 w-[500px] left-1/2 transform -translate-x-1/2 flex items-center p-3 bg-white shadow-lg rounded-md">
                    
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Enter text"
                            className="p-2 text-sm border w-[450px] rounded-md border-gray-300"
                        />
                        <button
                            onClick={handleSendClick}
                            className="ml-3 p-2 text-sm font-semibold text-white bg-orange-700 rounded-md hover:bg-green-600"
                        >
                            Send
                        </button>
                    </div>
                    {message && <div className="mt-4 top-0 text-lg">Message: {message}</div>}
                </div>
            </div>
        </div>
    )
}

export default GetStarted