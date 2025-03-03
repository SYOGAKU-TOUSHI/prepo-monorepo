// SPDX-License-Identifier: AGPL-3.0
pragma solidity =0.8.7;

import "./IDepositRecordHook.sol";

interface IWithdrawHook is IDepositRecordHook {
  event WithdrawalsAllowedChange(bool allowed);

  event GlobalPeriodLengthChange(uint256 period);

  event UserPeriodLengthChange(uint256 period);

  event GlobalWithdrawLimitPerPeriodChange(uint256 limit);

  event UserWithdrawLimitPerPeriodChange(uint256 limit);

  function setWithdrawalsAllowed(bool allowed) external;

  function setGlobalPeriodLength(uint256 newPeriod) external;

  function setUserPeriodLength(uint256 newPeriod) external;

  function setGlobalWithdrawLimitPerPeriod(uint256 newLimit) external;

  function setUserWithdrawLimitPerPeriod(uint256 newLimit) external;

  function withdrawalsAllowed() external view returns (bool);

  function getGlobalPeriodLength() external view returns (uint256);

  function getUserPeriodLength() external view returns (uint256);

  function getGlobalWithdrawLimitPerPeriod() external view returns (uint256);

  function getUserWithdrawLimitPerPeriod() external view returns (uint256);

  function getGlobalAmountWithdrawnThisPeriod()
    external
    view
    returns (uint256);

  function getAmountWithdrawnThisPeriod(address user)
    external
    view
    returns (uint256);
}
