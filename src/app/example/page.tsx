import Breadcrumb, { BreadcrumbProps } from '@/components/molecules/Breadcrumb/Breadcrumb';

export default function Page() {
  const breadcrumb: BreadcrumbProps[] = [{
    href: "/example",
    context: "例",
  }];

  return (
    <>
      <Breadcrumb
        breadcrumb={breadcrumb}
      />

    </>
  )
}
