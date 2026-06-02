'use client';

import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-amber-500 text-white text-center w-full lg:w-auto text-xl px-10 py-3 font-medium rounded-md hover:bg-amber-600 transition cursor-pointer"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
