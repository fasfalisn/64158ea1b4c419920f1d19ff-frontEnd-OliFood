let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('i0ydy').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/CustomerHome' ;}};document.getElementById('iqo5i').onclick = (event) => {
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
    {   location.href= '/CustomerHome' ;}};document.getElementById('ixwluj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyProducts' ;}};document.getElementById('i7tmww').onclick = (event) => {
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
            .contains(document.getElementById("i7tmww")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editProfile/' + transitionId;}};window.onload = () => {let userId = window.location.pathname.replace('/Profile/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = username]').textContent = response.body.query.username; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = useremail]').textContent = response.body.query.useremail; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = userstatus]').textContent = response.body.query.userstatus; } catch (e) { console.log(e) };try { 
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
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = mondayopen]').textContent = response.body.query.mondayopen; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = mondayclose]').textContent = response.body.query.mondayclose; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tuesdayopen]').textContent = response.body.query.tuesdayopen; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tuesdayclose]').textContent = response.body.query.tuesdayclose; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = wednesdayopen]').textContent = response.body.query.wednesdayopen; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = wednesdayclose]').textContent = response.body.query.wednesdayclose; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = thursdayopen]').textContent = response.body.query.thursdayopen; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = thursdayclose]').textContent = response.body.query.thursdayclose; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = fridayopen]').textContent = response.body.query.fridayopen; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = fridayclose]').textContent = response.body.query.fridayclose; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = usertown]').textContent = response.body.query.usertown; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = userregion]').textContent = response.body.query.userregion; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = useraddress]').textContent = response.body.query.useraddress; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = userpc]').textContent = response.body.query.userpc; } catch (e) { console.log(e) };
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