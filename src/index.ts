
// Indata: array med användarobjekt
const users: { id: number, name: string, age: string, isActive: boolean }[] = [
    { id: 1, name: "Alice", age: "28", isActive: true },
    { id: 2, name: "Bob", age: "35", isActive: false },
    { id: 3, name: "Charlie", age: "22", isActive: true }
];

// Skapa en tom array för bearbetade användare
const accounts: { id: number, name: string, age: number, isActive: boolean }[] = [];

// Loopa igenom användarna
for (const user of users) {
    // Konvertera ålder från string till number
    const ageNumber = parseInt(user.age);

    // Om användaren är aktiv, gör namnet till versaler
    let userName = user.name;
    if (user.isActive) {
        userName = user.name.toUpperCase();
    }

    // Skapa nytt bearbetat objekt
    const newAccount = {
        id: user.id,
        name: userName,
        age: ageNumber,
        isActive: user.isActive
    };

    // Lägg till det bearbetade objektet i accounts-arrayen
    accounts.push(newAccount);
}

// Skriv ut hela bearbetade arrayen
console.log(accounts);

// Skriv ut varje användare på ny rad i läsbart format
for (const user of accounts) {
    console.log(`user ID: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.isActive}`);
}