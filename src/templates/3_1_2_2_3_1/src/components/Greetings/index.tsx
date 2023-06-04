import { useCounterStore } from "store/useCounterStore";
import { State } from "types/state";
import styles from "./styles.module.scss";

export const Greetings = (): JSX.Element => {
  const counterStore: State.Counter = useCounterStore();

  return (
    <>
      <h1 className={styles.title}>💫 Hello, <AUTHOR>! 💫</h1>
      <h2 className={styles.subtitle}>You chose the awesome stack: <br/> React + NextJS + SASS Modules + Zustand + Firebase</h2>
      <h2 className={styles.subtitle}>🚀 Have a nice coding 🚀</h2>
      <button
        type="button"
        onClick={counterStore.increment}
        className={styles.button}
      >
        Click me! {counterStore.value}
      </button>
    </>
  );
};
