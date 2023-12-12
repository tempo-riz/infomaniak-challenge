import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FormattedMessage } from 'react-intl'

const HighlightedText = styled('span')({
    color: '#F2357A',
    fontWeight: 'bold',
    fontStyle: 'italic',
});

const Break = styled('br')({
    display: 'none',
    '@media (min-width: 600px)': {
        display: 'block',
    },
});

export default function Header() {

    return (
        <Typography 
            variant="h3" align="left" sx={{ marginTop: 6, marginBottom: 6, paddingRight: 2, typography: { xs: "h4", sm: "h4", md: "h3" } }}>
            <FormattedMessage id="title" values={{ h1: <HighlightedText><FormattedMessage id="h1" /></HighlightedText>, h2: <HighlightedText><FormattedMessage id="h2" /> </HighlightedText>, br: <Break></Break> }} />
        </Typography>
    );
}