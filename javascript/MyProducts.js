let apiUserApi = new TempApi.UserApi(); 
import TempApi from '../src/index'; 

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
  localStorage.removeItem('user');
  { location.href = '/Login'; }
}; 

document.getElementById('ipavd').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Profile'; }
}; 
document.getElementById('iq2sl').onclick = (event) => {
  event.preventDefault();
  localStorage.removeItem('user');
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

document.getElementById('iu6xvc').onclick = (event) => {
  event.preventDefault();
  { location.href = '/NewProduct'; }
}; 

document.getElementById('iz9eo8').onclick = (event) => {
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
    location.href = '/EditProduct/' + transitionId;
  }
}; document.getElementById('i7vj64').onclick = (event) => {
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
    location.href = '/EditProduct/' + transitionId;
  }
}; 

window.onload = () => {
    const spinner = document.getElementById('spinner');
    const list = document.getElementById('iksqg4');
    spinner.style.display = 'block';
    list.style.display = 'none';
  // let userId = window.location.pathname.replace("/MyProducts/", "");
  let user = JSON.parse(localStorage.getItem('user'));
  if(!user){
    location.href = "/Login"
    }
  let userId = user._id;

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
  
  apiUserApi.getuser(userId, (error, data, response) => {
      if (error) {
          console.error(error);
      } else {
        spinner.style.display = 'none';
        list.style.display = 'block';
          console.log("API called successfully. Returned data: " + data);
          const map = new Map();
          try {
              document
                  .querySelector("[annotationname = userproducts]")
                  .setAttribute(
                      "selected-element",
                      response.body.query.userproducts.undefined
                  );
              const insideSubdocument = document.querySelector(
                  "[annotationname = 'userproducts']"
              );
              if (insideSubdocument !== null) {
                  const tableDatauserproducts =
                      response.body.query.userproducts;

                  const tableDataElementproductName =
                      insideSubdocument.querySelectorAll(
                          "[annotationname = 'productName']"
                      );
                  const tableDataElementproductPrice =
                      insideSubdocument.querySelectorAll(
                          "[annotationname = 'productPrice']"
                      );
                  const tableDataElementproductUnit =
                      insideSubdocument.querySelectorAll(
                          "[annotationname = 'productUnit']"
                      );
                  tableDatauserproducts.forEach((data, indexuserproducts) => {
                      if (
                          tableDataElementproductName.length <=
                          indexuserproducts
                      ) {
                          return;
                      }

                      try {
                          if (
                              tableDataElementproductName[
                                  indexuserproducts
                              ] !== null
                          ) {
                              tableDataElementproductName[
                                  indexuserproducts
                              ].textContent =
                                  tableDatauserproducts[
                                      tableDatauserproducts.length -
                                          indexuserproducts -
                                          1
                                  ].productName;
                          }
                      } catch (e) {
                          console.log(e);
                      }
                      try {
                          if (
                              tableDataElementproductPrice[
                                  indexuserproducts
                              ] !== null
                          ) {
                              tableDataElementproductPrice[
                                  indexuserproducts
                              ].textContent =
                                  tableDatauserproducts[
                                      tableDatauserproducts.length -
                                          indexuserproducts -
                                          1
                                  ].productPrice;
                          }
                      } catch (e) {
                          console.log(e);
                      }
                      try {
                          if (
                              tableDataElementproductUnit[
                                  indexuserproducts
                              ] !== null
                          ) {
                              tableDataElementproductUnit[
                                  indexuserproducts
                              ].textContent =
                                  tableDatauserproducts[
                                      tableDatauserproducts.length -
                                          indexuserproducts -
                                          1
                                  ].productUnit;
                          }
                      } catch (e) {
                          console.log(e);
                      }

                      {
                          let parenttableDataElementproductName =
                              tableDataElementproductName[indexuserproducts];
                          while (
                              parenttableDataElementproductName.tagName !==
                              "TR"
                          ) {
                              parenttableDataElementproductName =
                                  parenttableDataElementproductName.parentNode;
                          }
                          map.set(
                              parenttableDataElementproductName.getAttribute(
                                  "id"
                              ),
                              tableDatauserproducts[
                                  tableDatauserproducts.length -
                                      indexuserproducts -
                                      1
                              ]
                          );
                      }
                  });

                  [...tableDataElementproductName].forEach(
                      (element, index) => {
                          parent = tableDataElementproductName[index];
                          if (index >= tableDatauserproducts.length) {
                              while (parent.tagName !== "TR") {
                                  parent = parent.parentNode;
                              }
                              parent.style.display = "none";
                          } else {
                              tableDataElementproductName[
                                  index
                              ].style.display = "";
                          }
                      }
                  );
              }
              if (response.body.query.userproducts._id) {
                  map.set(
                      document
                          .querySelector("[annotationname = 'userproducts']")
                          .getAttribute("id"),
                      response.body.query.userproducts
                  );
              }
          } catch (e) {
              console.log(e);
          }
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
      }
  });
};