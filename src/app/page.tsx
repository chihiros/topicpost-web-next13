import Image from 'next/image';
import { Button, SubmitButton } from '@/components/atoms/Button';
// import ArrowRight from '@/components/atoms/Icon/Arrow';
import { Text, Textarea, Annotation } from '@/components/atoms/Input';
import Card from '@/components/atoms/Card';
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
      <Breadcrumb
        breadcrumb={breadcrumb}
      />
      <Card
        title='タイトル'
        created_at="2023-05-21T17:46:45.313871Z"
        href='/recreation/1'
      />

      <Card
        title='タイトル'
        created_at="2023-05-21T17:46:45.400000Z"
        href='/recreation/2'
      />
    </>
  )
}
