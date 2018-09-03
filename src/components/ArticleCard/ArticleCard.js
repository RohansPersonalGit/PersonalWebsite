// import React from 'react';
// import './ArticleCard.css'; 
// const ArticleCard = (props) => {  
//         return (
//             <div className= "ArticleCard">
//             {props.button}
//                 <p>{props.title}</p>
//                 <img alt= "" src= {props.url} /> 
//             </div>
//         )

// }
// export default ArticleCard; 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    float: "left", 
    width: 200,
    height: 230,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 0,
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
};

function ArticleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props); 
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {props.title}
        </Typography>
        <CardMedia
          className={classes.media}
          image={props.url}
          title="Contemplative Reptile"
        />
        <Typography component="p">
          <br />
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=> window.open(props.link, "_blank")} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

ArticleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleCard);