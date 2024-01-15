import Icon from '@/components/icon';
import './index.scss';

interface IContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function ({ title, children }: IContainerProps) {
  return (
    <div className="module_container">
      <div className="module_container-title">{title}</div>
      {children}
    </div>
  )
}