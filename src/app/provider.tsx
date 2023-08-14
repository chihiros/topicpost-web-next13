'use client';
import React from 'react';
// import { LoginModalProvider } from '@/components/organisms/Modal/Modal.Provider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <LoginModalProvider> */}
      {children}
      {/* </LoginModalProvider> */}
    </>
  )
}
