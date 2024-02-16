import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '@/hooks/useDarkSide';

const Switcher = () => {
  const [colorTheme, toggleTheme] = useDarkSide();

  return (
    <>
      <DarkModeSwitch
        className="select-none"
        checked={colorTheme === 'dark'}
        onChange={toggleTheme as () => void}
        size={30}
        moonColor="black"
        sunColor="white"
      />
    </>
  );
};

export default Switcher;
