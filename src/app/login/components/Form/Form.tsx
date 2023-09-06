'use client';

import { signIn } from 'next-auth/react';
import { FC, FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { isRelative } from '../../utils/url.utils';

export const Form: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [authStatus, setAuthStatus] = useState<boolean>(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const password = formData.get('password');

    const response = await signIn('credentials', {
      password,
      callbackUrl: searchParams?.get('callbackUrl') ?? '/',
      redirect: false
    });

    if (response?.ok) {
      const nextUrl = searchParams?.get('callbackUrl') ?? '/';
      router.push(isRelative(nextUrl) ? nextUrl : '/');
      router.refresh();
    }

    setAuthStatus(response?.status === 200);
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="w-full max-w-xs">
      <div className="flex flex-col gap-3">
        {!authStatus && (
          <span className="rounded-md py-2 px-3 bg-[#3c1618] border border-[#2a1314] text-[#ff6166]">
            Senha incorreta! Por favor, tente novamente.
          </span>
        )}
        <input
          required
          name="password"
          type="password"
          placeholder="Senha"
          className="w-full appearance-none focus:outline-none hidden md:flex justify-between items-center py-1.5 px-3 text-sm whitespace-nowrap bg-[#1f1f1f] text-white rounded-md placeholder:text-neutral-400"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-white hover:bg-slate-100 text-black text-base h-12 leading-6 px-3 font-medium"
        >
          Acessar
        </button>
      </div>
    </form>
  );
};
