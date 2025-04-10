const articles = [
  { title: "第一篇文章", link: "article1.html", date: "2025-04-10" }
];

const list = document.getElementById("article-list");
articles.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${item.link}">${item.title}</a> - ${item.date}`;
  list.appendChild(li);
});
