import React, { useState, useEffect } from "react";
import MediaCard from "../MediaCardComponent/MediaCard";
import { Grid } from "@material-ui/core";
import "./MediaGrid.css";
var api_key = process.env.REACT_APP_API_KEY;

interface IState {
  img_src: any;
  camera: any;
  earth_date: any;
}

interface IMediaGripProps {
  SearchQuery: string | null;
}

function MediaGrid(props: IMediaGripProps) {
  const [ItemArray, setItemArray] = useState<IState[]>([
    { img_src: "", camera: "", earth_date: "" },
  ]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=20&page=2&api_key=" +
        api_key
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItemArray(data.photos);
      })
      .catch(() => console.log("Please check your search query"));
  }, [props.SearchQuery]);

  var Cards: JSX.Element[] = [];
  ItemArray.forEach((el: IState, i: Number) => {
    let obj = el["camera"];
    Cards.push(
      <Grid
        key={"card_" + i}
        item
        sm={6}
        md={4}
        lg={3}
        className="MediaGridCard"
      >
        <MediaCard
          ImageUrl={el["img_src"]}
          Description={obj["full_name"]}
          Earth_Date={el["earth_date"]}
        />
      </Grid>
    );
  });

  return (
    <div>
      <Grid container spacing={3} className="MediaGridContainer">
        {Cards}
      </Grid>
    </div>
  );
}

export default MediaGrid;
