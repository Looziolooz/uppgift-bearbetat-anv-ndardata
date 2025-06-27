// Jag hade en array som innehöll användarobjekt (users) med id, namn, ålder (som text) och om de var aktiva
const users: { id: number, name: string, age: string, isActive: boolean }[] = [
    { id: 1, name: "Alice", age: "28", isActive: true },
    { id: 2, name: "Bob", age: "35", isActive: false },
    { id: 3, name: "Charlie", age: "22", isActive: true }
];

// Jag skapade en tom array (accounts) där jag skulle spara de bearbetade användarna
const accounts: { id: number, name: string, age: number, isActive: boolean }[] = [];

// Jag loopade igenom varje användare i users-arrayen
for (const user of users) {
    // Jag konverterade åldern från text (string) till siffra (number)
    const ageNumber = parseInt(user.age);

    // Jag sparade användarens namn i en variabel
    let userName = user.name;
    // Om användaren var aktiv (isActive=true), gjorde jag om namnet till versaler (stora bokstäver)
    if (user.isActive) {
        userName = user.name.toUpperCase();
    }

    // Jag skapade ett nytt objekt med de bearbetade värdena för varje användare
    const newAccount = {
        id: user.id,
        name: userName,
        age: ageNumber,
        isActive: user.isActive
    };

    // Jag lade till det nya objektet i accounts-arrayen
    accounts.push(newAccount);
}

// Jag skrev ut hela den bearbetade arrayen accounts i konsolen
console.log(accounts);

// Jag skrev ut varje användare på en ny rad, med all information i ett läsbart format
for (const user of accounts) {
    console.log(`user ID: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.isActive}`);
}