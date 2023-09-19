let apiUserApi = new TempApi.UserApi(); 
import TempApi from '../src/index'; 
let apiProductApi = new TempApi.ProductApi(); 
let apiOrderApi = new TempApi.OrderApi();
let order = new TempApi.Order;
let orderSum = 0;

document.getElementById('i0ydy').onclick = (event) => {
  event.preventDefault();
  { location.href = '/CustomerHome'; }
}; 

document.getElementById('iz5fk').onclick = (event) => {
  event.preventDefault();
  { location.href = '/MyOrders'; }
}; 

document.getElementById('i20vk').onclick = (event) => {
  event.preventDefault();
  { location.href = '/editProfile'; }
}; 

document.getElementById('iib2w').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Login'; }
}; 

document.getElementById('ipavd').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Profile'; }
}; 

document.getElementById('iq2sl').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Login'; }
}; 

document.getElementById('io27z').onclick = (event) => {
  event.preventDefault();
  { location.href = '/editProfile'; }
}; 

document.getElementById('ie9bo').onclick = (event) => {
  event.preventDefault();
  { location.href = '/CustomerHome'; }
}; 

document.getElementById('i878w').onclick = (event) => {
  event.preventDefault();
  { window.document.location = ''; }
}; 

document.getElementById('iw7073').onclick = (event) => {
  event.preventDefault();
  { window.document.location = ''; }
}; 

window.onload = () => {
  let userId = window.location.pathname.replace('/OrderSummary/','');
  apiUserApi.getuser( userId, (error, data, response) => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('API called successfully. Returned data: ' + data);
      const map = new Map();
      try {
        document.querySelector('[annotationname = username]').textContent = response.body.query.username;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = useraddress]').textContent = response.body.query.useraddress;
      }
      catch (e) {
        console.log(e) };
      // Retrieve current data from local storage
      const storedData = window.localStorage.getItem("data");
      const currentData = storedData
      ? new Map(JSON.parse(storedData))
      : new Map();
      // Add new data to current data
      const newData = Array.from(map.entries());
      newData.forEach(([key, value]) => {
        currentData.set(key, value);
      }
                     );
      // Save updated data to local storage
      window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
      );
    }
  }
                    );





    const savedOrder = JSON.parse(localStorage.getItem('order')).products;
      const subDataElements =[...document.getElementById("i1i58").querySelectorAll( "[dataitem='true']" )].filter(
        (element, index, array) =>
        !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
      );
    //   const map = new Map();
      Object.keys(savedOrder).forEach((item,i) => {
        const savedProduct = savedOrder[item];
        let product;
        
        if(subDataElements.length > i)
        {
            apiProductApi.getproduct(item, (error,data,response) => {
                if(error){
                    console.log(error);
                } else {
                    product = response.body.query;
                    console.log(product);
                      try {
                        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productName']");
                        if(insideSubDataElement !== null){
                          insideSubDataElement.textContent = product.productName;
                        }
                        else if(subDataElements[i].getAttribute('annotationname') === 'productName'){
                          subDataElements[i].textContent = product.productName;
                        }
                      }
                      catch (e) {
                        console.log(e) };
                      try {
                        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productPrice']");
                        if(insideSubDataElement !== null){
                          insideSubDataElement.textContent = product.productPrice;
                        }
                        else if(subDataElements[i].getAttribute('annotationname') === 'productPrice'){
                          subDataElements[i].textContent = product.productPrice;
                        }
                      }
                      catch (e) {
                        console.log(e) };
                    try {
                        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productCategory']");
                        if(insideSubDataElement !== null){
                        insideSubDataElement.textContent = savedProduct.quantity;
                        }
                        else if(subDataElements[i].getAttribute('annotationname') === 'productCategory'){
                        subDataElements[i].textContent = savedProduct.quantity;
                        }
                    }
                    catch (e) {
                        console.log(e) };
                      try {
                        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productUnit']");
                        if(insideSubDataElement !== null){
                          insideSubDataElement.textContent = product.productUnit;
                        }
                        else if(subDataElements[i].getAttribute('annotationname') === 'productUnit'){
                          subDataElements[i].textContent = product.productUnit;
                        }
                      }
                      catch (e) {
                        console.log(e) };
                        try {
                            const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productSum']");
                            if(insideSubDataElement !== null){
                              insideSubDataElement.textContent = product.productPrice * savedProduct.quantity;
                              orderSum += product.productPrice * savedProduct.quantity;
                              console.log(orderSum);
                            }
                            else if(subDataElements[i].getAttribute('annotationname') === 'productSum'){
                              subDataElements[i].textContent = product.productPrice * savedProduct.quantity;
                              orderSum += product.productPrice * savedProduct.quantity;
                              console.log(orderSum);
                            }
                          }
                          catch (e) {
                            console.log(e) };
                }
            })
        
        //   map.set(subDataElements[i].getAttribute('id'), savedOrder[savedOrder.length-i-1])
        }
        
      }
                  );
        // try {
        //     const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ordersum']");
        //     if(insideSubDataElement !== null){
        //     insideSubDataElement.textContent = orderSum;
        //     }
        //     else if(subDataElements[i].getAttribute('annotationname') === 'ordersum'){
        //     subDataElements[i].textContent = orderSum;
        //     }
        // }
        // catch (e) {
        //     console.log(e) };



    //   // Retrieve current data from local storage
    //   const storedData = window.localStorage.getItem("data");
    //   const currentData = storedData
    //   ? new Map(JSON.parse(storedData))
    //   : new Map();
    //   // Add new data to current data
    //   const newData = Array.from(map.entries());
    //   newData.forEach(([key, value]) => {
    //     currentData.set(key, value);
    //   }
    //                  );
    //   // Save updated data to local storage
    //   window.localStorage.setItem(
    //     "data",
    //     JSON.stringify(Array.from(currentData.entries()))
    //   );
    //   [...subDataElements].forEach((element,index) => {
    //     if(index >= data.length) subDataElements[index].style.display = 'none';
    //   }
    //                               )
};