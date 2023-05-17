import { Pills } from "../../components/Pills/Pills";
import { FallingSymbols } from "../../components/FallingSymbols/FallingSymbols";
import styles from "./PillsPage.module.css";
import { useState, useEffect } from "react";
export const PillsPage = () => {
  const [showPills, setShowPills] = useState(false);
  const [showSymbols, setShowSymbols] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPills(true);
      setShowSymbols(false);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className={styles.pillsPage}>
      {!showPills && showSymbols ? <FallingSymbols /> : <Pills />}
    </div>
  );
};
