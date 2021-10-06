import "./Styles.css";
// import Avatar from "@mui/material/Avatar";
// import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const Projects = () => {
  return (
    <div className="projectMain">
      <div className="projectHead">Projects</div>
      <div>Below you can see some projects I've been working on lately</div>
      <div className="AllCards">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cardDiv">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="oyo"
                    image="/images/oyo.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Oyorooms
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      An end to end clone of oyorooms.com wich can book hotel
                      rooms across India
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://albartjose.hashnode.dev/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button size="small">
                        <GitHubIcon />
                      </Button>
                    </a>
                    <a
                      href="https://albartjose.hashnode.dev/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button size="small">Demo</Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cardDiv">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="oyo"
                    image="/images/oyo.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Oyorooms
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      An end to end clone of oyorooms.com wich can book hotel
                      rooms across India
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://albartjose.hashnode.dev/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button size="small">
                        <GitHubIcon />
                      </Button>
                    </a>
                    <a
                      href="https://albartjose.hashnode.dev/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button size="small">Demo</Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cardDiv">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="oyo"
                    image="/images/oyo.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Oyorooms
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      An end to end clone of oyorooms.com wich can book hotel
                      rooms across India
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://albartjose.hashnode.dev/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button size="small">
                        <GitHubIcon />
                      </Button>
                    </a>
                    <a
                      href="https://albartjose.hashnode.dev/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button size="small">Demo</Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
