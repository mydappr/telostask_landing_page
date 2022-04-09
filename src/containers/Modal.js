import { ThemeContext } from "../lib/context";
import { useContext, useEffect, useRef } from "react";

function Modal() {
  const { modal, setModal } = useContext(ThemeContext);

  return (
    <div
      onMouseEnter={() => setModal(true)}
      onClick={() => setModal(false)}
      onMouseLeave={() => setModal(false)}
      className="modalBackground"
    >
      <h2>Email & Password</h2>
      <div>
        <button
          className="Cbtn"
          onClick={() => (window.location.href = "https://main.telostask.app/login")}
        >
          Login
        </button>
      </div>
      <h2>Coming Soon!</h2>
      <div>
        <button
          
          className="Cbtn disabled"
          disabled={true}
        >
          <img className="walletIcon" src={require(`../icons/metamask.png`)} />
          MetaMask
        </button>
      </div>
      <div>
        <button
          
          className="Cbtn disabled"
          disabled={true}
        >
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
