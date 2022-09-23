"use strict";

const steem = require("steem");
steem.api.setOptions({
  url: "https://api.steemit.com",
  address_prefix: 'TST',
  chain_id: '46d82ab7d8db682eb1959aed0ada039a6d49afa1602491f93dde9cac3e8e6c32',
  useTestNet: true,
});

const fetchAccounts = (accounts) => {
  //debug('<fetchAccounts/>');				
  return new Promise((resolve, reject) => {
    steem.api.getAccounts(accounts, async (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  fetchAccounts
};
