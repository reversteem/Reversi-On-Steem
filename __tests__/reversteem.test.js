"use strict";

const reversteem = require("reversteem");

describe("Account tests", () => {
 test('fetching "reversteem" account should return the correct key_auths', async () => {
   const expected = JSON.stringify([["STM7XbJ15F9AYVtEUP5Gm1wTjErvEYofnCFqLt3on3ojkF76aU36L", 1]]);
   expect(await reversteem.fetchAccounts(["reversteem"]).key_auths).toBe();
 });
})
