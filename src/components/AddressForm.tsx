import { FormWrapper } from "../wrapper/FormWrapper";

type UserData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="Account Address">
      <div style={{ alignItems: "center" }}>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Street: </label>
          <input
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
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
            onChange={(e) => updateFields({ city: e.target.value })}
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
            onChange={(e) => updateFields({ state: e.target.value })}
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Zip: </label>
          <input
            value={zip}
            onChange={(e) => updateFields({ zip: e.target.value })}
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
