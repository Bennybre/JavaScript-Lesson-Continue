// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json()) // Omvandlar json till js
//       .then(json => console.log(json)) 

      const apiUrlUppg1 = 'https://jsonplaceholder.typicode.com/users';
      fetch(apiUrlUppg1).then(response => {
        console.log("Mottagit response:", Response.status, response.statusText);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        
        }
        return response.json();

      }).then(data => {
        const users = data;

        const names = users.map(users => users.name);

        const upperCaseNames = names.map(name => name.toUpperCase());

        console.log(upperCaseNames)

        const html = upperCaseNames.map(name => `<p>${name}</>`).join('');

        document.body.innerHTML += html;
      });


// const apiUrlUppg1 = 'https://jsonplaceholder.typicode.com/users';
// fetch(apiUrlUppg1).then(response => {
//     console.log("Mottagit response:", response.status, response.statusText);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     return response.json();

// }).then(data  => {
//     const users = data;
//     // filter(user => user.name.includes("nn"))
//     const html = users.map(user => user.name) // ta ut namnen
//                       .map(name => name.toUpperCase()) // til uppercase
//                       .map(name => `<p>${name}</p>`).join('') // till html

//     document.body.innerHTML += html;
// });
