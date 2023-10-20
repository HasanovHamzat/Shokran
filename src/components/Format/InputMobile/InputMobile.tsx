import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "./style.css";

const Input = (props: any) => {
  return (
    <>
      <PhoneInput
        specialLabel={""}
        country={"th"}
        
        inputStyle={{
          borderColor: props.touched && props.error && "red"
        }}
        {...props}
      />
      {props.touched && props.error && (
        <p
          style={{ color: "red" }}
          className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">
          {props.error}
        </p>
      )}
    </>
  );
};

export const InputMobile = (props: any) => {
  return (
    <StyledInput
      label={"Mobile Phone"}
      req={true}
      helperText={""}
      error={true}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  );
};
const StyledInput = styled(Input)`
  width: 700px !important;
`;
