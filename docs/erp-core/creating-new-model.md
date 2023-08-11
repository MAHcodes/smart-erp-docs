---
sidebar_position: 2
---

# Creating a New Module
( ex Accounting Module )
 To create a new module in your ERP system, follow these steps:

## 1. Set Up Module Folder
1. Open your project's directory structure.
2. Navigate to the src folder.
3. Inside the src folder, locate the modules directory (if it doesn't exist, create it).
4. Create a new folder with the name of your module, for example, `accountingModule`. This folder will contain all the components, pages, and configurations for the Accounting Module.

**for example:**
```bash
 src
└── core
└── modules
    └── accountingModule 
```

## 2. Create Required Folders
Inside the `accountingModule` folder, create the following sub-folders:
- components: This folder will contain all the components related to the Accounting Module.
- overrides: This folder will house any overrides or customizations specific to the Accounting Module.
- Pages: This folder will hold the main pages of the Accounting Module.

## 3. Define Folder Hierarchy
Your folder hierarchy should look like this:
```bash
 src
└── modules
    └── accountingModule
        ├── components
        │   ├── Forms
        │   │   ├── reports
        │   │   │   └── accountTrialBalanceReport.tsx
        │   │   └── Journal.tsx
        │   └── overrides 
        │           └── MainLayout
        │               └── Drawer
        │                   └── menuItems.tsx
        ├── Pages
        │   └── Journal
        │       ├── components
        │       │   └── JournalGrid.ts
        │       ├── mapper
        │       │   └── JournalMapper.ts
        │       └── index.tsx
```

## 4. Create Files
1. Inside the `components/overrides/MainLayout/Drawer` folder, create a file named `menuItems.tsx`. In this file, you will define the sidebar menu items for the Accounting Module using a JSON structure format. 

    - Here's an example of how the `accountingMenuItems` could be defined:
    ```js
     export const accountingMenuItems: IMenuItemOption = {
        items: [
             {
               id: "AccountingPaymentId",
               title: "Payment Confgs",
               type: "group",
               children: [
               {
                 id: "BankId",
                 title: "Banks",
                 isAuthorize: true,
                 entityName: "Bank",
                 type: "item",
                 url: "/Banks",
                 icon: accoutingIcon,
               } 
            ],
           },
        ],
       };
    ```

2. Inside the `Pages/[PageName]/components` folder, create a file named `[PageName]Grid.tsx`. (Note: Replace [PageName] with the actual name of the page for which you're creating the grid, such as "Journal" or another page name.)
For example, if you're creating a grid for the "Journal" page, the file name would be `JournalGrid.tsx`.

3. Inside the `Pages/[PageName]/mapper` folder, create a file named `[PageName]Mapper.ts` for example `JournalMapper.ts`. This file will define the mapping between the data/form state and the backend API requests/responses for the journal.

4. Inside the `Pages/[PageName]` folder (ex journal), create a file named `index.tsx`. This file will be the main entry point for the Journal page. You can use this file to register the JournalGrid component, apply the JournalMapper, and display the grid and form.
