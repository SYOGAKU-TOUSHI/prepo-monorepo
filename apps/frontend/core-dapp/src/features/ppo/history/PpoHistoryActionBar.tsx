import { Button, Flex, media, spacingIncrement, Typography } from 'prepo-ui'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { CSVLink } from 'react-csv'
import { useEffect } from 'react'
import { Trans } from '@lingui/macro'
import { ppoHistoryFilterTypes } from './ppo-history.types'
import { useRootStore } from '../../../context/RootStoreProvider'
import FilterModal from '../../../components/Filter'

const StyledButton = styled(Button)<{ disabled?: boolean }>`
  &&&& {
    flex: 1;
    .ant-btn {
      border-color: ${({ theme }): string => theme.color.neutral7};
      padding: 0;
      width: 100%;
      ${media.desktop`
        padding: 0 ${spacingIncrement(32)};
      `}
    }
    .ant-btn:hover {
      border-color: ${({ disabled, theme }): string =>
        disabled ? theme.color.neutral7 : theme.color.primary};
    }
    ${media.desktop`
      flex: 0;
    `}
  }
`

const PpoHistoryActionBar: React.FC = () => {
  const {
    ppoHistoryStore: { dataForExport },
    filterStore: { setSelectedFilterTypes, setIsFilterOpen },
  } = useRootStore()

  useEffect(() => {
    setSelectedFilterTypes(undefined)
  }, [setSelectedFilterTypes])

  return (
    <Flex gap={{ phone: 20, desktop: 32 }} justifyContent="flex-end" my={30}>
      <FilterModal filterTypes={ppoHistoryFilterTypes} showMarkets={false} />
      <StyledButton disabled={dataForExport.length === 0}>
        <CSVLink data={dataForExport} filename="ppo_history_data">
          <Typography variant="text-medium-md" color="neutral1">
            <Trans>Export CSV</Trans>
          </Typography>
        </CSVLink>
      </StyledButton>

      <StyledButton onClick={(): void => setIsFilterOpen(true)}>
        <Typography variant="text-medium-md" color="neutral1">
          <Trans>Filter</Trans>
        </Typography>
      </StyledButton>
    </Flex>
  )
}

export default observer(PpoHistoryActionBar)
