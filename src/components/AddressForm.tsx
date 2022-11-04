import { FormWrapper } from "../wrapper/FormWrapper";

const AddressForm = () => {
  return (
    <FormWrapper title="Account Address">
      <div style={{ alignItems: "center" }}>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Street: </label>
          <input
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>City: </label>
          <input
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>State: </label>
          <input
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Zip: </label>
          <input
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default AddressForm;
