import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton ,useAuth } from "@clerk/clerk-react";

function Login() {
  const { isLoaded, isSignedIn, userId, sessionId } = useAuth();
  return (
    <div className="w-[400px] h-[220px] mx-auto my-[100px] ">
     { !isSignedIn && <h2 className='my-[30px]'>PLEASE LOGIN FIRST</h2>  }
     { isSignedIn && <h2 className='my-[30px]'>hello, {userId}! Your current active session is {sessionId} </h2> }
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Login