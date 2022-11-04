import { FormWrapper } from "../wrapper/FormWrapper";

type UserData = {
  email: string;
  password: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AccountForm = ({ email, password, updateFields }: UserFormProps) => {
  return (
    <FormWrapper title="Account Credentials">
      <div style={{ margin: "25px" }}>
        <label style={{ fontSize: "20px" }}>Email: </label>
        <input
          autoFocus
          required
          type="text"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
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
          onChange={(e) => updateFields({ password: e.target.value })}
          style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
        />
      </div>
    </FormWrapper>
  );
};

export default AccountForm;
