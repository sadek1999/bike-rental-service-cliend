import { TSidebarItem, TUserPath } from "@/types";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items: TUserPath[], role: string): TSidebarItem[] => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      const childItems = item.children
        .filter((child) => child.name && child.path) 
        .map((child) => ({
          key: child.name!, 
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        }));

      if (childItems.length > 0 && item.name) {
        acc.push({
          key: item.name,
          label: item.name,
          children: childItems, 
        });
      }
    }

    return acc;
  }, []);

  return sidebarItems;
};
