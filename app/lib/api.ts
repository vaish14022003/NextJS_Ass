
export async function fetchBlogsFromAPI() {
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
    if (!postsRes.ok) throw new Error('Failed to fetch posts')
    const posts = await postsRes.json()

    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!usersRes.ok) throw new Error('Failed to fetch users')
    const users = await usersRes.json()

    return posts.map((post: any, index: number) => {
        const user = users.find((u: any) => u.id === post.userId)
        return {
            id: post.id,
            title: post.title,
            author: user?.name || 'Anonymous',
            authorImg: `https://i.pravatar.cc/40?u=${user?.id}`, // dynamic avatar
            date: 'Jan 10, 2024',
            time: '3 min read',
            image: `/car${index + 3}.jpg`, // car3.jpg to car6.jpg
        }
    })
}
