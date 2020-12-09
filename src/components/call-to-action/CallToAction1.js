import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactHtmlParser from 'react-html-parser';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
  },
  description: {
    color: theme.palette.background.secondary
  },
}));

export default function CTA(props) {
  const classes = useStyles();

  const content = {
    'header': 'header',
    'description': 'description',
    'ctaButtonName': 'CTA Button',
    'ctaButtonLink': '#',
    'bannerImage': '',
    ...props.content
  };

  var customSectionStyle = {
    backgroundImage: 'none'
  };

  if(content.backgroundImage != '') {
    customSectionStyle.backgroundImage = "url(" + SERVER_URL + content.backgroundImage.url + ")";
  }

  return (
    <section className={classes.section} style={customSectionStyle}>
      <Container maxWidth="sm">
        <Box py={10} textAlign="center" color="common.white">
          <Typography variant="h3" component="h3" gutterBottom={true}>
            <Typography variant="h3" component="span">{content['header']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" paragraph={true} className={classes.description}>{ReactHtmlParser(content['description'])}</Typography>
          </Container>
          <Box mt={3}>
            <Button variant="contained" color="secondary">{content['ctaButtonName']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}