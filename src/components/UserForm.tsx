import { FormWrapper } from "../wrapper/FormWrapper";

const UserForm = () => {
  return (
    <FormWrapper title="Account Details">
      <div style={{ alignItems: "center" }}>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>First Name: </label>
          <input
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Last Name: </label>
          <input
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Age: </label>
          <input
            min={1}
            required
            type="number"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default UserForm;
