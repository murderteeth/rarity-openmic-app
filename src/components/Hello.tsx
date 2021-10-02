import { useWeb3, useSummoners, SummonerClass } from 'rarity-react';
import useWalletConnected from './useWalletConnected';
import Bards from './Bards';

export default function Hello() {
  const	{ connect, walletType } = useWeb3();
  const walletConnected = useWalletConnected();
  const { summoners } = useSummoners();

  const bards = summoners.filter(s => s.expansions['core'].class === SummonerClass.Bard);

  async function connectWallet() {
    await connect(walletType.METAMASK);
  }

  return (
    <>

      {!walletConnected && (<div className="hello">
        <h1>Rarity Open Mic 🎶</h1>
        <p>A lithe, robed figure takes the stage with a flourish. The bard sings out and a hush sweeps over the rowdy tavern...</p>
        <button onClick={connectWallet}>Connect MetaMask wallet to start</button>
      </div>)}

      {walletConnected && (<>
        {bards.length === 0 && (
          <p className="no-bards">
            Hey, you don't have any bards...
            Head over to <a href="https://rarityextended.com/" target="_blank" rel="noreferrer">Rarity Extended</a> and summon a few buddy!
          </p>
        )}
        {bards.length > 0 && (
          <Bards bards={bards}></Bards>
        )}
      </>)}

    </>
  );
}