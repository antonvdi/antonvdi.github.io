import Solsystem from "./Solsystem";
import styles from "./SolsystemSimulator.module.css";

export default function SolsystemSimulator() {
    return (
    <div className={styles.canvas}>
        <Solsystem>
        </Solsystem>
    </div>
    );
}