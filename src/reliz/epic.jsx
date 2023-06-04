import Bug from "./components/Bug";
import Relizz from "./components/Relizz";
import data from "./db.json";

const newObj = data.map((obj) => obj.Filial);
const makeUniq = (arr) => {
  const uniqSet = new Set(arr);
  return [...uniqSet];
};
const newNewObj = makeUniq(newObj);


const Epic = () => {
  return (
    <div>
      <h2>{newNewObj[0]}</h2>
      {data.map((obj, i) => (obj.type === "EPIC" ? <Relizz key={i} /> : ""))}
       <Bug  data={data}/>
    </div>
  );
};

export default Epic;
