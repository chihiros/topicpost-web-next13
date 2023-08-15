'use client';
import React from 'react';
import { LoginModalProvider } from '@/components/organisms/Modal/Modal.Provider';
import { AuthContextProvider } from '@/components/organisms/context/Auth.Provider';
import { ProfileDataContextProvider } from '@/components/organisms/context/ProfileData.Provider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProfileDataContextProvider>
        <AuthContextProvider>
          <LoginModalProvider>
            {children}
          </LoginModalProvider>
        </AuthContextProvider>
      </ProfileDataContextProvider>
    </>
  )
}
