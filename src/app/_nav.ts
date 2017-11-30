export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Master Data',
    url: '/setup',
    icon: 'fa fa-list-alt',
    children: [
      {
        name: 'Customer',
        url: '/setup/customer',
        icon: 'fa fa-list-alt'
      },
      {
        name: 'Item',
        url: '/setup/item',
        icon: 'fa fa-list-alt'
      }
    ]
  },
  {
    name: 'Inventory',
    url: '/inventory',
    icon: 'fa fa-list-alt',
    children: [
      {
        name: 'Stock Inquiry',
        url: '/inventory/stocks',
        icon: 'fa fa-list-alt'
      }
    ]
  },
  {
    name: 'Sales',
    url: '/sales',
    icon: 'fa fa-list-alt',
    children: [
      {
        name: 'New Order',
        url: '/sales/order',
        icon: 'fa fa-list-alt'
      },
      {
        name: 'Sales Order',
        url: '/sales/order-list',
        icon: 'fa fa-list-alt'
      },
    ]
  },
  {
    name: 'Logistics',
    url: '/logistics',
    icon: 'fa fa-list-alt',
    children: [
      {
        name: 'New Route',
        url: '/logistics/new-route',
        icon: 'fa fa-list-alt'
      },
      {
        name: 'Route Management',
        url: '/logistics/route-mgnt',
        icon: 'fa fa-list-alt'
      },
      // {
      //   name: 'New DSPCH',
      //   url: '/logistics/new-dispatch',
      //   icon: 'fa fa-list-alt'
      // },
      // {
      //   name: 'DSPCH Management',
      //   url: '/logistics/dispatch-mgnt',
      //   icon: 'fa fa-list-alt'
      // },
    ]
  },
  // {
  //   title: true,
  //   name: 'UI elements'
  // },
  // {
  //   name: 'Components',
  //   url: '/components',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/components/buttons',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Social Buttons',
  //       url: '/components/social-buttons',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/components/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/components/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/components/modals',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/components/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/components/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/components/tabs',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'Collections',
  //   url: '/collections',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Reports',
  //   url: '/reports',
  //   icon: 'fa fa-table'
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  //   {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/pages/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/pages/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/pages/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/pages/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
