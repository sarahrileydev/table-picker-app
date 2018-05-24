class Table {
    constructor (id){
        this.id = id;
        this.status = "available";
        this.party = null;
    }

    addParty(name, partySize, contact){
        this.party = new Party(name, partySize, contact);
        this.status = "reserved";
    }   
    
    
}