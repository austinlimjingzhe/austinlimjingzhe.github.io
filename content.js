const siteContent = {
  title: "Austin Lim",
  heroQuote: "Insights will remain just ideas unless they are understood by key decision makers that have the power to act on them.",
  toc: [
    { id: "introductions", label: "Introductions" },
    { id: "history", label: "History" },
    { id: "skills", label: "Powers & Abilities" },
    { id: "projects", label: "Projects" },
    { id: "trivia", label: "Trivia" }
  ],
  sections: {
    introductions: {
      heading: "Introduction",
      paragraphs: [
        "Hi there, welcome to my website! I am a data analytics and data engineering consultant and in my work, I work with companies make better data-driven decisions.",
        "I look forward to constantly learning more about new developments in the field of data science and analytics, so I would love to connect with anyone to talk more about on those topics.",
        "In my free time, I work on personal projects that sometime spawn from random spontaneous ideas and this is the home of those sometimes quirky projects."
      ]
    },
    history: {
      heading: "History",
      timelineHtml: `<svg width="100%" height="100">
                    <line x1="0" y1="50" x2="1000" y2="50" style="stroke:black; stroke-width:1.5"></line>
                    <circle cx="150" cy="50" r="10" stroke="#f8f9fa" stroke-width="6" fill="#122189"></circle>
                    <text text-anchor="middle" x="150" y="80" fill="black">June 2022</text>
                    <text font-size="13" text-anchor="middle" x="70" y="30" fill="black">BSc (Econs)</text>
                    <text style="font-style: italic" font-size="13" text-anchor="middle" x="70" y="80" fill="#808080">SMU</text>
                    <circle cx="450" cy="50" r="10" stroke="#f8f9fa" stroke-width="6" fill="#122189"></circle>
                    <text text-anchor="middle" x="450" y="80" fill="black">Present</text>
                    <text font-size="13" text-anchor="middle" x="300" y="30" fill="black">Data Analyst / Data Engineer</text>
                    <text style="font-style: italic" font-size="13" text-anchor="middle" x="300" y="80" fill="#808080">PwC</text>
                  </svg>`
    },
    skills: {
      heading: "Powers & Abilities",
      listItems: [
        {
          title: "Languages",
          description: "As a true blue Singaporean, I am able to speak both English and Mandarin Chinese.<br>I have also taken some beginner lessons in Japanese back in SMU."
        },
        {
          title: "Programming and Visualisation",
          description: "Through my modules in SMU, I have learnt to code in Python, R and MSSQL.<br>Additionally, personal projects involving web application development and data visualisation led me to also pick up HTML, CSS and JS; as well as Tableau skills.<br>Internships and work opportunities have allowed me to try my hand at SAS and Microsoft’s DAX and M-code when studying for Microsoft’s Power BI Associate certification."
        },
        {
          title: "Cloud and Big Data",
          description: "The first experience with working with Big Data I had was using Sparklyr when I took a module in SMU on Big Data Analytics. Later, in my work in PwC, I have had the opportunity to certify myself with the Microsoft Azure Data Engineer Associate and Databricks Data Engineer Associate credentials and be put onto a project where I used Databricks and PySpark extensively in a Data Engineering role."
        },
        {
          title: "DevOps and Code Quality",
          description: "In my work, I have had the opportunity to use Azure DevOps and Gitlab for version control and CI/CD pipelines.<br>With an on-premise setup, we implemented automated testing and deployment CI/CD processes.<br>I have also used SonarQube and HCL Appscan 360 for code quality and security checks respectively."
        }
      ]
    },
    projects: {
      heading: "Projects",
      description: "Main article: List of Projects Done By Me",
      link: "projects.html"
    },
    trivia: {
      heading: "Trivia",
      bullets: [
        "I was a competitive long distance runner so follow me on Strava if you want a semi-consistent running data source.",
        "I am a huge Pokemon fan and have Pokemon-related projects that are still in the works!"
      ]
    }
  },
  aside: {
    name: "Lim Jing Zhe Austin",
    profilePic: "./Images/display_pic.jpg",
    generalInfo: [
      ["Country", "Singapore"],
      ["Age", String(new Date().getFullYear() - 1997)],
      ["Affiliation", "PwC Consulting<br>SMU (Former)"],
      ["Occupation", "Data Analytics Consultant<br>Student (Former)"]
    ],
    powersAbilities: [
      ["Languages", "English<br>Mandarin"],
      ["Programming and Visualisation", "Python, R, NodeJS<br>MSSQL, Oracle<br>Tableau, Power BI<br>Alteryx<br>SAS<br>VBA"],
      ["Frameworks and Libraries", "Pandas, Tidyverse<br>Imblearn, Scikit-learn<br>Tensorflow, Keras<br>Flask, Streamlit<br>Shiny, ReactJS<br>Plotly, Leaflet<br>Selenium"],
      ["Data Science and Machine Learning", "Statistical Modelling<br>Spatial Data Analysis<br>Time Series Analysis<br>DataRobot<br>AIML<br>ARM<br>NLP<br>"],
      ["Big Data and Cloud", "PySpark, Sparklyr<br>Azure Databricks<br>Azure Data Factory<br>Azure Synapse<br>AWS RedShift<br>AWS Glue<br>AWS EC2<br>Boomi<br>SAP"],
      ["Git and DevOps", "Azure Devops<br>Gitlab<br>Ship-Hats<br>Jira"],
      ["Key Management and Code Quality", "CyberArk Conjur<br>HCL Appscan 360<br>SonarQube"]   
    ],
    gallery: {
      label: "Gallery",
      href: "./Assets/Austin CV.pdf"
    }
  }
};

