import Header from "../../components/header";
import NewMovieCard from "../../components/addmoviecard";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function NewMovie() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };
  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <Header />
        <NewMovieCard />
      </Provider>
    </>
  );
}

export default NewMovie;
