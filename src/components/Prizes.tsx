import { BigNumber } from "@ethersproject/bignumber";
import { getEmoji } from "../localExpansions/OpenMic";

export default function Prizes() {

  const rarePrizes = [
    "Secret mission pass from Prince Andre",
    "Secret mission pass from The Austrian",
    "Secret mission pass from Murderteeth"
  ];

  const doorPrizes = [
    "Signet ring of the Hawk",
    "Signet ring of the Badger",
    "Signet ring of the Song Bird",
    "Signet ring of the Skunk",
    "Signet ring of the Cat",
    "Signet ring of the Dog",
    "Signet ring of the Fish",
    "Signet ring of the Shark",
    "Signet ring of the Lion",
    "Signet ring of the Tiger",
    "Signet ring of the Snake",
    "Crate of Goblin Wine",
    "Expired rations",
    "Mysterious black stone"
  ];

  return <div className="prizes">
    <h2>Rare prizes</h2>
    <ul>
      {rarePrizes.map((prize, index) => { return (
        <li key={index}><span className="emoji">{getEmoji({ tokenId: BigNumber.from(0), name: "", rare: true, index: BigNumber.from(index) })}</span> {prize}</li>
      )})}
    </ul>
    <h2>Door prizes</h2>
    <ul>
      {doorPrizes.map((prize, index) => { return (
        <li key={index}><span className="emoji">{getEmoji({ tokenId: BigNumber.from(0), name: "", rare: false, index: BigNumber.from(index) })}</span> {prize}</li>
      )})}
    </ul>
  </div>
}