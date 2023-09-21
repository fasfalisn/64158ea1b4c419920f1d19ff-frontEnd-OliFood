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
}; document.getElementById('is4aky').onclick = (event) => {
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
          .contains(document.getElementById("is4aky")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/Products/' + transitionId;
  }
}; document.getElementById('i93erj').onclick = (event) => {
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
          .contains(document.getElementById("i93erj")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/Products/' + transitionId;
  }
}; 

// Search Functionality
const searchInput = document.getElementById('i5v55'); 

const subDataElements = [
  ...document.getElementById('ity8k').querySelectorAll("[dataitem='true']")
];

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase(); 

  subDataElements.forEach(element => {
    const usernameElement = element.querySelector("[annotationname='username']");
    if (usernameElement && !usernameElement.textContent.includes('Προμηθευτής')) {
        console.log(usernameElement.textContent);
      const username = usernameElement.textContent.toLowerCase();
      if (username.includes(searchTerm)) {
        element.style.display = 'block'; // Show the element
      } else {
        element.style.display = 'none'; // Hide the element
      }
    }
  });
});

window.onload = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if(user.usercategory === 'Προμηθευτής'){
      location.href = "/MyOrders"
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

  const filtergetSuppliers = { usercategory: { $eq: "Προμηθευτής" } };
  apiUserApi.getByParamsuser(filtergetSuppliers, (error, data, response) => {
      if (error) {
          console.error(error);
      } else {
          console.log("API called successfully. Returned data: " + data);
          const subDataElements = [
              ...document
                  .getElementById("ity8k")
                  .querySelectorAll("[dataitem='true']"),
          ].filter(
              (element, index, array) =>
                  !array.reduce(
                      (hasAncestorFlag, dataItem) =>
                          hasAncestorFlag ||
                          (element.compareDocumentPosition(dataItem) &
                              Node.DOCUMENT_POSITION_CONTAINS) ===
                              8,
                      false
                  )
          );
          const map = new Map();
          data.forEach((item, i) => {
              if (subDataElements.length > i) {
                  try {
                      const insideSubDataElement = subDataElements[
                          i
                      ].querySelector("[annotationname = 'username']");
                      if (insideSubDataElement !== null) {
                          insideSubDataElement.textContent =
                              data[data.length - i - 1].username;
                      } else if (
                          subDataElements[i].getAttribute(
                              "annotationname"
                          ) === "username"
                      ) {
                          subDataElements[i].textContent =
                              data[data.length - i - 1].username;
                      }
                  } catch (e) {
                      console.log(e);
                  }
                  try {
                    const insideSubDataElement = subDataElements[
                        i
                    ].querySelector("[datacardimage='true']");
                    if (insideSubDataElement !== null) {
                        insideSubDataElement.src =
                            data[data.length - i - 1].userimage.data;
                    } 
                  } catch (e) {
                      console.log(e);
                  }
                  map.set(
                      subDataElements[i].getAttribute("id"),
                      data[data.length - i - 1]
                  );
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

          [...subDataElements].forEach((element, index) => {
              if (index >= data.length)
                  subDataElements[index].style.display = "none";
          });
      }
  });
};