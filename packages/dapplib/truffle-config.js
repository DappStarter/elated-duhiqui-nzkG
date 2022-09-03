require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rate stick artwork imitate prize equal gas'; 
let testAccounts = [
"0x8e05aa26a830a9b4341798cb5af84f7641acb115c78753378e262e45c238b752",
"0x2701de66d578b9e2834b3dbf3e2b7a670e6c8a863146e2bfb9ed41b0afee5cd7",
"0x4231a6929a75ffe4dbadcad5bb001cd8f526156444184344393f6d796e2a3334",
"0x378de4f797b9e6809c456c0cf5d79878169fda196f74b31888505f14c9da4681",
"0x67b200cd61249e23548acae345d0b3c0f6a6b1821d1b7123f1c4ba67b4b21501",
"0x8805f59c5d17edba3cd0f96e9d606c5c93358308e86427c53f259a11b046c494",
"0x0f9479761ef5c0f6fdbc17810d9f87d386e0eb07ba9274742b91ed18ae67490c",
"0x91b71d6b62078e4fba40c37a13cbc9b45b82e470a35e3e1a48e59f30af7c5e03",
"0x1dfc35392c9cbed620ea09105926b78430b409e6376567aab419724bbc2950a7",
"0x757dfd2598f8315a1a6f1dfeba6152682c767c464a9fc12e5708fa51c54e3ca4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

