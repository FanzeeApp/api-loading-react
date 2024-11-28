import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cardd({ title, image, desc, price }) {
  return (
    <Card sx={{ maxWidth: 345, height: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          height="15"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {desc}
        </Typography>
        <Typography>${price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Savatga</Button>
      </CardActions>
    </Card>
  );
}
