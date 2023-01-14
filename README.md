### Jocker inscription et contact 
### Version 0.0.1
Ce projet utilise Node.js, Express et MongoDB offre un joken pour une inscription
avec une authentification par JWT et une route contact pour sauvegarder un formulaire de contact.

### objectif  
1. objectif en requette mongo 
#### Pouvoir faire
```js
db.users.find({ site: "client1" }, { email: 1, firstName: 1, password: 1 })
```
* et 
```js
db.contacts.find({ site: "client2" })
```

2. objectif Front Pouvoir  faire 
* Angular code
```ts
signUp(formData:FormData):Observable<any>{
    return this.http.post<any>(`localhost:8000/signup`,formData)
  }
  
// *********/

login(formData:FormData):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/login`,formData,{headers: {
            'X_API_KEY':this.token
    }})
    
 // *********/
 contact(formData:FormData):Observable<any>{
    return this.http.post<any>(`localhost:8000/contact`,formData)
}
```


### Prérequis
* Node.js
* MongoDB
### Installation
* Clonez le dépôt
* Installez les dépendances en exécutant npm install
* Démarrez MongoDB en exécutant mongod dans une nouvelle fenêtre de terminal
* Démarrez l'application en exécutant npm start
* Accédez à l'application en ouvrant http://localhost:8000 dans votre navigateur
Utilisation
### Routes
* Les routes de l'application sont définies dans routes/

### Models
Les models de l'application sont définis dans models/

### Controllers
Les controllers de l'application sont définis dans controllers/

### Contribution
Les contributions sont les bienvenues. Pour des changements importants, veuillez ouvrir une issue pour discuter de ce que vous aimeriez changer.

###Licence
Le projet est sous licence [MIT].
