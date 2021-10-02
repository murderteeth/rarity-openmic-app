import moment from 'moment';
import { Summoner, SummonerSkill, ForestTreasure } from 'rarity-react'
import { getEmoji, OpenMicPrize } from '../localExpansions/OpenMic'
import { BigNumber } from '@ethersproject/bignumber';

export default function Bards({ bards } : { bards: Summoner[] }) {

  function formatTimeToNextPerformance(timeToNextPerformance: BigNumber) {
    const duration = moment.duration(timeToNextPerformance.toNumber(), 'seconds');
    return `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m`;
  }

  return <ul className="bards">
    {bards.map(b => {
      return (
        <li key={b.tokenId.toString()}>
          <ul>
            <li>bard #{b.tokenId.toString()}</li>
            <li>level {b.expansions['core'].level.toString()}</li>
            <li>charisma {b.expansions['abilities'].charisma}</li>
            <li>perform skill {b.expansions['skills'].get(SummonerSkill.perform)}</li>
            <li>
              forest treasures
              <ul className="treasures">
                {b.expansions['forest-research'].treasure.map((t: ForestTreasure) => {
                  return (
                    <li key={t.treasureId.toString()}>{t.itemName}</li>
                  )
                })}
              </ul>
            </li>
            <li className="openmic">
              <h2>open mic status</h2>
              next performance:&nbsp;
                {b.expansions['openmic'].timeToNextPerformance.eq(0) && (
                  <> 🎵 now! </>
                )}
                {b.expansions['openmic'].timeToNextPerformance.gt(0) && (
                  <>{formatTimeToNextPerformance(b.expansions['openmic'].timeToNextPerformance)}</>
                )}
              <ul>
                {b.expansions['openmic'].prizes.length === 0 && (
                  <>-- no prizes yet =( --</>
                )}
                {b.expansions['openmic'].prizes.map((prize: OpenMicPrize) => {
                  return (
                    <li key={prize.tokenId.toString()}><span className="emoji">{getEmoji(prize)}</span> {prize.name}</li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </li>
      )
    })}
  </ul>
}