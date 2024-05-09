import { useState } from "react";
import axios from "axios";

function Form(props) {

  const {updateMonitor} = props

  // State variables for form fields
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // State variable for form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  const errors = {};

  //validation
  function runValidation() {
    if (message.length === 0) {
      errors.message = "Message is required";
    }
    if (name.length === 0) {
      errors.name = "Name is required";
    }
    if (query.length === 0) {
      errors.query = "Query is required";
    }
    if (type.length === 0) {
      errors.type = "Type is required";
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    runValidation();
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      const formData = { message, name, query, type };

      //adding data to serverer
      try {
        const response = await axios.post(
          "http://localhost:8000/api/proxy",
          formData
        );
        updateMonitor(response.data)
        setFormErrors({});
        setIsFormVisible(false);
        setMessage("");
        setName("");
        setQuery("");
        setType("");
      } catch (e) {
        console.log("error", e);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Hide Form" : "Click here to create a New Monitor"}
      </button>

      {/* Render the form if isFormVisible is true */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control-sm width-custom"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            {formErrors.message && (
              <p className="text-danger">{formErrors.message}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control-sm width-custom"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {formErrors.name && (
              <p className="text-danger">{formErrors.name}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control-sm width-custom"
              name="query"
              placeholder="Query"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            {formErrors.query && (
              <p className="text-danger">{formErrors.query}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control-sm width-custom"
              name="type"
              placeholder="Type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            {formErrors.type && (
              <p className="text-danger">{formErrors.type}</p>
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
