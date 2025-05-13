import { useState } from "react";
import * as S from "./UserSelect.styles";
import ArrowIcon from "@/assets/icons/down-arrow.svg?react";
import { AnimatePresence } from "framer-motion";

const OPTIONS = [
  { id: 1, name: "응용수학과" },
  { id: 2, name: "소프트웨어학과" },
  { id: 3, name: "AI융합학부" },
  { id: 4, name: "AI융합학부" },
  { id: 5, name: "AI융합학부" },
  { id: 6, name: "AI융합학부" },
  { id: 7, name: "AI융합학부" },
  { id: 8, name: "AI융합학부" },
  { id: 9, name: "AI융합학부" },
];

export default function UserSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    console.log(id);
    setIsOpen(false);
  };

  return (
    <S.Container onClick={() => setIsOpen((prev) => !prev)}>
      <S.SelectedText>
        눈 떠보니 수데사더라...(feat. 응용수학과)눈 떠보니 수데사더라...(feat.
        응용수학과)눈 떠보니 수데사더라...(feat. 응용수학과)
      </S.SelectedText>
      <ArrowIcon
        width={"1.5rem"}
        height={"1.5rem"}
        style={{ rotate: !isOpen ? "" : "180deg" }}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <S.Select
            layout
            key="select"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            {OPTIONS.map((option) => {
              return (
                <S.SelectItem
                  key={option.id}
                  onClick={(e) => handleSelect(e, option.id)}
                  whileTap={{ scale: 0.99, backgroundColor: "#212526" }}
                >
                  {option.name}
                </S.SelectItem>
              );
            })}
          </S.Select>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
