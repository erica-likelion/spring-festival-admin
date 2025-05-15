import { NavBar } from '@/components/nav-bar';
import * as S from './Admin.styles';
import { Button, Help, Info } from '@/features/admin';
import AlarmButton from '@/components/button/AlarmButton';
import CallButton from '@/components/button/CallButton';

export default function Admin() {
  return (
    <>
      <NavBar isBack title="웨이팅 관리" />
      <S.Wrapper>
        <Info />
        <Button />
      </S.Wrapper>
      <Help />
      <AlarmButton />
      <CallButton tel="010-0000-0000" />
    </>
  );
}
