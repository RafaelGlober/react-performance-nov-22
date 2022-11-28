import { FixedSizeList as List, FixedSizeGrid as Grid } from "react-window";
import data from './data.json'
import styles from './Virtualization.module.scss';
import { GoBack } from "../../components";

export const Virtualization = () => {
  const Row = ({ index, style }) => (
    <div style={style} className={index % 2 ? styles.ListItemOdd : styles.ListItemEven}>
      {data[index].name}
    </div>
  );

  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div
      className={
        columnIndex % 2
          ? rowIndex % 2 === 0
            ? styles.GridItemOdd
            : styles.GridItemEven
          : rowIndex % 2
            ? styles.GridItemOdd
            : styles.GridItemEven
      }
      style={style}
    >
      r{rowIndex}, c{columnIndex}
    </div>
  );

  return (
    <div className={styles.virtualization}>
      <GoBack />
      <h1> Virtualization </h1>
      <div>
        <List
          className={styles.list}
          height={200}
          itemCount={data.length}
          itemSize={35}
          width={300}
        >
          {Row}
        </List>
      </div>
      <div>
        <Grid
          className={styles.grid}
          columnCount={1000}
          columnWidth={100}
          height={150}
          rowCount={1000}
          rowHeight={35}
          width={300}
        >
          {Cell}
        </Grid>
      </div>
    </div>
  );
}