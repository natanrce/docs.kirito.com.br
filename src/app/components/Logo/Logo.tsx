import { FC } from 'react';
import logoImage from '../../../../public/logo/logo_white.png' 

export const Logo: FC = () => (
  <img src={logoImage.src} alt="Logo" style={{ maxWidth: '40px', maxHeight: '100px' }} />
);