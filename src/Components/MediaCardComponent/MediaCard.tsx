import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./MediaCard.css";

interface IMediaCardProps {
  ImageUrl: string | undefined;
  Description: string | undefined;
  Earth_Date: string | undefined;
}

function MediaCard(props: IMediaCardProps) {
  return (
    <div>
      <Card className="MediaCardContainer">
        <CardActionArea>
          <CardMedia className="MediaCardImage" image={props.ImageUrl} />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="MediaCardDescription"
            >
              {props.Description}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="MediaCardDescription"
            >
              {props.Earth_Date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MediaCard;
