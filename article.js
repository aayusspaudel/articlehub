const form = document.getElementById("articleForm");
    const articlesDiv = document.getElementById("articles");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;

      if (title && content) {
        // Create new article div
        const newArticle = document.createElement("div");
        newArticle.classList.add("article");
        newArticle.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

        // Add new article at the top
        articlesDiv.prepend(newArticle);
        alert("Submitted successfully!!");

        // Clear form
        form.reset();
      }
    });