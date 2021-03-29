require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth right purity grace dry equal gate'; 
let testAccounts = [
"0x6bec6e84ba398d4610aad845bfaeb1f6c1846ea826f4e8fed09ed0da51999375",
"0x65a7521123320fb70ce0dd6d9ffef1899e9b986d6982f1a0c6abed62330b3387",
"0x79e21863c2bc70966f9ece2e531b4deca5aea9a9433b74b867ffe15947e6eea6",
"0xd4c9d37cd138208872b6302d610a5a02da88512a303402bf9f924c65c30dc2ff",
"0xfff0b1897769815ccdba2ee23b8622824f9ec51b3fc4f80f65444360eebfa4a2",
"0xf901ac62a4ddeab7360116632f1d61c84cb65599831ff64ffb041910ece09eba",
"0x3eae078dfc0080a5f8bb61b894abec3e507f4a106fa8ba701ea410748f23e43f",
"0xb0e9daff67fde04b8813057d575391d0881c3c61836b788298d96ca6f1d549a6",
"0x77a704b4c61a0a0f70074ef8cfb45ba0850d09966c26d728fde5b482c96feb40",
"0xa56879393e6acea7ac9423d8266c77b3eff934addbc09b90b619e1a624f32f40"
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
            version: '^0.5.11'
        }
    }
};
