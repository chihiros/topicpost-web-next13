'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { Text } from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';

import { SubmitButton } from '@/components/atoms/Button';

import toast from "@/utils/Toast";
import { getErrorMessage } from "@/utils/ErrorMessage";
import { supabaseClient } from "@/utils/supabase";
// import { useHistory } from 'react-router-dom';
// import { useAuthContext } from '../../../../context/AuthContext';

import ProfileAPI, { ProfileResponse } from "@/utils/api/api.topicpost.net/profile";

type EmailPasswordProps = {
  toggle: () => void;
};

export const EmailPassword: React.FC<EmailPasswordProps> = ({ toggle }) => {
  const [modalEmail, setModalEmail] = useState<string>(''); // value属性を型付きのstringで初期化する
  const [modalPassword, setModalPassword] = useState<string>(''); // value属性を型付きのstringで初期化する
  // const { setLoggedInTrue } = useAuthContext();
  // const history = useHistory();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalPassword(event.target.value);
  };

  // TopicPost にログインするをクリックしたらaxiosを使ってログイン処理を行う
  const handleLoginWithPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: modalEmail,
      password: modalPassword
    });

    console.log("data", data);

    if (error) {
      toast.error(getErrorMessage(error.message));
      return;
    }

    // ログインに成功したらモーダルを閉じる
    toggle();

    const profile = new ProfileAPI();
    profile.get()
      .then((response: ProfileResponse) => {
        console.log("response", response);
        toast.success('ログインに成功しました');
        // setLoggedInTrue();

        if (response.data) {
          // 登録済みのProfileがある場合
          // history.push("/");
        } else if (response.status === 404) {
          // Profileが登録されていない場合
          // history.push(`/profile/edit`);
        } else {
          toast.error('エラーが発生しました');
        }
      })
      .catch((error: any) => {
        console.error(error);
        toast.error('ログインに失敗しました');
      });
  };

  return (
    <form className="space-y-6" onSubmit={handleLoginWithPassword}>
      <div>
        <Label htmlFor="modalEmail">メールアドレス</Label>
        <Text
          type="email"
          id="modalEmail"
          value={modalEmail}
          onChange={handleEmailChange}
          placeholder="example@topicpost.net"
          required={true}
        />
      </div>
      <div>
        <Label htmlFor="modalPassword">パスワード</Label>
        <Text
          type="password"
          id="modalPassword"
          value={modalPassword}
          onChange={handlePasswordChange}
          placeholder="••••••••"
          required={true}
        />
      </div>
      {/* Cookieを使うようになってから追加修正をする */}
      {/* <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">パスワードを記憶する</label>
        </div>
      </div> */}
      <div className="flex justify-end">
        <Link
          href="/forget"
          className="text-sm text-blue-700 hover:underline"
          onClick={toggle}
        >
          パスワードを忘れましたか？
        </Link>
      </div>
      <SubmitButton className="w-full">
        TopicPost にログイン
      </SubmitButton>
      <div className="text-sm font-medium text-gray-500">
        <Link
          href="/signup"
          className="text-blue-700 hover:underline"
          onClick={toggle}
        >
          TopicPostのアカウントを作成する
        </Link>
      </div>
    </form>
  );
};
