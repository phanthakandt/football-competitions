export const columns = [
    {
        name: 'Role',
        selector: row => row['role'] ? row['role'].toLowerCase() : '-'
    },
    {
        name: 'Name',
        selector: row => <a href={`/player/${row['id']}`}>{row['name']}</a>
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