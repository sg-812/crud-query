import React from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteUser, fetchSingleUser } from "../queryFunctions/crudFunctions";
import { Box, Container, Button, Stack } from "@mui/material";

const SingleUser = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const fetchResult = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchSingleUser(id),
  });
  console.log("fetch single User", fetchResult);

  let { isLoading, isFetching, error, isError, data: user } = fetchResult;

  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {
      alert("User deleted successfully");
      navigate("/view");
    },
    onError: (error) => {
      console.error("Error to delete user:", error);
    },
  });
  const userDelete = (id) => {
    mutate(id);
  };

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error: {error?.message}</h2>;
  }
  return (
    <div className="common_padding">
      <Container>
        <Box>
          <h2>{user?.data.username}</h2>
          <p>Mail at: {user?.data.email}</p>
          <br />
          <Stack direction="row" spacing={2}>
            <Link to={`edit`}>
              <Button
                component="button"
                variant="contained"
                color="success"
                sx={{ boxShadow: "4px 4px 5px rgb(1, 53, 1)" }}
              >
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              sx={{ boxShadow: "4px 4px 5px rgb(1, 53, 1)",background:"maroon" }}
              onClick={() => userDelete(user?.data.id)}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default SingleUser;
