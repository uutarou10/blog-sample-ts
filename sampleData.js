const faker = require('faker');

module.exports = () => {
  const data = {
    posts: [],
    comments: []
  };

  const postsCount = 20;
  let lastComentsId = 0;
  
  for (let i = 0; i < postsCount; i += 1) {
    // Generate comment
    let commentIds = [];
    for (let j = 0; j < Math.floor(Math.random() * 5); j += 1) {
      const id = ++lastComentsId;
      data.comments.push({
        id,
        article_id: i + 1,
        body: faker.lorem.text(),
        name: faker.name.findName(),
        created_at: new Date() 
      });
      commentIds.push(id);
    }
    
    // Generate posts
    data.posts.push({
      id: i + 1,
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(),
      comments_id: commentIds,
      created_at: faker.date.past() 
    });
  }
  
  return data;
}