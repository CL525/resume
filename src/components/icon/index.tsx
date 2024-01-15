import { Icon } from '@iconify/react';
import classnames from 'classnames';
import './index.scss';

interface IconProps {
  name: string;
  className?: string;
}

export default function IconComponent ({ name, className }: IconProps) {
  return (
    <div className="icon-component">
      <Icon className={classnames('icon', className)} icon={name} />
    </div>
  )
}