import AddEmployee from "../components/AddEmployee";
import ListEmployee from "../components/ListEmployee";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row my-2">
          <div className="col-md-4">
            <AddEmployee />
          </div>
          <div className="col-md-8">
            <ListEmployee />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
