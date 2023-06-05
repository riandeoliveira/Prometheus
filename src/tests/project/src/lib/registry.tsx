"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

type StyledComponentsRegistryType = {
  children: ReactNode;
};

export const StyledComponentsRegistry = ({
  children,
}: StyledComponentsRegistryType): JSX.Element => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles: JSX.Element[] = styledComponentsStyleSheet.getStyleElement();

    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
