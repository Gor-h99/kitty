import logo from "assets/logos/logo.png";
import Select from "../common/Select";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-right">
          <Select />
          <WalletMultiButton className="btn-wallet" />
        </div>
      </header>
    </>
  );
};

export default Header;
