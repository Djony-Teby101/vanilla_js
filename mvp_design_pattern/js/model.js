// Model - Gère les données et la logique métier
class PersonModel {
    constructor() {
        // Initialisation avec des données par défaut
        this.persons = [
            { id: 1, nom: 'Dupont', prenom: 'Jean', age: 35, ville: 'Paris' },
            { id: 2, nom: 'Martin', prenom: 'Marie', age: 28, ville: 'Lyon' }
        ];
        this.nextId = 3;
    }

    // Récupérer toutes les personnes
    getPersons() {
        return [...this.persons]; // Retourne une copie pour éviter les modifications directes
    }

    // Ajouter une personne
    addPerson(personData) {
        // Validation des données
        if (!this.validatePerson(personData)) {
            throw new Error('Données de personne invalides');
        }

        const newPerson = {
            id: this.nextId++,
            nom: personData.nom,
            prenom: personData.prenom,
            age: parseInt(personData.age),
            ville: personData.ville
        };

        this.persons.push(newPerson);
        return newPerson;
    }

    // Supprimer une personne
    deletePerson(id) {
        const index = this.persons.findIndex(p => p.id === id);
        if (index !== -1) {
            this.persons.splice(index, 1);
            return true;
        }
        return false;
    }

    // Calculer l'âge moyen
    getAverageAge() {
        if (this.persons.length === 0) return 0;
        const total = this.persons.reduce((sum, p) => sum + p.age, 0);
        return (total / this.persons.length).toFixed(1);
    }

    // Valider les données d'une personne
    validatePerson(person) {
        return (
            person.nom && person.nom.trim() !== '' &&
            person.prenom && person.prenom.trim() !== '' &&
            person.age && !isNaN(person.age) && person.age > 0 && person.age < 150 &&
            person.ville && person.ville.trim() !== ''
        );
    }
}