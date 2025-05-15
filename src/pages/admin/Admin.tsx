import { NavBar } from '@/components/nav-bar';
import * as S from './Admin.styles';
import { Button, Help, Info } from '@/features/admin';

export default function Admin() {
  return (
    <>
      <NavBar isBack title="웨이팅 관리" />
      <S.Wrapper>
        <Info />
        <Button />
      </S.Wrapper>
      <Help />
    </>
  );
}
