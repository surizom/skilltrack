import { ROUTE_PATHS } from '../../../Routes';
import ClearAllIcon from '@material-ui/icons/ClearAll';
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
    name: 'Skills',
    link: ROUTE_PATHS.skills,
    icon: ClearAllIcon,
  });
  return sidebarElements;
};
