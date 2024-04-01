function executeScript() {
    const ledgerCanisterId = 'wkmqa-rqaaa-aaaar-qacxa-cai'; 
    __experimentalAddIcrc1Token(ledgerCanisterId);
    console.log('Script executed with ledgerCanisterId:', ledgerCanisterId, 'and indexCanisterId:', indexCanisterId);
}	