import { ThemeContext } from "../lib/context";
import { useContext, useEffect, useRef } from "react";

function Modal() {
  const { modal, setModal } = useContext(ThemeContext);

  return (
    <div onClick={() => setModal(false)} className="modalBackground">
      <h1>Email & Password</h1>
      <div>
        <button
          className="Cbtn"
          onClick={() => (window.location.href = "https://telostask.app/login")}
        >
          Login
        </button>
      </div>
      <h2>Comming Soon!</h2>
      <div>
        <button className="Cbtn disabled" disabled>
          <img className="walletIcon" src={require(`../icons/metamask.png`)} />
          
          MetaMask
        </button>
      </div>
      <div>
        <button className="Cbtn disabled" disabled>
          <img
            className="walletIcon"
            src={require(`../icons/WalletConnect.png`)}
          />{" "}
          WalletConnect
        </button>
      </div>
    </div>
  );
}

export default Modal;
