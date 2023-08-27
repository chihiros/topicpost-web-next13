'use client';
import Breadcrumb, { BreadcrumbProps } from '@/components/molecules/Breadcrumb/Breadcrumb';
import React, { useState } from 'react';
import axios from 'axios';
import Label from '@/components/atoms/Label';
import { Text, Textarea } from '@/components/atoms/Input';
import { SubmitButton } from '@/components/atoms/Button';
import Toast from '@/utils/Toast';

export default function Page() {
  const breadcrumb: BreadcrumbProps[] = [{
    href: "/contact",
    context: "お問い合わせ",
  }];

  const [formStatus, setFormStatus] = useState<'initial' | 'success' | 'error'>('initial');

  const [nameValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const clearForm = () => {
    setTextValue('');
    setEmailValue('');
    setMessageValue('');
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = 'https://api.topicpost.net/v1/contact';
    const data = {
      name: nameValue,
      email: emailValue,
      content: messageValue,
    };

    // const toast = new Toast();
    axios.post(url, data)
      .then(response => {
        console.log(response.data);
        Toast.success('送信が完了しました');

        // フォームの初期化
        clearForm();

        setFormStatus('success');
      })
      .catch(error => {
        console.error(error);
        Toast.error('送信に失敗しました');
      });
  };

  return (
    <>
      <Breadcrumb
        breadcrumb={breadcrumb}
      />

      <div className="p-4 bg-gray-50 rounded-lg">
        {formStatus === 'initial' && (
          <>
            <div className="flex mb-5 text-3xl">お問い合わせ</div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <Label htmlFor="name">お名前</Label>
                <Text
                  id="name"
                  type="text"
                  className="bg-gray-50"
                  placeholder="テスト太郎"
                  required={true}
                  value={nameValue}
                  onChange={handleTextChange}
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="email">連絡先</Label>
                <Text
                  id="email"
                  type="email"
                  className="bg-gray-50"
                  placeholder="contact@example.com"
                  required={true}
                  value={emailValue}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="message">お問い合わせ内容</Label>
                <Textarea
                  id="message"
                  className="bg-gray-50"
                  placeholder="お問い合わせ内容を入力してください。"
                  required={true}
                  value={messageValue}
                  onChange={handleMessageChange}
                />
              </div>
              <SubmitButton>送信</SubmitButton>
            </form>
          </>
        )}

        {formStatus === 'success' && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="mb-4 text-3xl">送信が完了しました</div>
            <p>お問い合わせありがとうございます。折り返し連絡いたします。</p>
          </div>
        )}
      </div>
    </>
  )
}
