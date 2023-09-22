let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('i0ydy').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/CustomerHome' ;}};document.getElementById('iz5fk').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyOrders' ;}};document.getElementById('i20vk').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/editProfile' ;}};document.getElementById('iib2w').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Login' ;}};document.getElementById('ipavd').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Profile' ;}};document.getElementById('iq2sl').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Login' ;}};document.getElementById('io27z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/editProfile' ;}};document.getElementById('ie9bo').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/CustomerHome' ;}};
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
      document.getElementById('ivf40k').onclick = (event) => {
        event.preventDefault();
        let oldUser = JSON.parse(localStorage.getItem('user'));
        let userId = oldUser._id;
        let user = new TempApi.User();
        user['username'] = document.querySelector("[annotationname = 'username']").value;
        user['useremail'] = document.querySelector("[annotationname = 'useremail']").value;
        user['userstatus'] = document.querySelector("[annotationname = 'userstatus']").value;
        user['userimage'] = {
          data: document.querySelector("[annotationname = 'userimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'userimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'userimage']").src,
          name: document.querySelector("[annotationname = 'userimage']").getAttribute("name")
        };
        if(document.querySelector("[annotationname = 'usercategory']").value === 'Προμηθευτής'){
          user['mondayclose'] = document.querySelector("[annotationname = 'mondayclose']").value|| '';
          user['mondayopen'] = document.querySelector("[annotationname = 'mondayopen']").value;
          user['tuesdayopen'] = document.querySelector("[annotationname = 'tuesdayopen']").value;
          user['tuesdayclose'] = document.querySelector("[annotationname = 'tuesdayclose']").value;
          user['wednesdayopen'] = document.querySelector("[annotationname = 'wednesdayopen']").value;
          user['wednesdayclose'] = document.querySelector("[annotationname = 'wednesdayclose']").value;
          user['thursdayclose'] = document.querySelector("[annotationname = 'thursdayclose']").value;
          user['thursdayopen'] = document.querySelector("[annotationname = 'thursdayopen']").value;
          user['fridayopen'] = document.querySelector("[annotationname = 'fridayopen']").value;
          user['fridayclose'] = document.querySelector("[annotationname = 'fridayclose']").value;
        }
        user['usertown'] = document.querySelector("[annotationname = 'usertown']").value;
        user['userregion'] = document.querySelector("[annotationname = 'userregion']").value;
        user['useraddress'] = document.querySelector("[annotationname = 'useraddress']").value;
        user['userpc'] = document.querySelector("[annotationname = 'userpc']").value;
        user['usercategory'] = document.querySelector("[annotationname = 'usercategory']").value;
        let opts = {
          user};
        apiUserApi.updateuser( userId, opts, (error, data, response) => {
          if (error) {
            console.error(error);
          }
          else {
      
            console.log('API called successfully. Returned data: ' + data);
            console.log(response.body.query);
            localStorage.setItem('user', JSON.stringify(response.body.query));
            document.querySelector('[annotationname = username]').value = response.body.query.username ;
            document.querySelector('[annotationname = useremail]').value = response.body.query.useremail ;
            document.querySelector('[annotationname = userstatus]').value = response.body.query.userstatus ;
            if(response.body.query.userimage !== undefined){
              if(document.querySelector('[annotationname = userimage]').getAttribute('type') === 'file'){
                document.querySelector('[annotationname = userimage]').setAttribute('data-image-base64',response.body.query.userimage.data);
              }
              else{
                document.querySelector('[annotationname = userimage]').src = response.body.query.userimage.data;
              }
              document.querySelector('[annotationname = userimage]').name = response.body.query.userimage.name;
            }
            document.querySelector('[annotationname = mondayclose]').value = response.body.query.mondayclose ;
            document.querySelector('[annotationname = mondayopen]').value = response.body.query.mondayopen ;
            document.querySelector('[annotationname = tuesdayopen]').value = response.body.query.tuesdayopen ;
            document.querySelector('[annotationname = tuesdayclose]').value = response.body.query.tuesdayclose ;
            document.querySelector('[annotationname = wednesdayopen]').value = response.body.query.wednesdayopen ;
            document.querySelector('[annotationname = wednesdayclose]').value = response.body.query.wednesdayclose ;
            document.querySelector('[annotationname = thursdayclose]').value = response.body.query.thursdayclose ;
            document.querySelector('[annotationname = thursdayopen]').value = response.body.query.thursdayopen ;
            document.querySelector('[annotationname = fridayopen]').value = response.body.query.fridayopen ;
            document.querySelector('[annotationname = fridayclose]').value = response.body.query.fridayclose ;
            document.querySelector('[annotationname = usertown]').value = response.body.query.usertown ;
            document.querySelector('[annotationname = userregion]').value = response.body.query.userregion ;
            document.querySelector('[annotationname = useraddress]').value = response.body.query.useraddress ;
            document.querySelector('[annotationname = userpc]').value = response.body.query.userpc ;
            document.querySelector('[annotationname = usercategory]').value = response.body.query.usercategory ;
            {
              location.href= '/Profile' ;
            }
          }
        }
                             );
      };

      document.getElementById('iu9afr').addEventListener('change', () => {
        if(document.querySelector("[annotationname = 'usercategory']").value === 'Προμηθευτής'){
          document.getElementById('ibznrl').style.display = 'block';
        }else {
          document.getElementById('ibznrl').style.display = 'none';
        }
      });


      window.onload = () => {
        const spinner = document.getElementById('spinner');
        const list = document.getElementById('i03afv');
        // let userId = window.location.pathname.replace('/editProfile/','');
        let user = JSON.parse(localStorage.getItem('user'));
        if(user.usercategory === 'Πελάτης'){
          document.getElementById('ibznrl').style.display = 'none';
        }
        spinner.style.display = 'none';
        list.style.display = 'block';

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
              document.querySelector('[annotationname = username]').value = user.username;
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = useremail]').value = user.useremail;
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = userstatus]').value = user.userstatus || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = usercategory]').value = user.usercategory;
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
              document.querySelector('[annotationname = mondayopen]').value = user.mondayopen || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = mondayclose]').value = user.mondayclose || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = tuesdayopen]').value = user.tuesdayopen || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = tuesdayclose]').value = user.tuesdayclose || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = wednesdayopen]').value = user.wednesdayopen || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = wednesdayclose]').value = user.wednesdayclose || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = thursdayopen]').value = user.thursdayopen || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = thursdayclose]').value = user.thursdayclose || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = fridayopen]').value = user.fridayopen || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = fridayclose]').value = user.fridayclose || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = usertown]').value = user.usertown || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = userregion]').value = user.userregion || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = useraddress]').value = user.useraddress || '';
            }
            catch (e) {
              console.log(e) };
            try {
              document.querySelector('[annotationname = userpc]').value = user.userpc || '';
            }
            catch (e) {
              console.log(e) };
        //   }
        // }
        //                   );
      };