/* AJAX fetch() calls */
const log = console.log;

log('Loaded front-end javascript.');

// A function to send a POST request with a new student.
export async function addUser(username, password) {
    // the URL for the request
    const url = 'http://localhost:5000/users/create';

    // The data we are going to send in our request
    let user = {
        username : username,
        password : password
    };

    // log(JSON.stringify(user));
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'post', 
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });

    // Send the request with fetch()
    try {
        // https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
        let res = await fetch(request);
        console.log("!!! status");
        console.log(res);
        if(res.status !== 200) {
            return false;
        }
        let data = await res.json();
        log(data);
        return true;
    } catch(err) {
        console.log("signup ERROR");
        // log(err);
        return false;
    }
    // fetch(request)
    // .then(function(res) {
    //         log(res)
    //         console.log('Added User')
    // }).catch((error) => {
    //     log(error)
    // });
};

export async function loginUser(username, password) {
    // the URL for the request
    const url = 'http://localhost:5000/users/login';

    // The data we are going to send in our request
    let user = {
        username : username,
        password : password
    };

    // log(JSON.stringify(user));
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'post', 
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });

    // Send the request with fetch()
    try {
        let res = await fetch(request);
        let data = await res.json();
        log(res);
        log(data);
        return data;
    } catch(err) {
        log(err)
    }  
}

export function logoutUser(username, password) {
    // the URL for the request
    const url = 'http://localhost:5000/users/logout';

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'get'
    });

    // Send the request with fetch()
    fetch(request)
    .then(function(res) {
            log(res)
            console.log('User Logout')
    }).catch((error) => {
        log(error)
    });    
}

export async function setUserPassword(userid, password) {
    // assume userId exists
    const url = 'http://localhost:5000/users/password';

    // The data we are going to send in our request
    let user = {
        userid : userid,
        password : password
    };

    log(JSON.stringify(user));
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'patch', 
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });

    // Send the request with fetch()
    try {
        let res = await fetch(request);
        let data = await res.json();
        log(data);
        console.log('User Password Updated');
        return data;
    } catch(err) {
        log(err);
    } 
  }
  
  export async function getAllUsers(){
    const url = 'http://localhost:5000/users/all';

    // Create our request constructor with all the parameters we need
    const request = new Request(url);

    // Send the request with fetch()
    try {
        let res = await fetch(request);
        let data = res.json();
        return data;  
    } catch(err) {
        log(err);
    }
  }
  
//   export async function isAdmin(){
//       // the URL for the request
//       const url = 'http://localhost:5000/users/admin';

//       // Create our request constructor with all the parameters we need
//       const request = new Request(url);
  
//       // Send the request with fetch()
//       try {
//         let res = await fetch(request);
//         return res.isAdmin;  
//       } catch(err) {
//           log(err);
//       }
//   }