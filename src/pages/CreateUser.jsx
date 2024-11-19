import CommonForm from "../components/commonform";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { addUser } from "../queryFunctions/crudFunctions";
import { Box, Container } from "@mui/material";
// import Swal from 'sweetalert2'
const CreateUser = () => {

  let navigate=useNavigate();

  const { mutate } = useMutation(addUser, {
    onSuccess: () => {
      alert("User added successfully");
      // Swal.fire("User added successfully");
      navigate("/view");  
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    }
  });
  
 const submitHandler = (data) => {
    // console.log("Data submitted by the form", data);
    mutate(data);
  };
 
  return (
    <div className="common_padding">
      <Container>
        <h2>Fill up to add user: </h2>
        <Box sx={{padding:"20px 0"}}>
         <CommonForm view="createForm" submitHandler={submitHandler} />
        </Box>
      </Container>
      
    </div>
  );
};

export default CreateUser;
