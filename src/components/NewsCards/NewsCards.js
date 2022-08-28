import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  { color: 'linear-gradient(135deg, #C56CD6 0%,#3425AF 100%)', title: 'News by Categories', info: 'Business, Entertainment, Science, Sports, Technology', text: 'Give me the latest Sports news' },
  { color: 'linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: 'linear-gradient(135deg, #f2d50f 0%,#da0641 100%)', title: 'News by Sources', info: 'BBC News, Buzzfeed, ABC News, Google News, CBC News', text: 'Give me the news from Wired' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={4}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={12} md={12} lg={4} className={classes.infoCard}>
              <div className={classes.card} style={{ background: infoCard.color, boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h5" component="h5"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h5" component="h5">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
