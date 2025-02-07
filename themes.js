      /*const body = document.body;
      const currentTheme = localStorage.getItem("theme") || "normal";
      body.classList.add(currentTheme);*/
      function themeToggle() {
        if (body.classList.contains("normal")) {
            body.classList.replace("normal", "sojuz");
            //body.topNav.classList.replace("normal", "sojuz");
            localStorage.setItem("theme", "sojuz");
            } else {
            body.classList.replace("sojuz", "normal");
            //body.topNav.classList.replace("sojuz", "normal");
            localStorage.setItem("theme", "normal");
            }
      }