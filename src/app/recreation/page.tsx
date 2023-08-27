import Breadcrumb, { BreadcrumbProps } from '@/components/molecules/Breadcrumb/Breadcrumb';

export default function Page() {
  const breadcrumb: BreadcrumbProps[] = [{
    href: "/recreation",
    context: "レクリエーション",
  }];

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
      {/* <RecreationTable
        data={recreations}
        records={recreation_records}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </>
  )
}
