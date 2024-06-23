const posts = [
  {
    id: 1,
    image: "https://example.com/image1.jpg",
    title: "Pierwszy post",
    content: "To jest opis pierwszego posta.",
  },
  {
    id: 2,
    image: "https://example.com/image2.jpg",
    title: "Drugi post",
    description: "To jest opis drugiego posta.",
  },
  {
    id: 3,
    image: "https://example.com/image3.jpg",
    title: "Trzeci post",
    description: "To jest opis trzeciego posta.",
  },
  {
    id: 4,
    image: "https://example.com/image3.jpg",
    title: "Czwarty post",
    description: "To jest opis czwartego posta.",
  },
];

function Posts() {
  return (
    <div className="posts">
      {posts.map((post, i) => (
        <div key={post.id} className={`post-${i}`}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
