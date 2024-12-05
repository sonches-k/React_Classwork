import React from 'react';
import { Slider } from '@mui/material';

interface ThemeSwitcherProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ setIsDarkMode }) => {
  return (
    <div className="theme-switcher" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Slider
        valueLabelDisplay="auto"
        min={0}
        max={1}
        step={1}
        onChange={(_e, value) => setIsDarkMode(!!value)}
        valueLabelFormat={(value) => (value ? 'Dark' : 'Light')}
        sx={{
          width: '100px', 
          margin: '30px', 
          color: 'gray', 
          '& .MuiSlider-thumb': {
            width: 20,   
            height: 20,  
            backgroundColor: '#fff', 
            border: '2px solid gray', 
          },
          '& .MuiSlider-rail': {
            height: 8,  
            backgroundColor: 'lightgray', 
          },
          '& .MuiSlider-track': {
            height: 4,  
            backgroundColor: 'gray', 
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: 'transparent', 
            color: 'white', 
          },
        }}
      />
    </div>
  );
};
