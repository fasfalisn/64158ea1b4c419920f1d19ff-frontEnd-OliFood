let apiUserApi = new TempApi.UserApi(); 
import TempApi from '../src/index'; 
let user = new TempApi.User(); 
document.getElementById('ij7t').onclick = (event) => {
    event.preventDefault();
    { location.href = '/Login'; }
}; 
document.getElementById('ir5fh').onclick = (event) => {
    event.preventDefault();
    user['username'] = document.querySelector("[annotationname = 'username']").value;
    user['useremail'] = document.querySelector("[annotationname = 'useremail']").value;
    user['usercategory'] = document.querySelector("[annotationname = 'usercategory']").value;
    user['password'] = document.querySelector("[annotationname = 'password']").value;
    apiUserApi.registeruser( user['useremail'], user['password'], (error, data, response) => {
      if (error) {
        console.error(error);
      }
      else {
        console.log('API called successfully. Returned data: ' + data);
      }
    }
                         );
  };
  window.onload = () => {
  };