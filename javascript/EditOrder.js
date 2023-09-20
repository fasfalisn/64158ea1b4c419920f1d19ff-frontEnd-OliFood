let apiOrderApi = new TempApi.OrderApi(); 
import TempApi from '../src/index'; 
let orderSum = 0;
document.getElementById('i0ydy').onclick = (event) => {
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
}; document.getElementById('i878w').onclick = (event) => {
  event.preventDefault();
  { window.document.location = ''; }
}; document.getElementById('iw7073').onclick = (event) => {
  event.preventDefault();
  { window.document.location = ''; }
}; 

document.getElementById('i4ng46').onclick = (event) => {
  event.preventDefault();
  let orderId = window.location.pathname.replace('/EditOrder/','');
//   let order = new TempApi.Order();
//   order['orderprice'] = document.querySelector("[annotationname = 'orderprice']").textContent;
  const order = { orderstatus: document.querySelector("[annotationname = 'orderstatus']").value};
//   order['ordersupplier'] = document.querySelector("[annotationname = 'ordersupplier']").textContent;
  let opts = {
    order};
  apiOrderApi.updateorder( orderId, opts, (error, data, response) => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(response.body.query));
    //   document.querySelector('[annotationname = orderprice]').textContent = response.body.query.orderprice ;
      document.querySelector('[annotationname = orderstatus]').value = response.body.query.orderstatus ;
    //   document.querySelector('[annotationname = ordersupplier]').textContent = response.body.query.ordersupplier ;
      {
        location.href= '/MyOrders' ;
      }
    }
  }
                         );
};


window.onload = () => {
  let orderId = window.location.pathname.replace('/EditOrder/','');
  let savedOrder;

  // Only show update tab to supplier
  let user = JSON.parse(localStorage.getItem('user'));
  if(user.usercategory === 'Πελάτης'){
    document.getElementById('i2n549').style.display = 'none';
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

  apiOrderApi.getorder( orderId, (error, data, response) => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('API called successfully. Returned data: ' + response.body.query.orderproducts);
      savedOrder = response.body.query.orderproducts;
      const map = new Map();
      try {
        document.querySelector('[annotationname = orderprice]').textContent = response.body.query.orderprice + "€";
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = orderstatus]').value = response.body.query.orderstatus;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = ordersupplier]').setAttribute('selected-element',response.body.query.ordersupplier.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'ordersupplier']");
        if (insideSubdocument !==null) {
          try {
            const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'username']");
            if (attributeSubdocumentElement !== null) {
              attributeSubdocumentElement.textContent = response.body.query.ordersupplier.username;
            }
          }
          catch (e) {
            console.log(e);
          };
        }
        if(response.body.query.ordersupplier._id){
          map.set(
            document.querySelector(
              "[annotationname = 'ordersupplier']"
            ).getAttribute("id"),
            response.body.query.ordersupplier
          );
        }
      }
      catch (e) {
        console.log(e) };
        try {
            document.querySelector('[annotationname = ordercustomer]').setAttribute('selected-element',response.body.query.ordercustomer.undefined);
            const insideSubdocument = document.querySelector("[annotationname = 'ordercustomer']");
            if (insideSubdocument !==null) {
              try {
                const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'username']");
                if (attributeSubdocumentElement !== null) {
                  attributeSubdocumentElement.textContent = response.body.query.ordercustomer.username;
                }
              }
              catch (e) {
                console.log(e);
              };
            }
            if(response.body.query.ordercustomer._id){
              map.set(
                document.querySelector(
                  "[annotationname = 'ordercustomer']"
                ).getAttribute("id"),
                response.body.query.ordercustomer
              );
            }
          }
          catch (e) {
            console.log(e) };

            const subDataElements =[...document.getElementById("i1i58").querySelectorAll( "[dataitem='true']" )].filter(
                (element, index, array) =>
                !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
              );
            savedOrder.forEach((item,i) => {
                console.log(item);
                // const savedProduct = savedOrder[item];
                // let product;
                
                if(subDataElements.length > i)
                {
                            console.log(item);
                              try {
                                const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productName']");
                                if(insideSubDataElement !== null){
                                  insideSubDataElement.textContent = item.orderproduct.productName;
                                }
                                else if(subDataElements[i].getAttribute('annotationname') === 'productName'){
                                  subDataElements[i].textContent = item.orderproduct.productName;
                                }
                              }
                              catch (e) {
                                console.log(e) };
                              try {
                                const insideSubDataElement = subDataElements[i].querySelector("[listimage]");
                                if(insideSubDataElement !== null){
                                  insideSubDataElement.src = item.orderproduct.productImage.data;
                                }
                              }
                              catch (e) {
                                console.log(e) };
                              try {
                                const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productPrice']");
                                if(insideSubDataElement !== null){
                                  insideSubDataElement.textContent = item.orderproduct.productPrice + "€";
                                }
                                else if(subDataElements[i].getAttribute('annotationname') === 'productPrice'){
                                  subDataElements[i].textContent = item.orderproduct.productPrice + "€";
                                }
                              }
                              catch (e) {
                                console.log(e) };
                            try {
                                const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productCategory']");
                                if(insideSubDataElement !== null){
                                insideSubDataElement.textContent = item.orderproductquantity;
                                }
                                else if(subDataElements[i].getAttribute('annotationname') === 'productCategory'){
                                subDataElements[i].textContent = item.orderproductquantity;
                                }
                            }
                            catch (e) {
                                console.log(e) };
                              try {
                                const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productUnit']");
                                if(insideSubDataElement !== null){
                                  insideSubDataElement.textContent = item.orderproduct.productUnit;
                                }
                                else if(subDataElements[i].getAttribute('annotationname') === 'productUnit'){
                                  subDataElements[i].textContent = item.orderproduct.productUnit;
                                }
                              }
                              catch (e) {
                                console.log(e) };
                                try {
                                    const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productSum']");
                                    if(insideSubDataElement !== null){
                                      insideSubDataElement.textContent = item.orderproduct.productPrice * item.orderproductquantity + "€";
                                      orderSum += item.orderproduct.productPrice * item.orderproductquantity ;
                                      console.log(orderSum);
                                    }
                                    else if(subDataElements[i].getAttribute('annotationname') === 'productSum'){
                                      subDataElements[i].textContent = item.orderproduct.productPrice * item.orderproductquantity + "€";
                                      orderSum += item.orderproduct.productPrice * item.orderproductquantity;
                                      console.log(orderSum);
                                    }
                                  }
                                  catch (e) {
                                    console.log(e) };
                
                //   map.set(subDataElements[i].getAttribute('id'), savedOrder[savedOrder.length-i-1])
                }
                
              }
                          );
              [...subDataElements].forEach(
                (element, index) => {
                    console.log(element);
                    parent = subDataElements[index];
                    if (index >= savedOrder.length) {
                        while (parent.tagName !== "TR") {
                            parent = parent.parentNode;
                        }
                        console.log(parent);
                        parent.style.display = "none";
                    } else {
                        subDataElements[
                            index
                        ].style.display = "";
                    }
                }
            );

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
};