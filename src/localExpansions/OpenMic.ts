import { BigNumber } from '@ethersproject/bignumber';
import { Call, Contract } from 'ethcall';
import { RarityExpansion } from 'rarity-react';

export interface OpenMicPrize {
  tokenId: BigNumber;
  rare: boolean;
  index: BigNumber;
  name: string
}

export interface OpenMic {
  timeToNextPerformance: number;
  prizes: OpenMicPrize[];
}

export function getEmoji(prize: OpenMicPrize) {
  if(prize.rare) {
    switch(prize.index.toNumber()) {
      case 0: return '🤴';
      case 1: return '💀';
      case 2: return '👹';
    }
  } else {
    switch(prize.index.toNumber()) {
      case 0: return '🦅';
      case 1: return '🦡';
      case 2: return '🐤';
      case 3: return '🦨';
      case 4: return '😼';
      case 5: return '🐕';
      case 6: return '🐟';
      case 7: return '🦈';
      case 8: return '🦁';
      case 9: return '🐯';
      case 10: return '🐍';
      case 11: return '🍷';
      case 12: return '💩';
      case 13: return '⚫';
    }
  }
}

export default {
  id: 'openmic',
  getSummonerCalls: (contract: Contract, summonerId: string) => {
    return[
      contract.timeToNextPerformance(summonerId),
      contract.getPrizes(summonerId)
    ] as Call[];
  },
  getSummonerExpansion: (callResults: any[]) => {
    const [ timeToNextPerformance, prizes ] = callResults;
    return {
      timeToNextPerformance,
      prizes: prizes.map((p: OpenMicPrize) => {
        return {
          tokenId: BigNumber.from(p.tokenId),
          rare: p.rare,
          index: BigNumber.from(p.index),
          name: p.name
        }
      })
    } as OpenMic;
  }
} as RarityExpansion;