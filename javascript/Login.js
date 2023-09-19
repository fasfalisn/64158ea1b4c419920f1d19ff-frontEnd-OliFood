let apiUserApi = new TempApi.UserApi(); 
import TempApi from '../src/index'; 
let user = new TempApi.User(); 

document.getElementById('ij7t').onclick = (event) => {
    event.preventDefault();
    { location.href = '/Signup'; }
}; 

document.getElementById('ir5fh').onclick = (event) => {
    event.preventDefault();
    user['useremail'] = document.querySelector("[annotationname = 'useremail']").value;
    user['password'] = document.querySelector("[annotationname = 'password']").value;
    apiUserApi.loginuser( user['useremail'],user['password'], (error, data, response) => {
      if (error) {
        console.error(error);
      }
      else {
      //   console.log('API called successfully. Returned data: ' + data);
      //   console.log(JSON.stringify(response.body));
        localStorage.setItem('user', JSON.stringify(response.body.user));
      //   console.log(JSON.parse(localStorage.getItem('user')));
        {
          location.href= '/CustomerHome' ;
        }
      }
    }
                         );
  };
  window.onload = () => {
  };