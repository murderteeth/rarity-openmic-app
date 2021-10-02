import { truncateAddress } from 'rarity-react';
import Github from './socials/GitHub';
import Discord from './socials/Discord';

export default function Footer() {
  return (
    <footer>
      <div className="credits">
        <div>composed for 🎻 by <a href="https://twitter.com/murderteeth" target="_blank" rel="noreferrer">murderteeth</a></div>
        rarity open mic is an expansion for <a href="https://github.com/andrecronje/rarity" target="_blank" rel="noreferrer">Rarity</a> by <a href="https://twitter.com/AndreCronjeTech" target="_blank" rel="noreferrer">AndreCronjeTech</a>
        <br />murderteeth apreciate donation! <span className="emoji">👹🙏</span> <a href="https://ftmscan.com/address/0x8BB5d5A7706Dfd2D25ABE850388e23fe0c54f933" target="_blank" rel="noreferrer">{truncateAddress("0x8BB5d5A7706Dfd2D25ABE850388e23fe0c54f933")}</a>
      </div>

      <div className="socials">
        <Github></Github>
        <Discord></Discord>
      </div>
    </footer>
  );
}