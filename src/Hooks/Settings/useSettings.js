import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "Store/Settings";

function useSettings() {
  const dispatch = useDispatch();

  const themeName = useSelector((state) => state?.settings?.theme);

  //actions
  const setThemeAction = (params) => dispatch(setTheme(params));
  return {
    themeName,

    setThemeAction,
  };
}

export default useSettings;
