import Header from "../../components/header";
import Moviebody from "../../components/moviebody";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function Movies() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };
  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <Header />
        <Moviebody />
      </Provider>
    </>
  );
}

export default Movies;
