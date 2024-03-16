export async function getProfileById(id) {
    const response = await fetch(
        'https://supademo.ernestofreyere.com/api/profile/${id}'
    );
    const data = await response.json();
    return data; 
}