
import React, { useEffect, useState } from 'react';

import { useTheme } from '~/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();


  return (<button className="p-2 bg-dark-purple dark:bg-main-beige rounded-lg" onClick={toggleTheme}>
    {theme === 'dark' ? '🌞' : '🌙'}
  </button>);
};

export default ThemeToggle;
