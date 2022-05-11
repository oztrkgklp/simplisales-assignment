export default (email, password) => `
        mutation login { 
            loginWithEmail(email: "${email}", password: "${password}") 
            { token }
        }
    `;
