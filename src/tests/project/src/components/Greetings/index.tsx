import { useCounterStore } from "store/useCounterStore";
import { State } from "types/state";
import * as S from "./styles";

export const Greetings = (): JSX.Element => {
  const counterStore: State.Counter = useCounterStore();

  return (
    <>
      <S.Title>💫 Hello, trocar! 💫</S.Title>
      <S.Subtitle>
        You chose the awesome stack: <br /> React + NextJS + Styled Components +
        Zustand + Firebase
      </S.Subtitle>
      <S.Subtitle>🚀 Have a nice coding 🚀</S.Subtitle>
      <S.Button type="button" onClick={counterStore.increment}>
        Click me! {counterStore.value}
      </S.Button>
    </>
  );
};
