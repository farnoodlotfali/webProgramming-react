import MyCard from "./MyCard";

const Tasks = ({ data }) => {
  return (
    <div className=" d-flex flex-wrap justify-content-evenly">
      {data.map((item, i) => {
        return (
          <MyCard
            key={i}
            title={item.title}
            desc={item.desc}
            status={item.status}
            statusNum={item.statusNumber}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
