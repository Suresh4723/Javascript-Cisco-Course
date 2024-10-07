let contacts = [{ 
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let newName = prompt("Enter the name of the new contact:");
let newPhone = prompt("Enter the phone number of the new contact:");
let newEmail = prompt("Enter the email of the new contact:");

let newContact = {
    name: newName,
    phone: newPhone,
    email: newEmail
};

contacts.push(newContact);

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[3].name} / ${contacts[3].phone} / ${contacts[3].email}`);
