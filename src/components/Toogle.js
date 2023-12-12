import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageToogle({ locale, onToogle }) {

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
            <LanguageIcon fontSize='large' color="primary" sx={{ marginRight: 1 }} />
            <ToggleButtonGroup
                value={locale}
                exclusive
                onChange={(_, newLocale) => { if (newLocale != null) onToogle(newLocale) }}
                aria-label="language toogle"
            >
                <ToggleButton value="fr" aria-label="fr">fr</ToggleButton>
                <ToggleButton value="en" aria-label="en">en</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}