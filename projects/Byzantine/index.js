// Byzantine Finance

const { sumTokensExport } = require("../helper/unwrapLPs");

module.exports = {
    ethereum: {
        tvl: sumTokensExport({ 
          owner: '0xbA98A4d436e79639A1598aFc988eFB7A828d7F08',
          fetchCoValentTokens: true,
        }),
    }
};
