import { FormWrapper } from "../wrapper/FormWrapper";

const AccountForm = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return (
    <FormWrapper title="Account Credentials">
      <div style={{ margin: "25px" }}>
        <label style={{ fontSize: "20px" }}>Email: </label>
        <input
          autoFocus
          required
          type="text"
          value={email}
          style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
        />
      </div>
      <div style={{ margin: "25px" }}>
        <label style={{ fontSize: "20px" }}>Password: </label>
        <input
          autoFocus
          required
          type="password"
          value={password}
          style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
        />
      </div>
    </FormWrapper>
  );
};

export default AccountForm;
