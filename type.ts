class Contact {
    static totalContacts = 0;
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;

    constructor(nom: string, prenom: string, email: string, telephone: string) {
        this.id = Contact.totalContacts++;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
    }
}

const contacts: Contact[] = [];

document.getElementById("contactForm")!.addEventListener('submit', (e) => {
    e.preventDefault();

    const nom = (document.getElementById("nom") as HTMLInputElement).value;
    const prenom = (document.getElementById("prenom") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const telephone = (document.getElementById("telephone") as HTMLInputElement).value;

    const contact = new Contact(nom, prenom, email, telephone);
    contacts.push(contact);

    afficherContacts();
    majNombreContacts();
});

function afficherContacts() {
    const listeContacts = document.getElementById("listeContacts")!;
    listeContacts.innerHTML = '';

    for (const contact of contacts) {
        const li = document.createElement('li');
        li.textContent = `${contact.id}. ${contact.nom} ${contact.prenom} - ${contact.email} - ${contact.telephone}`;
        const btnSupprimer = document.createElement('button');
        btnSupprimer.textContent = "Supprimer";
        btnSupprimer.onclick = () => {
            const index = contacts.indexOf(contact);
            contacts.splice(index, 1);
            afficherContacts();
            majNombreContacts();
        };
        li.appendChild(btnSupprimer);
        listeContacts.appendChild(li);
    }
}

function majNombreContacts() {
    const div = document.getElementById("nombreContacts")!;
    div.textContent = `Nombre de contacts: ${contacts.length}`;
}

function triContacts() {
    const option = (document.getElementById("triOption") as HTMLSelectElement).value;
    switch (option) {
        case 'id':
            contacts.sort((a, b) => a.id - b.id);
            break;
        case 'nom':
            contacts.sort((a, b) => a.nom.localeCompare(b.nom));
            break;
        case 'prenom':
            contacts.sort((a, b) => a.prenom.localeCompare(b.prenom));
            break;
    }
    afficherContacts();
}

