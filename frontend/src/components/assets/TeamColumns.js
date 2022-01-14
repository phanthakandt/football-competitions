export const columns = [
    {
        name: 'Role',
        selector: row => row['role'] ? row['role'].toLowerCase() : '-'
    },
    {
        name: 'Name',
        selector: row => row['name']
    },
    {
        name: 'Position',
        selector: row => row['position']
    },
    {
        name: 'Country of Birth',
        selector: row => row['countryOfBirth']
    }
]