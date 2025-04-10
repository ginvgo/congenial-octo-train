const files = [
  { name: "示例PDF文档", link: "sample.pdf" }
];

const list = document.getElementById("resource-list");
files.forEach(file => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${file.link}" target="_blank">${file.name}</a>`;
  list.appendChild(li);
});
