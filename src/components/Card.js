import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import arrowIcon from '../assets/icons/arrow.svg';
import { FormattedMessage } from 'react-intl';


export default function MediaCard({ id, image, icon, key }) {

  return (
    // here the locale is used to rebuild and replay animation on locale change
    <Card key={key} className="card" variant="outlined"
      sx={{
        height: '100%',
        maxWidth: 391,
        backgroundColor: '#F2F4F6',
        border: "none",
        boxShadow: "none",
        borderRadius: "8px",
      }}>

      <div className='card-img-top-bg'>
        <CardMedia
          component="img"
          sx={{
            maxWidth: "80%",
            padding: id === 3 ? 12 : 0,
            marginTop: id === 3 ? 3 : 0,
          }}
          image={image}
        />
      </div>

      <CardContent sx={{ margin: 2 }} className='card-content'>
        <CardMedia
          component="img"
          sx={{ height: 40, width: 40, marginBottom: 2 }}
          image={icon}
        />
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
          <FormattedMessage id={`card${id}.title`} />
        </Typography>
        <Typography variant="body2" color="text.secondary" marginBottom={2} >
          <FormattedMessage id={`card${id}.content`} />
        </Typography>

        <Link href="https://www.infomaniak.com/" underline="none" color="#F2357A" fontSize={16}>
          <FormattedMessage id="about" />
          <img src={arrowIcon} alt="arrow link icon" style={{ verticalAlign: "middle", marginLeft: 6, height: 16 }} />
        </Link>
      </CardContent>

    </Card>
  );
}