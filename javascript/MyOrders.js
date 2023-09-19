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
    {   location.href= '/CustomerHome' ;}};document.getElementById('iz9eo8').onclick = (event) => {
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
            .contains(document.getElementById("iz9eo8")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/EditOrder/' + transitionId;}};document.getElementById('i7vj64').onclick = (event) => {
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
            .contains(document.getElementById("i7vj64")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/EditOrder/' + transitionId;}};window.onload = () => {const filtermyorders = {ordersupplier: { $eq: "id"}}; apiOrderApi.getByParamsorder( filtermyorders, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("idzn8").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'orderprice']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].orderprice;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'orderprice'){
        subDataElements[i].textContent = data[data.length -i -1].orderprice;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'orderstatus']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].orderstatus;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'orderstatus'){
        subDataElements[i].textContent = data[data.length -i -1].orderstatus;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'ordersupplier']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'username']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].ordersupplier.username;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].ordersupplier._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'ordersupplier']"
          ).getAttribute("id"),
          data[data.length-i-1].ordersupplier
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
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
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};