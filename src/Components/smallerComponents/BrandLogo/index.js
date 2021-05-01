import "./BrandLogo.css";

import parkingPointLogo from "../../../assets/images/auxilium-logo-1.png";

import { useHistory } from "react-router-dom";

const BrandLogo = () => {
  const history = useHistory();

  return (
    <div
      className="BrandLogo"
      onClick={() => {
        history.push("/");
      }}
    >
      <img src={parkingPointLogo} alt="brand logo" />
      <h2>
        <span>A</span>uxilium
      </h2>
    </div>
  );
};

export default BrandLogo;
