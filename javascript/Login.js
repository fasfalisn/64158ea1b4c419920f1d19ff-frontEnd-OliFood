let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';let user = new TempApi.User();document.getElementById('ij7t').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Signup' ;}};document.getElementById('ir5fh').onclick = (event) => {
    event.preventDefault();
    user['useremail'] = document.querySelector("[annotationname = 'useremail']").value;user['password'] = document.querySelector("[annotationname = 'password']").value;apiUserApi.createuser( user, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/CustomerHome' ;}}});};window.onload = () => {};