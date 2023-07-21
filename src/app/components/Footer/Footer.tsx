import { FC } from 'react';
import logoImage from '../../../../public/logo/logo_white.png';

export const Footer: FC = () => (
  <footer className="bg-[#111] border-y border-[#333]">
    <div>
      <div className="flex justify-center gap-3 items-center w-full my-8 mb-12">
        <img
          src={logoImage.src}
          alt="Logo"
          style={{ maxWidth: '40px', maxHeight: '100px' }}
        />
        <p className="text-xs text-[#888]">
          Copyright © {new Date().getFullYear()} &nbsp;
          <a
            className="text-blue-500 font-bold no-underline"
            href="https://github.com/kiritorce"
          >
            Kirito
          </a>
        </p>
      </div>
    </div>
  </footer>
);
