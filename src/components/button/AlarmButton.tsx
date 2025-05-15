import { RefAttributes } from 'react';
import * as S from './AlarmButton.styles';
import AlarmIcon from '@/assets/icons/alert.svg?react';

interface AlarmButtonProps extends RefAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size?: 'small' | 'large';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export default function AlarmButton({
  disabled = false,
  size = 'large',
  children = '입장 알림',
  onClick,
  ...props
}: AlarmButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };
  return (
    <S.Container
      disabled={disabled}
      whileTap={{ scale: 0.97, background: '#4D5255' }}
      $size={size}
      onClick={handleClick}
      {...props}
    >
      <AlarmIcon
        width={size === 'large' ? '1.25rem' : '1.125rem'}
        height={size === 'large' ? '1.25rem' : '1.125rem'}
        fill={disabled ? '#4D5255' : '#FAFAFA'}
      />
      {children}
    </S.Container>
  );
}
