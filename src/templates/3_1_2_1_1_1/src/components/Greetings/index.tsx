import { CounterContext } from "contexts/CounterContext";
import { useContext } from "react";
import { State } from "types/state";
import styles from "./styles.module.css";

export const Greetings = (): JSX.Element => {
  const counterStore: State.Counter = useContext(CounterContext);

  return (
    <>
      <h1 className={styles.title}>💫 Hello, <AUTHOR>! 💫</h1>
      <h2 className={styles.subtitle}>
        You chose the awesome stack: <br /> React + NextJS + CSS Modules +
        Context API + Firebase
      </h2>
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
