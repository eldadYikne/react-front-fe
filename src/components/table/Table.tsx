import { TableData, TableProps } from "../../types/table";
import styles from "./table.module.scss";

export default function Table(props: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {props.th.map((th) => (
            <th key={th}> {th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row: TableData, index) => {
          return (
            <tr key={index}>
              {Object.keys(row).map((key) => (
                <td key={key}> {row[key as keyof TableData]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
