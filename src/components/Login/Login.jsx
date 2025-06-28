import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth, useUser } from "@clerk/clerk-react";

function Login() {
  const { isLoaded, isSignedIn, sessionId } = useAuth();
  const {user} =useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-slate-100 to-pink-300 animate-color-cycle flex items-center justify-center">
      <div className="w-[450px] bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {isSignedIn ? `Hello, ${user.fullName}!` : 'Please sign in to continue'}
        </h2>

        {isSignedIn ? (
          <p className="text-gray-600 mb-4">
            Your current active session ID is: <span className="font-semibold">{sessionId}</span>
          </p>
        ) : (
          <p className="text-gray-500 mb-4">Sign in to access the app</p>
        )}

        <div className="mb-6">
          <SignedOut>
            <SignInButton className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition">
              Sign In
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Your Profile
            </UserButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Login;