import useTheme from '../contexts/theme';

function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <button
      onClick={onChangeBtn}
      className="text-white bg-black/20 dark:bg-white/20 rounded-full p-2 hover:bg-black/30 dark:hover:bg-white/30 transition-colors duration-200"
    >
      {themeMode === "light" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeBtn;
