import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
const Login = ({ providers }) => {
  return (
    <div className="flex justify-center flex-col w-full h-screen items-center text-white">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#1d9bf0] inline-block"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1d9bf0] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
