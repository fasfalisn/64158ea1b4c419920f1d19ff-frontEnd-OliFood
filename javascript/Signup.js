let apiUserApi = new TempApi.UserApi(); 
import TempApi from '../src/index'; 
let user = new TempApi.User(); 
document.getElementById('ij7t').onclick = (event) => {
    event.preventDefault();
    { location.href = '/Login'; }
}; 
document.getElementById('ir5fh').onclick = (event) => {
    if(document.getElementById('form3Example4cd').value !== document.getElementById('form3Example4c').value){
      console.log('passwords don\'t match')
      return;
    }
    if(document.getElementById('form2Example3c').checked !== true){
      console.log('please accept the terms of use');
      return;
    }
    event.preventDefault();
    user['username'] = document.querySelector("[annotationname = 'username']").value;
    user['useremail'] = document.querySelector("[annotationname = 'useremail']").value;
    user['usercategory'] = document.querySelector("[annotationname = 'usercategory']").value;
    user['password'] = document.querySelector("[annotationname = 'password']").value;
    apiUserApi.registeruser( user['useremail'], user['password'], user['username'], user['usercategory'] , (error, data, response) => {
      if (error) {
        console.error(error);
      }
      else {
        console.log('API called successfully. Returned data: ' + data);
        {
            location.href = '/Login';
        }
      }
    }
                         );
  };
  window.onload = () => {
  };