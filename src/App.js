import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  const [ name, setName ] = useState("");
  const [ gender, setGender ] = useState("male");
  const [ age, setAge ] = useState(0);
  const [ petList, setPetList ] = useState([]);

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");

    if (items) {
      setPetList(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(petList));
  }, [ petList.length ]);

  // functions
  const renderItems = () => {
    return petList.map((pet, i) => <ItemTable key={i} {...pet} />);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setPetList([ ...petList, { name, gender, age } ]);

    setName("");
    setGender("male");
    setAge("0");
  }

  // render
  return (
    <div className="card" style={{ width: 400, margin: "0 auto" }}>
      <form onSubmit={handleSubmit} className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="input" type="text" placeholder="Please select ..">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input value={age} onChange={(e) => setAge(e.target.valueAsNumber)} className="input" type="number" placeholder="e.q 5"></input>
        </div>

        <button className="button is-danger is-fullwidth">Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}
        {renderItems()}
        {/* <ItemTable name={"Coco"} gender={"Male"} age={"5"} /> */}
        <p>Apisit Ritreungroj 620610820</p>
      </form>
    </div>
  );
}

export default App;
