export async function getProfiles(id) {
    const response = await fetch(
        'https://supademo.ernestofreyere.com/api/profile/${id}'
    );
    const data = await response.json();
    return data; 
}