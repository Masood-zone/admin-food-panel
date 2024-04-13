import React from "react";
import { useParams } from "react-router-dom";

function EditCategory() {
  const { id } = useParams();
  console.log(id);
  return <div>EditCategory</div>;
}

export default EditCategory;
