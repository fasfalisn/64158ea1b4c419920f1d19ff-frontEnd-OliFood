let apiOrderApi = new TempApi.OrderApi();import TempApi from '../src/index';document.getElementById('i0ydy').onclick = (event) => {
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
    {   location.href= '/CustomerHome' ;}};document.getElementById('i878w').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.getElementById('iw7073').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.getElementById('i4ng46').onclick = (event) => {
    event.preventDefault();
    let orderId = window.location.pathname.replace('/EditOrder/','');let order = new TempApi.Order();order['orderprice'] = document.querySelector("[annotationname = 'orderprice']").textContent;order['orderstatus'] = document.querySelector("[annotationname = 'orderstatus']").value;order['ordersupplier'] = document.querySelector("[annotationname = 'ordersupplier']").textContent; let opts = {order};apiOrderApi.updateorder( orderId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = orderprice]').textContent = response.body.query.orderprice ;document.querySelector('[annotationname = orderstatus]').value = response.body.query.orderstatus ;document.querySelector('[annotationname = ordersupplier]').textContent = response.body.query.ordersupplier ;{   location.href= '/MyOrders' ;}}});};window.onload = () => {let orderId = window.location.pathname.replace('/EditOrder/','');apiOrderApi.getorder( orderId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = orderprice]').textContent = response.body.query.orderprice; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = orderstatus]').value = response.body.query.orderstatus; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = ordersupplier]').setAttribute('selected-element',response.body.query.ordersupplier.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'ordersupplier']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'username']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.ordersupplier.username;}} catch (e) {console.log(e);};
        }
      if(response.body.query.ordersupplier._id){
        map.set(
          document.querySelector(
            "[annotationname = 'ordersupplier']"
          ).getAttribute("id"),
          response.body.query.ordersupplier
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