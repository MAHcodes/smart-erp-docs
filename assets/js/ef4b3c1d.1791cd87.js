"use strict";(self.webpackChunksmart_erp_docs=self.webpackChunksmart_erp_docs||[]).push([[414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},l="Creating a New Module",i={unversionedId:"erp-core/creating-new-model",id:"erp-core/creating-new-model",title:"Creating a New Module",description:"( ex Accounting Module )",source:"@site/docs/erp-core/creating-new-model.md",sourceDirName:"erp-core",slug:"/erp-core/creating-new-model",permalink:"/smart-erp-docs/erp-core/creating-new-model",draft:!1,editUrl:"https://github.com/MAHcodes/smart-erp-docs/tree/master/docs/erp-core/creating-new-model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Layout Page",permalink:"/smart-erp-docs/"}},p={},c=[{value:"1. Set Up Module Folder",id:"1-set-up-module-folder",level:2},{value:"2. Create Required Folders",id:"2-create-required-folders",level:2},{value:"3. Define Folder Hierarchy",id:"3-define-folder-hierarchy",level:2},{value:"4. Create Files",id:"4-create-files",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-new-module"},"Creating a New Module"),(0,a.kt)("p",null,"( ex Accounting Module )\nTo create a new module in your ERP system, follow these steps:"),(0,a.kt)("h2",{id:"1-set-up-module-folder"},"1. Set Up Module Folder"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your project's directory structure."),(0,a.kt)("li",{parentName:"ol"},"Navigate to the src folder."),(0,a.kt)("li",{parentName:"ol"},"Inside the src folder, locate the modules directory (if it doesn't exist, create it)."),(0,a.kt)("li",{parentName:"ol"},"Create a new folder with the name of your module, for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"accountingModule"),". This folder will contain all the components, pages, and configurations for the Accounting Module.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"for example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," src\n\u2514\u2500\u2500 core\n\u2514\u2500\u2500 modules\n    \u2514\u2500\u2500 accountingModule \n")),(0,a.kt)("h2",{id:"2-create-required-folders"},"2. Create Required Folders"),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"accountingModule")," folder, create the following sub-folders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"components: This folder will contain all the components related to the Accounting Module."),(0,a.kt)("li",{parentName:"ul"},"overrides: This folder will house any overrides or customizations specific to the Accounting Module."),(0,a.kt)("li",{parentName:"ul"},"Pages: This folder will hold the main pages of the Accounting Module.")),(0,a.kt)("h2",{id:"3-define-folder-hierarchy"},"3. Define Folder Hierarchy"),(0,a.kt)("p",null,"Your folder hierarchy should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," src\n\u2514\u2500\u2500 modules\n    \u2514\u2500\u2500 accountingModule\n        \u251c\u2500\u2500 components\n        \u2502   \u251c\u2500\u2500 Forms\n        \u2502   \u2502   \u251c\u2500\u2500 reports\n        \u2502   \u2502   \u2502   \u2514\u2500\u2500 accountTrialBalanceReport.tsx\n        \u2502   \u2502   \u2514\u2500\u2500 Journal.tsx\n        \u2502   \u2514\u2500\u2500 overrides \n        \u2502           \u2514\u2500\u2500 MainLayout\n        \u2502               \u2514\u2500\u2500 Drawer\n        \u2502                   \u2514\u2500\u2500 menuItems.tsx\n        \u251c\u2500\u2500 Pages\n        \u2502   \u2514\u2500\u2500 Journal\n        \u2502       \u251c\u2500\u2500 components\n        \u2502       \u2502   \u2514\u2500\u2500 JournalGrid.ts\n        \u2502       \u251c\u2500\u2500 mapper\n        \u2502       \u2502   \u2514\u2500\u2500 JournalMapper.ts\n        \u2502       \u2514\u2500\u2500 index.tsx\n")),(0,a.kt)("h2",{id:"4-create-files"},"4. Create Files"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"components/overrides/MainLayout/Drawer")," folder, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"menuItems.tsx"),". In this file, you will define the sidebar menu items for the Accounting Module using a JSON structure format. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Here's an example of how the ",(0,a.kt)("inlineCode",{parentName:"li"},"accountingMenuItems")," could be defined:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},' export const accountingMenuItems: IMenuItemOption = {\n    items: [\n         {\n           id: "AccountingPaymentId",\n           title: "Payment Confgs",\n           type: "group",\n           children: [\n           {\n             id: "BankId",\n             title: "Banks",\n             isAuthorize: true,\n             entityName: "Bank",\n             type: "item",\n             url: "/Banks",\n             icon: accoutingIcon,\n           } \n        ],\n       },\n    ],\n   };\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Pages/[PageName]/components")," folder, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"[PageName]Grid.tsx"),". (Note: Replace ","[PageName]",' with the actual name of the page for which you\'re creating the grid, such as "Journal" or another page name.)\nFor example, if you\'re creating a grid for the "Journal" page, the file name would be ',(0,a.kt)("inlineCode",{parentName:"p"},"JournalGrid.tsx"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Pages/[PageName]/mapper")," folder, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"[PageName]Mapper.ts")," for example ",(0,a.kt)("inlineCode",{parentName:"p"},"JournalMapper.ts"),". This file will define the mapping between the data/form state and the backend API requests/responses for the journal.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Pages/[PageName]")," folder (ex journal), create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx"),". This file will be the main entry point for the Journal page. You can use this file to register the JournalGrid component, apply the JournalMapper, and display the grid and form."))))}u.isMDXComponent=!0}}]);