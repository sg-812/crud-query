import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
const CommonForm = ({ view, submitHandler, data }) => {
  const form = useForm();

  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  // setup old value as defaultvalue
  useEffect(() => {
    if (data) {
      let defaultValues = {
        username: data.username,
        email: data.email,
      };
      reset({ ...defaultValues });
    }
  }, [data]);

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(submitHandler)}
      >
        <TextField
          id="uname"
          name="username"
          label="User Name"
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ width: "100%", input: { color: "darkolivegreen" } }}
          {...register("username", {
            required: {
              value: true,
              message: "* User name is required",
            },
            minLength: {
              value: 3,
              message: "Minimum length 3",
            },
          })}
          autoComplete="off"
        />
        {/* username validation message */}
        <br />
        <p>{errors.username?.message}</p>
        <br />

        <TextField
          id="email"
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          color="secondary"
          sx={{width:"100%",input:{color:'darkolivegreen'}}}
          {...register("email", {
            required: {
              value: true,
              message: "* email is required",
            },
            pattern: {
              value: /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/,
              message: "* Wrong pattern",
            },
          })}
          autoComplete="off"
        />
        {/* error validation message */}
        <br />
        <p>{errors.email?.message}</p>
        <br />
        {view === "createForm" ? (
          <Button variant="contained" color="secondary" type="submit">
            Add
          </Button>
        ) : (
          <Button variant="contained" color="secondary" type="submit">
            Update
          </Button>
        )}
      </Box>
    </>
  );
};

export default CommonForm;
