import { FormWrapper } from "../wrapper/FormWrapper";

const UserForm = ({
  firstName,
  lastName,
  age,
}: {
  firstName: string;
  lastName: string;
  age: string;
}) => {
  return (
    <FormWrapper title="Account Details">
      <div style={{ alignItems: "center" }}>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>First Name: </label>
          <input
            value={firstName}
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Last Name: </label>
          <input
            value={lastName}
            autoFocus
            required
            type="text"
            style={{ padding: "5px", borderRadius: "6px", width: "25%" }}
          />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ fontSize: "20px" }}>Age: </label>
          <input
            value={age}
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
