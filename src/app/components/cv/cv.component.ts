import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  infos = [{
    title: "Full Stack Developer",
    profile: {
      title: "Profile",
      content: "26 years old Full Stack Developer with a Ph.D. in Artificial Intelligence. Highly skilled in Java (Spring), Typescript (Angular), and Python (Flask)."
    },
    skills: "Key Skills",
    languages: {
      title: "Languages",
      langs: ["English (C2): Fluent",
              "French (C2): Bilingual",
             "Arab: Native"]
    },
    philosophy: {
      title: "Life Philosophy",
      beforeQuote: "My philosophy in life is simple: ",
      quote: "Find the pattern; Optimize it.",
      afterQuote: "I enjoy using my attention to detail to optimize and facilitate solutions to challenging problems."
    },
    experience: {
      title: "Experience",
      exps: [{
        position: "Research and Development Engineer",
        place: "University of Montpellier - LIRMM",
        time: "Aug 18 - Jul 19",
        location: "Montpellier | France",
        description: "Built a platform for collective decision making. It allows real-time collaboration between multiple stakeholders with conflicting preferences.",
        items: [
          "Implemented a modular architecture across entire stack (20k+ lines of code) while overseeing the deployment, documentation, and deliverable reports.",
          "Implement Spring REST API along with collaboration support using websockets and publish the different modules to maven repository.",
          "Implement Angular Material front-end with graph visualization and interaction features.",
          "Tools: Angular (Typescript, HTML, SASS), Spring (Java), MongoDB, Websockets, Docker."
        ]
      },
      {
        position: "Teaching Assistant",
        place: "IUT Montpellier",
        time: "Oct 15 - Jul 19",
        location: "Montpellier | France",
        description: "Tutoring and lecturing duties (+300h) for undergraduate students.",
        items: [
          "Intoduction to Databases (92h).",
          "Human-Computer Interaction (173h).",
          "Web Development (24h).",
          "Tutoring: 5 Bachelor's student groups."
        ]
      },

      {
        position: "Junior Full Stack Developer",
        place: "Open Management System",
        time: "Sep 14 - Aug 15",
        location: "Constantine | Algeria",
        description: "",
        items: [
          "Implemented a user polling website using Laravel/PHP.",
          "Implemented a scheduling tool with replicated database using Java/MySQL for a language training school."
        ]
      }
      ]
    },

    education: {
      title: "Education",
      edus: [{
        position: "Ph.D. in Artificial Intelligence",
        place: "University of Montpellier",
        time: "Sep 15 - Jul 18",
        location: "Montpellier | France",
        description: "Reasoning with conflicting knowledge within various domains such as Databases, Data Quality, Semantic Web, Argumentation, and Human Reasoning.",
      },
      {
        position: "Master's Degree in Computer Science",
        more: "Rank: 1/76",
        place: "University of Abdelhamid Mehri",
        time: "Sep 13 - Jul 15",
        location: "Constantine | Algeria",
        description: "Implemented a tool for the classification of individuals in fuzzy ontologies by calculating the membership degree and displaying the results in a colored directed graph."
      }]
    },

    awards: {
      title: "Notable Certifications and Awards",
      aws: [
        {title:"Ph.D. Excellency Scholarship:",
         desc: "for graduate students with outstanding curriculum"},
        {title:"DALF C1:",
         desc: "Advanced French Language Diploma - C1."},

        {title:"Valedictorian:",
         desc: "Bachelor's and Master's degrees."},

        {title:"Cirta-Science-III Astronomy Award:",
         desc: "first place in the Cirta Astronomy contest"}
      ]
    }
  },

// French
{
    title: "Développeur Full Stack",
    profile: {
      title: "Profil",
      content: "26 ans, développeur Full Stack avec un doctorat en intelligence artificielle. Hautement qualifié en Java (Spring), Typescript (Angular) et Python (Flask)."
    },
    skills: "Compétences Clés",
    languages: {
      title: "Langues",
      langs: ["Anglais (C2): Courant",
              "Francais (C2): Bilingue",
              "Arabe: Langue Maternelle"]
    },
    philosophy: {
      title: "Philosophie de Vie",
      beforeQuote: "Ma philosophie de vie est: ",
      quote: "Find the pattern; Optimize it.",
      afterQuote: "J'aime utiliser mon attention aux détails pour optimiser et faciliter la résolution de problèmes complexes."
    },
    experience: {
      title: "Expérience",
      exps: [{
        position: "Ingénieur Recherche et Développement",
        place: "Université de Montpellier - LIRMM",
        time: "Aoû 18 - Jul 19",
        location: "Montpellier | France",
        description: "Développement d'une plate-forme de prise de décision collective. Elle permet une collaboration en temps réel entre plusieurs agents ayant des préférences conflictuelles.",
        items: [
          "Implémentation d'une architecture modulaire (20k+ lignes de code) tout en supervisant le déploiement, la documentation et les rapports des livrables.",
          "Implémentation d'une API REST Spring, prise en chage de la collaboration en temps réel avec des websockets, et publication des modules dans le référentiel Maven.",
          "Implémentation d'une interface Angular Material avec visualisation de graphes.",
          "Outils: Angular (Typescript, HTML, SASS), Spring (Java), MongoDB, Websockets, Docker."
        ]
      },
      {
        position: "Enseignant Vacataire",
        place: "IUT de Montpellier",
        time: "Oct 15 - Jul 19",
        location: "Montpellier | France",
        description: "Tutorat et cours magistraux (+300h) pour les étudiants de premier cycle en Informatique.",
        items: [
          "Intoduction aux bases de données (92h).",
          "Interaction Homme-Machine (173h).",
          "Développement Web (24h).",
          "Tutorat: 5 groupes d'étudiants en licence."
        ]
      },

      {
        position: "Développeur Full Stack Junior",
        place: "Open Management System",
        time: "Sep 14 - Aoû 15",
        location: "Constantine | Algérie",
        description: "",
        items: [
          "Implémentation d'un site Web de sondage en Laravel / PHP.",
          "Implémentation d'un outil de planification avec base de données répliquée utilisant Java/MySQL pour une école de langues."
        ]
      }
      ]
    },

    education: {
      title: "Éducation",
      edus: [{
        position: "Doctorat en Intelligence Artificielle",
        place: "Université de Montpellier",
        time: "Sep 15 - Jul 18",
        location: "Montpellier | France",
        description: "Raisonnement avec des connaissances conflictuelles dans divers domaines: bases de données, qualité des données, web sémantique, argumentation et raisonnement humain.",
      },
      {
        position: "Master en Informatique - Technologies Web",
        more: "Rang: 1/76",
        place: "Université Abdelhamid Mehri",
        time: "Sep 13 - Jul 15",
        location: "Constantine | Algérie",
        description: "Implémentation d'un outil Java/D3 de classification d'individus dans des ontologies floues en calculant le degré d'appartenance et en affichant les résultats dans un graphe orienté."
      }]
    },

    awards: {
      title: "Certifications et Prix",
      aws: [
        {title:"Agile Meets Design Thinking:",
         desc: "certification Agile - Coursera."},
        {title:"Bourse Doctorat d'Excellence:",
         desc: "pour les étudiants avec un parcours exceptionnel."},
        {title:"DALF C1:",
         desc: "Diplôme Approfondi de Langue Française - C1."},
        // {title:"Major de promotion:",
        //  desc: "en Licence et Master."},

        {title:"Cirta-Science-III Astronomy Award:",
         desc: "première place au concours d'astronomie."}
      ]
    }
  }

];

  constructor() { }

  ngOnInit() {
  }

}
