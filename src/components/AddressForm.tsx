import { FormWrapper } from "../wrapper/FormWrapper";

const AddressForm = ({
  street,
  city,
  state,
  zip,
}: {
  street: string;
  city: string;
  state: string;
  zip: string;
}) => {
  return (
    <FormWrapper title="Account Address">
      <div style={{ alignItems: "center" }}>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Street: </label>
          <input
            value={street}
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>City: </label>
          <input
            value={city}
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>State: </label>
          <input
            value={state}
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Zip: </label>
          <input
            value={zip}
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
