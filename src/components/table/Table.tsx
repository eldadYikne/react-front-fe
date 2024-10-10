import { useNavigate } from "react-router";
import { SeverityColor, TableData, TableProps } from "../../types/table";
import styles from "./table.module.scss";

export default function Table(props: TableProps) {
  const severityColors: SeverityColor = {
    high: "#f83910",
    medium: "#f88610",
    low: "#156daa",
  };
  const navigate = useNavigate();

  const onNavigate = (row: TableData) => {
    const url = row.imageName ? "repositories" : "images";
    navigate(`/${url}/${row.id}`);
  };
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
              {Object.keys(row).map((key) => {
                return (
                  key !== "id" && (
                    <td
                      className={`${
                        key === "severity" ? styles["td-severity"] : ""
                      }`}
                      key={key}
                    >
                      {key === "severity" &&
                        (row.severity ? (
                          <span
                            className={styles["severity-color"]}
                            style={{
                              background: severityColors[row.severity],
                            }}
                          >
                            {" "}
                          </span>
                        ) : (
                          "-"
                        ))}
                      {key === "repositoryName" || key === "imageName" ? (
                        <span
                          className={styles.link}
                          onClick={() => onNavigate(row)}
                        >
                          {row[key as keyof TableData]}
                        </span>
                      ) : (
                        <span>{row[key as keyof TableData]}</span>
                      )}
                    </td>
                  )
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
