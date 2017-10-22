# chainge - The Social Impact Blockchain App

## Intro
**chainge** is a revolutionary app designed for refugees to incorporate their daily life initiatives into a systematic, 
immutable & reliable system that helps formulate post-relocation life experiences as professional skills to complement 
work applications in a foreign nation where their previous jobs might be rendered obsolete.

We use a blockchain model to prevent corruption and/or data tampering while creating a systematic linear record for each 
indvidual to access their skill record based on a predefined set of parameters. eg - 
+ large-scale cooking --> community service skill
+ vacination admintration --> medical skill
+ peaca & trauma mitigation --> interpersonal comm. skill

## Build & Run
To build the project, first install all relevant npm dependencies as follows:

For **Ubuntu**-based Users (with sudo most probably)

    $ npm install -g ethereumjs-testrpc
    $ npm install -g truffle
    
1) run **_testrpc_** in a seperate instance of the terminal and keep it running in the background 
2) in a seperate terminal, create a directory at your desired destination and run **_truffle init_**
3) run **_truffle compile_** to compile all relevant libraries and dependent packages
4) run **_truffle migrate_** to update the live testrpc session and initiate your blockchain
5) note that you should use **_truffle migrate --reset_** if you've already run **_migrate_** once in an active session
6) run **_truffle console_** to start up the interactive shell to modify and access the blockchain and it's data. Note however, that the current implementation supports upto 3 users and can be accomodated to add upto 10 in our current implementation with minor modifications.
7) iff you wish to try this online AT YOUR OWN RISK, install geth as advised on: https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum and execute the following:

       $ geth --testnet --rpc console 2>> geth.log
       $ personal.unlockAccount(eth.accounts[0], _passphrase_, 24*3600)
       $ eth.getBalance(eth.accounts[0])

For **MacOS**-based Users

**Note:** If you're facing problems with .DS_STORE, simply delete the file using the terminal and run as usual. Any further errors that report the same issue can be safely ignored.

## Applications & Integrations

This application can be used succesfully in social settings such as for refugees and needs to be scaled according to size of your target audience. In addition, this can be integrated with already existing platforms to run testrpc natively or with use of geth or similar Ethereal API's. check out Ethereal documentation and the following repository for inspiration. Note that you will require real money to simulate in these platforms (except for the native testrpc example)
https://github.com/maraoz/solidity-experiments

## Collaborators
> Aniruddha Nandi

> Annie Wu

> Chloe Tanchip
