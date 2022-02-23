export const serverURL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const environment = {
    production: true,
    api: {
        search: `${serverURL}/search.php`,
        lookup: `${serverURL}/lookup.php`,
        filter:  `${serverURL}/filter.php`,
        list: `${serverURL}/list.php`
    }
};