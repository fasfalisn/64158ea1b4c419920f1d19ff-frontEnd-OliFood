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
    {   location.href= '/CustomerHome' ;}};document.getElementById('iz6293').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iz6293")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/OrderSummary/' + transitionId;}};document.getElementById('i878w').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.getElementById('i7fivt').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.getElementById('i3968f').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};window.onload = () => {let userId = window.location.pathname.replace('/Products/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
      if(response.body.query.userimage !== undefined){
        if(document.querySelector('[annotationname = userimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = userimage]').setAttribute('data-image-base64',response.body.query.userimage.data);
          let fileName = response.body.query.userimage.name;
          let file = new File([response.body.query.userimage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = userimage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = userimage]').src = response.body.query.userimage.data ;
        }
        document.querySelector('[annotationname = userimage]').name = response.body.query.userimage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = username]').textContent = response.body.query.username; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = useraddress]').textContent = response.body.query.useraddress; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = userproducts]').setAttribute('selected-element',response.body.query.userproducts.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'userproducts']");
        if (insideSubdocument !==null) {
          const tableDatauserproducts = response.body.query.userproducts;
    
    
    
      const tableDataElementproductName = insideSubdocument.querySelectorAll("[annotationname = 'productName']");
      const tableDataElementproductPrice = insideSubdocument.querySelectorAll("[annotationname = 'productPrice']");
    tableDatauserproducts.forEach((data, indexuserproducts) => {
      if(tableDataElementproductName.length <= indexuserproducts) {
        return;
      }
       
    try {
      if (tableDataElementproductName[indexuserproducts] !== null) {
        tableDataElementproductName[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productName;
      }
    }
    catch(e) {console.log(e);}; 
    try {
      if (tableDataElementproductPrice[indexuserproducts] !== null) {
        tableDataElementproductPrice[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productPrice;
      }
    }
    catch(e) {console.log(e);};
      
      {
        let parenttableDataElementproductName =  tableDataElementproductName[indexuserproducts];
        while(parenttableDataElementproductName.tagName !== "TR") {
          parenttableDataElementproductName = parenttableDataElementproductName.parentNode;
        }
        map.set(
          parenttableDataElementproductName.getAttribute("id"),
          tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1]
        );
      }
    
    });
    
      [...tableDataElementproductName].forEach((element, index) => {
        parent = tableDataElementproductName[index];
        if (index >= tableDatauserproducts.length) {
          while(parent.tagName !== "TR") {
            parent = parent.parentNode;
          }
          parent.style.display = "none";
        }
        else {
          tableDataElementproductName[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.userproducts._id){
        map.set(
          document.querySelector(
            "[annotationname = 'userproducts']"
          ).getAttribute("id"),
          response.body.query.userproducts
        );
      }
     } catch (e) { console.log(e) };
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    }});};