import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button/button";
import Input from "../components/input/input";
import { addProduct, getProducts } from "../utils/methods-api";

const Recursos = () => {
  const [productos, setProductos] = useState(); //ESTE HOOK SE USA PARA SETEAR Y GUARDAR VALORES

  const {
    register, //Hook de la libreria react-hook-form para registrar cada input del form
    handleSubmit, //Funcion para ejecutar el onSubmit del form
    formState: { errors }, //Manejo de errores del form
  } = useForm();

  const onSubmit = async (data) => {
    //funcion tuya del onsubmit que le pasas al handleSubmit
    const json = JSON.stringify(data);
    const response = await addProduct(json); //Funcion para guardar nuevos productos
    console.log(response);
  };

  useEffect(() => {
    setProductos(getProducts()); //useEffect donde llama y guarda todos los productos q te devuelve el backend
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input //Componente custom de input q vos creaste
        type="text"
        register={register}
        label="name"
        required={true}
        errors={errors.name}
      />

      <Input
        type="text"
        register={register}
        label="description"
        required={false}
      />
      <Input type="text" register={register} label="value" required={false} />
      <Input type="text" register={register} label="stock" required={false} />
      {/* Componente Button custom */}
      <Button value="Submit" type="submit" />
    </form>
  );
};

export default Recursos;
