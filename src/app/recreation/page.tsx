'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumb, { BreadcrumbProps } from '@/components/molecules/Breadcrumb/Breadcrumb';
import RecreationAPI, { RecreationsResponse } from '@/utils/api/api.topicpost.net/recreation';
import RecreationTable from '@/components/organisms/Recreation/Table';

export default function Page() {
  const breadcrumb: BreadcrumbProps[] = [{
    href: "/recreation",
    context: "レクリエーション",
  }];

  const [recreations, setRecreations] = useState<RecreationsResponse>();
  const [recreation_records, setRecreationRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const recreation = new RecreationAPI();
    const limit = 10;
    const offset = limit * (currentPage - 1);
    recreation.get(limit, offset).then((response: RecreationsResponse) => {
      console.log(response);
      setRecreations(response);
      setRecreationRecords(response.data.total_records);
    }).catch((error) => {
      console.log(error);
    });
  }, [currentPage])


  return (
    <>
      <Breadcrumb
        breadcrumb={breadcrumb}
      />

      <div className='mb-2 ml-2 text-2xl'>
        新着情報
      </div>
      {/* <RecreationCards
        data={recreationsCard}
      /> */}

      <div className='mt-6 mb-2 ml-2 text-2xl flex justify-between'>
        一覧
      </div>
      <RecreationTable
        data={recreations}
        records={recreation_records}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}
