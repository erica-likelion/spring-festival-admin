import { Logo, Password, UserSelect } from "@/features/login";
import * as S from "./Login.styles";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Logo />
      <S.LabelSection>
        <S.Label>
          <S.Text>주점 선택</S.Text>
          <UserSelect />
        </S.Label>
        <S.Label>
          <S.Text>관리자 코드</S.Text>
          <Password />
        </S.Label>
      </S.LabelSection>
      <S.ButtonSection>
        <S.Button whileTap={{ scale: 0.99 }} onClick={() => navigate("/admin")}>
          관리자 로그인
        </S.Button>
      </S.ButtonSection>
    </S.Container>
  );
}
