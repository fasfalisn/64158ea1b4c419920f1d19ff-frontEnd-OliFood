let apiUserApi = new TempApi.UserApi();
import TempApi from '../src/index';

document.getElementById('i0ydy').onclick = (event) => {
  event.preventDefault();
  { location.href = '/CustomerHome'; }
}; document.getElementById('iqo5i').onclick = (event) => {
  event.preventDefault();
  { location.href = '/CustomerHome'; }
}; document.getElementById('iz5fk').onclick = (event) => {
  event.preventDefault();
  { location.href = '/MyOrders'; }
}; document.getElementById('i20vk').onclick = (event) => {
  event.preventDefault();
  { location.href = '/editProfile'; }
}; document.getElementById('iib2w').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Login'; }
}; document.getElementById('ipavd').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Profile'; }
}; document.getElementById('iq2sl').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Login'; }
}; document.getElementById('io27z').onclick = (event) => {
  event.preventDefault();
  { location.href = '/editProfile'; }
}; document.getElementById('ie9bo').onclick = (event) => {
  event.preventDefault();
  { location.href = '/CustomerHome'; }
}; document.getElementById('ixwluj').onclick = (event) => {
  event.preventDefault();
  { location.href = '/MyProducts'; }
}; document.getElementById('i7tmww').onclick = (event) => {
  event.preventDefault();
  { location.href = '/editProfile/'; }
};

window.onload = () => {
  // let userId = window.location.pathname.replace('/Profile/','');
  let user = JSON.parse(localStorage.getItem('user'));
  console.log(JSON.parse(localStorage.getItem('user')));
  if(user.usercategory === 'Πελάτης'){
    document.getElementById('ibznrl').style.display = 'none';
    document.getElementById('ixwluj').style.display = 'none';
  }

  if(user.userimage.data !== undefined){
    try {
        document.getElementById('ipv4j').src = user.userimage.data;
    } catch (e) {
        console.log(e);
    }
  }

  try {
      document.getElementById('ih2iz').textContent = user.username;
  } catch (e) {
      console.log(e);
  }

  // apiUserApi.getuser( userId, (error, data, response) => {
  //   if (error) {
  //     console.error(error);
  //   }
  //   else {
      // console.log('API called successfully. Returned data: ' + data);
      try {
        document.querySelector('[annotationname = username]').textContent = user.username;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = useremail]').textContent = user.useremail;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = userstatus]').textContent = user.userstatus;
      }
      catch (e) {
        console.log(e) };
      try {
        if(user.userimage !== undefined){
          if(document.querySelector('[annotationname = userimage]').getAttribute('type') === 'file'){
            document.querySelector('[annotationname = userimage]').setAttribute('data-image-base64',user.userimage.data);
            let fileName = user.userimage.name;
            let file = new File([user.userimage.data], fileName,{
              lastModified:new Date().getTime()}
                                , 'utf-8');
            let container = new DataTransfer();
            container.items.add(file);
            document.querySelector("[annotationname = userimage]").files = container.files;
          }
          else {
            document.querySelector('[annotationname = userimage]').src = user.userimage.data ;
          }
          document.querySelector('[annotationname = userimage]').name = user.userimage.name ;
        }
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = mondayopen]').textContent = user.mondayopen;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = mondayclose]').textContent = user.mondayclose;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = tuesdayopen]').textContent = user.tuesdayopen;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = tuesdayclose]').textContent = user.tuesdayclose;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = wednesdayopen]').textContent = user.wednesdayopen;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = wednesdayclose]').textContent = user.wednesdayclose;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = thursdayopen]').textContent = user.thursdayopen;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = thursdayclose]').textContent = user.thursdayclose;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = fridayopen]').textContent = user.fridayopen;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = fridayclose]').textContent = user.fridayclose;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = usertown]').textContent = user.usertown;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = userregion]').textContent = user.userregion;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = useraddress]').textContent = user.useraddress;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = userpc]').textContent = user.userpc;
      }
      catch (e) {
        console.log(e) };
    // }
  // }
  //                   );
};