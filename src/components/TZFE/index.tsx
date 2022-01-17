export default function TZFE() {
  const table: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  return (
    <div>
      {table.map((el, idx) => {
        return <div>{el}</div>;
      })}
    </div>
  );
}
