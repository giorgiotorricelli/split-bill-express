

export function generateSlug(groupName) {
    let slug = groupName.trim();

    slug = slug.split(' '); 

    slug = slug.map(curr => {
        return curr.trim();
    });

    slug = slug.join('-');

    return slug;
}