function renderSiteContent() {
  document.title = siteContent.title;
  document.getElementById("hero-quote").textContent = siteContent.heroQuote;

  const tocList = document.getElementById("toc-list");
  siteContent.toc.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${item.id}`;
    a.textContent = item.label;
    li.appendChild(a);
    tocList.appendChild(li);
  });

  const introHeading = document.getElementById("introductions");
  introHeading.textContent = siteContent.sections.introductions.heading;
  const introText = document.getElementById("intro-text");
  introText.innerHTML = siteContent.sections.introductions.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");

  const historyHeading = document.getElementById("history");
  historyHeading.textContent = siteContent.sections.history.heading;
  document.getElementById("history-timeline").innerHTML = siteContent.sections.history.timelineHtml;

  const skillsHeading = document.getElementById("skills");
  skillsHeading.textContent = siteContent.sections.skills.heading;
  const skillsList = document.getElementById("skills-list");
  const skillsUl = document.createElement("ul");
  siteContent.sections.skills.listItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${item.title}</b>:<br>${item.description}`;
    skillsUl.appendChild(li);
  });
  skillsList.appendChild(skillsUl);

  const projectsHeading = document.getElementById("projects");
  projectsHeading.textContent = siteContent.sections.projects.heading;
  const projectsContent = document.getElementById("projects-content");
  projectsContent.innerHTML = `<p><a href="${siteContent.sections.projects.link}">${siteContent.sections.projects.description}</a></p>`;

  const triviaHeading = document.getElementById("trivia");
  triviaHeading.textContent = siteContent.sections.trivia.heading;
  const triviaList = document.getElementById("trivia-list");
  siteContent.sections.trivia.bullets.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    triviaList.appendChild(li);
  });

  document.getElementById("aside-name").textContent = siteContent.aside.name;
  document.getElementById("aside-profile-pic").src = siteContent.aside.profilePic;

  const generalInfoTable = document.getElementById("general-info-table");
  siteContent.aside.generalInfo.forEach(([label, value]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="tg-73oq">${label}</td><td class="tg-3z1b">${value}</td>`;
    generalInfoTable.appendChild(row);
  });

  const powersInfoTable = document.getElementById("powers-info-table");
  siteContent.aside.powersAbilities.forEach(([label, value]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="tg-73oq">${label}</td><td class="tg-3z1b">${value}</td>`;
    powersInfoTable.appendChild(row);
  });

  const galleryLink = document.getElementById("gallery-link");
  galleryLink.href = siteContent.aside.gallery.href;
  galleryLink.textContent = siteContent.aside.gallery.label;
}

document.addEventListener("DOMContentLoaded", renderSiteContent);
