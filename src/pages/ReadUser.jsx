import React from "react";
import { useQuery } from "react-query";
import { fetchUser } from "../queryFunctions/crudFunctions";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Cards from "../components/cards";

const ReadUser = () => {
  const fetchResult = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  // console.log("fetch result",fetchResult);

  let { isLoading, isFetching, error, isError, data: users } = fetchResult;

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error: {error?.message}</h2>;
  }
  return (
    <div className="common_padding">
      <Container>
        <h2>
          <u> All Users </u>
        </h2>
        <Box sx={{ flexGrow: 1, padding: "20px 0" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 0, sm: 1, md: 2 }}
          >
            {users?.data.map((usr) => (
              <React.Fragment key={usr.id}>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                  <Cards user={usr} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ReadUser;
