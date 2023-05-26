import AddEmployee from "./components/AddEmployee";

import ListEmployee from "./components/ListEmployee";

const App = () => {
  return (
    <>
      <div className="container">
        <h3 className="m-2 d-flex justify-content-center">
          Employee CRUD React TS <br />
        </h3>
        <AddEmployee />
        <ListEmployee />
      </div>
    </>
  );
};

export default App;
