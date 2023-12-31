let apiUserApi = new TempApi.UserApi(); import TempApi from '../src/index'; document.getElementById('i0ydy').onclick = (event) => {
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
  localStorage.removeItem('user');
  { location.href = '/Login'; }
}; document.getElementById('ipavd').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Profile'; }
}; document.getElementById('iq2sl').onclick = (event) => {
  event.preventDefault();
  localStorage.removeItem('user');
  { location.href = '/Login'; }
}; document.getElementById('io27z').onclick = (event) => {
  event.preventDefault();
  { location.href = '/editProfile'; }
}; document.getElementById('ie9bo').onclick = (event) => {
  event.preventDefault();
  { location.href = '/CustomerHome'; }
}; 

document.getElementById("iz6293").onclick = (event) => {
  event.preventDefault();
  {
    // Get a reference to the table
    const table = document.getElementById("iggkk");

    // Create an object to store the selected products and quantities
    const selectedProducts = {products: {}};

    // Loop through the rows in the table (skip the header row)
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (const row of rows) {
      // const productName = row.querySelector("h2[annotationname=productName]").textContent.trim();
      // const productPrice = row.querySelector("p[annotationname=productPrice]").textContent.trim();  
        const quantityInput = row.cells[1].getElementsByTagName("input")[0];
        const quantity = parseInt(quantityInput.value, 10); // Convert input value to an integer

        // Check if the quantity is greater than 0, meaning the user selected this product
        if (quantity > 0) {
          const productIdElement = row.querySelector("[data-product-id]");
          const productId = productIdElement.getAttribute("data-product-id");
            // Create a unique product ID (you can use a more meaningful ID if available)
            // Store the selected product and quantity in the object
            selectedProducts.products[productId] = {
              id: productId,
              quantity: quantity
            }
        }
    }

    localStorage.setItem('order', JSON.stringify(selectedProducts));
    let userId = window.location.pathname.replace("/Products/", "");
    // Print the selected products and quantities to the console
    console.log(selectedProducts);
      location.href = "/OrderSummary/" + userId;
  }
}; 

document.getElementById('i878w').onclick = (event) => {
  event.preventDefault();
  { window.document.location = ''; }
}; document.getElementById('i7fivt').onclick = (event) => {
  event.preventDefault();
  { window.document.location = ''; }
}; document.getElementById('i3968f').onclick = (event) => {
  event.preventDefault();
  { window.document.location = ''; }
}; 

window.onload = () => {
const spinner = document.getElementById('spinner');
const list = document.getElementById('icikqk');
spinner.style.display = 'block';
list.style.display = 'none';
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user){
    location.href = "/Login"
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

  let userId = window.location.pathname.replace("/Products/", "");
  apiUserApi.getuser(userId, (error, data, response) => {
      if (error) {
          console.error(error);
      } else {
        spinner.style.display = 'none';
        list.style.display = 'block';
          console.log("API called successfully. Returned data: " + data);
          const map = new Map();
          try {
              if (response.body.query.userimage !== undefined) {
                  if (
                      document
                          .querySelector("[annotationname = userimage]")
                          .getAttribute("type") === "file"
                  ) {
                      document
                          .querySelector("[annotationname = userimage]")
                          .setAttribute(
                              "data-image-base64",
                              response.body.query.userimage.data
                          );
                      let fileName = response.body.query.userimage.name;
                      let file = new File(
                          [response.body.query.userimage.data],
                          fileName,
                          { lastModified: new Date().getTime() },
                          "utf-8"
                      );
                      let container = new DataTransfer();
                      container.items.add(file);

                      document.querySelector(
                          "[annotationname = userimage]"
                      ).files = container.files;
                  } else {
                      document.querySelector(
                          "[annotationname = userimage]"
                      ).src = response.body.query.userimage.data;
                  }
                  document.querySelector(
                      "[annotationname = userimage]"
                  ).name = response.body.query.userimage.name;
              }
          } catch (e) {
              console.log(e);
          }
          try {
              document.querySelector(
                  "[annotationname = username]"
              ).textContent = response.body.query.username;
          } catch (e) {
              console.log(e);
          }
          try {
              document.querySelector(
                  "[annotationname = useraddress]"
              ).textContent = response.body.query.useraddress;
          } catch (e) {
              console.log(e);
          }
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
                  console.log(tableDatauserproducts);
                  const tableDataElementproductName =
                      insideSubdocument.querySelectorAll(
                          "[annotationname = 'productName']"
                      );
                  const tableDataElementproductImage =
                  insideSubdocument.querySelectorAll(
                      "[listimage]"
                  );
                console.log(tableDataElementproductName);
                  const tableDataElementproductPrice =
                      insideSubdocument.querySelectorAll(
                          "[annotationname = 'productPrice']"
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
                                  tableDataElementproductName[
                                    indexuserproducts
                                ].setAttribute('data-product-id',
                                    tableDatauserproducts[
                                        tableDatauserproducts.length -
                                            indexuserproducts -
                                            1
                                    ]._id);        
                          
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
                                  ].productPrice + "€";
                          }
                      } catch (e) {
                          console.log(e);
                      }
                      try {
                        if (
                            tableDataElementproductImage[
                                indexuserproducts
                            ] !== null
                        ) {
                            tableDataElementproductImage[
                                indexuserproducts
                            ].src =
                                tableDatauserproducts[
                                    tableDatauserproducts.length -
                                        indexuserproducts -
                                        1
                                ].productImage.data;
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
                              console.log(parent);
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