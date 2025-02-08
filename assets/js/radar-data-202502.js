/*
  entries: [
   {
      label: "Some Entry",
      quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
      ring: 2,              // 0,1,2,3 (starting from inside)
      moved: -1             // -1 = moved out (triangle pointing down)
                            //  0 = not moved (circle)
                            //  1 = moved in  (triangle pointing up)
   },
*/

var LANGUAGES_AND_FRAMEWORKS = 0;
var INFRASTRUCTURE_AND_DEVOPS = 1;
var DATASTORES_AND_DATA_MANAGEMENT = 2;
var TOOLS_AND_TECHNIQUES = 3;

var ADOPT = 0;
var TRIAL = 1;
var ASSESS = 2;
var HOLD = 3;

var MOVED_OUT = -1;
var NOT_MOVED = 0;
var MOVED_IN = 1;

radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: '#dddde0',
    inactive: "#ddd"
  },
  title: "SPT Development Tech Radar",
  date: "2025.02",
  quadrants: [
    { name: "Languages & Frameworks" },
    { name: "Infrastructure & DevOps" },
    { name: "Datastores & Data Management" },
    { name: "Tools & Techniques" },
  ],
  rings: [
    { name: "ADOPT", color: "#5ba300" },
    { name: "TRIAL", color: "#009eb0" },
    { name: "ASSESS", color: "#c7ba00" },
    { name: "HOLD", color: "#e09b96" }
  ],
  print_layout: true,
  links_in_new_tabs: true,
  entries: [
      // Tools and Techniques
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ASSESS,
        "label": "Contract Testing",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "JMeter",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "WireMock",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": HOLD,
        "label": "MockServer",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "BDD",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "TDD",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ASSESS,
        "label": "Trello",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": HOLD,
        "label": "Confluence",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": HOLD,
        "label": "Bitbucket",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "Github",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": HOLD,
        "label": "Jira",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": HOLD,
        "label": "Scaled Agile",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": TRIAL,
        "label": "Scrum",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "Kanban",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": TRIAL,
        "label": "Ansible Lint",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "Molecule",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": HOLD,
        "label": "CodeWhisperer",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": HOLD,
        "label": "IntelliJ AI Assistant",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ASSESS,
        "label": "GraphQL",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ASSESS,
        "label": "Chat GPT",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "OpenAPI (Swagger)",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": TRIAL,
        "label": "GitArchitecture",
        "active": true,
        "moved": NOT_MOVED,
        "link": "https://kylegenebrown.medium.com/gitarchitecture-a-better-way-to-capture-architectural-decisions-b3574a3d604"
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ADOPT,
        "label": "CI/CD",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": TOOLS_AND_TECHNIQUES,
        "ring": ASSESS,
        "label": "Lapin",
        "active": true,
        "moved": NOT_MOVED,
        "link": "https://docs.rs/lapin/latest/lapin/"
      },

      // Datastores & Data Management
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ASSESS,
        "label": "AWS Kinesis",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "AWS SNS",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "AWS SQS",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": TRIAL,
        "label": "Kafka",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "RabbitMQ",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": HOLD,
        "label": "AWS DynamoDB",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "AWS S3",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": HOLD,
        "label": "Apache Cassandra",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "Artemis",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "Elasticsearch",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": HOLD,
        "label": "Memcached",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": HOLD,
        "label": "MongoDB",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": HOLD,
        "label": "MySQL",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": HOLD,
        "label": "Oracle DB",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "PostgreSQL",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ADOPT,
        "label": "Redis",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": DATASTORES_AND_DATA_MANAGEMENT,
        "ring": ASSESS,
        "label": "OpenSearch",
        "active": true,
        "moved": NOT_MOVED
      },

      // Infrastructure & Devops
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": TRIAL,
        "label": "AWS EKS",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "AWS ECS",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": HOLD,
        "label": "AWS Cognito",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": TRIAL,
        "label": "AWS Endpoint Services",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "AWS API Gateway",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": HOLD,
        "label": "AWS CloudFormation",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "AWS CloudFront",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "AWS Lambda",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "Docker",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "Kubernetes",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "Terraform",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": HOLD,
        "label": "AWS CDK",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "Ansible",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": HOLD,
        "label": "Jenkins",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ADOPT,
        "label": "GitHub Actions",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": HOLD,
        "label": "Travis",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": ASSESS,
        "label": "K3S",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": TRIAL,
        "label": "Vagrant",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": TRIAL,
        "label": "Gradle",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": INFRASTRUCTURE_AND_DEVOPS,
        "ring": TRIAL,
        "label": "Docker Swarm",
        "active": true,
        "moved": NOT_MOVED
      },

      // Languages & Frameworks
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Cucumber",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": TRIAL,
        "label": "Cypress",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Selenium",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Testcontainers",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "MyBatis",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Spring JDBC",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "JPA",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Java",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "JavaScript",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ASSESS,
        "label": "Kotlin",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Python",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Rust",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Actix Web",
        "active": true,
        "moved": NOT_MOVED,
        "link": "https://actix.rs/"
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ASSESS,
        "label": "Rocket",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "Scala",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "TypeScript",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "React",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ASSESS,
        "label": "React Hook Form",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "Formik",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "React Final Form",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Spring Boot",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Spring Cloud Config",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Spring Security",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ADOPT,
        "label": "Spring MVC",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": TRIAL,
        "label": "Spring Batch",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "Spring Integration",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "Mule",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": HOLD,
        "label": "Camel",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ASSESS,
        "label": "Go",
        "active": true,
        "moved": NOT_MOVED
      },
      {
        "quadrant": LANGUAGES_AND_FRAMEWORKS,
        "ring": ASSESS,
        "label": "GraalVM",
        "active": true,
        "moved": NOT_MOVED
      },
    ]
});
