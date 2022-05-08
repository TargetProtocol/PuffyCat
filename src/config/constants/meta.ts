import { ContextApi } from 'contexts/Localization/types'

import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Puffy Swap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Puffy Swap), NFTs, and more, on a platform you can trust.',
  image: 'https://puffycat.me/files/images/puffycat2.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Puffy Swap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Puffy Swap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Puffy Swap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Puffy Swap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Puffy Swap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Puffy Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Puffy Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Puffy Swap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Puffy Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Puffy Swap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Puffy Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Puffy Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Puffy Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Puffy Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Puffy Swap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Puffy Swap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Puffy Swap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Puffy Swap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Puffy Swap Info & Analytics')}`,
        description: 'View statistics for Puffy Swap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Puffy Swap Info & Analytics')}`,
        description: 'View statistics for Puffy Swap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Puffy Swap Info & Analytics')}`,
        description: 'View statistics for Puffy Swap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Puffy Swap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Puffy Swap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Puffy Swap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Puffy Swap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Puffy Swap')}`,
      }
    default:
      return null
  }
}
