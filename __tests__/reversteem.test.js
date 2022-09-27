"use strict";

const rs = require("reversteem");
jest.setTimeout(80000);

describe("Account tests", () => {
 test('Fetching test account should return the correct details.', async () => {
   const expected = [{"id":1747456,"name":"tstreversteem","owner":{"weight_threshold":1,"account_auths":[],"key_auths":[["STM8kXyoiUVqEBG6RX4N1dgWM7b4RMfFEaa7pRbRVkq58RXgy8yVq",1]]},"active":{"weight_threshold":1,"account_auths":[],"key_auths":[["STM5MxW4HgjHKBZe9M2WXRskLhU3NGTjMGHJ6HE9QcVnUEk3W9Sy2",1]]},"posting":{"weight_threshold":1,"account_auths":[],"key_auths":[["STM7eGY5At5P5ZJyL3b8LgxPHHwB7YRUCVwJFT8YWT5kUnVaDZj92",1]]},"memo_key":"STM5HjAWTUVwc51XwF3WBVcBGvnxR4m7ZCKqGRuh76rEH8HRX5MZM","json_metadata":"{}","posting_json_metadata":"","proxy":"","last_owner_update":"1970-01-01T00:00:00","last_account_update":"1970-01-01T00:00:00","created":"2022-09-24T00:24:54","mined":false,"recovery_account":"reversteem","last_account_recovery":"1970-01-01T00:00:00","reset_account":"null","comment_count":0,"lifetime_vote_count":0,"post_count":0,"can_vote":true,"voting_manabar":{"current_mana":"5396664214","last_update_time":1663979511},"downvote_manabar":{"current_mana":1349166053,"last_update_time":1663979511},"voting_power":0,"balance":"0.001 STEEM","savings_balance":"0.000 STEEM","sbd_balance":"0.000 SBD","sbd_seconds":"0","sbd_seconds_last_update":"1970-01-01T00:00:00","sbd_last_interest_payment":"1970-01-01T00:00:00","savings_sbd_balance":"0.000 SBD","savings_sbd_seconds":"0","savings_sbd_seconds_last_update":"1970-01-01T00:00:00","savings_sbd_last_interest_payment":"1970-01-01T00:00:00","savings_withdraw_requests":0,"reward_sbd_balance":"0.000 SBD","reward_steem_balance":"0.000 STEEM","reward_vesting_balance":"0.000000 VESTS","reward_vesting_steem":"0.000 STEEM","vesting_shares":"0.000000 VESTS","delegated_vesting_shares":"0.000000 VESTS","received_vesting_shares":"5396.664214 VESTS","vesting_withdraw_rate":"0.000000 VESTS","next_vesting_withdrawal":"1969-12-31T23:59:59","withdrawn":0,"to_withdraw":0,"withdraw_routes":0,"curation_rewards":0,"posting_rewards":0,"proxied_vsf_votes":[0,0,0,0],"witnesses_voted_for":0,"last_post":"1970-01-01T00:00:00","last_root_post":"1970-01-01T00:00:00","last_vote_time":"1970-01-01T00:00:00","post_bandwidth":0,"pending_claimed_accounts":0,"vesting_balance":"0.000 STEEM","reputation":0,"transfer_history":[],"market_history":[],"post_history":[],"vote_history":[],"other_history":[],"witness_votes":[],"tags_usage":[],"guest_bloggers":[]}];
   const received = await rs.fetchAccounts([rs.constant.testAccount.account]);
   expect(received).toStrictEqual(expected);
 });
})

describe("Board tests", () => {
 test('Making initial post board should return the correct board.', () => {
   const expected = rs.constant.postBoard;
   const received = rs.makePostBoard('...........................ox......xo...........................');
   expect(received).toBe(expected);
 });
})

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com', {timeout: 0});
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});
