import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  const NotFoundImage = `/images/not_found_404.png`;

  return (
    <>
      <div className="flex mt-20 mb-6 justify-center">
        <Image
          src={NotFoundImage}
          alt="Not Found Image"
          width={400}
          height={400}
        />
      </div>
      <div className="flex mb-6 justify-center text-3xl font-semibold text-gray-500">
        Oops, this page doesn&apos;t seem to exist.
      </div>
      <div className="flex justify-center text-lg text-gray-500">
        <Link href="/">
          <p className="hover:text-blue-500">
            Go to the top page.
          </p>
        </Link>
      </div>
    </>
  );
}
