import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const NewsCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 0.5 }}
            fontSize={14}
            color="text.secondary"
          >
            <CalendarMonthIcon fontSize="inherit" />
            date
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          details
        </Button>
      </CardActions>
    </Card>
  );
}
