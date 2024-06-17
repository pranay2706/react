import React, { ReactNode, useContext } from "react";
import { LevelContext } from "./LevelContex";

interface Props {
  children: ReactNode;
}

const Section: React.FC<Props> = ({ children }) => {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

export default Section;
