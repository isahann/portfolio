import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../model/Tab";
import {ProfessionalExperienceWindowTab} from "../model/ProfessionalExperienceWindowTab";

@Component({
  selector: 'app-professional-experience-window',
  templateUrl: './professional-experience-window.component.html',
  styleUrls: ['./professional-experience-window.component.sass']
})
export class ProfessionalExperienceWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Professional Experience';

  protected professionalExperienceWindowTabs: ProfessionalExperienceWindowTab[] = [
    {
      id: 'tab-totvs',
      title: 'WS/TOTVS',
      selected: true,
      companyName: 'Wealth Systems/TOTVS',
      location: 'Cascavel - PR, Brazil',
      workTypes: ['On-site'],
      skills: ['Java', 'PostgreSQL', 'Git', 'Apache Maven', 'JavaScript', 'Redmine', 'JSP', 'CSS', 'HTML', 'Hibernate'],
      duration: 'jul/2016 - dec/2016',
      roles: ['Intern'],
      descriptions: [
        'At Wealth Systems (acquired by TOTVS in 2020), I had my first experience on the field. It helped me learn the overall basics of a day in the life of a software developer.',
        'The time was spent on daily activities to learn more about software development itself. We simulated task development, bug fixing, and so on.' +
        'We used Java for the backend, along with PostgreSQL, and JSP on the frontend.'
      ]
    },
    {
      id: 'tab-syngular',
      title: 'Syngular Systems',
      selected: false,
      companyName: 'Syngular Systems (former Aguiar Informática)',
      location: 'Cascavel - PR, Brazil',
      workTypes: ['On-site (2017-2018)', 'Remote (2019)'],
      skills: ['Java', 'PostgreSQL', 'Git', 'Apache Maven', 'Apache Tomcat', 'Primefaces', 'Jasper Reports', 'CSS', 'HTML', 'Hibernate', 'Jenkins', 'JSF'],
      duration: 'aug/2017 - dec/2018 and jun/2019 - jul/2019',
      roles: ['Intern (2017-2018)', 'Freelancer (2019)'],
      descriptions: [
        'At Syngular Systems I\'ve had a great learning experience despite being only a internship. It really helped me develop techincal skills and improved my knowledge on the overall software development cycle.',
        'I\'ve worked on agricultural systems, that managed crops and seeds, and the main experience was on an ERP, with registrations, issuance of invoices, issuance of bank slips along with their specific shipping and returnal files.',
        'The tech stack was a JSF project, using Java on the backend along with PostgreSQL as a database. On the front-end, we used PrimeFaces to help the component development, which increased our productivity. Jenkins was our CI/CD choice, which helped me learn a bit about DevOps concepts.'
      ]
    },
    {
      id: 'tab-matera',
      title: 'Matera',
      selected: false,
      companyName: 'Matera',
      location: 'Maringá - PR, Brazil',
      workTypes: ['On-site (jan/2020 - mar/2020)', 'Remote (mar/2020 - feb/2022)'],
      skills: ['Java', 'PostgreSQL', 'Git', 'Apache Maven', 'Apache Tomcat', 'Jenkins', 'Spring Framework', 'AngularJS', 'Bash'],
      duration: 'jan/2020 - mar/2022',
      roles: ['Junior Software Developer (2020-2021)', 'Mid-level Software Developer (2022)'],
      descriptions: [
        'Matera was my first experience being a Junior Software Engineer. It helped me build a lot of soft skills, enhance my knowledge of the overall day of a software engineer, and eventually I got promoted from Junior to Mid-Level (around 2021).',
        'My work on Matera was hardly focused on banking solutions for financial institutions such as banks and fintechs for the brazilian banking system. My main experience was at SPB (Brazilian Paying System), which taught me a lot about the overall architecture of financial systems, how messages were handled to perform payments, transfers and such, and also for handling judicial decisions for blocking accounts or transfers, for example.',
        'I\'ve solidified a lot of my skills for the back-end part, used mainly Java with Spring, used databases such as PostgreSQL, Oracle DB, MSSQL, and worked a bit on the front-end using JSP. We used Jenkins with AWS for our CI/CD and cloud environment, and I also built a few scripts for Jenkins\' pipelines. It also helped me improve my sense of resposibilty of tasks, self-confidence, and team communication, for soft skills.'
      ]
    },
    {
      id: 'tab-cit',
      title: 'CI&T',
      selected: false,
      companyName: 'CI&T',
      location: 'Maringá - PR, Brazil',
      workTypes: ['Remote (since mar/2022)'],
      skills: ['Java', 'Spring Framework', 'TypeScript', 'Git', 'Apache Maven', 'JavaScript', 'REST APIs', 'Node.js', 'Azure DevOps', 'MongoDB', 'Ionic', 'NoSQL', 'Mockito', 'Angular', 'Docker/Docker compose', 'CSS', 'Jira', 'Hibernate', 'JUnit', 'Jest/Karma', 'Kafka', 'Bash', 'OpenAPI specification'],
      duration: 'since mar/2022',
      roles: ['Mid-level Software Developer'],
      descriptions: [
        'At CI&T, I had a great opportunity to solidify my skills as a back-end developer and also had a few shots working with websites and mobile apps, which helped me develop a lot of front-end skills.',
        'I\'ve worked on several projects, mainly focused on the insurance section of financial companies, to improve user experience when buying an insurance and also offering various options on other banks through Open Finance. ',
        'I\'ve used mainly Java with Spring on the back-end of microservices applications, used several databases such as PostgreSQL or MongoDB, got to know a bit more about messaging using Kafka, and exposed data via REST APIs. But, I also worked on a mobile app using Angular/Ionic and a website using Angular, which helped me a lot to understand some complex concepts on the front-end side, such as making use of NgRx to manage state and reactive extensions using RxJs. On almost all projects we used AWS for the cloud environment, along with Jenkins or Azure pipelines for the CI/CD.'
      ]
    },
  ];

  constructor() {
    // Empty
  }

  ngOnInit(): void {
    // Empty
  }

  changeSelectedTab(selectedTab: WindowTab): void {
    if (selectedTab.selected)
      return;

    this.professionalExperienceWindowTabs.forEach(tab => {
      tab.selected = selectedTab.id === tab.id
    })
  }
}
