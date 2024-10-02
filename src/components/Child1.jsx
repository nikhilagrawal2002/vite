const Child1 = (props) => {
  const { name, college } = props;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{college}</h1>
    </div>
  );
};

export default Child1;
