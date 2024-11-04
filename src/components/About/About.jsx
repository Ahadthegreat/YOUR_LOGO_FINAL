import React from 'react'
import startupImage from './1715602580521.jpg';

function About() {
  return (
    <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={startupImage}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Know more about our CEO Abdul Ahad
                        </h2>
                        <p className="mt-6 text-gray-600">
                           "Hello I am Abdul Ahad a sophomore from Delhi Technological University i am passionate
                            about full-stack development .For past few months after polishing my DSA and implementation
                            skills i started my development journey for making reality about my breathtaking ideas "
                        </p>
                        <p className="mt-4 text-gray-600">
                            The given webpage is designed to get your customised logo about any virtual realtiy and is 
                            carried by our AI tool after giving a prompt ,it generates a self made logo .For custom use
                            we made this all free .If you want to make it more valuable and precised use our paid model for
                            best practices .
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About