import Image from 'next/image';
import { Button, SubmitButton } from '@/components/atoms/Button';
// import ArrowRight from '@/components/atoms/Icon/Arrow';
import { Text, Textarea, Annotation } from '@/components/atoms/Input';
import { Card } from '@/components/atoms/Card';
import Breadcrumb, { BreadcrumbProps } from '@/components/molecules/Breadcrumb/Breadcrumb';

export default function Home() {
  const breadcrumb: BreadcrumbProps[] = [];

  return (
    <>
      {/* <Button>aaaaa</Button> */}
      {/* <SubmitButton>aaaa</SubmitButton> */}
      {/* <ArrowRight /> */}
      {/* <Text
        // type="text"
        id="text"
        type='text'
        className='w-96'
      />
      <Textarea
        id="textarea"
        className='w-96'
      />
      <Annotation>aaaa</Annotation> */}
      {/* <Card
        title='タイトル'
        date="2021/10/10"
        content='コンテンツ'
        recreationId='1'
        data='data'
      /> */}
      <Breadcrumb
        breadcrumb={breadcrumb}
      />
    </>
  )
}
