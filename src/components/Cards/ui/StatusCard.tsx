export const StatusCard = ({ num }: { num: number }) => {
  return (
    <div className="wrapper">
      {[1, 2, 3, 4].map((el: number) => (
        <div key={el} className={`progress ${num === el || num > el ? "active" : "not_active"}`} />
      ))}
    </div>
  );
};
