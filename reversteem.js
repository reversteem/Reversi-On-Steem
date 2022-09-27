"use strict";

const steem = require("steem");
steem.api.setOptions({
  "url": "https://api.steemit.com",
  "address_prefix": "TST",
  "chain_id": "46d82ab7d8db682eb1959aed0ada039a6d49afa1602491f93dde9cac3e8e6c32",
  "useTestNet": "true"
});

const fs = require('fs');
const constant = {};
constant.emptyCode = '.';
constant.whiteCode = 'o';
constant.blackCode = 'x';
constant.emptyBox = ' □ ';
constant.whiteDisc = ' ⚪';
constant.blackDisc = ' ⚫';
// '...........................ox......xo...........................'
constant.postBoard = `---

𝟷  □  □  □  □  □  □  □  □ 
𝟸  □  □  □  □  □  □  □  □ 
𝟹  □  □  □  □  □  □  □  □ 
𝟺  □  □  □  ⚪ ⚫ □  □  □ 
𝟻  □  □  □  ⚫ ⚪ □  □  □ 
𝟼  □  □  □  □  □  □  □  □ 
𝟽  □  □  □  □  □  □  □  □ 
𝟾  □  □  □  □  □  □  □  □ 
    𝚊  𝚋  𝚌  𝚍  𝚎  𝚏  𝚐  𝚑 

---`;
constant.testAccount = JSON.parse(fs.readFileSync(__dirname + '/json/testAccount.json', 'UTF-8'));

const fetchAccounts = (accounts) => {
  //console.debug('<fetchAccounts/>');				
  return new Promise((resolve, reject) => {
    steem.api.getAccounts(accounts, async (err, result) => {
      if (err) {
        reject(err);
      } else {
        //console.debug(`<fetchAccounts ${JSON.stringify(result)}/>`);				
        resolve(result);
      }
    });
  });
}

const makePostBoard = (board) => {
  try {
    const postBoard =
`---

` +
    '𝟷 ' + board.substring(0, 8).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
    '𝟸 ' + board.substring(8, 16).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
    '𝟹 ' + board.substring(16, 24).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
    '𝟺 ' + board.substring(24, 32).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
    '𝟻 ' + board.substring(32, 40).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
    '𝟼 ' + board.substring(40, 48).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
    '𝟽 ' + board.substring(48, 56).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
    '𝟾 ' + board.substring(56, 64).replaceAll(constant.blackCode, constant.blackDisc)
      .replaceAll(constant.whiteCode, constant.whiteDisc)
      .replaceAll(constant.emptyCode, constant.emptyBox) + '\n' +
`    𝚊  𝚋  𝚌  𝚍  𝚎  𝚏  𝚐  𝚑 

---`;
    return postBoard;
  } catch(e) {
    throw e;
  }
}

module.exports = {
  constant,
  fetchAccounts,
  makePostBoard
};
