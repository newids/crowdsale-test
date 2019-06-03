const OZCrowdsale = artifacts.require("OZCrowdsale");
const OZToken = artifacts.require("OZToken");

module.exports = function (deployer, network, accounts) {
    //   deployer.deploy(OZToken);
    const openingTime = web3.eth.getBlock('latest').timestamp + 2;
    // two secs in the future
    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[1];

    return deployer
        .then(() => {
            return deployer.deploy(OZToken);
        })
        .then(() => {
            return deployer.deploy(
                OZCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                OZToken.address
            );
        });
};