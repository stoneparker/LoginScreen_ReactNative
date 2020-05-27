import { useState } from 'react';

import light from '../themes/light';
import dark from '../themes/dark';

export default function themeSwitch() {
   const [theme, setState] = useState(light);

   function toggleTheme() {
      setState(theme === dark ? light : dark);
   }

   return {theme, toggleTheme};
}