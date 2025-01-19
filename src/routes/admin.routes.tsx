export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "BikeManagement",
    children: [
      {
        name: "Add-Bike",
        path: "add-bike",
        element: "",
      },
      {
        name: "Add-Bike",
        path: "add-bike",
        element: "",
      },
    ],
  },
  {
    name: "User Management",
    children: [],
  },
];
