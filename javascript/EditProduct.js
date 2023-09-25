let apiProductApi = new TempApi.ProductApi(); import TempApi from '../src/index'; document.getElementById('i0ydy').onclick = (event) => {
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
}; document.getElementById('im4zq7').onclick = (event) => {
  event.preventDefault();
  let productId = window.location.pathname.replace('/EditProduct/', '');
  if (productId === '/EditProduct' || productId === '') {
    let parentId = "";
    const storedData = window.localStorage.getItem('data');
    const newMap = new Map(JSON.parse(storedData));
    newMap.forEach((value, key) => {
      if (
        document
          .getElementById(key)
          .contains(document.getElementById("im4zq7")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        productId = value._id;
        parentId = key;
      }
    });
  }
  apiProductApi.deleteproduct(productId, (error, data, response) => { if (error) { console.error(error); } else { console.log('API called successfully.'); { location.href = '/MyProducts'; } } });
};
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
} const convertBase64 = (file) => {
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
document.getElementById('formFile').addEventListener("change", async (e) => {

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
  };
});
document.getElementById('i0cmaj').onclick = (event) => {
  event.preventDefault();
  let productId = window.location.pathname.replace('/EditProduct/', ''); let product = new TempApi.Product(); product['productName'] = document.querySelector("[annotationname = 'productName']").value; product['productPrice'] = document.querySelector("[annotationname = 'productPrice']").value; product['productCategory'] = document.querySelector("[annotationname = 'productCategory']").value; product['productImage'] = {
    data: document.querySelector("[annotationname = 'productImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'productImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'productImage']").src,
    name: document.querySelector("[annotationname = 'productImage']").getAttribute("name")
  }; product['productUnit'] = document.querySelector("[annotationname = 'productUnit']").value; let opts = { product }; apiProductApi.updateproduct(productId, opts, (error, data, response) => {
    if (error) { console.error(error); } else {
      console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = productName]').value = response.body.query.productName; document.querySelector('[annotationname = productPrice]').value = response.body.query.productPrice; document.querySelector('[annotationname = productCategory]').value = response.body.query.productCategory;
      if (response.body.query.productImage !== undefined) {

        if (document.querySelector('[annotationname = productImage]').getAttribute('type') === 'file') {
          document.querySelector('[annotationname = productImage]').setAttribute('data-image-base64', response.body.query.productImage.data);
        }
        else {
          document.querySelector('[annotationname = productImage]').src = response.body.query.productImage.data;
        }
        document.querySelector('[annotationname = productImage]').name = response.body.query.productImage.name;
      }
      document.querySelector('[annotationname = productUnit]').value = response.body.query.productUnit; { location.href = '/MyProducts'; }
    }
  });
}; 

window.onload = () => {
  const spinner = document.getElementById('spinner');
  const list = document.getElementById('iiekj');
  spinner.style.display = 'block';
  list.style.display = 'none';
  let productId = window.location.pathname.replace('/EditProduct/', ''); 

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
  
  apiProductApi.getproduct(productId, (error, data, response) => {
    if (error) { console.error(error); } else {
      spinner.style.display = 'none';
      list.style.display = 'block';
      console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = productName]').value = response.body.query.productName; } catch (e) { console.log(e) }; try { document.querySelector('[annotationname = productPrice]').value = response.body.query.productPrice; } catch (e) { console.log(e) }; try { document.querySelector('[annotationname = productCategory]').value = response.body.query.productCategory; } catch (e) { console.log(e) }; try {
        if (response.body.query.productImage !== undefined) {
          if (document.querySelector('[annotationname = productImage]').getAttribute('type') === 'file') {
            document.querySelector('[annotationname = productImage]').setAttribute('data-image-base64', response.body.query.productImage.data);
            let fileName = response.body.query.productImage.name;
            let file = new File([response.body.query.productImage.data], fileName, { lastModified: new Date().getTime() }, 'utf-8');
            let container = new DataTransfer();
            container.items.add(file);

            document.querySelector("[annotationname = productImage]").files = container.files;
          }
          else {
            document.querySelector('[annotationname = productImage]').src = response.body.query.productImage.data;
          }
          document.querySelector('[annotationname = productImage]').name = response.body.query.productImage.name;
        }
      } catch (e) { console.log(e) }; try { document.querySelector('[annotationname = productUnit]').value = response.body.query.productUnit; } catch (e) { console.log(e) };
    }
  });
};