//Aca crearias todos los fetch (POST, PUT, GET DELETE) que necesites a lo largo de la aplicacion

export const addProduct = async (body) => {
  await fetch("http://localhost:4000/productos/", {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProducts = async () => {
  const res = await fetch("http://localhost:4000/productos/", {
    methods: "GET",
  }).catch((error) => {
    console.log(error);
  });

  const data = res.json();
  return data;
};

//METODOS DE EJEMPLOS PARA QUE TE GUIES

// export const deleteBirthday = async (id) => {
//     await fetch(`https://birthday-app-api.vercel.app/api/v1/john/birthdays/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }).then((res)=>{
//         if(res.ok){
//           return res.json();
//         }
//       })
//       .then((response) => console.log("Success:", response))
//       .catch((err) => {
//         console.error(err);
//     });
//   };

//   export const updateBirthday = async (id,body) => {
//     await fetch(`https://birthday-app-api.vercel.app/api/v1/john/birthdays/${id}`,
//       {
//         method: "PUT",
//         body: body,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }).then((res)=>{
//         if(res.ok){
//           return res.json();
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//     });
//   };
