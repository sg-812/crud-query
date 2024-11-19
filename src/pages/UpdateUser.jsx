import React from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, fetchSingleUser } from "../queryFunctions/crudFunctions";
import CommonForm from "../components/commonform";
import { Box, Container } from "@mui/material";

const UpdateUser = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const { data: user } = useQuery(["user", id], () => fetchSingleUser(id));

  const { mutate } = useMutation(editUser, {
    onSuccess: () => {
      alert("User updated successfully");
      navigate("/view");
    },
    onError: (error) => {
      console.error("Error to update user:", error);
    },
  });

  const submitHandler = (data) => {
    console.log("Submitted new data", data);
    let formData = {
      id: id,
      username: data.username,
      email: data.email,
    };
    mutate(formData);
  };

  return (
    <div className="common_padding">
      <Container>
        <h2>Fill up to add user: </h2>
        <Box sx={{ padding: "20px 0" }}>
          <CommonForm
            view="editForm"
            submitHandler={submitHandler}
            data={user?.data}
          />
        </Box>
      </Container>
    </div>
  );
};

export default UpdateUser;
