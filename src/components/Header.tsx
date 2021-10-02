import { Link, useLocation } from 'react-router-dom';
import { truncateAddress, useWeb3 } from 'rarity-react';
import useWalletConnected from './useWalletConnected';

export default function Header() {
  const	{ address, deactivate, onDesactivate } = useWeb3();
  const walletConnected = useWalletConnected();
  const location = useLocation();

  function disconnectWallet() {
    deactivate();
    onDesactivate();
  }

  return (
    <header>
      <div className="brand">
        {(walletConnected || location.pathname !== "/") && (
          <h1><Link to="/">Rarity Open Mic 🎶</Link></h1>
        )}
      </div>

      <div className="menu">
        <Link to="/prizes">prizes</Link>
      </div>

      <div className="wallet">
        {walletConnected && (
          <>
            connected to <span title={address}>{truncateAddress(address)}</span>
            <button onClick={disconnectWallet} title="Disconnect your wallet">X</button>
          </>
        )}
      </div>
    </header>
  );
}