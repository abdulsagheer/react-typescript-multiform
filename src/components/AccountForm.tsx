import { FormWrapper } from "../wrapper/FormWrapper";

const AccountForm = () => {
  return (
    <FormWrapper title="Account Credentials">
      <div style={{ margin: "25px" }}>
        <label style={{ fontSize: "20px" }}>Email: </label>
        <input
          autoFocus
          required
          type="text"
          style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
        />
      </div>
      <div style={{ margin: "25px" }}>
        <label style={{ fontSize: "20px" }}>Password: </label>
        <input
          autoFocus
          required
          type="password"
          style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
        />
      </div>
    </FormWrapper>
  );
};

export default AccountForm;
