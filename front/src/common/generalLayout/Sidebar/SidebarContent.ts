import { ROUTE_PATHS } from '../../../Routes';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import HomeIcon from '@material-ui/icons/Home';
import type { OverridableComponent } from '@material-ui/core/OverridableComponent';
import type { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon';

export interface sidebarElementInfo {
  name: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}

export const sidebarElements = () => {
  const sidebarElements: sidebarElementInfo[] = [];
  sidebarElements.push({
    name: 'Home',
    link: ROUTE_PATHS.home,
    icon: HomeIcon,
  });
  sidebarElements.push({
    name: 'Skills',
    link: ROUTE_PATHS.skills,
    icon: ClearAllIcon,
  });
  return sidebarElements;
};
