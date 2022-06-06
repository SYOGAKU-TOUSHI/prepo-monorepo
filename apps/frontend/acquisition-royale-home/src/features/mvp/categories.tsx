import Acquire from './acquire'
import Compete from './compete'
import DepositRp from './deposit'
import Rename from './actions/Rename'
import Revive from './actions/Revive'
import RPShop from './rpshop'
import WithdrawRp from './withdraw'
import Merge from './merge'
import Trade from './trade'
import Minigames from './minigames/Minigames'
import { SubtabProps } from '../../components/Subtabs'

export const RP = [
  {
    tab: 'Trade',
    content: <Trade />,
  },
  {
    tab: 'Shop',
    content: <RPShop />,
  },
  {
    tab: 'Deposit',
    content: <DepositRp />,
  },
  {
    tab: 'Withdraw',
    content: <WithdrawRp />,
  },
]

export const PLAY = [
  {
    tab: 'Merge',
    content: <Merge />,
  },
  {
    tab: 'Acquire',
    content: <Acquire />,
  },
  {
    tab: 'Compete',
    content: <Compete />,
  },
  {
    tab: 'Revive',
    content: <Revive />,
  },
]

const categories: { tab: string; subtabs?: SubtabProps[]; content?: React.ReactNode }[] = [
  {
    tab: 'RP',
    subtabs: RP,
  },
  {
    tab: 'PLAY',
    subtabs: PLAY,
  },
  {
    tab: 'EARN',
    content: <Minigames />,
  },
  {
    tab: 'CUSTOMIZE',
    content: <Rename />,
  },
]

export default categories