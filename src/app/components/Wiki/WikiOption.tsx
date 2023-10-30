import { FC } from 'react';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const WikiOption: FC<Props> = ({ title, description, icon }) => (
  <div className="flex flex-col gap-6 p-2">
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <h2 className="text-white text-left text-sm font-medium">{title}</h2>
        <p className="text-gray-400 text-xs font-normal">{description}</p>
      </div>
    </div>
  </div>
);
