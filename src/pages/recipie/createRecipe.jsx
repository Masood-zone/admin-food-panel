import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/forms";

function CreateRecipe() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const recipe_data = {
    title: {
      label: "Recipe Title",
      placeholder: "Enter recipe title",
      type: "text",
    },
    description: {
      label: "Description",
      placeholder: "Enter recipe description",
      type: "text",
    },
    quantity: {
      label: "Quantity",
      placeholder: "Enter quantity",
      type: "number",
    },
    total: {
      label: "Total",
      placeholder: "Enter total",
      type: "number",
    },
    price: {
      label: "Recipe price",
      placeholder: "Enter price",
      type: "text",
    },
  };
  return (
    <div className="w-[60%] h-auto mx-auto my-10 p-3">
      <h1 className="text-4xl font-bold py-5">
        Create a recipe
        <Link to="/recipe" className="pl-10 underline font-normal text-sm">
          Go back
        </Link>
      </h1>
      {/* Form Wizard */}
      <Form
        data={recipe_data}
        onSubmit={onSubmit}
        title="Create"
        loading={null}
      />
    </div>
  );
}

export default CreateRecipe;
