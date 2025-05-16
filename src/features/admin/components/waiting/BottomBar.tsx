import { AnimatePresence } from 'framer-motion';
import * as S from './BottomBar.styles';
import DeleteIcon from '@/assets/icons/nrk_trash.svg?react';
import CheckIcon from '@/assets/icons/nrk_check.svg?react';

export default function BottomBar({ id }: { id: number | null }) {
  if (!id) return null;
  return (
    <AnimatePresence>
      {id && (
        <S.Container
          key="bottom-bar"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          variants={S.variants}
        >
          <S.TextSection>
            <S.HeaderText>0000팀</S.HeaderText>
            <S.Text>선택</S.Text>
          </S.TextSection>
          <S.ButtonSection>
            <S.Button whileTap={{ scale: 0.97, backgroundColor: '#212526' }}>
              <DeleteIcon width={'1.5rem'} height={'1.5rem'} />
              <S.ButtonText>노쇼/삭제</S.ButtonText>
            </S.Button>
            <S.Button whileTap={{ scale: 0.97, backgroundColor: '#212526' }}>
              <CheckIcon width={'1.5rem'} height={'1.5rem'} />
              <S.ButtonText>입장 완료</S.ButtonText>
            </S.Button>
          </S.ButtonSection>
        </S.Container>
      )}
    </AnimatePresence>
  );
}
