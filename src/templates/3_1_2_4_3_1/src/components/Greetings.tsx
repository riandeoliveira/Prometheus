import { useCounterStore } from "store/useCounterStore";
import { State } from "types/state";

export const Greetings = (): JSX.Element => {
  const counterStore: State.Counter = useCounterStore();

  return (
    <>
      <h1 className="text-[32px] font-semibold text-center">
        💫 Hello, <AUTHOR>! 💫
      </h1>
      <h2 className="text-2xl font-normal text-center">
        You chose the awesome stack: <br /> React + NextJS + TailwindCSS +
        Zustand + Firebase
      </h2>
      <h2 className="text-2xl font-normal text-center">
        🚀 Have a nice coding 🚀
      </h2>
      <button
        type="button"
        onClick={counterStore.increment}
        className="bg-primary-500 rounded-md text-white cursor-pointer font-medium p-2 animated-btn"
        // className={styles.button}
      >
        Click me! {counterStore.value}
      </button>
    </>
  );
};
