# Star Wars DataTable Filters (with Redux)

This project was entirely created as a prerequisite to measure my _hooks_ and _contextAPI_ skills on Trybe's Software Development course.

## What's been done here:

I've made an SPA with React and using contextAPI to control the global state. The application consists in a table with lots of information about planets in _Star Wars_ universe. It's been generated with data from an API. There are also filters which will allow users to select and find planets.

## Installation

1 - Clone this repo

`git clone git@github.com:laurolyra/StarWarsHooksTable.git`

2 - Navigate to project's directory

`cd StarWarsHooksTable`

3 - Install dependencies

`npm install`

4 - Run the application

`npm start`

# Fullfiled Requrements

Every requirement down below refers to business rules defined by Trybe, which I couldn't change to another pattern or use another technology.

## 1 - Test coverage is greater than 90%.
To check this out, just run on your terminal, after step 3, `npm run test-coverage`

## 2 - When mounted, the page makes a request to the endpoint `/planets` from a Star Wars API and fill a table with every data but the key `residents`.

A component called `<Table />` renders every data from context, which stores every data from API's response.

## 3 - Text Field that filters the table to show only planets whose names includes part of the text.

The table is updated with the planets that has part or the letters typed on its name. There isn't a search button. The input field is not case sensitive. E.g., if users type "ald", the planet "Alderaan" is exhibited.

**Context API** and **Hooks** were used to manage the application's state and the text is saved in a field named `filters: [{ name }]`:

```javascript
{
  filters: [
    {
      name: 'ald',
    }
  ]
}
```

## 4 - The page contains numerics filters.

It works with 3 selectors:

  - The first one opens a dropdown that allows users to select one of the following columns: `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`.
  - The second one has 3 options: `more than`, `less than` or `equal to` ao numero que virá a seguir.
  - The third one is a input field that allows only numbers.

These three selectors combined, after clicking `Filter!`, filters every data according to chosen columns and values input. E.g.:

  - If `population | more than | 100000` were selected, table will show, after click on search, only planets with more than 100000 inhabitants.
  - If `diameter | less than | 8000` were selected, table will show, after click on search, only planetas with diameter larger than 8000.

**Context API** and **Hooks** were used to manage the application's state. On `context`, these values are inserted on fields `filters [{ numericValues: { column, comparison, value } }]`:

```javascript
{
  filters: [
    {
      numericValues: {
        column: 'population',
        comparison: 'more than',
        value: '100000',
      }
    }
  ]
}
```

## 5 - The page will show only one numeric filter set per time.

If all three dropdowns are filled and user clicks on button `Filter!`, a new filter set will be shown.

This new set won't include any columns that were selected before. If all the 5 columns were selected and used to filter data, a message `No more filters available!` will appear on screen. **Context API** and **Hooks** were used to manage the application's state.

E.g., the first filter has the following criteria: `population | more than| 100000`. The second one appears after clicking on filter, but the first dropdown will show all columns but the one named `population`. If user selects, on second filter, the options `diameter | less than | 8000`, the application's state will be as follows:

```javascript
{
  filters: [
    {
      numericValues: {
        column: 'population',
        comparison: 'more than',
        value: '100000',
      }
    },
    {
      numericValues: {
        column: 'diameter',
        comparison: 'less than',
        value: '8000',
      }
    }
  ]
}
```


## 6 - Every numeric filter has an X icon that, when clicked, excludes it and undo any changes made in the table.

The column option of the selected filter (i.e., the first dropdown) is available to be selected again. **Context API** and **Hooks** were used to manage the application's state.

## 7 - Table's columns can be ordered ascending or descending.

Its order is stored in the fields `filters: [{ column: 'Name', order: 'ASC'}]`. The field `column` represents the column's criteria to order the table. By default, it is ordered by name in ascending order:

```javascript
{
  filters: [
    {
      column: 'Name',
      order: 'ASC',
    }
  ]
}
```
