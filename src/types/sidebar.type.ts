// import { ReactNode } from "react";


// export type TRoute = {
//     path: string;
//     element: ReactNode;
//   };
//   export type TSidebarItem =
//     | {
//         key: string;
//         label: ReactNode;
//         children?: TSidebarItem[];
//       }
//     | undefined;
  
//   export type TUserPath = {
//     name?: string;
//     path?: string;
//     element?: ReactNode;
//     children?: TUserPath[];
//   };
import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
  key: string; // Ensure key is always a string
  label: ReactNode;
  children?: TSidebarItem[]; // Avoid | undefined
};

export type TUserPath = {
  name: string; // Make name required for consistency
  path?: string; // Allow path to be optional
  element?: ReactNode;
  children?: TUserPath[];
};
