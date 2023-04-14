import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { INewsCard } from '../types/types';
import { Link } from 'react-router-dom';

export const NewsCard = ({ ...props }: INewsCard) => {
  const { image, date, title, subtitle, id } = props;
  const formatDate = new Date(date).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Card sx={{ maxWidth: 345 }} className="flex flex-col" id={id}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 0.5 }}
          fontSize={14}
          color="text.secondary"
        >
          <CalendarMonthIcon fontSize="inherit" />
          {formatDate}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions className="mt-auto p-4">
        <Link to={`${id}`} className="text-black text-[13px] uppercase hover:underline">
          details
        </Link>
      </CardActions>
    </Card>
  );
}
