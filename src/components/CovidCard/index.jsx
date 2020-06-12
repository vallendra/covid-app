import React from "react";
import "./style.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    backgroundColor: "#636E72",
    color: "#DFE6E9",
    margin: '15px 0 15px 0'
  },
  caseNumber: {
    fontWeight: "700",
  },
});

const CaseView = ({number, label}) => {
  const classes = useStyles();
  return <div style={{
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <Typography
      variant="h6"
      component="h6"
      className={classes.caseNumber}
    >
      {number}
    </Typography>
    <Typography>{label}</Typography>
  </div>
}
const CovidCard = ({
  newConfirmed,
  totalConfirmed,
  totalDeaths,
  countryID,
  countryName,
}) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div className="header-wrapper">
            <img
            // Menggunakan sumber bendera dari luar
              src={`https://www.countryflags.io/${countryID}/flat/32.png`}
              style={{ marginRight: "2vw" }}
              alt=""
            />
            <Typography variant="h5" component="h2">
              {countryName}
            </Typography>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-around"
          }}>
          <CaseView number={newConfirmed} label="New Cases" />
          <CaseView number={totalConfirmed} label="Total Confirmed" />
          <CaseView number={totalDeaths} label="Total Deaths" />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CovidCard;
