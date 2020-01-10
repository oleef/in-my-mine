export const MENU_LIST = {
  menuList: [
    {
      id: "home",
      label: "หน้าหลัก",
      link: "/",
      icon: "fas fa-th"
    },
    {
      id: "calculate",
      label: "คำนวณ",
      link: "/calculate",
      icon: "fas fa-th"
    },
    {
      id: "health",
      label: "สุขภาพ",
      link: "/health",
      icon: "fas fa-th",
      subMenu: []
    },
    {
      id: "review",
      label: "รีวิว",
      link: "/review",
      icon: "fas fa-th",
      subMenu: []
    }
  ],
  properties: {
    className: "nav-flat nav-child-indent"
  }
};
