'use client';
import React from "react";
// import { useLoginModal } from "../../../../context/LoginModalContext";
import { SocialLoginButton, SocialLoginProps } from "./Parts/SocialButton";
import { BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
// import { EmailPassword } from "./EmailPassword";
import { SupabaseSignInWithProvider } from "@/utils/supabase"


const LoginModal: React.FC = () => {
  const SocialLogins: SocialLoginProps[] = [
    {
      icon: <FcGoogle size={24} />,
      children: "Googleでログイン",
      onClick: () => { SupabaseSignInWithProvider("google") }
    }, {
      icon: <BsGithub size={20} color="#333" />,
      children: "GitHubでログイン",
      onClick: () => { SupabaseSignInWithProvider("github") }
    }, {
      icon: <BsTwitter size={20} color="#1DA1F2" />,
      children: "Twitterでログイン",
      onClick: () => { SupabaseSignInWithProvider("twitter") }
    }, {
      icon: <BsFacebook size={20} color="#4267B2" />,
      children: "Facebookでログイン",
      onClick: () => { SupabaseSignInWithProvider("facebook") }
    }
  ];

  const isOpen = true;
  console.log("isOpen", isOpen);


  return (
    <>
      {isOpen && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          // onClick={handleOverlayClick}
          >
            <div className="relative w-full max-w-2xl mx-3">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow">
                <button
                  // onClick={toggle}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                  <RxCross2 size={20} />
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">TopicPost にログインする</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* 左側にはSSOログインを設定する */}
                    <div className="flex flex-col justify-center space-y-2 sm:space-y-4 sm:pr-6">
                      {SocialLogins.map((social, index) => (
                        <SocialLoginButton key={index} {...social} />
                      ))}
                    </div>
                    {/* 右側にはEmail/Passwordのログインを設定する */}
                    <hr className="h-px my-4 bg-gray-200 border-0 sm:hidden" />
                    <div className="h-auto max-w-full sm:border-l-2 sm:pl-6">
                      {/* <EmailPassword toggle={toggle} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default LoginModal;
