import { Form } from "../../components/forms";
import { Link } from "react-router-dom";

function CreateCategory() {
  const onSubmit = (data) => {
    console.log(data);
  };
  const category_data = {
    type: {
      label: "Category Type",
      placeholder: "Enter category type",
      type: "text",
    },
    image: {
      label: "Image",
      placeholder: "Upload picture",
      type: "file",
    },
  };

  return (
    <div className="w-[60%] h-auto mx-auto my-10 p-3">
      <h1 className="text-4xl font-bold py-5">
        Create a Cartegory
        <Link to="/category" className="pl-10 underline font-normal text-sm">
          Go back
        </Link>
      </h1>
      {/* Form wizard */}
      <Form
        data={category_data}
        onSubmit={onSubmit}
        loading={null}
        title="Create"
      />
    </div>
  );
}

export default CreateCategory;
