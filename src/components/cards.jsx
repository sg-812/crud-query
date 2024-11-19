import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Cards({ user }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image="assets/defaultUser.webp"
        title="items"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.username}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`single/${user.id}`}>
        <Button size="small" variant="contained" color="secondary">
          Details
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
