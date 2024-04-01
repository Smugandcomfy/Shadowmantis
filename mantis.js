function executeScript() {
    const ledgerCanisterId = ''; 
    __experimentalAddIcrc1Token(ledgerCanisterId);
    console.log('Script executed with ledgerCanisterId:', ledgerCanisterId, 'and indexCanisterId:', indexCanisterId);
}	
