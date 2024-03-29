const newCookie = {name:"Biscotti Cookies"};
const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]

// Progression 1: create a function to get all the cookies
function getcookies(){

  setTimeout(()=>{
    let output = "";
    cookies.forEach(cookie=>{
      output+=`<li>${cookie.name}</li>`
    });
    document.body.innerHTML = output;
  },1000);
};

// Progression 2: using setTimeout() -- use 1000 units for time parameter
//Progression 3: Create a function to creat cookies and create an object of Promise.

function createcookie(newCookie){
  return new Promise((resolve,reject)=>{

// Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    
setTimeout(()=>{      
  // Progression 5: handling errors and adding new cookie to the list
      cookies.push(newCookie);
      const error = false;
      if(!error){
        resolve();
      }
      else{
        reject('There are no such cookies')
      }

    },2000);
  }
  );
};

// Progression 6: call function using `.then`
createcookie(newCookie).then(getcookies);