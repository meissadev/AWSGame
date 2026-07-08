/**
 * Banque de 700 questions AWS Cloud Practitioner (CLF-C02)
 * Niveau modéré — scénarios pratiques, nuances entre services
 * Domaines : Cloud Concepts (24%) | Security & Compliance (30%)
 *           | Cloud Technology (34%) | Billing & Pricing (12%)
 */
const ALL_QUESTIONS = [
  // ── Cloud Concepts ──────────────────────────────────────────────────────
  { id:"c001", domain:"Cloud Concepts", question:"Quelle caractéristique du cloud permet d'augmenter ou réduire automatiquement les ressources en fonction de la demande ?", choices:["Haute disponibilité","Élasticité","Durabilité","Tolérance aux pannes"], answer:1, timeLimit:10 },
  { id:"c002", domain:"Cloud Concepts", question:"Lequel de ces modèles de déploiement combine infrastructure on-premises et cloud public ?", choices:["Cloud privé","Cloud public","Cloud hybride","Multi-cloud"], answer:2, timeLimit:10 },
  { id:"c003", domain:"Cloud Concepts", question:"Quel avantage du cloud AWS élimine la nécessité d'estimer la capacité serveur à l'avance ?", choices:["Économies d'échelle","Élimination des dépenses en capital","Arrêter de deviner la capacité","Déploiement mondial rapide"], answer:2, timeLimit:10 },
  { id:"c004", domain:"Cloud Concepts", question:"Dans le modèle de responsabilité partagée, qui est responsable du chiffrement des données client dans Amazon S3 ?", choices:["AWS uniquement","Le client uniquement","Les deux partagent la responsabilité","Un auditeur tiers"], answer:2, timeLimit:10 },
  { id:"c005", domain:"Cloud Concepts", question:"Quel pilier du AWS Well-Architected Framework traite de la capacité à exécuter et surveiller les systèmes pour améliorer les processus ?", choices:["Sécurité","Fiabilité","Excellence opérationnelle","Efficacité des performances"], answer:2, timeLimit:10 },
  { id:"c006", domain:"Cloud Concepts", question:"Une région AWS se compose d'au minimum combien de zones de disponibilité ?", choices:["1","2","3","5"], answer:1, timeLimit:10 },
  { id:"c007", domain:"Cloud Concepts", question:"Quel modèle de service cloud laisse au fournisseur la gestion de l'OS, du middleware et du runtime ?", choices:["IaaS","PaaS","SaaS","FaaS"], answer:1, timeLimit:10 },
  { id:"c008", domain:"Cloud Concepts", question:"Quelle est la définition d'un point de présence (PoP) AWS ?", choices:["Un datacenter AWS principal","Une AZ supplémentaire","Infrastructure pour CloudFront et Route 53 en bordure du réseau","Une région AWS temporaire"], answer:2, timeLimit:10 },
  { id:"c009", domain:"Cloud Concepts", question:"Le principe 'Stop guessing capacity' du cloud AWS fait référence à :", choices:["Arrêter d'utiliser des outils de monitoring","Provisionner les ressources à la demande sans prévoir en excès","Déléguer la planification capacitaire à un tiers","Utiliser uniquement des instances réservées"], answer:1, timeLimit:10 },
  { id:"c010", domain:"Cloud Concepts", question:"Quelle affirmation sur les zones de disponibilité est correcte ?", choices:["Une AZ est une région entière","Chaque AZ est composée d'un ou plusieurs datacenters physiquement séparés et connectés à faible latence","Une AZ est un emplacement CloudFront","Toutes les AZ d'une région partagent la même alimentation électrique"], answer:1, timeLimit:10 },
  { id:"c011", domain:"Cloud Concepts", question:"Quel avantage du cloud permet à une startup de ne payer que ce qu'elle consomme sans engagement ?", choices:["Réservation à long terme","Paiement à l'usage (pay-as-you-go)","Facturation annuelle forfaitaire","Abonnement mensuel fixe"], answer:1, timeLimit:10 },
  { id:"c012", domain:"Cloud Concepts", question:"La haute disponibilité dans AWS est principalement obtenue en :", choices:["Augmentant la taille des instances","Déployant des ressources dans plusieurs zones de disponibilité","Activant AWS Shield","Utilisant uniquement des instances On-Demand"], answer:1, timeLimit:10 },
  { id:"c013", domain:"Cloud Concepts", question:"Quel terme désigne la capacité d'un système à continuer de fonctionner même en cas de panne d'un composant ?", choices:["Élasticité","Scalabilité","Tolérance aux pannes","Durabilité"], answer:2, timeLimit:10 },
  { id:"c014", domain:"Cloud Concepts", question:"Quelle affirmation décrit le mieux les 'économies d'échelle' dans AWS ?", choices:["AWS facture moins cher aux grandes entreprises","Le grand nombre de clients AWS permet de réduire les coûts unitaires pour tous","Les coûts AWS augmentent avec l'utilisation","AWS offre des remises automatiques après 12 mois"], answer:1, timeLimit:10 },
  { id:"c015", domain:"Cloud Concepts", question:"Quel concept AWS décrit la capacité à déployer une application dans plusieurs régions du monde en quelques minutes ?", choices:["Élasticité","Durabilité","Portée mondiale","Haute disponibilité"], answer:2, timeLimit:10 },
  { id:"c016", domain:"Cloud Concepts", question:"Quelle est la principale différence entre scalabilité verticale et scalabilité horizontale ?", choices:["La scalabilité verticale ajoute plus d'instances ; la horizontale augmente la taille d'une instance","La scalabilité verticale augmente la puissance d'une instance existante ; la horizontale ajoute davantage d'instances","Les deux termes sont synonymes","La scalabilité verticale est uniquement pour les bases de données"], answer:1, timeLimit:10 },
  { id:"c017", domain:"Cloud Concepts", question:"Dans le modèle de responsabilité partagée, lequel des éléments suivants est TOUJOURS géré par AWS ?", choices:["Configuration des groupes de sécurité","Sécurité physique des datacenters","Gestion des comptes utilisateurs IAM","Chiffrement des données applicatives"], answer:1, timeLimit:10 },
  { id:"c018", domain:"Cloud Concepts", question:"Quel est l'objectif principal du pilier 'Fiabilité' du Well-Architected Framework ?", choices:["Réduire les coûts opérationnels","Récupérer des défaillances et répondre dynamiquement à la demande","Protéger les données contre les accès non autorisés","Optimiser les performances des instances"], answer:1, timeLimit:10 },
  { id:"c019", domain:"Cloud Concepts", question:"Quel service AWS aide les entreprises à adopter le cloud selon le AWS Cloud Adoption Framework (CAF) ?", choices:["AWS Config","AWS Professional Services","AWS CloudFormation","Amazon Inspector"], answer:1, timeLimit:10 },
  { id:"c020", domain:"Cloud Concepts", question:"Quel modèle de déploiement cloud est entièrement géré par l'entreprise sur ses propres serveurs ?", choices:["Cloud public","Cloud hybride","Cloud privé","Cloud communautaire"], answer:2, timeLimit:10 },
  { id:"c021", domain:"Cloud Concepts", question:"Laquelle de ces caractéristiques N'est PAS un avantage du cloud computing selon AWS ?", choices:["Agilité accrue","Élimination totale des pannes","Réduction des coûts","Déploiement mondial rapide"], answer:1, timeLimit:10 },
  { id:"c022", domain:"Cloud Concepts", question:"Quel pilier du Well-Architected Framework recommande de 'faire évoluer les applications horizontalement' ?", choices:["Excellence opérationnelle","Sécurité","Fiabilité","Efficacité des performances"], answer:3, timeLimit:10 },
  { id:"c023", domain:"Cloud Concepts", question:"Une entreprise migre vers AWS et souhaite éviter les dépenses en capital (CapEx). Quel avantage du cloud répond à ce besoin ?", choices:["Économies d'échelle","Échange de CapEx contre OpEx","Arrêt de la gestion des datacenters","Déploiement en quelques minutes"], answer:1, timeLimit:10 },
  { id:"c024", domain:"Cloud Concepts", question:"Quel concept désigne la capacité d'un système à maintenir ses données même en cas de panne (ex: S3 avec 99.999999999% de durabilité) ?", choices:["Disponibilité","Durabilité","Résilience","Élasticité"], answer:1, timeLimit:10 },
  { id:"c025", domain:"Cloud Concepts", question:"AWS propose des services managés. Qu'est-ce que cela signifie pour le client ?", choices:["Le client gère l'infrastructure sous-jacente","AWS gère l'infrastructure, le client se concentre sur l'utilisation du service","Le client doit patcher les serveurs manuellement","AWS facture des frais de gestion supplémentaires"], answer:1, timeLimit:10 },
  { id:"c026", domain:"Cloud Concepts", question:"Quel terme décrit la propriété d'un système capable de se remettre d'une défaillance et de reprendre son fonctionnement normal ?", choices:["Tolérance aux pannes","Résilience","Durabilité","Élasticité"], answer:1, timeLimit:10 },
  { id:"c027", domain:"Cloud Concepts", question:"Quel AWS Local Zone permet de faire ?", choices:["Répliquer des données entre régions","Exécuter des services AWS à proximité géographique d'utilisateurs finaux pour réduire la latence","Créer un réseau privé virtuel","Stocker des données archivées à faible coût"], answer:1, timeLimit:10 },
  { id:"c028", domain:"Cloud Concepts", question:"Quelle est la responsabilité d'AWS dans le modèle partagé pour Amazon EC2 ?", choices:["Gestion du système d'exploitation guest","Configuration des groupes de sécurité","Sécurité de l'infrastructure physique et de l'hyperviseur","Gestion des données applicatives"], answer:2, timeLimit:10 },
  { id:"c029", domain:"Cloud Concepts", question:"Lequel des services suivants est un exemple de SaaS sur AWS ?", choices:["Amazon EC2","Amazon RDS","Amazon WorkMail","Amazon VPC"], answer:2, timeLimit:10 },
  { id:"c030", domain:"Cloud Concepts", question:"Pourquoi AWS peut-il proposer des prix inférieurs à ceux d'un datacenter on-premises ?", choices:["AWS utilise du matériel moins cher","AWS bénéficie d'économies d'échelle grâce au très grand nombre de clients","AWS ne propose pas de support technique","AWS n'offre pas de SLA"], answer:1, timeLimit:10 },
  { id:"c031", domain:"Cloud Concepts", question:"Quel pilier du Well-Architected Framework inclut la conception pour l'automatisation des tâches opérationnelles ?", choices:["Sécurité","Fiabilité","Excellence opérationnelle","Optimisation des coûts"], answer:2, timeLimit:10 },
  { id:"c032", domain:"Cloud Concepts", question:"Quel est l'avantage de déployer des ressources dans plusieurs régions AWS ?", choices:["Réduction des coûts","Résilience géographique et réduction de la latence pour les utilisateurs mondiaux","Simplification de la gestion IAM","Accès au support Enterprise"], answer:1, timeLimit:10 },
  { id:"c033", domain:"Cloud Concepts", question:"Selon le CAF, la perspective 'People' se concentre sur :", choices:["La migration technique des charges de travail","La formation et l'évolution des compétences des équipes pour adopter le cloud","La définition des politiques de gouvernance","L'optimisation des coûts d'infrastructure"], answer:1, timeLimit:10 },
  { id:"c034", domain:"Cloud Concepts", question:"Quelle stratégie de migration consiste à reconstruire entièrement une application pour utiliser les services cloud natifs ?", choices:["Rehost (lift and shift)","Replatform","Refactor / Re-architect","Retire"], answer:2, timeLimit:10 },
  { id:"c035", domain:"Cloud Concepts", question:"La stratégie 'Rehost' (lift and shift) dans une migration AWS consiste à :", choices:["Reconstruire l'application en microservices","Déplacer l'application telle quelle vers AWS sans modification","Optimiser l'application pour le cloud sans la refactoriser entièrement","Remplacer l'application par un service SaaS"], answer:1, timeLimit:10 },
  { id:"c036", domain:"Cloud Concepts", question:"Quel service AWS fournit une infrastructure dédiée physiquement à un seul client ?", choices:["Instance réservée","Instance Spot","Dedicated Host","Instance On-Demand"], answer:2, timeLimit:10 },
  { id:"c037", domain:"Cloud Concepts", question:"Quel concept garantit que les ressources AWS sont disponibles dans différents pays du monde ?", choices:["Zones de disponibilité","Infrastructure mondiale (régions)","AWS Outposts","Amazon CloudFront"], answer:1, timeLimit:10 },
  { id:"c038", domain:"Cloud Concepts", question:"Quel principe Well-Architected recommande de 'appliquer la sécurité à toutes les couches' ?", choices:["Excellence opérationnelle","Sécurité","Fiabilité","Durabilité"], answer:1, timeLimit:10 },
  { id:"c039", domain:"Cloud Concepts", question:"AWS Outposts permet à une entreprise de :", choices:["Déployer des services AWS dans ses propres datacenters on-premises","Accéder à des instances EC2 gratuitement","Gérer plusieurs comptes AWS depuis une console centralisée","Chiffrer automatiquement toutes les données"], answer:0, timeLimit:10 },
  { id:"c040", domain:"Cloud Concepts", question:"Quel avantage rend le cloud AWS particulièrement utile pour les expérimentations et les prototypes ?", choices:["Contrats annuels obligatoires","Capacité à lancer et arrêter des ressources rapidement sans engagement","Support dédié inclus","Accès illimité aux instances Spot"], answer:1, timeLimit:10 },
  { id:"c041", domain:"Cloud Concepts", question:"Le 6ème pilier du Well-Architected Framework (ajouté en 2021) est :", choices:["Conformité","Durabilité (Sustainability)","Gouvernance","Agilité"], answer:1, timeLimit:10 },
  { id:"c042", domain:"Cloud Concepts", question:"Quelle stratégie de migration consiste à retirer des applications obsolètes non nécessaires ?", choices:["Rehost","Retain","Retire","Repurchase"], answer:2, timeLimit:10 },
  { id:"c043", domain:"Cloud Concepts", question:"Quel service AWS aide à évaluer l'architecture d'une charge de travail par rapport au Well-Architected Framework ?", choices:["AWS Trusted Advisor","AWS Well-Architected Tool","AWS Config","AWS Inspector"], answer:1, timeLimit:10 },
  { id:"c044", domain:"Cloud Concepts", question:"Quelle affirmation sur le cloud public est correcte ?", choices:["L'infrastructure est exclusive à une seule entreprise","L'infrastructure est partagée entre plusieurs clients et gérée par le fournisseur","Le client est responsable de la maintenance physique","Il n'y a pas de SLA dans le cloud public"], answer:1, timeLimit:10 },
  { id:"c045", domain:"Cloud Concepts", question:"Quel terme désigne le déplacement d'applications critiques vers le cloud tout en conservant certaines charges de travail on-premises ?", choices:["Cloud privé","Cloud hybride","Cloud communautaire","Multicloud"], answer:1, timeLimit:10 },
  { id:"c046", domain:"Cloud Concepts", question:"Quel est le bénéfice principal de l'infrastructure mondiale d'AWS avec ses nombreuses régions ?", choices:["Réduction automatique des coûts de calcul","Déploiement d'applications plus proche des utilisateurs finaux pour réduire la latence","Conformité automatique à toutes les réglementations mondiales","Élimination du besoin de redondance"], answer:1, timeLimit:10 },
  { id:"c047", domain:"Cloud Concepts", question:"Dans le modèle de responsabilité partagée pour AWS Lambda, qui gère le runtime d'exécution ?", choices:["Le client","AWS","Les deux de façon équivalente","Un fournisseur tiers"], answer:1, timeLimit:10 },
  { id:"c048", domain:"Cloud Concepts", question:"Quelle stratégie de migration consiste à remplacer une application par une version SaaS (ex: passer de Microsoft Exchange à Microsoft 365) ?", choices:["Rehost","Replatform","Repurchase","Refactor"], answer:2, timeLimit:10 },
  { id:"c049", domain:"Cloud Concepts", question:"Quel service AWS permet d'étendre l'infrastructure AWS directement dans le datacenter d'un client ?", choices:["AWS Direct Connect","AWS VPN","AWS Outposts","AWS Local Zones"], answer:2, timeLimit:10 },
  { id:"c050", domain:"Cloud Concepts", question:"Lequel de ces éléments fait partie de la responsabilité du CLIENT pour Amazon RDS ?", choices:["Patching du moteur de base de données","Maintenance du matériel physique","Gestion des données et des accès applicatifs","Réplication Multi-AZ de l'infrastructure"], answer:2, timeLimit:10 },
  // ── Security & Compliance ────────────────────────────────────────────────
  { id:"s001", domain:"Security & Compliance", question:"Quelle est la bonne pratique concernant les clés d'accès du compte root AWS ?", choices:["Les utiliser pour toutes les tâches d'administration","Les partager avec l'équipe DevOps","Ne jamais les utiliser pour les tâches quotidiennes et activer le MFA","Les stocker dans AWS Secrets Manager"], answer:2, timeLimit:10 },
  { id:"s002", domain:"Security & Compliance", question:"Quel service AWS analyse en continu les journaux VPC Flow Logs, CloudTrail et DNS pour détecter les menaces ?", choices:["AWS Config","Amazon Inspector","Amazon GuardDuty","AWS Security Hub"], answer:2, timeLimit:10 },
  { id:"s003", domain:"Security & Compliance", question:"Un utilisateur IAM tente d'accéder à S3 mais reçoit une erreur 'Access Denied'. Quelle est la cause la plus probable ?", choices:["S3 est en panne","L'utilisateur n'a pas de politique IAM lui accordant les permissions S3","Le bucket S3 n'existe pas","La région S3 est incorrecte"], answer:1, timeLimit:10 },
  { id:"s004", domain:"Security & Compliance", question:"Quel service AWS stocke et fait pivoter automatiquement les secrets comme les mots de passe de bases de données ?", choices:["AWS KMS","AWS Certificate Manager","AWS Secrets Manager","AWS IAM"], answer:2, timeLimit:10 },
  { id:"s005", domain:"Security & Compliance", question:"Quel type de politique IAM est attaché directement à une ressource AWS (ex: bucket S3) pour contrôler qui y accède ?", choices:["Politique basée sur l'identité (identity-based policy)","Politique basée sur la ressource (resource-based policy)","Politique de limite d'autorisations (permissions boundary)","Politique de contrôle de service (SCP)"], answer:1, timeLimit:10 },
  { id:"s006", domain:"Security & Compliance", question:"Quelle fonctionnalité AWS IAM permet de définir la limite maximale de permissions qu'un utilisateur ou rôle peut avoir ?", choices:["Politique en ligne (inline policy)","Politique gérée AWS","Limite d'autorisations (permissions boundary)","Politique de contrôle de service"], answer:2, timeLimit:10 },
  { id:"s007", domain:"Security & Compliance", question:"Quel service AWS permet d'évaluer si des instances EC2 ont des vulnérabilités logicielles ou des expositions réseau non intentionnelles ?", choices:["Amazon GuardDuty","Amazon Macie","Amazon Inspector","AWS Config"], answer:2, timeLimit:10 },
  { id:"s008", domain:"Security & Compliance", question:"Une organisation veut s'assurer que personne dans ses comptes membres ne peut désactiver CloudTrail. Quel service utilise-t-elle ?", choices:["AWS IAM avec politique de refus","AWS Config Rules","AWS Organizations avec Service Control Policies (SCPs)","AWS Security Hub"], answer:2, timeLimit:10 },
  { id:"s009", domain:"Security & Compliance", question:"Quel service AWS gère les certificats SSL/TLS pour les applications web sans frais supplémentaires ?", choices:["AWS KMS","AWS Secrets Manager","AWS Certificate Manager (ACM)","AWS IAM"], answer:2, timeLimit:10 },
  { id:"s010", domain:"Security & Compliance", question:"Quel service AWS offre une vue consolidée des alertes de sécurité provenant de GuardDuty, Inspector, Macie et d'autres services ?", choices:["AWS Config","Amazon CloudWatch","AWS Security Hub","AWS Trusted Advisor"], answer:2, timeLimit:10 },
  { id:"s011", domain:"Security & Compliance", question:"Quelle est la différence entre authentification et autorisation dans AWS IAM ?", choices:["Ce sont des synonymes","L'authentification vérifie l'identité ; l'autorisation détermine les actions permises","L'autorisation vérifie l'identité ; l'authentification détermine les actions permises","L'authentification s'applique aux humains ; l'autorisation aux services"], answer:1, timeLimit:10 },
  { id:"s012", domain:"Security & Compliance", question:"Quel niveau de protection DDoS AWS Shield protège automatiquement tous les clients sans frais supplémentaires ?", choices:["AWS Shield Advanced","AWS Shield Standard","AWS WAF","AWS Firewall Manager"], answer:1, timeLimit:10 },
  { id:"s013", domain:"Security & Compliance", question:"Quel service AWS permet de gérer les politiques de pare-feu WAF de manière centralisée sur plusieurs comptes AWS Organizations ?", choices:["AWS Security Hub","AWS Config","AWS Firewall Manager","Amazon GuardDuty"], answer:2, timeLimit:10 },
  { id:"s014", domain:"Security & Compliance", question:"Quelle affirmation sur les groupes IAM est correcte ?", choices:["Un groupe peut contenir d'autres groupes","Les groupes peuvent assumer des rôles IAM","Un groupe est une collection d'utilisateurs IAM qui héritent des permissions du groupe","Les groupes ont leurs propres clés d'accès"], answer:2, timeLimit:10 },
  { id:"s015", domain:"Security & Compliance", question:"Quel service AWS enregistre chaque appel API effectué dans votre compte pour l'audit et la conformité ?", choices:["Amazon CloudWatch","AWS CloudTrail","AWS Config","Amazon GuardDuty"], answer:1, timeLimit:10 },
  { id:"s016", domain:"Security & Compliance", question:"Pour protéger une API REST publique contre les attaques par injection SQL, quel service AWS doit être configuré ?", choices:["AWS Shield Standard","Amazon GuardDuty","AWS WAF","Amazon Inspector"], answer:2, timeLimit:10 },
  { id:"s017", domain:"Security & Compliance", question:"Quel principe de sécurité IAM recommande de n'accorder que les permissions strictement nécessaires ?", choices:["Séparation des tâches","Principe du moindre privilège","Défense en profondeur","Zero Trust"], answer:1, timeLimit:10 },
  { id:"s018", domain:"Security & Compliance", question:"Quel service AWS détecte automatiquement les données personnelles (PII) non protégées dans Amazon S3 ?", choices:["Amazon Inspector","Amazon GuardDuty","Amazon Macie","AWS Config"], answer:2, timeLimit:10 },
  { id:"s019", domain:"Security & Compliance", question:"Quelle fonctionnalité IAM permet à une instance EC2 d'accéder à des services AWS sans stocker de credentials ?", choices:["Utilisateur IAM avec clés d'accès","Politique basée sur la ressource","Rôle IAM attaché à l'instance","Groupe IAM avec permissions S3"], answer:2, timeLimit:10 },
  { id:"s020", domain:"Security & Compliance", question:"AWS KMS (Key Management Service) génère et stocke des clés de chiffrement. Ces clés sont :", choices:["Accessibles par AWS pour des audits internes","Contrôlées exclusivement par le client et ne sortent jamais du service en clair","Partagées entre tous les clients d'une région","Automatiquement exportables vers d'autres fournisseurs cloud"], answer:1, timeLimit:10 },
  { id:"s021", domain:"Security & Compliance", question:"Quel service AWS permet de détecter si des ressources AWS ne respectent pas les règles de configuration définies (ex: S3 buckets publics) ?", choices:["Amazon GuardDuty","AWS CloudTrail","AWS Config","Amazon Inspector"], answer:2, timeLimit:10 },
  { id:"s022", domain:"Security & Compliance", question:"Quelle est la fonctionnalité de 'rotation des clés d'accès' dans IAM ?", choices:["Changer régulièrement les clés d'accès des utilisateurs pour réduire l'exposition en cas de compromission","Remplacer les clés KMS annuellement","Réinitialiser les mots de passe tous les 90 jours","Générer de nouveaux certificats SSL chaque mois"], answer:0, timeLimit:10 },
  { id:"s023", domain:"Security & Compliance", question:"Quel service AWS est spécialisé dans la protection des charges de travail contre les menaces au niveau du réseau dans un VPC ?", choices:["AWS WAF","Security Groups","AWS Network Firewall","Amazon GuardDuty"], answer:2, timeLimit:10 },
  { id:"s024", domain:"Security & Compliance", question:"Pour une conformité PCI DSS sur AWS, qui est responsable de la conformité de l'environnement applicatif ?", choices:["AWS uniquement","Le client uniquement","AWS et le client partagent la responsabilité","Un auditeur tiers certifié PCI"], answer:2, timeLimit:10 },
  { id:"s025", domain:"Security & Compliance", question:"Quel service AWS permet de créer des règles qui évaluent les ressources et envoient des alertes en cas de non-conformité ?", choices:["Amazon CloudWatch Alarms","AWS Config Rules","Amazon GuardDuty Findings","AWS Trusted Advisor Checks"], answer:1, timeLimit:10 },
  { id:"s026", domain:"Security & Compliance", question:"Quelle action est recommandée immédiatement si des clés d'accès AWS sont compromises ?", choices:["Changer le mot de passe root","Désactiver et supprimer les clés d'accès compromises, puis créer de nouvelles clés","Activer CloudTrail sur la région concernée","Contacter le support AWS niveau Basic"], answer:1, timeLimit:10 },
  { id:"s027", domain:"Security & Compliance", question:"AWS Artifact fournit :", choices:["Des outils d'automatisation d'infrastructure","L'accès aux rapports de conformité AWS (SOC, ISO, PCI DSS) et aux accords de confidentialité","Des templates CloudFormation pour les architectures sécurisées","Des règles WAF préconfigurées"], answer:1, timeLimit:10 },
  { id:"s028", domain:"Security & Compliance", question:"Quelle politique IAM est évaluée en DERNIER dans la chaîne d'évaluation des permissions ?", choices:["Politique de refus explicite","Politique d'autorisation explicite","Refus implicite par défaut","Politique de limite d'autorisations"], answer:2, timeLimit:10 },
  { id:"s029", domain:"Security & Compliance", question:"Quel service AWS assure la protection des applications web hébergées sur ALB contre les 10 principales vulnérabilités OWASP ?", choices:["AWS Shield Advanced","Amazon GuardDuty","AWS WAF","AWS Network Firewall"], answer:2, timeLimit:10 },
  { id:"s030", domain:"Security & Compliance", question:"Quel est le rôle de AWS Organizations dans la sécurité multi-comptes ?", choices:["Gérer les certificats SSL pour plusieurs comptes","Appliquer des Service Control Policies pour limiter les actions autorisées dans les comptes membres","Centraliser les logs CloudTrail de tous les comptes","Partager des AMI entre comptes"], answer:1, timeLimit:10 },
  { id:"s031", domain:"Security & Compliance", question:"Quel type de chiffrement S3 utilise des clés gérées par AWS sans frais supplémentaires ?", choices:["SSE-C (clés fournies par le client)","SSE-KMS (AWS KMS)","SSE-S3 (clés gérées par S3)","CSE (chiffrement côté client)"], answer:2, timeLimit:10 },
  { id:"s032", domain:"Security & Compliance", question:"Quelle est la différence entre un rôle IAM et un utilisateur IAM ?", choices:["Un rôle a un mot de passe permanent ; un utilisateur non","Un rôle fournit des credentials temporaires assumables par des entités ; un utilisateur a des credentials permanents","Un utilisateur peut avoir plusieurs rôles simultanément ; un rôle non","Les rôles sont uniquement pour les services AWS ; les utilisateurs uniquement pour les humains"], answer:1, timeLimit:10 },
  { id:"s033", domain:"Security & Compliance", question:"Quel service AWS permet de se connecter à des instances EC2 dans un sous-réseau privé sans clé SSH ni bastion host ?", choices:["AWS Direct Connect","Amazon VPC Peering","AWS Systems Manager Session Manager","AWS VPN"], answer:2, timeLimit:10 },
  { id:"s034", domain:"Security & Compliance", question:"Selon AWS, quelle est la bonne pratique pour les tâches quotidiennes d'administration ?", choices:["Utiliser le compte root avec MFA activé","Créer des utilisateurs IAM avec les permissions nécessaires et utiliser ces comptes","Partager les credentials root entre administrateurs","Utiliser des clés d'accès root pour l'automatisation"], answer:1, timeLimit:10 },
  { id:"s035", domain:"Security & Compliance", question:"Quel framework de conformité AWS couvre la protection des données de santé aux États-Unis (HIPAA) ?", choices:["AWS est automatiquement conforme HIPAA","AWS propose des services HIPAA Eligible et signe des BAA avec les clients","Seuls les services GovCloud sont HIPAA Eligible","HIPAA n'est pas applicable dans le cloud"], answer:1, timeLimit:10 },
  { id:"s036", domain:"Security & Compliance", question:"Quelle fonctionnalité Amazon S3 empêche la suppression ou l'écrasement d'objets pendant une période définie (conformité WORM) ?", choices:["S3 Versioning","S3 Replication","S3 Object Lock","S3 Lifecycle Policy"], answer:2, timeLimit:10 },
  { id:"s037", domain:"Security & Compliance", question:"Quel service AWS surveille en continu et classe automatiquement les données sensibles dans S3 en utilisant le machine learning ?", choices:["Amazon Inspector","Amazon GuardDuty","Amazon Macie","AWS Config"], answer:2, timeLimit:10 },
  { id:"s038", domain:"Security & Compliance", question:"Qu'est-ce que le principe de 'défense en profondeur' dans AWS ?", choices:["Utiliser un seul service de sécurité très puissant","Appliquer plusieurs couches de contrôles de sécurité indépendants","Chiffrer toutes les données en transit uniquement","Utiliser AWS Shield pour toutes les ressources"], answer:1, timeLimit:10 },
  { id:"s039", domain:"Security & Compliance", question:"Quel service AWS peut déclencher des actions automatiques en réponse aux findings de sécurité (ex: isoler une instance compromise) ?", choices:["AWS CloudTrail","AWS Config","Amazon EventBridge avec AWS Lambda","Amazon CloudWatch Logs"], answer:2, timeLimit:10 },
  { id:"s040", domain:"Security & Compliance", question:"Quelle affirmation sur AWS IAM Identity Center (SSO) est correcte ?", choices:["Il remplace AWS IAM pour toutes les authentifications","Il permet de gérer l'accès centralisé à plusieurs comptes AWS et applications avec une seule connexion","Il est uniquement disponible avec le plan Enterprise Support","Il stocke les mots de passe des utilisateurs dans DynamoDB"], answer:1, timeLimit:10 },
  { id:"s041", domain:"Security & Compliance", question:"AWS CloudHSM est utilisé pour :", choices:["Surveiller les activités suspectes sur les comptes AWS","Stocker et gérer des clés cryptographiques sur du matériel dédié certifié FIPS 140-2","Générer des rapports de conformité automatiquement","Analyser les logs de sécurité avec le machine learning"], answer:1, timeLimit:10 },
  { id:"s042", domain:"Security & Compliance", question:"Quel service AWS permet de définir et d'appliquer des politiques de sécurité réseau centralisées à travers plusieurs VPC et comptes AWS ?", choices:["Amazon GuardDuty","AWS Network Firewall","AWS Firewall Manager","AWS Config"], answer:2, timeLimit:10 },
  { id:"s043", domain:"Security & Compliance", question:"Lors de l'évaluation d'une politique IAM, si aucune Allow explicite n'est trouvée, quelle est la décision par défaut ?", choices:["Allow","Deny","Neutral","Depend on the resource"], answer:1, timeLimit:10 },
  { id:"s044", domain:"Security & Compliance", question:"Quel service AWS vous alerte si votre compte root n'a pas de MFA activé ?", choices:["Amazon GuardDuty","Amazon Inspector","AWS Trusted Advisor","AWS Config"], answer:2, timeLimit:10 },
  { id:"s045", domain:"Security & Compliance", question:"Dans AWS, la 'séparation des tâches' (Separation of Duties) est implémentée via :", choices:["Plusieurs régions AWS","Des utilisateurs IAM distincts avec des permissions limitées à leurs responsabilités","AWS Organizations avec plusieurs comptes","Des sous-réseaux privés et publics"], answer:1, timeLimit:10 },
  { id:"s046", domain:"Security & Compliance", question:"Quel standard de sécurité est utilisé pour valider les modules cryptographiques dans AWS CloudHSM ?", choices:["ISO 27001","SOC 2 Type II","FIPS 140-2 Level 3","PCI DSS Level 1"], answer:2, timeLimit:10 },
  { id:"s047", domain:"Security & Compliance", question:"Quel service AWS permet d'analyser les autorisations IAM non utilisées et de recommander des politiques de moindre privilège ?", choices:["AWS Trusted Advisor","IAM Access Analyzer","Amazon GuardDuty","AWS Security Hub"], answer:1, timeLimit:10 },
  { id:"s048", domain:"Security & Compliance", question:"Quelle est la meilleure façon de sécuriser les données en transit entre une application web et les utilisateurs ?", choices:["Utiliser HTTP avec authentification basique","Activer HTTPS avec un certificat SSL/TLS via AWS Certificate Manager","Utiliser des connexions VPN pour tous les utilisateurs","Chiffrer les données avec AWS KMS avant transmission"], answer:1, timeLimit:10 },
  { id:"s049", domain:"Security & Compliance", question:"Quel service AWS détecte si des ressources EC2 ou S3 sont publiquement accessibles de manière non intentionnelle ?", choices:["Amazon GuardDuty","IAM Access Analyzer","AWS Config","Amazon Macie"], answer:1, timeLimit:10 },
  { id:"s050", domain:"Security & Compliance", question:"Quelle affirmation sur les Security Groups EC2 est correcte ?", choices:["Ils sont stateless et nécessitent des règles entrantes et sortantes explicites","Ils sont stateful ; si le trafic entrant est autorisé, le trafic de retour est automatiquement autorisé","Ils s'appliquent au niveau du sous-réseau","Ils bloquent tout le trafic par défaut, y compris le trafic interne au VPC"], answer:1, timeLimit:10 },
  { id:"s051", domain:"Security & Compliance", question:"Quel service AWS permet d'auditer les accès inter-comptes et de détecter les ressources partagées avec des entités externes ?", choices:["AWS CloudTrail","IAM Access Analyzer","Amazon GuardDuty","AWS Config"], answer:1, timeLimit:10 },
  { id:"s052", domain:"Security & Compliance", question:"Dans AWS, qu'est-ce qu'une politique de contrôle de service (SCP) ?", choices:["Une politique attachée à un utilisateur IAM","Une règle AWS Config pour la conformité","Une politique appliquée via AWS Organizations pour limiter les permissions dans les comptes membres","Une règle de pare-feu dans un Security Group"], answer:2, timeLimit:10 },
  { id:"s053", domain:"Security & Compliance", question:"Quel service AWS envoie des notifications en temps réel sur les changements de configuration des ressources AWS ?", choices:["Amazon CloudWatch","AWS CloudTrail","AWS Config avec Amazon SNS","Amazon EventBridge"], answer:2, timeLimit:10 },
  { id:"s054", domain:"Security & Compliance", question:"Pour une application qui traite des cartes de crédit, quelle certification de conformité AWS est la plus pertinente ?", choices:["HIPAA","ISO 27001","PCI DSS","SOC 2"], answer:2, timeLimit:10 },
  { id:"s055", domain:"Security & Compliance", question:"Quel service AWS offre une protection DDoS avancée avec accès à l'équipe DRT (DDoS Response Team) d'AWS ?", choices:["AWS Shield Standard","AWS WAF","AWS Shield Advanced","AWS Network Firewall"], answer:2, timeLimit:10 },
  { id:"s056", domain:"Security & Compliance", question:"Quelle pratique améliore la sécurité lors de l'utilisation d'AWS CLI ?", choices:["Stocker les clés d'accès directement dans les scripts shell","Utiliser des rôles IAM ou des profils d'instance plutôt que des clés d'accès statiques","Utiliser les credentials root pour l'AWS CLI","Désactiver MFA pour faciliter l'automatisation"], answer:1, timeLimit:10 },
  { id:"s057", domain:"Security & Compliance", question:"Quel service AWS détecte les instances EC2 compromises qui communiquent avec des adresses IP malveillantes connues ?", choices:["Amazon Inspector","AWS Config","Amazon GuardDuty","AWS Trusted Advisor"], answer:2, timeLimit:10 },
  { id:"s058", domain:"Security & Compliance", question:"Comment AWS assure-t-il la conformité avec les réglementations locales sur la résidence des données ?", choices:["AWS déplace automatiquement les données vers la région la plus proche","Les données restent dans la région AWS choisie par le client sauf instruction contraire","AWS chiffre automatiquement toutes les données pour la conformité","AWS partage les données entre régions pour la redondance par défaut"], answer:1, timeLimit:10 },
  { id:"s059", domain:"Security & Compliance", question:"Quelle affirmation sur les Network ACLs (NACLs) dans Amazon VPC est correcte ?", choices:["Elles sont stateful comme les Security Groups","Elles s'appliquent au niveau de l'instance","Elles sont stateless et s'appliquent au niveau du sous-réseau avec des règles numérotées","Elles ne peuvent contenir que des règles d'autorisation"], answer:2, timeLimit:10 },
  { id:"s060", domain:"Security & Compliance", question:"Quel outil AWS permet à un client de télécharger les rapports d'audit et d'accréditation AWS (SOC 1, SOC 2, ISO 27001) ?", choices:["AWS Trusted Advisor","AWS Security Hub","AWS Artifact","AWS Config"], answer:2, timeLimit:10 },
  { id:"s061", domain:"Security & Compliance", question:"Quel service AWS peut automatiquement corriger les ressources non conformes détectées par AWS Config ?", choices:["Amazon GuardDuty","AWS Config avec des actions de remédiation automatiques (SSM Automation)","AWS CloudTrail","AWS Inspector"], answer:1, timeLimit:10 },
  { id:"s062", domain:"Security & Compliance", question:"Quelle est la meilleure façon de partager des credentials AWS entre les membres d'une équipe de développement ?", choices:["Créer un seul utilisateur IAM partagé","Utiliser des rôles IAM assumables par chaque membre de l'équipe","Partager les clés d'accès root par email sécurisé","Stocker les credentials dans un dépôt Git privé"], answer:1, timeLimit:10 },
  { id:"s063", domain:"Security & Compliance", question:"AWS Cognito est principalement utilisé pour :", choices:["Gérer les utilisateurs IAM internes","Ajouter l'authentification et l'autorisation aux applications web et mobiles pour les utilisateurs finaux","Chiffrer les données stockées dans RDS","Centraliser les logs de sécurité de plusieurs comptes"], answer:1, timeLimit:10 },
  { id:"s064", domain:"Security & Compliance", question:"Quel service AWS empêche les tentatives d'accès non autorisé via des règles gérées préconfigurées contre les menaces communes ?", choices:["AWS Shield Standard","AWS WAF Managed Rules","Amazon GuardDuty","AWS Config Managed Rules"], answer:1, timeLimit:10 },
  { id:"s065", domain:"Security & Compliance", question:"Quelle affirmation sur l'activation du MFA sur le compte root AWS est correcte ?", choices:["C'est optionnel pour les petites entreprises","C'est recommandé uniquement si le compte a plus de 10 utilisateurs","C'est une bonne pratique AWS fondamentale pour tous les comptes","C'est obligatoire uniquement pour les comptes Enterprise Support"], answer:2, timeLimit:10 },
  { id:"s066", domain:"Security & Compliance", question:"Quel service AWS peut ingérer des événements de sécurité et automatiquement orchestrer des réponses aux incidents ?", choices:["Amazon GuardDuty","AWS Security Hub","Amazon Detective","AWS Config"], answer:1, timeLimit:10 },
  { id:"s067", domain:"Security & Compliance", question:"Amazon Detective est utilisé pour :", choices:["Détecter les malwares sur les instances EC2","Analyser, investiguer et identifier rapidement la cause racine des findings de sécurité","Appliquer des politiques de conformité automatiquement","Surveiller les coûts liés aux incidents de sécurité"], answer:1, timeLimit:10 },
  { id:"s068", domain:"Security & Compliance", question:"Quel service AWS permet de chiffrer les paramètres de configuration sensibles utilisés par les applications (ex: chaînes de connexion) ?", choices:["AWS KMS uniquement","AWS Systems Manager Parameter Store avec chiffrement SSM","AWS Config","Amazon CloudWatch"], answer:1, timeLimit:10 },
  { id:"s069", domain:"Security & Compliance", question:"Quel est l'avantage d'utiliser des rôles IAM plutôt que des utilisateurs IAM pour les applications EC2 ?", choices:["Les rôles ont des permissions permanentes plus puissantes","Les rôles fournissent des credentials temporaires qui se renouvellent automatiquement, éliminant le besoin de gérer des clés statiques","Les rôles peuvent accéder à plus de services AWS que les utilisateurs","Les rôles ne nécessitent pas de politique IAM attachée"], answer:1, timeLimit:10 },
  { id:"s070", domain:"Security & Compliance", question:"Quelle affirmation sur Amazon VPC est correcte concernant l'isolation réseau ?", choices:["Tous les VPC d'un compte partagent le même espace d'adressage","Un VPC est logiquement isolé des autres réseaux AWS par défaut","Les VPC sont automatiquement connectés entre eux dans la même région","Amazon VPC partage le réseau avec d'autres clients AWS"], answer:1, timeLimit:10 },
  { id:"s071", domain:"Security & Compliance", question:"Quel service AWS permet de tester la résistance de vos applications aux pannes en injectant des défaillances de manière contrôlée ?", choices:["AWS Fault Injection Simulator (FIS)","AWS Config","Amazon Inspector","AWS CloudFormation"], answer:0, timeLimit:10 },
  { id:"s072", domain:"Security & Compliance", question:"Pour stocker des secrets d'application dans AWS avec rotation automatique, quel service est le plus adapté ?", choices:["AWS Systems Manager Parameter Store (Standard)","AWS Secrets Manager","AWS KMS","Amazon S3 avec chiffrement SSE"], answer:1, timeLimit:10 },
  { id:"s073", domain:"Security & Compliance", question:"Quel mécanisme IAM permet à un compte AWS de déléguer l'accès à ses ressources à un autre compte AWS ?", choices:["Politiques basées sur les groupes","Rôles IAM avec relations de confiance inter-comptes","Partage de clés d'accès entre comptes","AWS Organizations uniquement"], answer:1, timeLimit:10 },
  { id:"s074", domain:"Security & Compliance", question:"Quelle norme de sécurité AWS certifie la protection des données médicales et de santé (USA) ?", choices:["SOC 2","GDPR","HIPAA","ISO 27001"], answer:2, timeLimit:10 },
  { id:"s075", domain:"Security & Compliance", question:"Quelle action est automatiquement effectuée par AWS en cas de détection d'une utilisation anormale des clés d'accès ?", choices:["Désactivation automatique du compte","Alerte via Amazon GuardDuty Findings","Blocage immédiat de l'accès Internet","Notification par SMS au propriétaire"], answer:1, timeLimit:10 },
  // ── Cloud Technology & Services ──────────────────────────────────────────
  { id:"t001", domain:"Cloud Technology", question:"Quelle famille d'instances EC2 est optimisée pour les charges de travail à forte consommation de mémoire comme les bases de données in-memory ?", choices:["Famille C (compute optimized)","Famille R et X (memory optimized)","Famille I (storage optimized)","Famille T (burstable)"], answer:1, timeLimit:10 },
  { id:"t002", domain:"Cloud Technology", question:"Quel service AWS permet d'exécuter du code en réponse à des événements sans provisionner ni gérer de serveurs ?", choices:["Amazon EC2 Auto Scaling","AWS Elastic Beanstalk","AWS Lambda","Amazon ECS avec EC2"], answer:2, timeLimit:10 },
  { id:"t003", domain:"Cloud Technology", question:"Quelle classe de stockage S3 est la plus économique pour des données rarement accédées mais nécessitant un accès immédiat en quelques millisecondes ?", choices:["S3 Standard","S3 Standard-IA (Infrequent Access)","S3 Glacier Instant Retrieval","S3 One Zone-IA"], answer:1, timeLimit:10 },
  { id:"t004", domain:"Cloud Technology", question:"Quel service AWS est un registre de conteneurs Docker entièrement managé ?", choices:["Amazon ECS","Amazon EKS","Amazon ECR (Elastic Container Registry)","AWS Fargate"], answer:2, timeLimit:10 },
  { id:"t005", domain:"Cloud Technology", question:"Quelle fonctionnalité EC2 permet d'exécuter un script lors du premier démarrage d'une instance ?", choices:["AMI personnalisée","EC2 User Data","EC2 Instance Profile","EC2 Placement Group"], answer:1, timeLimit:10 },
  { id:"t006", domain:"Cloud Technology", question:"Quelle est la limite de taille maximale d'un objet stocké dans Amazon S3 ?", choices:["5 GB","10 GB","5 TB","Illimitée"], answer:2, timeLimit:10 },
  { id:"t007", domain:"Cloud Technology", question:"Quel service AWS est une base de données clé-valeur NoSQL entièrement managée avec des performances en millisecondes à n'importe quelle échelle ?", choices:["Amazon RDS","Amazon Aurora","Amazon DynamoDB","Amazon ElastiCache"], answer:2, timeLimit:10 },
  { id:"t008", domain:"Cloud Technology", question:"Amazon Aurora est compatible avec quels moteurs de bases de données relationnelles ?", choices:["Oracle et SQL Server","MySQL et PostgreSQL","MongoDB et Cassandra","Redis et Memcached"], answer:1, timeLimit:10 },
  { id:"t009", domain:"Cloud Technology", question:"Quel service AWS permet de créer et gérer des API RESTful ou WebSocket sans gérer de serveurs d'API ?", choices:["Amazon CloudFront","Elastic Load Balancing","Amazon API Gateway","AWS AppSync"], answer:2, timeLimit:10 },
  { id:"t010", domain:"Cloud Technology", question:"Quelle est la différence entre EBS et EFS dans AWS ?", choices:["EBS est un système de fichiers partagé ; EFS est un stockage de blocs pour une instance","EBS est un stockage de blocs attachable à une instance à la fois ; EFS est un système de fichiers NFS partagé entre plusieurs instances","EBS est gratuit ; EFS est payant","EFS est disponible uniquement sous Windows ; EBS sous Linux"], answer:1, timeLimit:10 },
  { id:"t011", domain:"Cloud Technology", question:"Quel service AWS est un entrepôt de données (data warehouse) optimisé pour les requêtes analytiques sur de grands volumes de données ?", choices:["Amazon RDS","Amazon DynamoDB","Amazon Redshift","Amazon Aurora"], answer:2, timeLimit:10 },
  { id:"t012", domain:"Cloud Technology", question:"Quel service AWS achemine le trafic DNS de manière intelligente selon la latence, la géolocalisation ou le poids ?", choices:["AWS CloudFront","Amazon Route 53","Elastic Load Balancing","AWS Global Accelerator"], answer:1, timeLimit:10 },
  { id:"t013", domain:"Cloud Technology", question:"Qu'est-ce qu'un groupe Auto Scaling dans AWS ?", choices:["Un groupe d'utilisateurs IAM avec permissions similaires","Un ensemble d'instances EC2 qui s'adapte automatiquement à la demande selon des politiques définies","Un groupe de sécurité avec des règles auto-mises à jour","Un cluster RDS qui scale automatiquement"], answer:1, timeLimit:10 },
  { id:"t014", domain:"Cloud Technology", question:"Quel type d'Elastic Load Balancer opère au niveau de la couche 7 (HTTP/HTTPS) et prend en charge le routage basé sur le contenu ?", choices:["Classic Load Balancer","Network Load Balancer","Application Load Balancer","Gateway Load Balancer"], answer:2, timeLimit:10 },
  { id:"t015", domain:"Cloud Technology", question:"Quel service AWS permet d'analyser les logs et métriques de vos applications avec des tableaux de bord en temps réel ?", choices:["AWS CloudTrail","AWS Config","Amazon CloudWatch","AWS X-Ray"], answer:2, timeLimit:10 },
  { id:"t016", domain:"Cloud Technology", question:"Amazon CloudFront améliore les performances en :", choices:["Compressant toutes les images avant envoi","Mettant en cache le contenu dans des emplacements Edge proches des utilisateurs","Réduisant automatiquement la taille des instances EC2","Priorisant le trafic HTTP sur HTTPS"], answer:1, timeLimit:10 },
  { id:"t017", domain:"Cloud Technology", question:"Quel service AWS est utilisé pour déployer et mettre à l'échelle automatiquement des applications web sans gérer l'infrastructure sous-jacente ?", choices:["AWS CloudFormation","AWS Elastic Beanstalk","Amazon ECS","AWS Lambda"], answer:1, timeLimit:10 },
  { id:"t018", domain:"Cloud Technology", question:"Quel service AWS synchronise les données entre différents datacenters et le cloud AWS via une connexion dédiée ?", choices:["AWS VPN","AWS Direct Connect","AWS Transfer Family","AWS DataSync"], answer:3, timeLimit:10 },
  { id:"t019", domain:"Cloud Technology", question:"Quel service AWS permet de migrer des bases de données vers AWS avec un minimum d'interruption de service ?", choices:["AWS Schema Conversion Tool","AWS Database Migration Service (DMS)","AWS DataSync","Amazon RDS Restore"], answer:1, timeLimit:10 },
  { id:"t020", domain:"Cloud Technology", question:"Quelle fonctionnalité d'Amazon S3 réduit automatiquement les coûts de stockage en déplaçant les objets vers des classes de stockage moins chères au fil du temps ?", choices:["S3 Versioning","S3 Replication","S3 Lifecycle Policy","S3 Intelligent-Tiering"], answer:2, timeLimit:10 },
  { id:"t021", domain:"Cloud Technology", question:"Quel service AWS permet de créer des workflows visuels pour orchestrer des fonctions Lambda et des services AWS en séquence ou en parallèle ?", choices:["Amazon SQS","Amazon SNS","AWS Step Functions","Amazon EventBridge"], answer:2, timeLimit:10 },
  { id:"t022", domain:"Cloud Technology", question:"Qu'est-ce que le VPC Peering dans AWS ?", choices:["Une connexion VPN entre deux VPC","Une connexion réseau privée entre deux VPC permettant l'échange de trafic comme s'ils étaient dans le même réseau","Un tunnel chiffré entre AWS et on-premises","Un service de mise en cache entre VPC"], answer:1, timeLimit:10 },
  { id:"t023", domain:"Cloud Technology", question:"Quel service AWS permet de traiter des flux de données en temps réel avec une latence très faible ?", choices:["Amazon SQS","Amazon Kinesis Data Streams","Amazon S3","AWS Batch"], answer:1, timeLimit:10 },
  { id:"t024", domain:"Cloud Technology", question:"Quel service AWS est un service ETL (Extract, Transform, Load) entièrement managé pour la préparation de données analytiques ?", choices:["Amazon Athena","Amazon Redshift","AWS Glue","Amazon EMR"], answer:2, timeLimit:10 },
  { id:"t025", domain:"Cloud Technology", question:"Amazon EMR est utilisé pour :", choices:["Exécuter des containers Docker","Traiter de grandes quantités de données avec Hadoop, Spark et d'autres frameworks Big Data","Migrer des bases de données vers AWS","Gérer des clusters Kubernetes"], answer:1, timeLimit:10 },
  { id:"t026", domain:"Cloud Technology", question:"Quel service AWS fournit une connexion réseau dédiée et privée entre le datacenter on-premises et AWS, contournant l'Internet public ?", choices:["AWS Site-to-Site VPN","AWS Direct Connect","Amazon VPC Peering","AWS Transit Gateway"], answer:1, timeLimit:10 },
  { id:"t027", domain:"Cloud Technology", question:"Quel service AWS permet de connecter plusieurs VPC et réseaux on-premises via un hub central ?", choices:["VPC Peering","AWS Direct Connect","AWS Transit Gateway","Amazon Route 53"], answer:2, timeLimit:10 },
  { id:"t028", domain:"Cloud Technology", question:"Quelle est la fonctionnalité principale d'Amazon ElastiCache ?", choices:["Stocker des fichiers de grande taille","Améliorer les performances des bases de données en mettant en cache les données fréquemment accédées en mémoire","Créer des sauvegardes automatiques de bases de données RDS","Analyser les logs d'applications en temps réel"], answer:1, timeLimit:10 },
  { id:"t029", domain:"Cloud Technology", question:"Quel service AWS est un service de messagerie entièrement managé qui garantit la délivrance des messages même si le consommateur est temporairement indisponible ?", choices:["Amazon SNS","Amazon SQS","Amazon MQ","Amazon Kinesis"], answer:1, timeLimit:10 },
  { id:"t030", domain:"Cloud Technology", question:"AWS Snowball est utilisé pour :", choices:["Sauvegarder des données S3 vers un datacenter on-premises","Transférer physiquement de grandes quantités de données vers ou depuis AWS en utilisant un dispositif physique","Chiffrer les données dans transit entre régions AWS","Connecter des VPC via un réseau dédié"], answer:1, timeLimit:10 },
  { id:"t031", domain:"Cloud Technology", question:"Quel service AWS permet de surveiller et tracer les requêtes à travers une architecture de microservices ?", choices:["Amazon CloudWatch","AWS CloudTrail","AWS X-Ray","Amazon Inspector"], answer:2, timeLimit:10 },
  { id:"t032", domain:"Cloud Technology", question:"Quelle classe de stockage S3 est recommandée pour des données accédées moins d'une fois par mois et pouvant être reconstituées si perdues ?", choices:["S3 Standard-IA","S3 Glacier Flexible Retrieval","S3 One Zone-IA","S3 Glacier Instant Retrieval"], answer:2, timeLimit:10 },
  { id:"t033", domain:"Cloud Technology", question:"Quel service AWS permet d'exécuter des requêtes SQL directement sur des données dans S3 sans infrastructure à gérer ?", choices:["Amazon Redshift","Amazon RDS","Amazon Athena","AWS Glue"], answer:2, timeLimit:10 },
  { id:"t034", domain:"Cloud Technology", question:"Qu'est-ce qu'un Internet Gateway dans Amazon VPC ?", choices:["Un pare-feu entre Internet et le VPC","Un composant qui permet aux instances d'un sous-réseau public de communiquer avec Internet","Un service DNS pour résoudre les noms de domaine","Un tunnel VPN vers l'on-premises"], answer:1, timeLimit:10 },
  { id:"t035", domain:"Cloud Technology", question:"Quel service AWS permet à des applications on-premises d'accéder à des fichiers dans S3 comme si c'était un partage de fichiers local ?", choices:["AWS DataSync","AWS Storage Gateway","AWS Direct Connect","Amazon S3 Transfer Acceleration"], answer:1, timeLimit:10 },
  { id:"t036", domain:"Cloud Technology", question:"Quel service AWS est un CDN (Content Delivery Network) qui distribue le contenu depuis des Edge Locations proches des utilisateurs ?", choices:["AWS Global Accelerator","Amazon Route 53","Amazon CloudFront","AWS Direct Connect"], answer:2, timeLimit:10 },
  { id:"t037", domain:"Cloud Technology", question:"Quel service AWS permet de créer des machines virtuelles Windows et Linux sans gérer l'hyperviseur ?", choices:["AWS Lambda","Amazon LightSail","Amazon EC2","Amazon ECS"], answer:2, timeLimit:10 },
  { id:"t038", domain:"Cloud Technology", question:"Quelle option EC2 permet de définir une capacité minimale, souhaitée et maximale d'instances ?", choices:["Instance réservée","Groupe Auto Scaling","Spot Fleet","Dedicated Host"], answer:1, timeLimit:10 },
  { id:"t039", domain:"Cloud Technology", question:"Quel service AWS permet d'héberger facilement des applications web pour les développeurs sans expertise en infrastructure (PaaS) ?", choices:["Amazon EC2","AWS Elastic Beanstalk","AWS CloudFormation","Amazon ECS"], answer:1, timeLimit:10 },
  { id:"t040", domain:"Cloud Technology", question:"Amazon Lightsail est décrit comme :", choices:["Un service pour les applications haute disponibilité critiques","Un service cloud simplifié idéal pour les petits projets, blogs et sites web simples","Un service de calcul haute performance pour le HPC","Un service de base de données uniquement pour les startups"], answer:1, timeLimit:10 },
  { id:"t041", domain:"Cloud Technology", question:"Quel service AWS Serverless permet de créer des APIs GraphQL managées ?", choices:["Amazon API Gateway","AWS AppSync","AWS Lambda","Amazon Cognito"], answer:1, timeLimit:10 },
  { id:"t042", domain:"Cloud Technology", question:"Quel service AWS est un service de notification push entièrement managé qui envoie des messages à des millions d'abonnés simultanément ?", choices:["Amazon SQS","Amazon SES","Amazon SNS","AWS EventBridge"], answer:2, timeLimit:10 },
  { id:"t043", domain:"Cloud Technology", question:"Quelle fonctionnalité Amazon Route 53 permet de diriger le trafic vers différentes ressources en fonction de leur santé (health checks) ?", choices:["Routage par latence","Routage géographique","Routage par failover","Routage pondéré"], answer:2, timeLimit:10 },
  { id:"t044", domain:"Cloud Technology", question:"Quel service AWS est spécialement conçu pour les développeurs qui veulent déployer du code directement depuis leur IDE ou ligne de commande ?", choices:["AWS CloudFormation","AWS CodeDeploy","AWS Elastic Beanstalk","Amazon ECS"], answer:2, timeLimit:10 },
  { id:"t045", domain:"Cloud Technology", question:"Quelle est la différence principale entre Amazon SQS Standard et SQS FIFO ?", choices:["SQS FIFO est gratuit ; Standard est payant","SQS Standard offre une délivrance best-effort sans ordre garanti ; SQS FIFO garantit l'ordre des messages et la délivrance unique","SQS Standard supporte plus de messages que FIFO","SQS FIFO est plus rapide que Standard"], answer:1, timeLimit:10 },
  { id:"t046", domain:"Cloud Technology", question:"Quel service AWS permet d'identifier visuellement les relations et dépendances entre vos ressources AWS ?", choices:["AWS Config","AWS CloudFormation","Amazon CloudWatch","AWS Systems Manager"], answer:0, timeLimit:10 },
  { id:"t047", domain:"Cloud Technology", question:"Quel service AWS est un service de machine learning managé permettant d'ajouter des fonctionnalités IA (reconnaissance d'images, NLP) sans expertise ML ?", choices:["Amazon SageMaker","Amazon Rekognition / Comprehend / Polly","AWS DeepLens","Amazon Forecast"], answer:1, timeLimit:10 },
  { id:"t048", domain:"Cloud Technology", question:"Amazon Rekognition est utilisé pour :", choices:["Prédire les coûts futurs AWS","Analyser des images et vidéos pour détecter des objets, visages, textes et scènes","Convertir du texte en parole","Générer des recommandations de produits"], answer:1, timeLimit:10 },
  { id:"t049", domain:"Cloud Technology", question:"Quel service AWS gère automatiquement la mise à l'échelle des tables DynamoDB en fonction du trafic ?", choices:["DynamoDB On-Demand Mode","DynamoDB Provisioned Mode avec Auto Scaling","DynamoDB Accelerator (DAX)","DynamoDB Streams"], answer:0, timeLimit:10 },
  { id:"t050", domain:"Cloud Technology", question:"Qu'est-ce que DynamoDB Accelerator (DAX) ?", choices:["Un service de réplication multi-régions","Un cache en mémoire pour DynamoDB qui réduit la latence de microsecondes","Un outil de migration de bases de données","Un service de sauvegarde automatique pour DynamoDB"], answer:1, timeLimit:10 },
  { id:"t051", domain:"Cloud Technology", question:"Quel service AWS permet d'orchestrer et d'automatiser des tâches opérationnelles sur des instances EC2 (patching, run commands) ?", choices:["AWS CloudFormation","AWS OpsWorks","AWS Systems Manager","AWS Config"], answer:2, timeLimit:10 },
  { id:"t052", domain:"Cloud Technology", question:"Quel service AWS permet de créer des tableaux de bord et des visualisations de données depuis diverses sources comme S3, RDS, Redshift ?", choices:["Amazon CloudWatch Dashboards","Amazon QuickSight","AWS Grafana Managed","Amazon Athena"], answer:1, timeLimit:10 },
  { id:"t053", domain:"Cloud Technology", question:"Quel service AWS est utilisé pour envoyer des emails transactionnels et marketing à grande échelle ?", choices:["Amazon SNS","Amazon SQS","Amazon SES (Simple Email Service)","AWS Pinpoint"], answer:2, timeLimit:10 },
  { id:"t054", domain:"Cloud Technology", question:"Quelle est la limite de durée d'exécution maximum d'une fonction AWS Lambda ?", choices:["5 minutes","15 minutes","1 heure","24 heures"], answer:1, timeLimit:10 },
  { id:"t055", domain:"Cloud Technology", question:"Quel service AWS permet de créer un réseau privé virtuel entre votre réseau on-premises et votre VPC AWS via Internet ?", choices:["AWS Direct Connect","AWS Site-to-Site VPN","AWS PrivateLink","VPC Peering"], answer:1, timeLimit:10 },
  { id:"t056", domain:"Cloud Technology", question:"Qu'est-ce qu'une AMI (Amazon Machine Image) ?", choices:["Un script de démarrage pour les instances EC2","Un template qui contient l'OS, les applications et la configuration pour lancer des instances EC2","Un snapshot de volume EBS","Un conteneur Docker préconfigurée"], answer:1, timeLimit:10 },
  { id:"t057", domain:"Cloud Technology", question:"Quel service AWS permet de transférer de très grandes quantités de données (des pétaoctets) vers AWS en utilisant plusieurs appareils physiques en parallèle ?", choices:["AWS Snowball","AWS Snowmobile","AWS DataSync","AWS Direct Connect"], answer:1, timeLimit:10 },
  { id:"t058", domain:"Cloud Technology", question:"Quelle fonctionnalité d'Amazon S3 stocke automatiquement des copies d'objets dans une autre région AWS pour la reprise après sinistre ?", choices:["S3 Versioning","S3 Cross-Region Replication (CRR)","S3 Transfer Acceleration","S3 Object Lock"], answer:1, timeLimit:10 },
  { id:"t059", domain:"Cloud Technology", question:"Quel service AWS est une solution serverless pour les bases de données relationnelles compatible MySQL/PostgreSQL avec facturation à la seconde ?", choices:["Amazon RDS","Amazon Aurora Serverless","Amazon DynamoDB","Amazon Redshift Serverless"], answer:1, timeLimit:10 },
  { id:"t060", domain:"Cloud Technology", question:"Quel Network Load Balancer (NLB) opère à :", choices:["Couche 7 (Application)","Couche 4 (Transport - TCP/UDP)","Couche 3 (Réseau - IP)","Couche 2 (Liaison de données)"], answer:1, timeLimit:10 },
  { id:"t061", domain:"Cloud Technology", question:"Quel service AWS permet de créer des pipelines CI/CD entièrement managés pour automatiser la compilation, les tests et le déploiement ?", choices:["AWS CloudFormation","AWS CodePipeline","AWS Elastic Beanstalk","AWS Systems Manager"], answer:1, timeLimit:10 },
  { id:"t062", domain:"Cloud Technology", question:"Amazon EKS est un service managé pour :", choices:["Exécuter des fonctions Lambda","Gérer des clusters Kubernetes","Déployer des containers sans serveur","Orchestrer des workflows de données"], answer:1, timeLimit:10 },
  { id:"t063", domain:"Cloud Technology", question:"Quel service AWS permet d'héberger des zones DNS privées résolvables uniquement au sein d'un VPC ?", choices:["Amazon Route 53 Public Hosted Zone","Amazon Route 53 Private Hosted Zone","AWS Direct Connect","Amazon CloudFront"], answer:1, timeLimit:10 },
  { id:"t064", domain:"Cloud Technology", question:"Qu'est-ce qu'un sous-réseau public dans Amazon VPC ?", choices:["Un sous-réseau avec une route vers un Internet Gateway","Un sous-réseau avec une route uniquement vers un NAT Gateway","Un sous-réseau accessible uniquement depuis le VPN AWS","Un sous-réseau partagé entre plusieurs VPC"], answer:0, timeLimit:10 },
  { id:"t065", domain:"Cloud Technology", question:"Qu'est-ce qu'un NAT Gateway dans Amazon VPC ?", choices:["Un composant pour exposer des instances à Internet","Un composant permettant aux instances dans un sous-réseau privé d'accéder à Internet sans être exposées","Une connexion privée entre VPC","Un équilibreur de charge pour les connexions sortantes"], answer:1, timeLimit:10 },
  { id:"t066", domain:"Cloud Technology", question:"Quel service AWS fournit une infrastructure de bureau virtuel (VDI) managée pour les utilisateurs à distance ?", choices:["Amazon AppStream 2.0","Amazon WorkSpaces","AWS Remote Desktop","Amazon Chime"], answer:1, timeLimit:10 },
  { id:"t067", domain:"Cloud Technology", question:"Quel service AWS permet de diffuser des applications de bureau Windows à des utilisateurs sans installer de logiciel localement ?", choices:["Amazon WorkSpaces","Amazon AppStream 2.0","AWS Virtual Desktop","Amazon WorkDocs"], answer:1, timeLimit:10 },
  { id:"t068", domain:"Cloud Technology", question:"Quel service AWS offre un stockage de fichiers partagé compatible NFS, scalable automatiquement, accessible depuis plusieurs instances EC2 simultanément ?", choices:["Amazon EBS","Amazon EFS","Amazon S3","AWS FSx"], answer:1, timeLimit:10 },
  { id:"t069", domain:"Cloud Technology", question:"AWS FSx for Windows File Server est utilisé pour :", choices:["Stocker des images Docker","Fournir un système de fichiers Windows managé (SMB) pour les applications Windows","Analyser des données avec Hadoop","Créer des sauvegardes automatiques S3"], answer:1, timeLimit:10 },
  { id:"t070", domain:"Cloud Technology", question:"Quel service AWS permet d'enregistrer, stocker et consulter les journaux (logs) de vos instances EC2 et fonctions Lambda ?", choices:["AWS CloudTrail","Amazon CloudWatch Logs","AWS Config","Amazon S3 avec chiffrement"], answer:1, timeLimit:10 },
  { id:"t071", domain:"Cloud Technology", question:"Quel service AWS permet de créer des sauvegardes automatiques centralisées pour plusieurs services AWS (EC2, RDS, EFS) depuis une console unique ?", choices:["Amazon S3 Lifecycle","AWS Backup","AWS CloudFormation","AWS Systems Manager"], answer:1, timeLimit:10 },
  { id:"t072", domain:"Cloud Technology", question:"Qu'est-ce qu'un Placement Group 'Cluster' dans EC2 ?", choices:["Regroupe les instances dans différentes AZ pour la résilience","Place les instances sur des serveurs physiques distincts pour réduire les risques de panne simultanée","Regroupe les instances sur un même rack avec réseau haute bande passante et faible latence","Distribue les instances dans plusieurs régions"], answer:2, timeLimit:10 },
  { id:"t073", domain:"Cloud Technology", question:"Quel service AWS permet de surveiller les coûts et d'envoyer des alertes lorsque les dépenses dépassent un seuil ?", choices:["AWS Cost Explorer","AWS Budgets","AWS Pricing Calculator","AWS Trusted Advisor"], answer:1, timeLimit:10 },
  { id:"t074", domain:"Cloud Technology", question:"AWS CodeDeploy est un service qui :", choices:["Compile le code source et exécute des tests unitaires","Déploie automatiquement des applications sur EC2, Lambda ou on-premises","Stocke du code source avec versioning","Crée des pipelines CI/CD visuels"], answer:1, timeLimit:10 },
  { id:"t075", domain:"Cloud Technology", question:"Quel service AWS est une solution d'observabilité qui corrèle automatiquement les métriques, logs et traces pour identifier les problèmes applicatifs ?", choices:["Amazon CloudWatch","AWS X-Ray","Amazon OpenSearch Service","AWS App Mesh"], answer:0, timeLimit:10 },
  { id:"t076", domain:"Cloud Technology", question:"Quel service AWS permet de publier et consommer des événements entre applications avec un bus d'événements sans serveur ?", choices:["Amazon SQS","Amazon SNS","Amazon EventBridge","AWS Step Functions"], answer:2, timeLimit:10 },
  { id:"t077", domain:"Cloud Technology", question:"Qu'est-ce que AWS PrivateLink ?", choices:["Un VPN entre deux VPC","Un service permettant d'accéder à des services AWS ou à des services tiers sans exposer le trafic à Internet public","Une connexion dédiée entre AWS et on-premises","Un service DNS privé pour les VPC"], answer:1, timeLimit:10 },
  { id:"t078", domain:"Cloud Technology", question:"Quel service AWS permet de diffuser du contenu multimédia (vidéo) à l'échelle mondiale avec faible latence ?", choices:["Amazon CloudFront","Amazon IVS (Interactive Video Service)","AWS Media Services","Amazon Kinesis Video Streams"], answer:1, timeLimit:10 },
  { id:"t079", domain:"Cloud Technology", question:"Quel service AWS permet d'analyser des données avec des notebooks Jupyter managés dans le cloud ?", choices:["Amazon SageMaker Studio","AWS Glue Studio","Amazon QuickSight","Amazon EMR Studio"], answer:0, timeLimit:10 },
  { id:"t080", domain:"Cloud Technology", question:"Quel service AWS Serverless exécute des tâches de calcul à grande échelle sans gérer de serveurs, idéal pour le batch processing ?", choices:["AWS Lambda","AWS Batch","Amazon ECS Fargate","AWS Glue"], answer:1, timeLimit:10 },
  { id:"t081", domain:"Cloud Technology", question:"Amazon OpenSearch Service (anciennement Elasticsearch) est utilisé pour :", choices:["Stocker des données structurées avec transactions ACID","Recherche en texte intégral, analyse de logs et tableaux de bord en temps réel","Gérer des clusters Kubernetes","Exécuter des requêtes SQL sur des données S3"], answer:1, timeLimit:10 },
  { id:"t082", domain:"Cloud Technology", question:"Quel service AWS permet de créer et gérer des ressources AWS en utilisant des langages de programmation familiers (Python, TypeScript, Java) ?", choices:["AWS CloudFormation","AWS CDK (Cloud Development Kit)","AWS SAM","AWS Terraform"], answer:1, timeLimit:10 },
  { id:"t083", domain:"Cloud Technology", question:"Quel service AWS permet de déployer des applications Lambda avec un modèle simplifié (SAM template) ?", choices:["AWS CDK","AWS CloudFormation","AWS SAM (Serverless Application Model)","AWS Elastic Beanstalk"], answer:2, timeLimit:10 },
  { id:"t084", domain:"Cloud Technology", question:"Qu'est-ce que Amazon Forecast ?", choices:["Un service météo pour optimiser la planification des datacenters","Un service ML managé qui génère des prévisions de séries temporelles précises","Un outil de prévision des coûts AWS","Un service pour prévoir la charge réseau"], answer:1, timeLimit:10 },
  { id:"t085", domain:"Cloud Technology", question:"Quel service AWS permet de convertir du texte en parole avec des voix naturelles dans de nombreuses langues ?", choices:["Amazon Transcribe","Amazon Translate","Amazon Polly","Amazon Lex"], answer:2, timeLimit:10 },
  { id:"t086", domain:"Cloud Technology", question:"Amazon Lex est utilisé pour :", choices:["Transcrire de l'audio en texte","Créer des chatbots et interfaces conversationnelles avec compréhension du langage naturel","Traduire du texte entre langues","Analyser le sentiment des commentaires clients"], answer:1, timeLimit:10 },
  { id:"t087", domain:"Cloud Technology", question:"Quel service AWS permet de transcrire automatiquement l'audio en texte ?", choices:["Amazon Polly","Amazon Translate","Amazon Transcribe","Amazon Comprehend"], answer:2, timeLimit:10 },
  { id:"t088", domain:"Cloud Technology", question:"Amazon Comprehend est utilisé pour :", choices:["Reconnaître des visages dans des images","Analyser du texte pour en extraire le sentiment, les entités, les sujets et la langue","Convertir la parole en texte","Créer des chatbots"], answer:1, timeLimit:10 },
  { id:"t089", domain:"Cloud Technology", question:"Quel service AWS Serverless est optimisé pour les architectures événementielles et peut déclencher Lambda, Step Functions ou SQS ?", choices:["Amazon SQS","Amazon SNS","Amazon EventBridge","AWS Kinesis"], answer:2, timeLimit:10 },
  { id:"t090", domain:"Cloud Technology", question:"Quel service AWS gère le cycle de vie complet des modèles ML (entraînement, déploiement, monitoring) ?", choices:["Amazon Rekognition","Amazon Comprehend","Amazon SageMaker","AWS DeepRacer"], answer:2, timeLimit:10 },
  { id:"t091", domain:"Cloud Technology", question:"Quel service AWS permet de configurer des règles de routage pour diriger le trafic vers différents backends selon le chemin URL (/api, /images) ?", choices:["Network Load Balancer","Classic Load Balancer","Application Load Balancer (ALB)","Amazon CloudFront"], answer:2, timeLimit:10 },
  { id:"t092", domain:"Cloud Technology", question:"Qu'est-ce que le 'burst balance' pour les instances EC2 de type T ?", choices:["Le nombre maximum d'instances auto-scalées","Des crédits CPU accumulés quand l'utilisation est basse, dépensés lors des pics de charge","La bande passante réseau supplémentaire disponible","Le stockage EBS temporaire disponible"], answer:1, timeLimit:10 },
  { id:"t093", domain:"Cloud Technology", question:"Quel service AWS permet de créer des tableaux de bord opérationnels pour visualiser les métriques de santé des applications en temps réel ?", choices:["Amazon QuickSight","Amazon CloudWatch Dashboards","AWS X-Ray","AWS Grafana Managed"], answer:1, timeLimit:10 },
  { id:"t094", domain:"Cloud Technology", question:"Quel service AWS est une solution de cache Redis ou Memcached entièrement managée ?", choices:["Amazon DynamoDB Accelerator","Amazon ElastiCache","Amazon MemoryDB","AWS Cache Service"], answer:1, timeLimit:10 },
  { id:"t095", domain:"Cloud Technology", question:"Quel service AWS offre une base de données Redis persistante entièrement compatible avec Redis, conçue pour la haute disponibilité ?", choices:["Amazon ElastiCache for Redis","Amazon MemoryDB for Redis","Amazon DynamoDB","Amazon Aurora"], answer:1, timeLimit:10 },
  { id:"t096", domain:"Cloud Technology", question:"Qu'est-ce que AWS CodeCommit ?", choices:["Un service de CI/CD","Un service de dépôt de code source Git entièrement managé","Un service de déploiement automatique","Un service de compilation de code"], answer:1, timeLimit:10 },
  { id:"t097", domain:"Cloud Technology", question:"Quel service AWS analyse en continu le comportement des utilisateurs et des applications pour détecter les anomalies de performance ?", choices:["Amazon GuardDuty","Amazon DevOps Guru","AWS X-Ray","Amazon Inspector"], answer:1, timeLimit:10 },
  { id:"t098", domain:"Cloud Technology", question:"Quel service AWS vous permet d'exécuter des tâches Kubernetes serverless sans gérer les nœuds du cluster ?", choices:["Amazon ECS","Amazon EKS avec EC2 nodes","Amazon EKS avec Fargate","AWS Batch"], answer:2, timeLimit:10 },
  { id:"t099", domain:"Cloud Technology", question:"Quel service AWS permet de créer un réseau Content Delivery pour des API REST avec mise en cache des réponses ?", choices:["Amazon CloudFront","Amazon API Gateway avec cache","AWS Global Accelerator","Elastic Load Balancer"], answer:1, timeLimit:10 },
  { id:"t100", domain:"Cloud Technology", question:"Quel service AWS Serverless permet d'envoyer des requêtes SQL sur des données S3 sans serveur ni cluster à gérer, avec paiement à la requête ?", choices:["Amazon Redshift Serverless","Amazon Athena","AWS Glue","Amazon EMR Serverless"], answer:1, timeLimit:10 },
  { id:"t101", domain:"Cloud Technology", question:"Quel service AWS permet d'accélérer le transfert de fichiers volumineux vers S3 en utilisant les Edge Locations CloudFront ?", choices:["S3 Cross-Region Replication","S3 Transfer Acceleration","AWS DataSync","AWS Snowball"], answer:1, timeLimit:10 },
  { id:"t102", domain:"Cloud Technology", question:"Quel service AWS est un service de base de données graphe managé (ex: réseaux sociaux, fraud detection) ?", choices:["Amazon DynamoDB","Amazon Neptune","Amazon DocumentDB","Amazon Keyspaces"], answer:1, timeLimit:10 },
  { id:"t103", domain:"Cloud Technology", question:"Amazon DocumentDB est compatible avec :", choices:["MySQL","PostgreSQL","MongoDB","Cassandra"], answer:2, timeLimit:10 },
  { id:"t104", domain:"Cloud Technology", question:"Quel service AWS est compatible avec Apache Cassandra pour les applications nécessitant une base de données NoSQL à large colonnes ?", choices:["Amazon DynamoDB","Amazon Neptune","Amazon Keyspaces (for Apache Cassandra)","Amazon DocumentDB"], answer:2, timeLimit:10 },
  { id:"t105", domain:"Cloud Technology", question:"Quel service AWS Serverless permet de créer des workflows d'approbation humaine avec email et URL de décision ?", choices:["Amazon SQS","Amazon SNS","AWS Step Functions avec Human Task","Amazon EventBridge"], answer:2, timeLimit:10 },
  { id:"t106", domain:"Cloud Technology", question:"Quel service AWS offre un stockage objet compatible S3 à déployer dans un datacenter on-premises ?", choices:["AWS Outposts","Amazon S3 on Outposts","AWS Storage Gateway","Amazon EFS"], answer:1, timeLimit:10 },
  { id:"t107", domain:"Cloud Technology", question:"Quel service AWS est une solution de réplication de données en temps réel entre différentes sources et destinations (CDC - Change Data Capture) ?", choices:["AWS DataSync","AWS Database Migration Service (DMS)","AWS Glue","Amazon Kinesis Data Streams"], answer:1, timeLimit:10 },
  { id:"t108", domain:"Cloud Technology", question:"Quel service AWS permet de gérer les correctifs (patches) automatiquement pour les instances EC2 et on-premises ?", choices:["AWS Config","AWS Systems Manager Patch Manager","Amazon Inspector","AWS CloudFormation"], answer:1, timeLimit:10 },
  { id:"t109", domain:"Cloud Technology", question:"Quel service AWS est une plateforme d'observabilité qui regroupe logs, métriques et traces en une seule vue ?", choices:["AWS X-Ray","Amazon CloudWatch","AWS CloudTrail","Amazon OpenSearch Service"], answer:1, timeLimit:10 },
  { id:"t110", domain:"Cloud Technology", question:"Qu'est-ce qu'un VPC Endpoint dans AWS ?", choices:["Une adresse IP publique pour un sous-réseau privé","Une connexion privée entre votre VPC et des services AWS sans passer par Internet","Un tunnel VPN entre deux VPC","Un DNS privé pour les services AWS"], answer:1, timeLimit:10 },
  { id:"t111", domain:"Cloud Technology", question:"Quel service AWS est un service de recherche d'entreprise managé qui indexe et recherche dans du contenu structuré et non structuré ?", choices:["Amazon OpenSearch Service","Amazon Kendra","Amazon Comprehend","Amazon Rekognition"], answer:1, timeLimit:10 },
  { id:"t112", domain:"Cloud Technology", question:"Quel service AWS permet de créer, publier et gérer des APIs à l'échelle avec sécurité, throttling et monitoring intégrés ?", choices:["Elastic Load Balancing","Amazon CloudFront","Amazon API Gateway","AWS AppSync"], answer:2, timeLimit:10 },
  { id:"t113", domain:"Cloud Technology", question:"Qu'est-ce que Amazon Kinesis Data Firehose ?", choices:["Un service pour capturer et analyser des flux de données en temps réel","Un service qui charge les données de streaming directement dans S3, Redshift, ou OpenSearch sans code","Un service de messagerie pour les applications IoT","Un service de traitement de vidéo en temps réel"], answer:1, timeLimit:10 },
  { id:"t114", domain:"Cloud Technology", question:"Quel service AWS est recommandé pour héberger un site web statique (HTML, CSS, JS) de manière économique et scalable ?", choices:["Amazon EC2","AWS Elastic Beanstalk","Amazon S3 Static Website Hosting","Amazon Lightsail"], answer:2, timeLimit:10 },
  { id:"t115", domain:"Cloud Technology", question:"Quel service AWS offre des recommandations de redimensionnement d'instances EC2 et RDS sous-utilisées pour réduire les coûts ?", choices:["AWS Pricing Calculator","AWS Cost Explorer avec recommandations","AWS Trusted Advisor","AWS Compute Optimizer"], answer:3, timeLimit:10 },
  { id:"t116", domain:"Cloud Technology", question:"Quel service AWS est spécialement conçu pour la gestion de flottes IoT à grande échelle ?", choices:["Amazon Kinesis","AWS IoT Core","Amazon SNS","AWS Greengrass"], answer:1, timeLimit:10 },
  { id:"t117", domain:"Cloud Technology", question:"AWS Greengrass permet de :", choices:["Gérer des clusters Kubernetes en périphérie","Exécuter des fonctions Lambda et des inférences ML directement sur des appareils IoT en périphérie (edge)","Créer des réseaux VPN pour les appareils IoT","Analyser les données IoT dans le cloud"], answer:1, timeLimit:10 },
  { id:"t118", domain:"Cloud Technology", question:"Quel service AWS permet d'établir une connexion VPN Client entre un ordinateur d'utilisateur et un VPC ?", choices:["AWS Site-to-Site VPN","AWS Client VPN","AWS Direct Connect","AWS PrivateLink"], answer:1, timeLimit:10 },
  { id:"t119", domain:"Cloud Technology", question:"Quel service AWS est un service de conférence vidéo et collaboration (similaire à Zoom/Teams) ?", choices:["Amazon WorkMail","Amazon Chime","Amazon Connect","AWS WorkDocs"], answer:1, timeLimit:10 },
  { id:"t120", domain:"Cloud Technology", question:"Amazon Connect est un service AWS de :", choices:["Collaboration documentaire","Centre de contact (call center) cloud managé","Messagerie d'entreprise","Conférence vidéo"], answer:1, timeLimit:10 },
  { id:"t121", domain:"Cloud Technology", question:"Quel service AWS permet de surveiller les performances réseau entre ressources AWS avec des métriques de latence et de perte de paquets ?", choices:["Amazon CloudWatch","AWS Network Manager","VPC Flow Logs","Amazon Route 53 Health Checks"], answer:1, timeLimit:10 },
  { id:"t122", domain:"Cloud Technology", question:"Qu'est-ce que les VPC Flow Logs ?", choices:["Des logs des appels API dans le VPC","Des enregistrements du trafic réseau entrant et sortant dans un VPC pour l'audit et le diagnostic","Des métriques de performance des instances dans un VPC","Des logs des changements de configuration des Security Groups"], answer:1, timeLimit:10 },
  { id:"t123", domain:"Cloud Technology", question:"Quel service AWS permet d'accélérer les applications globales en routant le trafic via le réseau privé AWS plutôt qu'Internet ?", choices:["Amazon CloudFront","AWS Global Accelerator","Amazon Route 53","Elastic Load Balancing"], answer:1, timeLimit:10 },
  { id:"t124", domain:"Cloud Technology", question:"Quel service AWS propose une solution de base de données relationnelle en tant que service sans provisionner d'instances, avec capacité automatique ?", choices:["Amazon RDS Multi-AZ","Amazon Aurora Serverless v2","Amazon DynamoDB","Amazon Redshift Serverless"], answer:1, timeLimit:10 },
  { id:"t125", domain:"Cloud Technology", question:"Quel service AWS est recommandé pour analyser des pétaoctets de données non structurées stockées dans S3 en utilisant Spark ?", choices:["Amazon Athena","Amazon Redshift","Amazon EMR","AWS Glue"], answer:2, timeLimit:10 },
  // ── Billing & Pricing ────────────────────────────────────────────────────
  { id:"b001", domain:"Billing & Pricing", question:"Quel type d'instance EC2 offre la plus grande remise en s'engageant sur 1 ou 3 ans avec paiement total à l'avance ?", choices:["On-Demand","Spot","Reserved Instance (All Upfront, 3 ans)","Savings Plans"], answer:2, timeLimit:10 },
  { id:"b002", domain:"Billing & Pricing", question:"Quel service AWS permet de visualiser les dépenses AWS au fil du temps et de créer des rapports par service, région ou tag ?", choices:["AWS Budgets","AWS Pricing Calculator","AWS Cost Explorer","AWS Cost and Usage Report"], answer:2, timeLimit:10 },
  { id:"b003", domain:"Billing & Pricing", question:"Quel plan de support AWS est disponible gratuitement pour tous les comptes AWS ?", choices:["Developer","Business","Basic","Enterprise"], answer:2, timeLimit:10 },
  { id:"b004", domain:"Billing & Pricing", question:"Qu'est-ce que le Free Tier AWS ?", choices:["Un abonnement mensuel à 1 $ pour les startups","Des ressources AWS disponibles gratuitement dans certaines limites pour les 12 premiers mois (et certaines toujours gratuites)","Un crédit de 300 $ accordé une fois à l'ouverture du compte","Un plan d'accès limité aux régions US uniquement"], answer:1, timeLimit:10 },
  { id:"b005", domain:"Billing & Pricing", question:"Quel service AWS vous permet de définir des alertes de dépenses et d'utilisation qui déclenchent des notifications SNS ?", choices:["AWS Cost Explorer","AWS Pricing Calculator","AWS Budgets","AWS Trusted Advisor"], answer:2, timeLimit:10 },
  { id:"b006", domain:"Billing & Pricing", question:"Les instances Spot EC2 peuvent être interrompues avec un préavis de combien de minutes ?", choices:["5 minutes","2 minutes","30 minutes","60 minutes"], answer:1, timeLimit:10 },
  { id:"b007", domain:"Billing & Pricing", question:"Quel est le modèle de tarification de AWS Lambda ?", choices:["Paiement par instance par heure","Paiement par nombre d'invocations et par durée d'exécution (GB-secondes)","Abonnement mensuel fixe","Paiement par CPU utilisé"], answer:1, timeLimit:10 },
  { id:"b008", domain:"Billing & Pricing", question:"Quel outil AWS permet d'estimer les coûts mensuels d'une architecture AWS avant de la déployer ?", choices:["AWS Cost Explorer","AWS Budgets","AWS Pricing Calculator","AWS Trusted Advisor"], answer:2, timeLimit:10 },
  { id:"b009", domain:"Billing & Pricing", question:"Quel service AWS permet de regrouper la facturation de plusieurs comptes AWS et d'obtenir des remises sur volume cumulé ?", choices:["AWS Cost Explorer","AWS Organizations avec facturation consolidée","AWS Savings Plans","AWS Reserved Instances"], answer:1, timeLimit:10 },
  { id:"b010", domain:"Billing & Pricing", question:"Quel plan de support AWS inclut un Technical Account Manager (TAM) dédié et un temps de réponse < 15 min pour les cas critiques ?", choices:["Business","Enterprise On-Ramp","Enterprise","Developer"], answer:2, timeLimit:10 },
  { id:"b011", domain:"Billing & Pricing", question:"Quel service AWS analyse en permanence votre utilisation et recommande des Savings Plans ou Reserved Instances adaptés ?", choices:["AWS Trusted Advisor","AWS Cost Explorer (RI/SP Recommendations)","AWS Budgets","AWS Compute Optimizer"], answer:1, timeLimit:10 },
  { id:"b012", domain:"Billing & Pricing", question:"Quel Savings Plan offre des remises sur EC2, Lambda et Fargate avec flexibilité sur le type d'instance, la région et l'OS ?", choices:["EC2 Instance Savings Plan","Compute Savings Plan","SageMaker Savings Plan","Reserved Instance Standard"], answer:1, timeLimit:10 },
  { id:"b013", domain:"Billing & Pricing", question:"Quel service AWS génère un rapport CSV détaillé de toutes les dépenses AWS avec granularité à la ressource et à l'heure ?", choices:["AWS Cost Explorer","AWS Budgets","AWS Cost and Usage Report (CUR)","AWS Trusted Advisor"], answer:2, timeLimit:10 },
  { id:"b014", domain:"Billing & Pricing", question:"Le transfert de données ENTRANT (ingress) vers AWS depuis Internet est généralement :", choices:["Facturé au même tarif que le transfert sortant","Gratuit","Facturé uniquement pour les services de base de données","Inclus dans l'abonnement mensuel"], answer:1, timeLimit:10 },
  { id:"b015", domain:"Billing & Pricing", question:"Quel plan de support AWS offre un accès 24/7 avec temps de réponse < 1 heure pour les incidents critiques affectant la production ?", choices:["Developer","Basic","Business","Enterprise On-Ramp"], answer:2, timeLimit:10 },
  { id:"b016", domain:"Billing & Pricing", question:"Quel service AWS identifie les ressources inutilisées et suggère des optimisations de coûts, performances et sécurité ?", choices:["AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor","AWS Config"], answer:2, timeLimit:10 },
  { id:"b017", domain:"Billing & Pricing", question:"Pour une charge de travail EC2 qui s'exécute de façon intermittente et peut tolérer des interruptions, quelle option est la plus économique ?", choices:["Reserved Instance","On-Demand","Spot Instance","Dedicated Host"], answer:2, timeLimit:10 },
  { id:"b018", domain:"Billing & Pricing", question:"Quel service AWS envoie des rapports de facturation quotidiens et mensuels vers un bucket S3 ?", choices:["AWS Cost Explorer","AWS Billing and Cost Management","AWS Cost and Usage Report","AWS Budgets"], answer:2, timeLimit:10 },
  { id:"b019", domain:"Billing & Pricing", question:"Quel plan de support AWS donne accès aux vérifications complètes AWS Trusted Advisor (toutes les catégories) ?", choices:["Basic","Developer","Business et Enterprise","Tous les plans"], answer:2, timeLimit:10 },
  { id:"b020", domain:"Billing & Pricing", question:"Une Reserved Instance 'Convertible' diffère d'une 'Standard' par :", choices:["Le prix (Convertible est moins chère)","La possibilité d'échanger la RI pour une RI de valeur égale ou supérieure si les besoins changent","La durée d'engagement (Convertible est 5 ans)","Le type d'instance (Convertible uniquement pour M5)"], answer:1, timeLimit:10 },
  { id:"b021", domain:"Billing & Pricing", question:"Quel service AWS permet de définir des politiques de budget qui déclenchent des actions automatiques (ex: arrêter des instances) quand le budget est dépassé ?", choices:["AWS Cost Explorer","AWS Budgets Actions","AWS Trusted Advisor","AWS Config"], answer:1, timeLimit:10 },
  { id:"b022", domain:"Billing & Pricing", question:"Quel est le modèle de tarification d'Amazon S3 ?", choices:["Abonnement mensuel fixe par bucket","Paiement par Go stocké, requêtes effectuées et transfert de données sortant","Gratuit jusqu'à 1 TB puis paiement","Paiement par fichier stocké indépendamment de la taille"], answer:1, timeLimit:10 },
  { id:"b023", domain:"Billing & Pricing", question:"Quel service AWS Compute Optimizer analyse les métriques d'utilisation pour recommander les instances EC2 et EBS optimales ?", choices:["AWS Trusted Advisor","AWS Cost Explorer","AWS Compute Optimizer","AWS Pricing Calculator"], answer:2, timeLimit:10 },
  { id:"b024", domain:"Billing & Pricing", question:"Comment les économies d'échelle AWS se traduisent-elles concrètement pour les clients ?", choices:["AWS augmente ses prix chaque année","AWS réduit régulièrement ses prix au fil des ans grâce au volume","AWS offre des remises uniquement aux grands comptes","AWS plafonne les factures à un montant maximum mensuel"], answer:1, timeLimit:10 },
  { id:"b025", domain:"Billing & Pricing", question:"Quel outil AWS permet de comparer les coûts entre différentes options d'hébergement (AWS vs on-premises) ?", choices:["AWS Pricing Calculator","AWS TCO Calculator (maintenant intégré dans AWS Pricing Calculator)","AWS Cost Explorer","AWS Trusted Advisor"], answer:1, timeLimit:10 },
  { id:"b026", domain:"Billing & Pricing", question:"Une instance EC2 On-Demand est arrêtée (stopped). Que se passe-t-il avec la facturation ?", choices:["La facturation continue car l'instance occupe toujours un emplacement","La facturation EC2 s'arrête mais le volume EBS attaché continue d'être facturé","Toute facturation s'arrête immédiatement","Une pénalité d'arrêt est facturée"], answer:1, timeLimit:10 },
  { id:"b027", domain:"Billing & Pricing", question:"Quel plan de support AWS Enterprise On-Ramp offre par rapport au plan Business ?", choices:["Un TAM dédié","Un accès à un pool de TAMs et un temps de réponse < 30 min pour les cas critiques","Les mêmes services que Business","Un accès illimité aux formations AWS"], answer:1, timeLimit:10 },
  { id:"b028", domain:"Billing & Pricing", question:"Quel service AWS permet de voir les recommandations de réduction de coûts pour des instances EC2 sous-utilisées depuis la console Billing ?", choices:["AWS Budgets","AWS Cost Explorer","AWS Compute Optimizer","AWS Trusted Advisor Cost Optimization"], answer:3, timeLimit:10 },
  { id:"b029", domain:"Billing & Pricing", question:"Quel type de Reserved Instance permet de bénéficier de la remise dans n'importe quelle AZ d'une région (Regional RI) ou dans une AZ spécifique (Zonal RI) ?", choices:["Les deux types de RI offrent les mêmes avantages","Regional RI offre une remise de capacité dans une AZ spécifique ; Zonal RI s'applique à toutes les AZ","Regional RI offre la flexibilité d'AZ et de taille d'instance ; Zonal RI réserve de la capacité dans une AZ spécifique","Il n'existe qu'un seul type de Reserved Instance"], answer:2, timeLimit:10 },
  { id:"b030", domain:"Billing & Pricing", question:"Quelle affirmation sur les tags de facturation AWS est correcte ?", choices:["Les tags sont automatiquement activés pour la facturation","Vous devez activer les tags de coût (Cost Allocation Tags) dans la console Billing pour les utiliser dans les rapports","Les tags de facturation ne fonctionnent qu'avec EC2 et S3","Les tags sont gratuits mais limités à 10 par ressource"], answer:1, timeLimit:10 },
  { id:"b031", domain:"Billing & Pricing", question:"Quel service AWS offre un niveau gratuit permanent (toujours gratuit) sans expiration après 12 mois, pour certains services ?", choices:["EC2 t2.micro","Amazon S3 (5 GB uniquement)","AWS Lambda (1 million de requêtes/mois)","Tous les services AWS du Free Tier"], answer:2, timeLimit:10 },
  { id:"b032", domain:"Billing & Pricing", question:"Quel est l'avantage principal de la facturation consolidée via AWS Organizations ?", choices:["Élimination totale des coûts de transfert de données entre comptes","Remises de volume combinées et gestion centralisée des factures de tous les comptes membres","Accès gratuit au plan Enterprise Support","Automatisation des déploiements entre comptes"], answer:1, timeLimit:10 },
  { id:"b033", domain:"Billing & Pricing", question:"Pour quelle situation les Reserved Instances sont-elles les MOINS adaptées ?", choices:["Charges de travail prévisibles s'exécutant en continu 24h/24","Applications de production stables","Charges de travail très variables ou temporaires sans prévisibilité","Bases de données de production en continu"], answer:2, timeLimit:10 },
  { id:"b034", domain:"Billing & Pricing", question:"Quel service AWS vous permet de recevoir des alertes par email quand votre utilisation Free Tier approche des limites ?", choices:["AWS Config","AWS CloudTrail","AWS Budgets avec alertes Free Tier","Amazon CloudWatch"], answer:2, timeLimit:10 },
  { id:"b035", domain:"Billing & Pricing", question:"Comment AWS facture Amazon DynamoDB en mode On-Demand ?", choices:["Par instance de base de données par heure","Par lecture/écriture réelle effectuée (RCU/WCU consommées)","Par Go de données stockées uniquement","Abonnement mensuel fixe"], answer:1, timeLimit:10 },
  { id:"b036", domain:"Billing & Pricing", question:"Quel service AWS aide à identifier les Savings Plans et Reserved Instances non utilisés ou sous-utilisés ?", choices:["AWS Budgets","AWS Cost Explorer avec rapport d'utilisation des RI/SP","AWS Compute Optimizer","AWS Pricing Calculator"], answer:1, timeLimit:10 },
  { id:"b037", domain:"Billing & Pricing", question:"Quel est le coût de la data transfer entre deux instances EC2 dans la MÊME zone de disponibilité utilisant des IP privées ?", choices:["0,01 $ par GB","0,02 $ par GB","Gratuit","0,09 $ par GB"], answer:2, timeLimit:10 },
  { id:"b038", domain:"Billing & Pricing", question:"Quel plan de support AWS inclut des vérifications proactives et une révision de l'architecture par l'équipe AWS ?", choices:["Basic","Developer","Business","Enterprise"], answer:3, timeLimit:10 },
  { id:"b039", domain:"Billing & Pricing", question:"Comment les Savings Plans diffèrent-ils des Reserved Instances ?", choices:["Les Savings Plans n'offrent pas de remises aussi élevées que les RI","Les Savings Plans offrent une flexibilité accrue (type d'instance, région, OS) en échange d'un engagement de dépenses horaires","Les Savings Plans sont uniquement pour Lambda","Les RI sont plus récents et remplacent les Savings Plans"], answer:1, timeLimit:10 },
  { id:"b040", domain:"Billing & Pricing", question:"Quel service AWS permet de vendre des Reserved Instances non utilisées sur un marché secondaire ?", choices:["AWS Marketplace","Reserved Instance Marketplace","AWS Cost Explorer","AWS Organizations"], answer:1, timeLimit:10 },
  { id:"b041", domain:"Billing & Pricing", question:"Quelle est la différence entre AWS Budgets et AWS Cost Explorer ?", choices:["Cost Explorer crée des alertes ; Budgets visualise les coûts historiques","Budgets permet de définir des seuils et envoyer des alertes ; Cost Explorer analyse et visualise les dépenses historiques","Ils sont identiques avec des interfaces différentes","Budgets est gratuit ; Cost Explorer est payant"], answer:1, timeLimit:10 },
  { id:"b042", domain:"Billing & Pricing", question:"Le plan de support Developer AWS offre un accès technique par :", choices:["Téléphone et chat 24/7","Email uniquement pendant les heures de bureau","Téléphone, chat et email 24/7","Uniquement via le forum AWS"], answer:1, timeLimit:10 },
  { id:"b043", domain:"Billing & Pricing", question:"Quel service AWS permet de créer des rapports de coûts détaillés par département en utilisant des tags de ressources ?", choices:["AWS Organizations","AWS Cost and Usage Report avec Cost Allocation Tags","AWS Billing Groups","AWS Cost Explorer"], answer:1, timeLimit:10 },
  { id:"b044", domain:"Billing & Pricing", question:"Quel est l'avantage de 'payer à l'usage' versus le modèle traditionnel on-premises ?", choices:["Le coût total est toujours inférieur dans le cloud","Vous ne payez que ce que vous utilisez réellement, sans engagements ni gaspillage de capacité provisionnée en excès","AWS offre des remises garanties dès la première année","Il n'y a pas de coûts cachés dans le cloud"], answer:1, timeLimit:10 },
  { id:"b045", domain:"Billing & Pricing", question:"Quel service AWS permet aux ISV (Independent Software Vendors) de vendre leurs logiciels à des clients AWS ?", choices:["AWS Partner Network","AWS Marketplace","AWS Service Catalog","AWS License Manager"], answer:1, timeLimit:10 },
  { id:"b046", domain:"Billing & Pricing", question:"Quel est le modèle de tarification d'AWS CloudFront ?", choices:["Abonnement mensuel fixe","Paiement par Go de données transférées et par requêtes HTTP/HTTPS","Paiement uniquement par région","Gratuit pour les clients EC2"], answer:1, timeLimit:10 },
  { id:"b047", domain:"Billing & Pricing", question:"Quel service AWS permet de créer des groupes de facturation personnalisés pour regrouper les coûts par équipe ou projet ?", choices:["AWS Organizations","AWS Cost Categories","AWS Billing Groups","AWS Tags Manager"], answer:1, timeLimit:10 },
  { id:"b048", domain:"Billing & Pricing", question:"Comment est facturé Amazon RDS ?", choices:["Par requête SQL exécutée","Par heure d'instance de base de données + stockage + I/O (selon le moteur)","Par Go de données stockées uniquement","Abonnement mensuel fixe par base de données"], answer:1, timeLimit:10 },
  { id:"b049", domain:"Billing & Pricing", question:"Quel type de Savings Plan offre des remises uniquement sur EC2 avec une flexibilité limitée (type d'instance flexible, mais région fixe) ?", choices:["Compute Savings Plan","EC2 Instance Savings Plan","SageMaker Savings Plan","Reserved Instance Convertible"], answer:1, timeLimit:10 },
  { id:"b050", domain:"Billing & Pricing", question:"Quelle affirmation sur le coût du transfert de données entre régions AWS est correcte ?", choices:["Il est toujours gratuit","Il est facturé pour le trafic sortant d'une région vers une autre région","Il est gratuit uniquement entre régions US","Il est inclus dans le prix des instances EC2"], answer:1, timeLimit:10 },
  {
    "id": "q0001",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud. Quel service AWS choisir ?",
    "choices": [
      "AWS Organizations",
      "Amazon S3",
      "Amazon EC2",
      "AWS Health Dashboard"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0002",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'exécuter Kubernetes managé sur AWS. Quel service AWS choisir ?",
    "choices": [
      "Amazon Comprehend",
      "Amazon VPC",
      "Amazon EKS",
      "AWS Fargate"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0003",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents. Quel service AWS choisir ?",
    "choices": [
      "AWS CloudShell",
      "Amazon CloudFront",
      "AWS Fargate",
      "AWS Outposts"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0004",
    "domain": "Cloud Concepts",
    "question": "Quel est l'intérêt principal d'utiliser plusieurs AZ dans une région ?",
    "choices": [
      "Éviter toute configuration réseau",
      "Assurer la haute disponibilité : si une AZ tombe, les autres continuent de servir l'application",
      "Réduire le coût du transfert de données à zéro",
      "Contourner le besoin de sauvegardes"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0005",
    "domain": "Cloud Concepts",
    "question": "Que signifie « Design for failure » ?",
    "choices": [
      "Concevoir des systèmes qui continuent de fonctionner même si des composants échouent",
      "N'utiliser que des services managés",
      "Tester uniquement les sauvegardes",
      "Doubler systématiquement la capacité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0006",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle ?",
    "choices": [
      "Amazon MemoryDB",
      "AWS Control Tower",
      "Amazon API Gateway",
      "Amazon Comprehend"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0007",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de construire et sécuriser rapidement un data lake. Quel service AWS choisir ?",
    "choices": [
      "AWS Application Migration Service",
      "AWS Lake Formation",
      "Amazon EMR",
      "AWS Batch"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0008",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour estimer le coût d'une architecture AWS avant son déploiement ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor",
      "AWS Billing Conductor"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0009",
    "domain": "Billing & Pricing",
    "question": "Le plan de support « support technique par e-mail en heures ouvrées, adapté aux tests/développement » est le plan :",
    "choices": [
      "Enterprise",
      "Business",
      "Developer",
      "Enterprise On-Ramp"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0010",
    "domain": "Billing & Pricing",
    "question": "Quel plan de support AWS offre : « support 24/7, réponse < 15 min pour les cas critiques et un TAM dédié » ?",
    "choices": [
      "Basic",
      "Enterprise",
      "Enterprise On-Ramp",
      "Business"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0011",
    "domain": "Cloud Technology",
    "question": "Amazon Keyspaces est principalement utilisé pour :",
    "choices": [
      "Fournir un IDE de développement dans le navigateur",
      "Gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.)",
      "Fournir une base de données compatible Apache Cassandra managée",
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0012",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « une équipe expérimente et déploie de nouvelles idées en minutes sans achat de matériel » ?",
    "choices": [
      "Scalabilité",
      "Durabilité",
      "Élasticité",
      "Agilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0013",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Lake Formation ?",
    "choices": [
      "Construire et sécuriser rapidement un data lake",
      "Fournir un système de fichiers partagé élastique (NFS) monté sur plusieurs instances EC2 Linux",
      "Créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles",
      "Fournir une base de données compatible Apache Cassandra managée"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0014",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « on augmente la capacité d'une ressource ou le nombre de ressources pour absorber la croissance » ?",
    "choices": [
      "Scalabilité",
      "Haute disponibilité",
      "Tolérance aux pannes",
      "Durabilité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0015",
    "domain": "Billing & Pricing",
    "question": "AWS Marketplace est principalement utilisé pour :",
    "choices": [
      "Gérer une base de données de graphes managée",
      "Fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic",
      "Gérer et regrouper de façon centralisée plusieurs comptes AWS",
      "Acheter et déployer des logiciels tiers avec une facturation via AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0016",
    "domain": "Cloud Concepts",
    "question": "Dans les stratégies de migration (les « 6 R »), laquelle consiste à : « apporter quelques optimisations sans changer l'architecture de base » ?",
    "choices": [
      "Retire",
      "Replatform",
      "Repurchase",
      "Refactor / Re-architect"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0017",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir un système de fichiers partagé élastique (NFS) monté sur plusieurs instances EC2 Linux ?",
    "choices": [
      "Amazon EKS",
      "Amazon EFS",
      "Amazon Kinesis",
      "AWS Site-to-Site VPN"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0018",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS WAF ?",
    "choices": [
      "Exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Fournir un IDE de développement dans le navigateur",
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0019",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS). Quel service AWS choisir ?",
    "choices": [
      "AWS X-Ray",
      "Amazon Lex",
      "Amazon FSx",
      "AWS Site-to-Site VPN"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0020",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL ?",
    "choices": [
      "Amazon Keyspaces",
      "Amazon Redshift",
      "AWS CodeCommit",
      "AWS CloudFormation"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0021",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La maintenance du matériel physique des serveurs » ?",
    "choices": [
      "Un fournisseur tiers non AWS",
      "Personne, c'est automatique",
      "AWS",
      "Le client"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0022",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « un service de streaming s'adapte seul à la hausse du nombre de spectateurs le soir » ?",
    "choices": [
      "Tolérance aux pannes",
      "Élasticité",
      "Scalabilité",
      "Haute disponibilité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0023",
    "domain": "Cloud Technology",
    "question": "Amazon API Gateway est principalement utilisé pour :",
    "choices": [
      "Extraire des informations et du sens d'un texte via le NLP",
      "Exécuter Apache Kafka managé pour le streaming de données",
      "Créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle",
      "Configurer et gouverner un environnement multi-comptes sécurisé (landing zone)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0024",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS CodePipeline ?",
    "choices": [
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)",
      "Répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ",
      "Automatiser des pipelines d'intégration et de livraison continues (CI/CD)",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0025",
    "domain": "Cloud Technology",
    "question": "Pour fournir une base de données de documents compatible MongoDB, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Timestream",
      "AWS DataSync",
      "Amazon DocumentDB",
      "Amazon Lightsail"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0026",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Fargate ?",
    "choices": [
      "Mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures",
      "Exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents",
      "Fournir une base en mémoire compatible Redis, durable et persistante",
      "Fournir un système de fichiers partagé élastique (NFS) monté sur plusieurs instances EC2 Linux"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0027",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : créer et gérer des catalogues de produits IT approuvés pour le déploiement ?",
    "choices": [
      "Amazon QLDB",
      "AWS Service Catalog",
      "Amazon SageMaker",
      "Amazon Rekognition"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0028",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : découpler les composants via une file d'attente de messages (point-à-point) ?",
    "choices": [
      "Amazon ECS",
      "Amazon Transcribe",
      "AWS Batch",
      "Amazon SQS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0029",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Textract ?",
    "choices": [
      "Évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs)",
      "Extraire automatiquement du texte et des données de documents scannés",
      "Créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles",
      "Exécuter Apache Kafka managé pour le streaming de données"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0030",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : extraire des informations et du sens d'un texte via le NLP ?",
    "choices": [
      "Amazon Keyspaces",
      "AWS Auto Scaling",
      "Amazon Comprehend",
      "AWS Fargate"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0031",
    "domain": "Cloud Concepts",
    "question": "Qu'est-ce que le principe « pay-as-you-go » d'AWS ?",
    "choices": [
      "Un abonnement annuel fixe",
      "Un paiement unique à vie",
      "Vous ne payez que les ressources réellement consommées, sans engagement initial obligatoire",
      "Un coût proportionnel au nombre d'employés"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0032",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'analyser et déboguer les applications distribuées (tracing) ?",
    "choices": [
      "AWS X-Ray",
      "AWS Lambda",
      "Amazon EFS",
      "Amazon SQS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0033",
    "domain": "Cloud Technology",
    "question": "Pour fournir du stockage de blocs persistant et faible latence attaché aux instances EC2, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Batch",
      "AWS Health Dashboard",
      "Amazon Neptune",
      "Amazon EBS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0034",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « le système continue sans interruption même quand un composant tombe en panne » ?",
    "choices": [
      "Élasticité",
      "Haute disponibilité",
      "Tolérance aux pannes",
      "Durabilité"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0035",
    "domain": "Cloud Technology",
    "question": "Différence entre RDS Multi-AZ et Read Replica ?",
    "choices": [
      "Les deux sont identiques",
      "Multi-AZ = haute disponibilité et basculement automatique ; Read Replica = performance en lecture",
      "Multi-AZ n'existe que pour MySQL",
      "Multi-AZ améliore les lectures ; Read Replica fait le failover"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0036",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS PrivateLink ?",
    "choices": [
      "Gestion et gouvernance",
      "Migration et transfert",
      "Réseau et diffusion de contenu",
      "Analytique"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0037",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution ?",
    "choices": [
      "AWS DMS",
      "Amazon EventBridge",
      "AWS Lambda",
      "AWS CodeBuild"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0038",
    "domain": "Cloud Technology",
    "question": "Pour exécuter des travaux de traitement par lots à grande échelle, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon RDS",
      "AWS Batch",
      "AWS Organizations",
      "AWS CloudFormation"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0039",
    "domain": "Security & Compliance",
    "question": "AWS KMS est principalement utilisé pour :",
    "choices": [
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Gérer de façon centralisée les règles de pare-feu sur plusieurs comptes",
      "Créer et contrôler les clés de chiffrement utilisées pour protéger les données",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0040",
    "domain": "Security & Compliance",
    "question": "Bonne pratique de sécurité : quelle approche iam n'accorde que les permissions strictement nécessaires ?",
    "choices": [
      "Donner tout puis retirer plus tard",
      "Attribuer AdministratorAccess à tous",
      "Utiliser un seul admin partagé",
      "Appliquer le principe du moindre privilège"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0041",
    "domain": "Cloud Technology",
    "question": "Amazon EMR est principalement utilisé pour :",
    "choices": [
      "Fournir une base de données compatible Apache Cassandra managée",
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS",
      "Traiter du big data avec des frameworks comme Apache Spark et Hadoop",
      "Créer des tableaux de bord et de la Business Intelligence (BI)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0042",
    "domain": "Cloud Technology",
    "question": "Amazon MQ est principalement utilisé pour :",
    "choices": [
      "Répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ",
      "Extraire des informations et du sens d'un texte via le NLP",
      "Fournir un broker de messages managé compatible ActiveMQ et RabbitMQ",
      "Fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0043",
    "domain": "Security & Compliance",
    "question": "Amazon Inspector est principalement utilisé pour :",
    "choices": [
      "Fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS",
      "Évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs)",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0044",
    "domain": "Cloud Technology",
    "question": "Amazon S3 est principalement utilisé pour :",
    "choices": [
      "Créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles",
      "Stocker des objets de manière durable et hautement disponible dans des buckets",
      "Convertir du texte en parole réaliste (text-to-speech)",
      "Fournir Microsoft Active Directory managé dans le cloud AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0045",
    "domain": "Security & Compliance",
    "question": "Que sont les « controls hérités » (inherited controls) dans le modèle partagé ?",
    "choices": [
      "Des contrôles que le client doit configurer seul",
      "Des contrôles de sécurité que le client hérite entièrement d'AWS (ex : sécurité physique)",
      "Des règles de facturation",
      "Des types d'instances"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0046",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet de recommander des ressources optimales pour réduire les coûts et améliorer la performance ?",
    "choices": [
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Compute Optimizer",
      "AWS Billing Conductor"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0047",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL ?",
    "choices": [
      "Amazon Redshift",
      "Amazon MQ",
      "Amazon EKS",
      "Amazon Kinesis"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0048",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir du stockage de blocs persistant et faible latence attaché aux instances EC2 ?",
    "choices": [
      "Amazon Translate",
      "Amazon EBS",
      "Amazon SageMaker",
      "AWS CloudFormation"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0049",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Kendra ?",
    "choices": [
      "Intégration d'applications",
      "Gestion des coûts et facturation",
      "Machine Learning / IA",
      "Analytique"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0050",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de collecter et traiter des flux de données en temps réel (streaming). Quel service AWS choisir ?",
    "choices": [
      "Amazon FSx",
      "Amazon MemoryDB",
      "Amazon DocumentDB",
      "Amazon Kinesis"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0051",
    "domain": "Security & Compliance",
    "question": "Quelle bonne pratique protège en priorité le compte root AWS ?",
    "choices": [
      "Partager les credentials root",
      "Activer l'authentification multifacteur (MFA) sur le compte root",
      "Créer des clés d'accès root pour un usage quotidien",
      "Désactiver CloudTrail"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0052",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Batch ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Intégration d'applications",
      "Calcul (Compute)",
      "Sécurité, identité et conformité"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0053",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : évaluer et enregistrer en continu la conformité de la configuration des ressources ?",
    "choices": [
      "AWS KMS",
      "AWS Directory Service",
      "AWS Audit Manager",
      "AWS Config"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0054",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour créer et contrôler les clés de chiffrement utilisées pour protéger les données ?",
    "choices": [
      "AWS KMS",
      "AWS Artifact",
      "Amazon Macie",
      "AWS CloudHSM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0055",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour convertir de la parole en texte (speech-to-text) ?",
    "choices": [
      "AWS CloudFormation",
      "AWS Lake Formation",
      "Amazon Transcribe",
      "AWS Cloud9"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0056",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour construire des interfaces conversationnelles (chatbots) vocales et textuelles ?",
    "choices": [
      "Elastic Load Balancing",
      "Amazon Lex",
      "AWS PrivateLink",
      "Amazon SNS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0057",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de découpler les composants via une file d'attente de messages (point-à-point). Quel service AWS choisir ?",
    "choices": [
      "Amazon DocumentDB",
      "Amazon CloudFront",
      "Elastic Load Balancing",
      "Amazon SQS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0058",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir une base de données de documents compatible MongoDB ?",
    "choices": [
      "AWS CodeCommit",
      "AWS Elastic Beanstalk",
      "Amazon DocumentDB",
      "AWS Step Functions"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0059",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Secrets Manager ?",
    "choices": [
      "Calcul (Compute)",
      "Sécurité, identité et conformité",
      "Gestion et gouvernance",
      "Base de données"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0060",
    "domain": "Cloud Technology",
    "question": "Pour fournir un IDE de développement dans le navigateur, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CodeBuild",
      "AWS Cloud9",
      "Amazon QuickSight",
      "AWS Health Dashboard"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0061",
    "domain": "Security & Compliance",
    "question": "AWS Network Firewall est principalement utilisé pour :",
    "choices": [
      "Analyser et déboguer les applications distribuées (tracing)",
      "Collecter et traiter des flux de données en temps réel (streaming)",
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Traiter du big data avec des frameworks comme Apache Spark et Hadoop"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0062",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de découpler les composants via une file d'attente de messages (point-à-point) ?",
    "choices": [
      "Amazon Kendra",
      "Amazon SQS",
      "Amazon Kinesis",
      "AWS Site-to-Site VPN"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0063",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient Amazon Detective ?",
    "choices": [
      "Machine Learning / IA",
      "Sécurité, identité et conformité",
      "Réseau et diffusion de contenu",
      "Outils de développement"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0064",
    "domain": "Cloud Concepts",
    "question": "Le pilier « utiliser efficacement les ressources et maintenir cette efficacité dans le temps » du Well-Architected Framework est :",
    "choices": [
      "Durabilité (Sustainability)",
      "Excellence opérationnelle",
      "Optimisation des coûts",
      "Efficacité des performances"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0065",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés ?",
    "choices": [
      "AWS Directory Service",
      "AWS CloudHSM",
      "AWS Shield",
      "AWS WAF"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0066",
    "domain": "Billing & Pricing",
    "question": "Dans combien de catégories Trusted Advisor fournit-il des recommandations ?",
    "choices": [
      "2 : coût et sécurité",
      "3 : coût, sécurité, performance",
      "7 incluant la gouvernance",
      "5 : coûts, sécurité, tolérance aux pannes, performance, limites de service"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0067",
    "domain": "Cloud Technology",
    "question": "Pour gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon RDS",
      "Amazon API Gateway",
      "Amazon EFS",
      "AWS Site-to-Site VPN"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0068",
    "domain": "Cloud Technology",
    "question": "Pour provisionner l'infrastructure via des templates (Infrastructure as Code), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Rekognition",
      "AWS Global Accelerator",
      "AWS DataSync",
      "AWS CloudFormation"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0069",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Keyspaces ?",
    "choices": [
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Fournir une base de données compatible Apache Cassandra managée",
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS",
      "Fournir un système de fichiers partagé élastique (NFS) monté sur plusieurs instances EC2 Linux"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0070",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : gérer de façon centralisée les règles de pare-feu sur plusieurs comptes ?",
    "choices": [
      "AWS Firewall Manager",
      "AWS Directory Service",
      "AWS Config",
      "AWS Certificate Manager"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0071",
    "domain": "Billing & Pricing",
    "question": "Comment Amazon CloudFront peut-il réduire les coûts ?",
    "choices": [
      "En mettant en cache le contenu à la périphérie, il réduit le transfert de données depuis l'origine",
      "En doublant le débit gratuitement",
      "En supprimant tout coût de stockage",
      "En remplaçant IAM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0072",
    "domain": "Cloud Technology",
    "question": "Amazon CloudFront est principalement utilisé pour :",
    "choices": [
      "Fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites",
      "Gérer, configurer et exploiter les instances et ressources à grande échelle",
      "Améliorer la performance en routant le trafic via le backbone privé AWS",
      "Distribuer du contenu avec faible latence via un réseau CDN d'emplacements Edge"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0073",
    "domain": "Billing & Pricing",
    "question": "Pour estimer le coût d'une architecture AWS avant son déploiement, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Marketplace",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost and Usage Report"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0074",
    "domain": "Cloud Technology",
    "question": "Quelle classe de stockage Amazon S3 convient à : « des archives dont la récupération prend de quelques minutes à quelques heures » ?",
    "choices": [
      "S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering",
      "S3 One Zone-IA",
      "S3 Glacier Flexible Retrieval"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0075",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Snowball ?",
    "choices": [
      "Transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé",
      "Interconnecter de nombreux VPC et réseaux sur site via un hub central",
      "Gérer l'authentification et les identités des utilisateurs d'applications web et mobiles",
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0076",
    "domain": "Cloud Concepts",
    "question": "Le découplage d'une architecture permet surtout de :",
    "choices": [
      "Réduire les interdépendances pour qu'une panne d'un composant n'affecte pas les autres",
      "Garantir un coût nul",
      "Augmenter volontairement la latence",
      "Supprimer le besoin de sécurité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0077",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Lex ?",
    "choices": [
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données",
      "Construire des interfaces conversationnelles (chatbots) vocales et textuelles",
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Fournir un moteur de recherche d'entreprise intelligent"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0078",
    "domain": "Security & Compliance",
    "question": "Quelle affirmation sur AWS Config est correcte ?",
    "choices": [
      "Il enregistre et évalue la conformité de la configuration des ressources dans le temps",
      "Il journalise les appels d'API",
      "Il détecte les malwares réseau",
      "Il gère les certificats SSL"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0079",
    "domain": "Cloud Technology",
    "question": "Quelle famille d'instances EC2 convient à : « du stockage local NVMe rapide et un fort débit I/O » ?",
    "choices": [
      "Famille T (usage général, burstable)",
      "Famille R (optimisé mémoire)",
      "Famille G/P (GPU/accéléré)",
      "Famille I (optimisé stockage)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0080",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : découvrir et protéger les données sensibles (PII) stockées dans Amazon S3 ?",
    "choices": [
      "Amazon Macie",
      "AWS Shield",
      "AWS KMS",
      "AWS Firewall Manager"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0081",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « aucune défaillance isolée d'un composant n'affecte le service rendu » ?",
    "choices": [
      "Élasticité",
      "Tolérance aux pannes",
      "Agilité",
      "Durabilité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0082",
    "domain": "Security & Compliance",
    "question": "Différence entre une policy IAM identity-based et resource-based ?",
    "choices": [
      "L'identity-based s'attache aux buckets",
      "La resource-based ne fonctionne qu'avec EC2",
      "L'identity-based s'attache à une identité (user/rôle) ; la resource-based s'attache à une ressource (ex : bucket S3)",
      "Elles sont identiques"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0083",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : analyser des images et vidéos (détection d'objets, visages, modération) ?",
    "choices": [
      "Amazon Aurora",
      "Amazon EventBridge",
      "Amazon EFS",
      "Amazon Rekognition"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0084",
    "domain": "Billing & Pricing",
    "question": "Modèle d'achat EC2 le plus économique pour une charge stable 24/7 sur 3 ans :",
    "choices": [
      "Dedicated Host On-Demand",
      "Spot",
      "On-Demand avec Auto Scaling",
      "Reserved Instance 3 ans (paiement total à l'avance)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0085",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour étendre l'infrastructure et les services AWS dans votre propre data center sur site ?",
    "choices": [
      "AWS Systems Manager",
      "Amazon Rekognition",
      "AWS Outposts",
      "Amazon MSK"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0086",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS CloudHSM ?",
    "choices": [
      "Fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés",
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site",
      "Traiter du big data avec des frameworks comme Apache Spark et Hadoop",
      "Améliorer la performance en routant le trafic via le backbone privé AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0087",
    "domain": "Security & Compliance",
    "question": "Pour filtrer les requêtes web malveillantes (SQLi, XSS), quel service utiliser ?",
    "choices": [
      "AWS Network Firewall",
      "AWS WAF",
      "AWS Shield Standard",
      "Amazon GuardDuty"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0088",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS IAM Identity Center ?",
    "choices": [
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0089",
    "domain": "Security & Compliance",
    "question": "Un utilisateur IAM devrait s'authentifier à la console avec :",
    "choices": [
      "Un nom d'utilisateur, un mot de passe et, idéalement, la MFA",
      "Les credentials root",
      "Uniquement une clé d'accès secrète",
      "Un certificat CloudHSM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0090",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Health Dashboard ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Analytique",
      "Gestion et gouvernance",
      "Outils de développement"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0091",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir une base de données compatible Apache Cassandra managée. Quel service AWS choisir ?",
    "choices": [
      "AWS CloudFormation",
      "Amazon Keyspaces",
      "Amazon Bedrock",
      "Amazon EFS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0092",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon EFS ?",
    "choices": [
      "Outils de développement",
      "Sécurité, identité et conformité",
      "Calcul (Compute)",
      "Stockage"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0093",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Storage Gateway ?",
    "choices": [
      "Découvrir et protéger les données sensibles (PII) stockées dans Amazon S3",
      "Migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift)",
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0094",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir un moteur de recherche d'entreprise intelligent ?",
    "choices": [
      "AWS X-Ray",
      "Amazon Kendra",
      "AWS Glue",
      "Amazon API Gateway"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0095",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud est illustré par : « le plus de contrôle sur l'OS, le stockage et le réseau (ex : EC2) » ?",
    "choices": [
      "PaaS",
      "SaaS",
      "FaaS",
      "IaaS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0096",
    "domain": "Billing & Pricing",
    "question": "Quel est le rapport de facturation le plus détaillé ?",
    "choices": [
      "AWS Cost and Usage Report (CUR)",
      "Pricing Calculator",
      "Budgets",
      "Cost Explorer"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0097",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : gérer les identités, les accès et les permissions aux ressources AWS ?",
    "choices": [
      "AWS Security Hub",
      "Amazon Detective",
      "Amazon Cognito",
      "AWS IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0098",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet de personnaliser la facturation et la refacturation entre équipes ou clients ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Marketplace",
      "AWS Billing Conductor",
      "AWS Pricing Calculator"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0099",
    "domain": "Billing & Pricing",
    "question": "Qu'est-ce que l'Infrastructure Event Management (IEM) ?",
    "choices": [
      "Un pare-feu réseau",
      "Un service de sauvegarde",
      "Un type d'instance",
      "Un accompagnement pour les événements critiques (lancements, pics), inclus/optionnel selon le plan Enterprise"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0100",
    "domain": "Security & Compliance",
    "question": "Que décrit le chiffrement « en transit » (in transit) ?",
    "choices": [
      "Seules les clés KMS sont concernées",
      "Les données sont chiffrées lorsqu'elles circulent sur le réseau (TLS/HTTPS)",
      "Elles sont compressées mais pas chiffrées",
      "Uniquement lorsqu'elles sont stockées"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0101",
    "domain": "Cloud Technology",
    "question": "AWS CodeBuild est principalement utilisé pour :",
    "choices": [
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Compiler le code, exécuter des tests et produire des artefacts (build)",
      "Découpler les composants via une file d'attente de messages (point-à-point)",
      "Provisionner l'infrastructure via des templates (Infrastructure as Code)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0102",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic ?",
    "choices": [
      "Amazon Transcribe",
      "Amazon Route 53",
      "Amazon Timestream",
      "AWS Lambda"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0103",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de détecter les menaces en analysant en continu l'activité malveillante et anormale ?",
    "choices": [
      "Amazon Inspector",
      "AWS Firewall Manager",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0104",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : archiver des données à très faible coût pour un accès peu fréquent ?",
    "choices": [
      "AWS Transit Gateway",
      "AWS Lambda",
      "Amazon S3 Glacier",
      "AWS Glue"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0105",
    "domain": "Cloud Technology",
    "question": "Quelle famille d'instances EC2 convient à : « des charges générales avec pics ponctuels (petits serveurs web) » ?",
    "choices": [
      "Famille C (optimisé calcul)",
      "Famille M (usage général)",
      "Famille T (usage général, burstable)",
      "Famille I (optimisé stockage)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0106",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud est illustré par : « un logiciel complet prêt à l'emploi accessible via Internet » ?",
    "choices": [
      "SaaS",
      "IaaS",
      "PaaS",
      "FaaS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0107",
    "domain": "Billing & Pricing",
    "question": "Le plan de support « support technique 24/7 (téléphone, chat, e-mail) et tous les checks Trusted Advisor » est le plan :",
    "choices": [
      "Enterprise",
      "Business",
      "Enterprise On-Ramp",
      "Developer"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0108",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'automatiser et accélérer le transfert de données entre le sur site et AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Organizations",
      "Amazon SNS",
      "AWS DataSync",
      "AWS Backup"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0109",
    "domain": "Billing & Pricing",
    "question": "AWS Cost Explorer est principalement utilisé pour :",
    "choices": [
      "Établir une connexion réseau dédiée et privée entre un site et AWS",
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Surveiller les métriques, journaux et alarmes des ressources et applications AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0110",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS DMS ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Machine Learning / IA",
      "Calcul (Compute)",
      "Migration et transfert"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0111",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir une base en mémoire compatible Redis, durable et persistante ?",
    "choices": [
      "Amazon VPC",
      "AWS DataSync",
      "Amazon EKS",
      "Amazon MemoryDB"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0112",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de gérer l'authentification et les identités des utilisateurs d'applications web et mobiles. Quel service AWS choisir ?",
    "choices": [
      "AWS KMS",
      "AWS Security Hub",
      "Amazon Inspector",
      "Amazon Cognito"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0113",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift) ?",
    "choices": [
      "Amazon EC2",
      "AWS Transit Gateway",
      "Amazon Kendra",
      "AWS Application Migration Service"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0114",
    "domain": "Security & Compliance",
    "question": "Quel service évalue les vulnérabilités logicielles des charges de travail ?",
    "choices": [
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0115",
    "domain": "Cloud Technology",
    "question": "Pour compiler le code, exécuter des tests et produire des artefacts (build), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon CloudFront",
      "Amazon EMR",
      "AWS CodeBuild",
      "Amazon EFS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0116",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Elastic Load Balancing ?",
    "choices": [
      "Analytique",
      "Calcul (Compute)",
      "Sécurité, identité et conformité",
      "Réseau et diffusion de contenu"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0117",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour automatiser le déploiement de code vers EC2, Lambda ou sur site ?",
    "choices": [
      "AWS CloudFormation",
      "AWS CodeDeploy",
      "AWS Application Migration Service",
      "AWS Elastic Beanstalk"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0118",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour gérer les identités, les accès et les permissions aux ressources AWS ?",
    "choices": [
      "AWS IAM Identity Center",
      "AWS IAM",
      "AWS Certificate Manager",
      "AWS Artifact"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0119",
    "domain": "Security & Compliance",
    "question": "AWS Config est principalement utilisé pour :",
    "choices": [
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Fournir une base de données compatible Apache Cassandra managée",
      "Exécuter Apache Kafka managé pour le streaming de données",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0120",
    "domain": "Billing & Pricing",
    "question": "Différence principale entre Reserved Instances et Savings Plans ?",
    "choices": [
      "Les RI n'offrent aucune remise",
      "Les RI réservent une capacité pour un type précis ; les Savings Plans offrent une remise flexible contre un engagement de dépense horaire",
      "Les Savings Plans exigent un paiement total à l'avance",
      "Ils sont identiques"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0121",
    "domain": "Security & Compliance",
    "question": "Une instance EC2 doit accéder à un bucket S3 sans stocker de clés en dur ?",
    "choices": [
      "Utiliser les credentials root",
      "Coder les clés dans le user data",
      "Attacher un rôle IAM à l'instance EC2",
      "Encoder les clés en base64 dans l'environnement"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0122",
    "domain": "Cloud Technology",
    "question": "Base relationnelle compatible MySQL/PostgreSQL, jusqu'à 5x plus rapide :",
    "choices": [
      "Amazon Redshift",
      "Amazon RDS for MySQL",
      "Amazon DynamoDB",
      "Amazon Aurora"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0123",
    "domain": "Cloud Concepts",
    "question": "Qu'est-ce qu'un service « managé » chez AWS ?",
    "choices": [
      "Un service sans aucune sécurité",
      "Un service où AWS gère l'infrastructure sous-jacente, réduisant le travail opérationnel du client",
      "Un service toujours gratuit",
      "Un service que le client doit installer sur ses propres serveurs"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0124",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : centraliser et prioriser les alertes de sécurité et l'état de conformité ?",
    "choices": [
      "Amazon Macie",
      "AWS Security Hub",
      "AWS CloudTrail",
      "AWS WAF"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0125",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « la capacité augmente et diminue automatiquement en temps réel selon la charge » ?",
    "choices": [
      "Scalabilité",
      "Durabilité",
      "Haute disponibilité",
      "Élasticité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0126",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de déployer un pare-feu réseau managé et à état pour protéger un VPC ?",
    "choices": [
      "AWS Network Firewall",
      "Amazon Macie",
      "AWS Audit Manager",
      "AWS Security Hub"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0127",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS. Quel service AWS choisir ?",
    "choices": [
      "Amazon ECS",
      "AWS CloudFormation",
      "AWS Systems Manager",
      "Amazon S3 Glacier"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0128",
    "domain": "Cloud Concepts",
    "question": "Le pilier « éviter les coûts inutiles et exécuter au meilleur prix » du Well-Architected Framework est :",
    "choices": [
      "Optimisation des coûts",
      "Durabilité (Sustainability)",
      "Sécurité",
      "Fiabilité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0129",
    "domain": "Cloud Technology",
    "question": "Pour exécuter Apache Kafka managé pour le streaming de données, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon FSx",
      "Amazon MSK",
      "AWS CodeCommit",
      "AWS Service Catalog"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0130",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour filtrer le trafic web et protéger contre les injections SQL et le XSS ?",
    "choices": [
      "AWS KMS",
      "AWS Artifact",
      "AWS Audit Manager",
      "AWS WAF"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0131",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir un système de fichiers partagé élastique (NFS) monté sur plusieurs instances EC2 Linux. Quel service AWS choisir ?",
    "choices": [
      "Amazon QLDB",
      "Amazon SageMaker",
      "AWS Site-to-Site VPN",
      "Amazon EFS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0132",
    "domain": "Cloud Concepts",
    "question": "Quel pilier du AWS Well-Architected Framework vise à : « éviter les coûts inutiles et exécuter au meilleur prix » ?",
    "choices": [
      "Optimisation des coûts",
      "Durabilité (Sustainability)",
      "Sécurité",
      "Fiabilité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0133",
    "domain": "Billing & Pricing",
    "question": "Quel plan de support AWS offre : « support 24/7, réponse < 30 min pour les cas critiques et accès à un pool d'experts » ?",
    "choices": [
      "Enterprise On-Ramp",
      "Enterprise",
      "Business",
      "Basic"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0134",
    "domain": "Cloud Concepts",
    "question": "Combien de perspectives compte le AWS CAF ?",
    "choices": [
      "6 perspectives (Business, People, Governance, Platform, Security, Operations)",
      "5 domaines (Strategy, Planning, Readiness, Adoption, Optimization)",
      "3 phases (Assess, Mobilize, Migrate)",
      "4 étapes (Discover, Design, Migrate, Optimize)"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0135",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour héberger des dépôts Git privés managés ?",
    "choices": [
      "Amazon Redshift",
      "AWS CodeCommit",
      "AWS Lake Formation",
      "Amazon ECS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0136",
    "domain": "Cloud Concepts",
    "question": "Dans les stratégies de migration (les « 6 R »), laquelle consiste à : « repenser l'application pour tirer parti des services cloud natifs » ?",
    "choices": [
      "Repurchase",
      "Retain",
      "Rehost (lift-and-shift)",
      "Refactor / Re-architect"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0137",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir un IDE de développement dans le navigateur ?",
    "choices": [
      "AWS Cloud9",
      "Amazon Neptune",
      "AWS Organizations",
      "Amazon Transcribe"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0138",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour découvrir et protéger les données sensibles (PII) stockées dans Amazon S3 ?",
    "choices": [
      "AWS Firewall Manager",
      "Amazon GuardDuty",
      "Amazon Macie",
      "AWS Audit Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0139",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Shield ?",
    "choices": [
      "Gérer, configurer et exploiter les instances et ressources à grande échelle",
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0140",
    "domain": "Cloud Technology",
    "question": "AWS Lake Formation est principalement utilisé pour :",
    "choices": [
      "Personnaliser la facturation et la refacturation entre équipes ou clients",
      "Construire et sécuriser rapidement un data lake",
      "Extraire des informations et du sens d'un texte via le NLP",
      "Créer des tableaux de bord et de la Business Intelligence (BI)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0141",
    "domain": "Cloud Technology",
    "question": "AWS DMS est principalement utilisé pour :",
    "choices": [
      "Migrer des bases de données vers AWS avec un temps d'arrêt minimal",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Créer et contrôler les clés de chiffrement utilisées pour protéger les données",
      "Gérer, configurer et exploiter les instances et ressources à grande échelle"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0142",
    "domain": "Cloud Technology",
    "question": "Pour orchestrer des workflows en coordonnant plusieurs services via des machines à états, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Lambda",
      "Amazon EFS",
      "AWS Step Functions",
      "AWS Control Tower"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0143",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'accéder à des modèles de fondation (IA générative) via une API managée ?",
    "choices": [
      "Amazon Aurora",
      "AWS Glue",
      "Amazon ECS",
      "Amazon Bedrock"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0144",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS ?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Cost and Usage Report",
      "AWS Cost Explorer",
      "AWS Billing Conductor"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0145",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Cloud9 ?",
    "choices": [
      "Fournir un IDE de développement dans le navigateur",
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2",
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0146",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Lambda ?",
    "choices": [
      "Base de données",
      "Intégration d'applications",
      "Outils de développement",
      "Calcul (Compute)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0147",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de centraliser la gestion des accès SSO à plusieurs comptes et applications ?",
    "choices": [
      "AWS Directory Service",
      "AWS Audit Manager",
      "AWS Security Hub",
      "AWS IAM Identity Center"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0148",
    "domain": "Security & Compliance",
    "question": "Pour provisionner et gérer des certificats SSL/TLS pour les services AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Certificate Manager",
      "AWS Secrets Manager",
      "Amazon Cognito",
      "AWS Directory Service"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0149",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon CloudWatch ?",
    "choices": [
      "Migration et transfert",
      "Gestion des coûts et facturation",
      "Réseau et diffusion de contenu",
      "Gestion et gouvernance"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0150",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Rekognition ?",
    "choices": [
      "Fournir un moteur de recherche d'entreprise intelligent",
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Stocker et analyser des données de séries temporelles",
      "Analyser des images et vidéos (détection d'objets, visages, modération)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0151",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Lex ?",
    "choices": [
      "Machine Learning / IA",
      "Calcul (Compute)",
      "Stockage",
      "Gestion et gouvernance"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0152",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure. Quel service AWS choisir ?",
    "choices": [
      "Amazon QLDB",
      "AWS Elastic Beanstalk",
      "Amazon MSK",
      "Amazon VPC"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0153",
    "domain": "Cloud Technology",
    "question": "Quel est le timeout maximum d'une fonction AWS Lambda ?",
    "choices": [
      "15 minutes (900 secondes)",
      "60 secondes",
      "5 minutes",
      "1 heure"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0154",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour visualiser, analyser et prévoir les dépenses AWS historiques et futures ?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Marketplace",
      "AWS Pricing Calculator",
      "AWS Cost Explorer"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0155",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Neptune ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Outils de développement",
      "Base de données",
      "Gestion et gouvernance"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0156",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : accéder à un shell en ligne de commande préauthentifié depuis la console AWS ?",
    "choices": [
      "AWS Batch",
      "AWS CloudShell",
      "Amazon S3",
      "Amazon Rekognition"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0157",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de centraliser la gestion des accès SSO à plusieurs comptes et applications. Quel service AWS choisir ?",
    "choices": [
      "AWS IAM Identity Center",
      "AWS Config",
      "Amazon Cognito",
      "AWS WAF"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0158",
    "domain": "Billing & Pricing",
    "question": "Quel plan de support AWS offre : « support technique par e-mail en heures ouvrées, adapté aux tests/développement » ?",
    "choices": [
      "Enterprise",
      "Enterprise On-Ramp",
      "Business",
      "Developer"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0159",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources. Quel service AWS choisir ?",
    "choices": [
      "AWS Health Dashboard",
      "Amazon Neptune",
      "Amazon Comprehend",
      "AWS X-Ray"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0160",
    "domain": "Security & Compliance",
    "question": "Dans IAM, quel élément est défini comme : « une collection d'utilisateurs IAM permettant d'attribuer des permissions en bloc » ?",
    "choices": [
      "Utilisateur IAM",
      "Policy IAM",
      "Rôle IAM",
      "Groupe IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0161",
    "domain": "Cloud Technology",
    "question": "Pour créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CodePipeline",
      "Amazon Translate",
      "Amazon QLDB",
      "Amazon API Gateway"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0162",
    "domain": "Cloud Technology",
    "question": "Pour exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Fargate",
      "Amazon Transcribe",
      "AWS PrivateLink",
      "Amazon DynamoDB"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0163",
    "domain": "Security & Compliance",
    "question": "Où obtenir à la demande les rapports de conformité AWS (SOC, PCI DSS, ISO) ?",
    "choices": [
      "Amazon Inspector",
      "AWS Artifact",
      "AWS Trusted Advisor",
      "AWS Config"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0164",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon MSK ?",
    "choices": [
      "Exécuter Apache Kafka managé pour le streaming de données",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible",
      "Extraire automatiquement du texte et des données de documents scannés",
      "Exécuter Kubernetes managé sur AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0165",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Application Migration Service ?",
    "choices": [
      "Fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites",
      "Migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift)",
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0166",
    "domain": "Security & Compliance",
    "question": "Quelle pratique réduit le risque lié à des clés IAM compromises ?",
    "choices": [
      "Ne jamais changer les clés",
      "Stocker les clés sur un dépôt public",
      "Faire tourner régulièrement les clés d'accès (rotation)",
      "Réutiliser la même clé partout"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0167",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Route 53 ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Gestion et gouvernance",
      "Analytique",
      "Sécurité, identité et conformité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0168",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Firewall Manager ?",
    "choices": [
      "Gestion et gouvernance",
      "Outils de développement",
      "Analytique",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0169",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil ?",
    "choices": [
      "AWS Compute Optimizer",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0170",
    "domain": "Cloud Concepts",
    "question": "Le AWS Cloud Adoption Framework (CAF) s'organise selon combien de perspectives ?",
    "choices": [
      "6 perspectives (Business, People, Governance, Platform, Security, Operations)",
      "3 phases (Assess, Mobilize, Migrate)",
      "4 étapes (Discover, Design, Migrate, Optimize)",
      "5 domaines (Strategy, Planning, Readiness, Adoption, Optimization)"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0171",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de gérer, configurer et exploiter les instances et ressources à grande échelle ?",
    "choices": [
      "AWS Systems Manager",
      "Amazon Timestream",
      "Amazon Transcribe",
      "Amazon SNS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0172",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Transcribe ?",
    "choices": [
      "Convertir de la parole en texte (speech-to-text)",
      "Convertir du texte en parole réaliste (text-to-speech)",
      "Exécuter Apache Kafka managé pour le streaming de données",
      "Gérer et regrouper de façon centralisée plusieurs comptes AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0173",
    "domain": "Billing & Pricing",
    "question": "Qu'est-ce qu'un Compute Savings Plan ?",
    "choices": [
      "Une capacité réservée dans une seule AZ",
      "Un engagement sur un type d'instance dans une seule région",
      "L'usage exclusif du Spot",
      "Un engagement horaire de calcul (1 ou 3 ans) flexible sur le type d'instance, la région et le service, contre une remise"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0174",
    "domain": "Cloud Technology",
    "question": "AWS CodePipeline est principalement utilisé pour :",
    "choices": [
      "Automatiser des pipelines d'intégration et de livraison continues (CI/CD)",
      "Fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide",
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0175",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet de fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites ?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Compute Optimizer"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0176",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'automatiser et accélérer le transfert de données entre le sur site et AWS ?",
    "choices": [
      "Amazon Comprehend",
      "Amazon Neptune",
      "AWS DataSync",
      "Amazon QLDB"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0177",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS DMS ?",
    "choices": [
      "Construire des interfaces conversationnelles (chatbots) vocales et textuelles",
      "Collecter et traiter des flux de données en temps réel (streaming)",
      "Migrer des bases de données vers AWS avec un temps d'arrêt minimal",
      "Configurer et gouverner un environnement multi-comptes sécurisé (landing zone)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0178",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin d'analyser et investiguer la cause racine d'incidents de sécurité. Quel service AWS choisir ?",
    "choices": [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "Amazon Detective",
      "AWS CloudHSM"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0179",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « une application continue de répondre même pendant la maintenance d'un composant » ?",
    "choices": [
      "Scalabilité",
      "Durabilité",
      "Tolérance aux pannes",
      "Haute disponibilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0180",
    "domain": "Cloud Concepts",
    "question": "Qu'est-ce que le TCO (Total Cost of Ownership) ?",
    "choices": [
      "Uniquement le prix horaire d'une instance",
      "Le prix d'un bucket S3",
      "Le coût total de possession incluant les coûts directs et indirects sur toute la durée de vie",
      "Le coût du support Enterprise"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0181",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Auto Scaling ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Machine Learning / IA",
      "Gestion et gouvernance",
      "Gestion des coûts et facturation"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0182",
    "domain": "Billing & Pricing",
    "question": "Le cloud transforme surtout les dépenses de :",
    "choices": [
      "CapEx (investissement) vers OpEx (dépenses variables)",
      "Coûts fixes vers coûts nuls",
      "Variables vers fixes garantis",
      "OpEx vers CapEx"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0183",
    "domain": "Cloud Technology",
    "question": "Quelle fonctionnalité S3 conserve plusieurs versions d'un objet ?",
    "choices": [
      "S3 Replication",
      "S3 Versioning",
      "S3 Lifecycle",
      "S3 Object Lock"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0184",
    "domain": "Cloud Technology",
    "question": "Amazon Bedrock est principalement utilisé pour :",
    "choices": [
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés",
      "Gérer de façon centralisée les règles de pare-feu sur plusieurs comptes",
      "Accéder à des modèles de fondation (IA générative) via une API managée"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0185",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'extraire des informations et du sens d'un texte via le NLP ?",
    "choices": [
      "Amazon Comprehend",
      "Elastic Load Balancing",
      "Amazon SageMaker",
      "Amazon EventBridge"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0186",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour gérer, configurer et exploiter les instances et ressources à grande échelle ?",
    "choices": [
      "AWS CodePipeline",
      "AWS Cloud9",
      "Amazon EMR",
      "AWS Systems Manager"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0187",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour collecter et traiter des flux de données en temps réel (streaming) ?",
    "choices": [
      "Amazon VPC",
      "AWS DataSync",
      "Amazon EBS",
      "Amazon Kinesis"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0188",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : détecter les menaces en analysant en continu l'activité malveillante et anormale ?",
    "choices": [
      "Amazon GuardDuty",
      "AWS Artifact",
      "AWS Security Hub",
      "AWS IAM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0189",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Health Dashboard ?",
    "choices": [
      "Exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents",
      "Donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible",
      "Distribuer du contenu avec faible latence via un réseau CDN d'emplacements Edge"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0190",
    "domain": "Cloud Technology",
    "question": "AWS DataSync est principalement utilisé pour :",
    "choices": [
      "Créer et contrôler les clés de chiffrement utilisées pour protéger les données",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Archiver des données à très faible coût pour un accès peu fréquent",
      "Ajuster automatiquement la capacité pour maintenir performance et coûts optimaux"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0191",
    "domain": "Security & Compliance",
    "question": "Quel composant IAM correspond à : « une identité représentant une personne/application avec des credentials à long terme » ?",
    "choices": [
      "Policy IAM",
      "Rôle IAM",
      "Groupe IAM",
      "Utilisateur IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0192",
    "domain": "Cloud Concepts",
    "question": "Quel élément de l'infrastructure mondiale AWS correspond à : « un point de présence utilisé par CloudFront pour mettre en cache le contenu près des utilisateurs » ?",
    "choices": [
      "Région AWS",
      "Emplacement périphérique (Edge location)",
      "Zone de disponibilité (AZ)",
      "Local Zone"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0193",
    "domain": "Cloud Technology",
    "question": "AWS Organizations est principalement utilisé pour :",
    "choices": [
      "Héberger des dépôts Git privés managés",
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS",
      "Exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution",
      "Gérer et regrouper de façon centralisée plusieurs comptes AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0194",
    "domain": "Cloud Technology",
    "question": "Elastic Load Balancing est principalement utilisé pour :",
    "choices": [
      "Fournir un moteur de recherche d'entreprise intelligent",
      "Gérer une base de données de graphes managée",
      "Fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde",
      "Répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0195",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud ?",
    "choices": [
      "Amazon RDS",
      "Amazon EC2",
      "Amazon Kendra",
      "AWS Outposts"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0196",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Site-to-Site VPN ?",
    "choices": [
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés",
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Découvrir et protéger les données sensibles (PII) stockées dans Amazon S3",
      "Créer un tunnel VPN chiffré entre un réseau sur site et un VPC"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0197",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ ?",
    "choices": [
      "Amazon VPC",
      "AWS Glue",
      "Amazon EBS",
      "Elastic Load Balancing"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0198",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon SQS ?",
    "choices": [
      "Outils de développement",
      "Intégration d'applications",
      "Migration et transfert",
      "Machine Learning / IA"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0199",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : gérer et regrouper de façon centralisée plusieurs comptes AWS ?",
    "choices": [
      "AWS Organizations",
      "AWS Glue",
      "Amazon Lex",
      "Amazon EMR"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0200",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Directory Service ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Réseau et diffusion de contenu",
      "Base de données",
      "Gestion des coûts et facturation"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0201",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient Amazon Inspector ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Migration et transfert",
      "Calcul (Compute)",
      "Gestion des coûts et facturation"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0202",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Redshift ?",
    "choices": [
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Acheter et déployer des logiciels tiers avec une facturation via AWS",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Collecter et traiter des flux de données en temps réel (streaming)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0203",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « Amazon S3 conserve les objets sans perte grâce à une réplication (11 neuf) » ?",
    "choices": [
      "Tolérance aux pannes",
      "Scalabilité",
      "Agilité",
      "Durabilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0204",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Network Firewall ?",
    "choices": [
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution",
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Extraire des informations et du sens d'un texte via le NLP"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0205",
    "domain": "Security & Compliance",
    "question": "Pour détecter les menaces en analysant en continu l'activité malveillante et anormale, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Certificate Manager",
      "AWS CloudHSM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0206",
    "domain": "Security & Compliance",
    "question": "Quel service protège une application web contre les injections SQL et le XSS ?",
    "choices": [
      "AWS Shield Standard",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Network Firewall"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0207",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour exécuter Apache Kafka managé pour le streaming de données ?",
    "choices": [
      "AWS CodeDeploy",
      "Amazon MSK",
      "Amazon Redshift",
      "Amazon EBS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0208",
    "domain": "Security & Compliance",
    "question": "Dans IAM, quel élément est défini comme : « un document JSON définissant les permissions (allow/deny) » ?",
    "choices": [
      "Policy IAM",
      "Groupe IAM",
      "Rôle IAM",
      "Utilisateur IAM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0209",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Step Functions ?",
    "choices": [
      "Accéder à des modèles de fondation (IA générative) via une API managée",
      "Router des événements entre applications via un bus d'événements serverless",
      "Fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés",
      "Orchestrer des workflows en coordonnant plusieurs services via des machines à états"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0210",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour gérer l'authentification et les identités des utilisateurs d'applications web et mobiles ?",
    "choices": [
      "Amazon Inspector",
      "Amazon Macie",
      "Amazon Cognito",
      "AWS CloudHSM"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0211",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : gérer une base de données de graphes managée ?",
    "choices": [
      "Amazon Neptune",
      "Amazon VPC",
      "Amazon FSx",
      "AWS Organizations"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0212",
    "domain": "Cloud Concepts",
    "question": "Quel pilier du AWS Well-Architected Framework vise à : « protéger les informations, les systèmes et les actifs via la gestion des risques » ?",
    "choices": [
      "Fiabilité",
      "Excellence opérationnelle",
      "Sécurité",
      "Optimisation des coûts"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0213",
    "domain": "Cloud Concepts",
    "question": "Dans les stratégies de migration (les « 6 R »), laquelle consiste à : « remplacer l'application par une solution SaaS » ?",
    "choices": [
      "Retire",
      "Repurchase",
      "Retain",
      "Replatform"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0214",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour provisionner l'infrastructure via des templates (Infrastructure as Code) ?",
    "choices": [
      "Amazon Translate",
      "Amazon EKS",
      "AWS Global Accelerator",
      "AWS CloudFormation"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0215",
    "domain": "Cloud Technology",
    "question": "Pour fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS), quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CodePipeline",
      "Amazon S3",
      "Amazon FSx",
      "AWS Transit Gateway"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0216",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.). Quel service AWS choisir ?",
    "choices": [
      "Amazon MQ",
      "Amazon RDS",
      "Amazon Polly",
      "Amazon VPC"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0217",
    "domain": "Cloud Technology",
    "question": "Pilier IaC : quel service définit l'infra avec des langages courants (Python, TS) ?",
    "choices": [
      "AWS CDK",
      "AWS CloudFormation console uniquement",
      "AWS Config",
      "Amazon CloudWatch"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0218",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Config ?",
    "choices": [
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible",
      "Fournir une base de données de documents compatible MongoDB"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0219",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé ?",
    "choices": [
      "AWS Lake Formation",
      "Amazon SageMaker",
      "AWS Snowball",
      "AWS DMS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0220",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir un système de fichiers partagé élastique (NFS) monté sur plusieurs instances EC2 Linux ?",
    "choices": [
      "Amazon Redshift",
      "AWS Systems Manager",
      "Amazon FSx",
      "Amazon EFS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0221",
    "domain": "Cloud Technology",
    "question": "Pour centraliser et automatiser les sauvegardes de plusieurs services AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon RDS",
      "AWS Backup",
      "AWS CloudFormation",
      "Amazon Textract"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0222",
    "domain": "Cloud Technology",
    "question": "AWS Health Dashboard est principalement utilisé pour :",
    "choices": [
      "Donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources",
      "Étendre l'infrastructure et les services AWS dans votre propre data center sur site",
      "Exécuter Apache Kafka managé pour le streaming de données",
      "Migrer des bases de données vers AWS avec un temps d'arrêt minimal"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0223",
    "domain": "Billing & Pricing",
    "question": "Différence entre Dedicated Host et Dedicated Instance ?",
    "choices": [
      "Le Dedicated Host est du serverless",
      "Ils sont identiques",
      "Le Dedicated Host donne la visibilité et le contrôle du serveur physique (utile pour les licences) ; la Dedicated Instance isole juste le matériel",
      "La Dedicated Instance coûte toujours plus cher"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0224",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Audit Manager ?",
    "choices": [
      "Analytique",
      "Base de données",
      "Outils de développement",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0225",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de découvrir et protéger les données sensibles (PII) stockées dans Amazon S3 ?",
    "choices": [
      "AWS CloudTrail",
      "Amazon Macie",
      "AWS Firewall Manager",
      "Amazon Detective"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0226",
    "domain": "Cloud Technology",
    "question": "Quelle classe de stockage Amazon S3 convient à : « des données peu consultées mais devant rester rapidement accessibles » ?",
    "choices": [
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Instant Retrieval"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0227",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.) ?",
    "choices": [
      "Amazon RDS",
      "Amazon EFS",
      "Amazon QuickSight",
      "Amazon Textract"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0228",
    "domain": "Cloud Concepts",
    "question": "Différence entre haute disponibilité et tolérance aux pannes ?",
    "choices": [
      "La HA ignore la redondance",
      "La HA minimise les interruptions ; la tolérance aux pannes vise un fonctionnement continu malgré une panne de composant",
      "Elles sont identiques",
      "La tolérance aux pannes augmente les interruptions"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0229",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud ?",
    "choices": [
      "Amazon OpenSearch Service",
      "Amazon ElastiCache",
      "AWS CloudFormation",
      "Amazon EC2"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0230",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon MemoryDB ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Gestion et gouvernance",
      "Migration et transfert",
      "Base de données"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0231",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources ?",
    "choices": [
      "Amazon Comprehend",
      "Amazon Rekognition",
      "AWS Storage Gateway",
      "AWS Health Dashboard"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0232",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Site-to-Site VPN ?",
    "choices": [
      "Analytique",
      "Base de données",
      "Réseau et diffusion de contenu",
      "Machine Learning / IA"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0233",
    "domain": "Cloud Concepts",
    "question": "Le pilier « exécuter, surveiller et améliorer continuellement les processus et procédures » du Well-Architected Framework est :",
    "choices": [
      "Sécurité",
      "Excellence opérationnelle",
      "Fiabilité",
      "Optimisation des coûts"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0234",
    "domain": "Security & Compliance",
    "question": "Comment AWS aide-t-il à respecter des normes comme PCI DSS, HIPAA ou ISO 27001 ?",
    "choices": [
      "En fournissant une infrastructure conforme et les rapports d'audit via AWS Artifact",
      "En rendant la conformité inutile",
      "En chiffrant automatiquement toutes les données client",
      "En supprimant le besoin de contrôles côté client"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0235",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de lancer rapidement des serveurs virtuels simples à prix fixe et prévisible. Quel service AWS choisir ?",
    "choices": [
      "AWS Snowball",
      "Amazon OpenSearch Service",
      "Amazon Lightsail",
      "AWS Global Accelerator"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0236",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'exécuter Apache Kafka managé pour le streaming de données ?",
    "choices": [
      "AWS CloudShell",
      "AWS Direct Connect",
      "Amazon MSK",
      "AWS Elastic Beanstalk"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0237",
    "domain": "Security & Compliance",
    "question": "Bonne pratique de sécurité : quelle pratique réduit le risque lié à des clés iam compromises ?",
    "choices": [
      "Stocker les clés sur un dépôt public",
      "Réutiliser la même clé partout",
      "Faire tourner régulièrement les clés d'accès (rotation)",
      "Ne jamais changer les clés"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0238",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles. Quel service AWS choisir ?",
    "choices": [
      "AWS Step Functions",
      "Amazon VPC",
      "Amazon MQ",
      "AWS Global Accelerator"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0239",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir un broker de messages managé compatible ActiveMQ et RabbitMQ ?",
    "choices": [
      "AWS Step Functions",
      "Amazon Bedrock",
      "Amazon QuickSight",
      "Amazon MQ"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0240",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud est illustré par : « une plateforme managée pour déployer des applications sans gérer l'infrastructure (ex : Elastic Beanstalk) » ?",
    "choices": [
      "SaaS",
      "FaaS",
      "IaaS",
      "PaaS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0241",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour gérer de façon centralisée les règles de pare-feu sur plusieurs comptes ?",
    "choices": [
      "AWS Certificate Manager",
      "AWS Firewall Manager",
      "AWS Directory Service",
      "AWS Artifact"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0242",
    "domain": "Security & Compliance",
    "question": "AWS est responsable de la sécurité « DU » cloud, le client de la sécurité « DANS » le cloud. Cela signifie :",
    "choices": [
      "AWS sécurise l'infrastructure sous-jacente ; le client sécurise ses données, configurations et accès",
      "Aucun des deux n'est responsable",
      "Le client sécurise le matériel physique",
      "AWS chiffre toutes les données client automatiquement"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0243",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de créer des tableaux de bord et de la Business Intelligence (BI) ?",
    "choices": [
      "AWS Control Tower",
      "AWS CodePipeline",
      "Amazon Transcribe",
      "Amazon QuickSight"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0244",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud ?",
    "choices": [
      "AWS Outposts",
      "AWS DMS",
      "Amazon EC2",
      "Amazon EventBridge"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0245",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de gérer de façon centralisée les règles de pare-feu sur plusieurs comptes. Quel service AWS choisir ?",
    "choices": [
      "AWS KMS",
      "AWS CloudHSM",
      "AWS Firewall Manager",
      "AWS Audit Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0246",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure ?",
    "choices": [
      "AWS Elastic Beanstalk",
      "Amazon Timestream",
      "AWS Application Migration Service",
      "Amazon SQS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0247",
    "domain": "Security & Compliance",
    "question": "Une Network ACL agit comme :",
    "choices": [
      "Un CDN",
      "Un pare-feu sans état (stateless) au niveau du sous-réseau, avec règles allow et deny",
      "Un pare-feu à état au niveau de l'instance",
      "Un service de chiffrement"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0248",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de convertir de la parole en texte (speech-to-text) ?",
    "choices": [
      "Amazon VPC",
      "Amazon Transcribe",
      "Amazon QuickSight",
      "Amazon ECS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0249",
    "domain": "Security & Compliance",
    "question": "Quel composant IAM correspond à : « une collection d'utilisateurs IAM permettant d'attribuer des permissions en bloc » ?",
    "choices": [
      "Utilisateur IAM",
      "Rôle IAM",
      "Groupe IAM",
      "Policy IAM"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0250",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de traiter du big data avec des frameworks comme Apache Spark et Hadoop ?",
    "choices": [
      "Amazon EMR",
      "Amazon FSx",
      "Amazon RDS",
      "Amazon MSK"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0251",
    "domain": "Billing & Pricing",
    "question": "Les trois types d'offres du niveau gratuit (Free Tier) sont :",
    "choices": [
      "Uniquement gratuit à vie",
      "Uniquement des crédits startups",
      "Gratuit 12 mois, toujours gratuit (always free) et essais courts (trials)",
      "Uniquement 30 jours d'essai"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0252",
    "domain": "Security & Compliance",
    "question": "AWS Artifact est principalement utilisé pour :",
    "choices": [
      "Héberger des dépôts Git privés managés",
      "Fournir un moteur de recherche d'entreprise intelligent",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Accéder à des modèles de fondation (IA générative) via une API managée"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0253",
    "domain": "Cloud Technology",
    "question": "Pour traduire du texte entre langues automatiquement, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Lightsail",
      "Amazon VPC",
      "Amazon Translate",
      "AWS CloudFormation"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0254",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Budgets ?",
    "choices": [
      "Exécuter Apache Kafka managé pour le streaming de données",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0255",
    "domain": "Cloud Concepts",
    "question": "Quel pilier du AWS Well-Architected Framework vise à : « réduire l'impact environnemental des charges de travail » ?",
    "choices": [
      "Efficacité des performances",
      "Fiabilité",
      "Excellence opérationnelle",
      "Durabilité (Sustainability)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0256",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon VPC ?",
    "choices": [
      "Migration et transfert",
      "Réseau et diffusion de contenu",
      "Calcul (Compute)",
      "Analytique"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0257",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Cost and Usage Report ?",
    "choices": [
      "Gestion et gouvernance",
      "Outils de développement",
      "Migration et transfert",
      "Gestion des coûts et facturation"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0258",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de distribuer du contenu avec faible latence via un réseau CDN d'emplacements Edge. Quel service AWS choisir ?",
    "choices": [
      "Amazon CloudFront",
      "AWS Snowball",
      "Amazon QLDB",
      "Amazon Aurora"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0259",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon EventBridge ?",
    "choices": [
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure",
      "Router des événements entre applications via un bus d'événements serverless",
      "Configurer et gouverner un environnement multi-comptes sécurisé (landing zone)",
      "Donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0260",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Marketplace ?",
    "choices": [
      "Migration et transfert",
      "Base de données",
      "Gestion des coûts et facturation",
      "Analytique"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0261",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « la capacité augmente et diminue automatiquement en temps réel selon la charge » ?",
    "choices": [
      "Scalabilité",
      "Haute disponibilité",
      "Durabilité",
      "Élasticité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0262",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : personnaliser la facturation et la refacturation entre équipes ou clients ?",
    "choices": [
      "AWS Billing Conductor",
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor",
      "AWS Cost Explorer"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0263",
    "domain": "Cloud Technology",
    "question": "Quelle classe de stockage Amazon S3 convient à : « des archives rarement lues mais nécessitant un accès en millisecondes » ?",
    "choices": [
      "S3 Glacier Instant Retrieval",
      "S3 One Zone-IA",
      "S3 Standard",
      "S3 Glacier Deep Archive"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0264",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS ?",
    "choices": [
      "AWS Security Hub",
      "AWS Certificate Manager",
      "AWS Firewall Manager",
      "AWS CloudTrail"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0265",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon SageMaker ?",
    "choices": [
      "Outils de développement",
      "Machine Learning / IA",
      "Réseau et diffusion de contenu",
      "Gestion des coûts et facturation"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0266",
    "domain": "Cloud Concepts",
    "question": "Parmi les avantages du cloud, lequel décrit : « vous déployez dans plusieurs régions AWS en quelques clics » ?",
    "choices": [
      "Se déployer mondialement en quelques minutes",
      "Arrêter de dépenser pour exploiter des data centers",
      "Arrêter de deviner la capacité",
      "Bénéficier d'économies d'échelle massives"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0267",
    "domain": "Security & Compliance",
    "question": "AWS Audit Manager est principalement utilisé pour :",
    "choices": [
      "Automatiser la collecte de preuves pour les audits de conformité",
      "Fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites",
      "Fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde",
      "Fournir une base en mémoire compatible Redis, durable et persistante"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0268",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.) ?",
    "choices": [
      "AWS CloudShell",
      "Amazon Bedrock",
      "Amazon RDS",
      "AWS PrivateLink"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0269",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Comprehend ?",
    "choices": [
      "Machine Learning / IA",
      "Analytique",
      "Intégration d'applications",
      "Calcul (Compute)"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0270",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon CloudFront ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Calcul (Compute)",
      "Analytique",
      "Réseau et diffusion de contenu"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0271",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon SQS ?",
    "choices": [
      "Orchestrer des workflows en coordonnant plusieurs services via des machines à états",
      "Découpler les composants via une file d'attente de messages (point-à-point)",
      "Automatiser des pipelines d'intégration et de livraison continues (CI/CD)",
      "Créer des tableaux de bord et de la Business Intelligence (BI)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0272",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de détecter les menaces en analysant en continu l'activité malveillante et anormale. Quel service AWS choisir ?",
    "choices": [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "Amazon Cognito",
      "Amazon Macie"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0273",
    "domain": "Cloud Technology",
    "question": "Pour fournir une base en mémoire compatible Redis, durable et persistante, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon MemoryDB",
      "AWS CloudFormation",
      "AWS Control Tower",
      "Amazon API Gateway"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0274",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Elastic Load Balancing ?",
    "choices": [
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures",
      "Répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ",
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0275",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Service Catalog ?",
    "choices": [
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données",
      "Fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS)",
      "Surveiller les métriques, journaux et alarmes des ressources et applications AWS",
      "Créer et gérer des catalogues de produits IT approuvés pour le déploiement"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0276",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Elastic Beanstalk ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Outils de développement",
      "Calcul (Compute)",
      "Gestion des coûts et facturation"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0277",
    "domain": "Cloud Technology",
    "question": "Pour gérer, configurer et exploiter les instances et ressources à grande échelle, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Global Accelerator",
      "AWS Systems Manager",
      "AWS PrivateLink",
      "AWS X-Ray"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0278",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin d'automatiser la collecte de preuves pour les audits de conformité. Quel service AWS choisir ?",
    "choices": [
      "AWS Secrets Manager",
      "Amazon GuardDuty",
      "AWS Audit Manager",
      "Amazon Cognito"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0279",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour automatiser la collecte de preuves pour les audits de conformité ?",
    "choices": [
      "Amazon Inspector",
      "AWS Shield",
      "AWS Audit Manager",
      "Amazon GuardDuty"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0280",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Global Accelerator ?",
    "choices": [
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Fournir une base en mémoire compatible Redis, durable et persistante",
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS",
      "Améliorer la performance en routant le trafic via le backbone privé AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0281",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon MQ ?",
    "choices": [
      "Outils de développement",
      "Réseau et diffusion de contenu",
      "Intégration d'applications",
      "Sécurité, identité et conformité"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0282",
    "domain": "Cloud Technology",
    "question": "Orchestrer un workflow multi-étapes entre plusieurs services AWS :",
    "choices": [
      "Amazon SQS seul",
      "Amazon S3",
      "Amazon Route 53",
      "AWS Step Functions"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0283",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : stocker des objets de manière durable et hautement disponible dans des buckets ?",
    "choices": [
      "AWS Elastic Beanstalk",
      "Amazon Aurora",
      "Amazon S3",
      "Amazon API Gateway"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0284",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon EKS ?",
    "choices": [
      "Calcul (Compute)",
      "Stockage",
      "Machine Learning / IA",
      "Analytique"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0285",
    "domain": "Security & Compliance",
    "question": "Différence entre AWS Shield Standard et Shield Advanced ?",
    "choices": [
      "Standard utilise le ML ; Advanced des règles statiques",
      "Standard est gratuit et activé automatiquement ; Advanced ajoute une protection DDoS étendue, un support 24/7 et une protection financière (payant)",
      "Advanced est gratuit pour tous",
      "Standard protège seulement EC2 ; tous deux gratuits"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0286",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : lancer rapidement des serveurs virtuels simples à prix fixe et prévisible ?",
    "choices": [
      "Amazon SNS",
      "Amazon Lightsail",
      "AWS CodeBuild",
      "AWS DMS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0287",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Translate ?",
    "choices": [
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.)",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible",
      "Traduire du texte entre langues automatiquement"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0288",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « le système continue sans interruption même quand un composant tombe en panne » ?",
    "choices": [
      "Haute disponibilité",
      "Élasticité",
      "Durabilité",
      "Tolérance aux pannes"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0289",
    "domain": "Security & Compliance",
    "question": "Différence principale entre AWS KMS et AWS Secrets Manager ?",
    "choices": [
      "Secrets Manager gère les clés ; KMS stocke les logs",
      "KMS gère les clés de chiffrement ; Secrets Manager stocke et fait tourner des secrets",
      "KMS stocke des mots de passe ; Secrets Manager gère les certificats",
      "Ils sont identiques"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0290",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de créer et contrôler les clés de chiffrement utilisées pour protéger les données ?",
    "choices": [
      "AWS KMS",
      "AWS Artifact",
      "AWS Certificate Manager",
      "AWS Audit Manager"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0291",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon QLDB ?",
    "choices": [
      "Établir une connexion réseau dédiée et privée entre un site et AWS",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Gérer les identités, les accès et les permissions aux ressources AWS",
      "Construire, entraîner et déployer des modèles de machine learning"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0292",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de migrer des bases de données vers AWS avec un temps d'arrêt minimal ?",
    "choices": [
      "Amazon SQS",
      "AWS X-Ray",
      "Amazon Comprehend",
      "AWS DMS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0293",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Network Firewall ?",
    "choices": [
      "Migration et transfert",
      "Sécurité, identité et conformité",
      "Gestion et gouvernance",
      "Réseau et diffusion de contenu"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0294",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La sécurité physique des data centers » ?",
    "choices": [
      "Un fournisseur tiers non AWS",
      "Le client",
      "AWS",
      "Personne, c'est automatique"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0295",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés. Quel service AWS choisir ?",
    "choices": [
      "AWS WAF",
      "Amazon Detective",
      "AWS CloudHSM",
      "AWS Secrets Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0296",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : connecter des applications sur site au stockage cloud AWS de façon hybride ?",
    "choices": [
      "AWS Fargate",
      "AWS CodePipeline",
      "AWS Storage Gateway",
      "AWS Glue"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0297",
    "domain": "Cloud Technology",
    "question": "Pour « des données peu consultées et recréables, stockées dans une seule AZ à moindre coût », quelle classe S3 choisir ?",
    "choices": [
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA",
      "S3 Glacier Instant Retrieval",
      "S3 Intelligent-Tiering"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0298",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures ?",
    "choices": [
      "AWS CodePipeline",
      "Amazon EventBridge",
      "Amazon ElastiCache",
      "Amazon ECS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0299",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Config ?",
    "choices": [
      "Intégration d'applications",
      "Réseau et diffusion de contenu",
      "Sécurité, identité et conformité",
      "Gestion des coûts et facturation"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0300",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Cognito ?",
    "choices": [
      "Convertir de la parole en texte (speech-to-text)",
      "Gérer l'authentification et les identités des utilisateurs d'applications web et mobiles",
      "Estimer le coût d'une architecture AWS avant son déploiement",
      "Créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0301",
    "domain": "Cloud Technology",
    "question": "Pour fournir une base de données compatible Apache Cassandra managée, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Storage Gateway",
      "AWS Outposts",
      "Amazon Keyspaces",
      "Amazon CloudWatch"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0302",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic ?",
    "choices": [
      "Amazon Rekognition",
      "Amazon Route 53",
      "AWS Outposts",
      "Amazon Kinesis"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0303",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet de définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil ?",
    "choices": [
      "AWS Marketplace",
      "AWS Cost Explorer",
      "AWS Billing Conductor",
      "AWS Budgets"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0304",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'exécuter Kubernetes managé sur AWS ?",
    "choices": [
      "AWS CodeDeploy",
      "Amazon EKS",
      "AWS X-Ray",
      "AWS Cloud9"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0305",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour traduire du texte entre langues automatiquement ?",
    "choices": [
      "Amazon Translate",
      "AWS DMS",
      "AWS Glue",
      "Amazon SQS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0306",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de traiter du big data avec des frameworks comme Apache Spark et Hadoop. Quel service AWS choisir ?",
    "choices": [
      "Amazon Transcribe",
      "AWS Site-to-Site VPN",
      "AWS Service Catalog",
      "Amazon EMR"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0307",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Cost Explorer ?",
    "choices": [
      "Fournir un système de fichiers partagé élastique (NFS) monté sur plusieurs instances EC2 Linux",
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0308",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Security Hub ?",
    "choices": [
      "Transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé",
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil",
      "Centraliser et prioriser les alertes de sécurité et l'état de conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0309",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « une application ajoute puis retire automatiquement des serveurs selon les pics de trafic » ?",
    "choices": [
      "Tolérance aux pannes",
      "Élasticité",
      "Haute disponibilité",
      "Durabilité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0310",
    "domain": "Billing & Pricing",
    "question": "Pour quelle charge les instances Spot sont-elles idéales ?",
    "choices": [
      "Des traitements par lots/rendu/simulation interruptibles et relançables",
      "Une base de production critique",
      "Un serveur d'authentification permanent",
      "Un site avec SLA 99,99 %"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0311",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour détecter les menaces en analysant en continu l'activité malveillante et anormale ?",
    "choices": [
      "AWS CloudHSM",
      "Amazon GuardDuty",
      "Amazon Detective",
      "Amazon Macie"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0312",
    "domain": "Cloud Concepts",
    "question": "Que mesure le RTO (Recovery Time Objective) ?",
    "choices": [
      "Le débit réseau maximal",
      "Le temps maximal acceptable pour restaurer le service après un incident",
      "La quantité maximale de données que l'on accepte de perdre",
      "Le coût d'une instance"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0313",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de découvrir et protéger les données sensibles (PII) stockées dans Amazon S3. Quel service AWS choisir ?",
    "choices": [
      "AWS Directory Service",
      "AWS CloudHSM",
      "Amazon Cognito",
      "Amazon Macie"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0314",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de centraliser et automatiser les sauvegardes de plusieurs services AWS ?",
    "choices": [
      "Amazon EBS",
      "Amazon Transcribe",
      "Amazon VPC",
      "AWS Backup"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0315",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ ?",
    "choices": [
      "Amazon ElastiCache",
      "AWS Direct Connect",
      "Elastic Load Balancing",
      "Amazon Timestream"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0316",
    "domain": "Security & Compliance",
    "question": "Pour évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs), quel service AWS est le plus approprié ?",
    "choices": [
      "AWS KMS",
      "Amazon Inspector",
      "AWS Audit Manager",
      "AWS CloudTrail"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0317",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Backup ?",
    "choices": [
      "Construire et sécuriser rapidement un data lake",
      "Centraliser et automatiser les sauvegardes de plusieurs services AWS",
      "Héberger des dépôts Git privés managés",
      "Fournir Microsoft Active Directory managé dans le cloud AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0318",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de construire des interfaces conversationnelles (chatbots) vocales et textuelles ?",
    "choices": [
      "Amazon Textract",
      "Amazon Lex",
      "Amazon FSx",
      "Amazon EKS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0319",
    "domain": "Security & Compliance",
    "question": "Pour découvrir et protéger les données sensibles (PII) stockées dans Amazon S3, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Shield",
      "AWS Firewall Manager",
      "Amazon Macie",
      "AWS Certificate Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0320",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles ?",
    "choices": [
      "Amazon OpenSearch Service",
      "Amazon Neptune",
      "Amazon VPC",
      "Amazon MQ"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0321",
    "domain": "Security & Compliance",
    "question": "AWS WAF est principalement utilisé pour :",
    "choices": [
      "Gérer et regrouper de façon centralisée plusieurs comptes AWS",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS",
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS",
      "Transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0322",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de router des événements entre applications via un bus d'événements serverless ?",
    "choices": [
      "Amazon S3 Glacier",
      "Amazon Rekognition",
      "Amazon Redshift",
      "Amazon EventBridge"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0323",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon DocumentDB ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Machine Learning / IA",
      "Gestion des coûts et facturation",
      "Base de données"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0324",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de traduire du texte entre langues automatiquement ?",
    "choices": [
      "Amazon S3",
      "AWS DMS",
      "Amazon Keyspaces",
      "Amazon Translate"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0325",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de provisionner et gérer des certificats SSL/TLS pour les services AWS ?",
    "choices": [
      "AWS Certificate Manager",
      "AWS IAM Identity Center",
      "AWS Secrets Manager",
      "AWS KMS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0326",
    "domain": "Cloud Concepts",
    "question": "Parmi les avantages du cloud, lequel décrit : « l'usage agrégé de nombreux clients AWS fait baisser les prix (pay-as-you-go) » ?",
    "choices": [
      "Arrêter de deviner la capacité",
      "Arrêter de dépenser pour exploiter des data centers",
      "Bénéficier d'économies d'échelle massives",
      "Augmenter la vitesse et l'agilité"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0327",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Redshift ?",
    "choices": [
      "Gestion et gouvernance",
      "Outils de développement",
      "Base de données",
      "Machine Learning / IA"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0328",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS) ?",
    "choices": [
      "Amazon S3 Glacier",
      "AWS CodeCommit",
      "Amazon MQ",
      "Amazon FSx"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0329",
    "domain": "Cloud Technology",
    "question": "Pour mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon EC2",
      "AWS DataSync",
      "AWS Outposts",
      "Amazon ElastiCache"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0330",
    "domain": "Cloud Technology",
    "question": "Amazon Comprehend est principalement utilisé pour :",
    "choices": [
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3",
      "Convertir de la parole en texte (speech-to-text)",
      "Extraire des informations et du sens d'un texte via le NLP",
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0331",
    "domain": "Cloud Concepts",
    "question": "Dans les stratégies de migration (les « 6 R »), laquelle consiste à : « conserver certaines applications sur site pour l'instant » ?",
    "choices": [
      "Rehost (lift-and-shift)",
      "Retire",
      "Replatform",
      "Retain"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0332",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS ?",
    "choices": [
      "Amazon Timestream",
      "Amazon ECS",
      "Amazon S3",
      "AWS Outposts"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0333",
    "domain": "Cloud Concepts",
    "question": "Quel pilier du AWS Well-Architected Framework vise à : « utiliser efficacement les ressources et maintenir cette efficacité dans le temps » ?",
    "choices": [
      "Optimisation des coûts",
      "Excellence opérationnelle",
      "Efficacité des performances",
      "Durabilité (Sustainability)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0334",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de connecter des applications sur site au stockage cloud AWS de façon hybride ?",
    "choices": [
      "Amazon DynamoDB",
      "Amazon Kendra",
      "AWS Storage Gateway",
      "AWS Lambda"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0335",
    "domain": "Cloud Technology",
    "question": "AWS Global Accelerator est principalement utilisé pour :",
    "choices": [
      "Donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources",
      "Fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés",
      "Améliorer la performance en routant le trafic via le backbone privé AWS",
      "Accéder à des modèles de fondation (IA générative) via une API managée"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0336",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de configurer et gouverner un environnement multi-comptes sécurisé (landing zone) ?",
    "choices": [
      "Amazon SQS",
      "AWS Control Tower",
      "Amazon Timestream",
      "Amazon Aurora"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0337",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de gérer une base de données de graphes managée. Quel service AWS choisir ?",
    "choices": [
      "AWS Service Catalog",
      "AWS Storage Gateway",
      "Amazon ElastiCache",
      "Amazon Neptune"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0338",
    "domain": "Cloud Technology",
    "question": "Pour envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon CloudFront",
      "Amazon SNS",
      "AWS Batch",
      "Amazon MemoryDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0339",
    "domain": "Cloud Technology",
    "question": "Amazon DocumentDB est principalement utilisé pour :",
    "choices": [
      "Analyser des images et vidéos (détection d'objets, visages, modération)",
      "Fournir une base de données de documents compatible MongoDB",
      "Héberger des dépôts Git privés managés",
      "Fournir une base en mémoire compatible Redis, durable et persistante"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0340",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : exécuter des requêtes SQL directement sur des données stockées dans Amazon S3 ?",
    "choices": [
      "Amazon S3",
      "Amazon Athena",
      "AWS Lambda",
      "Amazon QLDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0341",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution ?",
    "choices": [
      "AWS Lambda",
      "AWS CloudShell",
      "Amazon VPC",
      "Amazon Lex"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0342",
    "domain": "Billing & Pricing",
    "question": "AWS Pricing Calculator est principalement utilisé pour :",
    "choices": [
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS",
      "Archiver des données à très faible coût pour un accès peu fréquent",
      "Estimer le coût d'une architecture AWS avant son déploiement",
      "Analyser des images et vidéos (détection d'objets, visages, modération)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0343",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : traiter du big data avec des frameworks comme Apache Spark et Hadoop ?",
    "choices": [
      "Amazon EMR",
      "Amazon SNS",
      "AWS Systems Manager",
      "AWS CloudShell"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0344",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide. Quel service AWS choisir ?",
    "choices": [
      "Amazon EKS",
      "Elastic Load Balancing",
      "Amazon Aurora",
      "Amazon Kendra"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0345",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon API Gateway ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Gestion et gouvernance",
      "Sécurité, identité et conformité",
      "Analytique"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0346",
    "domain": "Cloud Technology",
    "question": "Amazon QLDB est principalement utilisé pour :",
    "choices": [
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Fournir un IDE de développement dans le navigateur",
      "Construire, entraîner et déployer des modèles de machine learning",
      "Interconnecter de nombreux VPC et réseaux sur site via un hub central"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0347",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon CloudWatch ?",
    "choices": [
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Convertir du texte en parole réaliste (text-to-speech)",
      "Surveiller les métriques, journaux et alarmes des ressources et applications AWS",
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0348",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour accéder à des modèles de fondation (IA générative) via une API managée ?",
    "choices": [
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon Bedrock",
      "AWS Glue"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0349",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « aucune défaillance isolée d'un composant n'affecte le service rendu » ?",
    "choices": [
      "Tolérance aux pannes",
      "Élasticité",
      "Agilité",
      "Durabilité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0350",
    "domain": "Billing & Pricing",
    "question": "Combien de temps avant l'interruption AWS notifie-t-il une instance Spot ?",
    "choices": [
      "Aucun avis n'est donné",
      "24 heures",
      "Environ 2 minutes (avis d'interruption Spot)",
      "1 heure"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0351",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Snowball ?",
    "choices": [
      "Calcul (Compute)",
      "Stockage",
      "Gestion des coûts et facturation",
      "Migration et transfert"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0352",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de gérer les identités, les accès et les permissions aux ressources AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS IAM",
      "AWS Config",
      "AWS Directory Service",
      "AWS Firewall Manager"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0353",
    "domain": "Billing & Pricing",
    "question": "Le plan de support « support 24/7, réponse < 30 min pour les cas critiques et accès à un pool d'experts » est le plan :",
    "choices": [
      "Business",
      "Basic",
      "Enterprise",
      "Enterprise On-Ramp"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0354",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour acheter et déployer des logiciels tiers avec une facturation via AWS ?",
    "choices": [
      "AWS Budgets",
      "AWS Billing Conductor",
      "AWS Compute Optimizer",
      "AWS Marketplace"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0355",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour provisionner et gérer des certificats SSL/TLS pour les services AWS ?",
    "choices": [
      "AWS Certificate Manager",
      "AWS CloudTrail",
      "AWS CloudHSM",
      "AWS KMS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0356",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Control Tower ?",
    "choices": [
      "Configurer et gouverner un environnement multi-comptes sécurisé (landing zone)",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0357",
    "domain": "Security & Compliance",
    "question": "Principe de « défense en profondeur » (defense in depth) ?",
    "choices": [
      "Concentrer toute la sécurité sur le pare-feu",
      "Désactiver la journalisation",
      "Utiliser un seul contrôle d'accès",
      "Superposer plusieurs couches de sécurité indépendantes plutôt que de dépendre d'une seule"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0358",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement ?",
    "choices": [
      "Amazon EventBridge",
      "Amazon EFS",
      "AWS Auto Scaling",
      "Amazon QLDB"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0359",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour réaliser l'ETL managé sans serveur pour préparer et transformer les données ?",
    "choices": [
      "AWS CloudShell",
      "AWS CodePipeline",
      "Amazon Aurora",
      "AWS Glue"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0360",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : router des événements entre applications via un bus d'événements serverless ?",
    "choices": [
      "Amazon Athena",
      "AWS Organizations",
      "Amazon EventBridge",
      "Amazon CloudWatch"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0361",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : recommander des ressources optimales pour réduire les coûts et améliorer la performance ?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Budgets",
      "AWS Compute Optimizer",
      "AWS Cost Explorer"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0362",
    "domain": "Cloud Technology",
    "question": "Quelle fonctionnalité S3 empêche la suppression d'objets (WORM/conformité) ?",
    "choices": [
      "S3 Versioning",
      "S3 Replication",
      "S3 Object Lock",
      "S3 Lifecycle"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0363",
    "domain": "Cloud Technology",
    "question": "Pour créer et gérer des catalogues de produits IT approuvés pour le déploiement, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Kendra",
      "AWS Application Migration Service",
      "AWS Batch",
      "AWS Service Catalog"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0364",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : analyser et investiguer la cause racine d'incidents de sécurité ?",
    "choices": [
      "Amazon Detective",
      "AWS KMS",
      "AWS IAM Identity Center",
      "Amazon Inspector"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0365",
    "domain": "Cloud Technology",
    "question": "Amazon Kendra est principalement utilisé pour :",
    "choices": [
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Fournir un IDE de développement dans le navigateur",
      "Fournir un moteur de recherche d'entreprise intelligent",
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0366",
    "domain": "Cloud Concepts",
    "question": "Le pilier « protéger les informations, les systèmes et les actifs via la gestion des risques » du Well-Architected Framework est :",
    "choices": [
      "Sécurité",
      "Fiabilité",
      "Excellence opérationnelle",
      "Optimisation des coûts"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0367",
    "domain": "Cloud Concepts",
    "question": "Quel élément de l'infrastructure mondiale AWS correspond à : « un ou plusieurs data centers discrets avec alimentation, réseau et connectivité redondants » ?",
    "choices": [
      "Emplacement périphérique (Edge location)",
      "Local Zone",
      "Zone de disponibilité (AZ)",
      "Région AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0368",
    "domain": "Cloud Concepts",
    "question": "Quand faut-il déployer une application dans PLUSIEURS régions AWS ?",
    "choices": [
      "Chaque fois qu'on crée une instance EC2",
      "Pour la reprise après sinistre régionale, la conformité/résidence des données ou réduire la latence mondiale",
      "Uniquement pour activer CloudTrail",
      "Uniquement pour réduire la facture"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0369",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Certificate Manager ?",
    "choices": [
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Accéder à un shell en ligne de commande préauthentifié depuis la console AWS",
      "Centraliser et automatiser les sauvegardes de plusieurs services AWS",
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0370",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide ?",
    "choices": [
      "Amazon ElastiCache",
      "Amazon Aurora",
      "Amazon Route 53",
      "AWS Storage Gateway"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0371",
    "domain": "Cloud Concepts",
    "question": "Quel pilier du AWS Well-Architected Framework vise à : « récupérer des défaillances et répondre dynamiquement à la demande » ?",
    "choices": [
      "Fiabilité",
      "Durabilité (Sustainability)",
      "Efficacité des performances",
      "Sécurité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0372",
    "domain": "Security & Compliance",
    "question": "AWS Certificate Manager est principalement utilisé pour :",
    "choices": [
      "Gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.)",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)",
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0373",
    "domain": "Cloud Concepts",
    "question": "Quel est un avantage clé du serverless (ex : Lambda) ?",
    "choices": [
      "La nécessité de gérer l'OS",
      "Une capacité fixe non évolutive",
      "Un coût fixe même sans usage",
      "Aucune gestion de serveur et un paiement uniquement à l'exécution, avec mise à l'échelle automatique"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0374",
    "domain": "Billing & Pricing",
    "question": "Quel plan de support inclut un Technical Account Manager (TAM) dédié ?",
    "choices": [
      "Basic",
      "Business",
      "Enterprise",
      "Developer"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0375",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS PrivateLink ?",
    "choices": [
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)",
      "Fournir un broker de messages managé compatible ActiveMQ et RabbitMQ"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0376",
    "domain": "Cloud Technology",
    "question": "Pour étendre l'infrastructure et les services AWS dans votre propre data center sur site, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Backup",
      "Amazon S3",
      "AWS Outposts",
      "Amazon Rekognition"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0377",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon RDS ?",
    "choices": [
      "Gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.)",
      "Créer et gérer des catalogues de produits IT approuvés pour le déploiement",
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)",
      "Fournir Microsoft Active Directory managé dans le cloud AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0378",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon S3 ?",
    "choices": [
      "Stockage",
      "Outils de développement",
      "Sécurité, identité et conformité",
      "Analytique"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0379",
    "domain": "Cloud Technology",
    "question": "AWS Elastic Beanstalk est principalement utilisé pour :",
    "choices": [
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Gérer, configurer et exploiter les instances et ressources à grande échelle",
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0380",
    "domain": "Cloud Technology",
    "question": "Pour fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon OpenSearch Service",
      "Amazon QLDB",
      "AWS Transit Gateway",
      "Amazon ElastiCache"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0381",
    "domain": "Security & Compliance",
    "question": "Pour déployer un pare-feu réseau managé et à état pour protéger un VPC, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Network Firewall",
      "AWS Secrets Manager",
      "AWS CloudTrail",
      "AWS Config"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0382",
    "domain": "Cloud Technology",
    "question": "Quelle famille d'instances EC2 convient à : « un équilibre calcul/mémoire/réseau pour des charges variées » ?",
    "choices": [
      "Famille I (optimisé stockage)",
      "Famille C (optimisé calcul)",
      "Famille G/P (GPU/accéléré)",
      "Famille M (usage général)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0383",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir un broker de messages managé compatible ActiveMQ et RabbitMQ ?",
    "choices": [
      "Amazon Neptune",
      "Amazon MQ",
      "Amazon EMR",
      "AWS Storage Gateway"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0384",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Budgets ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Stockage",
      "Base de données",
      "Gestion et gouvernance"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0385",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de créer et contrôler les clés de chiffrement utilisées pour protéger les données. Quel service AWS choisir ?",
    "choices": [
      "AWS Certificate Manager",
      "AWS Secrets Manager",
      "AWS Network Firewall",
      "AWS KMS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0386",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir un moteur de recherche d'entreprise intelligent. Quel service AWS choisir ?",
    "choices": [
      "Amazon Kendra",
      "Amazon Route 53",
      "Amazon SQS",
      "Elastic Load Balancing"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0387",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : créer un tunnel VPN chiffré entre un réseau sur site et un VPC ?",
    "choices": [
      "AWS CloudShell",
      "AWS Site-to-Site VPN",
      "Amazon SQS",
      "AWS Snowball"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0388",
    "domain": "Cloud Technology",
    "question": "AWS Control Tower est principalement utilisé pour :",
    "choices": [
      "Configurer et gouverner un environnement multi-comptes sécurisé (landing zone)",
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3",
      "Découpler les composants via une file d'attente de messages (point-à-point)",
      "Surveiller les métriques, journaux et alarmes des ressources et applications AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0389",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de stocker des objets de manière durable et hautement disponible dans des buckets. Quel service AWS choisir ?",
    "choices": [
      "Amazon S3",
      "Amazon RDS",
      "AWS Lambda",
      "AWS CodeBuild"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0390",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Lambda ?",
    "choices": [
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Accéder à un shell en ligne de commande préauthentifié depuis la console AWS",
      "Exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution",
      "Migrer des bases de données vers AWS avec un temps d'arrêt minimal"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0391",
    "domain": "Security & Compliance",
    "question": "Quel service centralise et priorise les alertes de sécurité de plusieurs comptes ?",
    "choices": [
      "AWS Config",
      "Amazon Inspector",
      "Amazon GuardDuty",
      "AWS Security Hub"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0392",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide ?",
    "choices": [
      "AWS CodeBuild",
      "Amazon EBS",
      "Amazon Transcribe",
      "Amazon Aurora"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0393",
    "domain": "Cloud Technology",
    "question": "Amazon S3 Glacier est principalement utilisé pour :",
    "choices": [
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible",
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Archiver des données à très faible coût pour un accès peu fréquent"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0394",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : compiler le code, exécuter des tests et produire des artefacts (build) ?",
    "choices": [
      "AWS Outposts",
      "Amazon SNS",
      "AWS CodeBuild",
      "Amazon Textract"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0395",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon EC2 ?",
    "choices": [
      "Machine Learning / IA",
      "Réseau et diffusion de contenu",
      "Base de données",
      "Calcul (Compute)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0396",
    "domain": "Cloud Technology",
    "question": "Amazon Neptune est principalement utilisé pour :",
    "choices": [
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures",
      "Construire des interfaces conversationnelles (chatbots) vocales et textuelles",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Gérer une base de données de graphes managée"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0397",
    "domain": "Security & Compliance",
    "question": "Amazon Cognito est principalement utilisé pour :",
    "choices": [
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3",
      "Gérer l'authentification et les identités des utilisateurs d'applications web et mobiles",
      "Construire et sécuriser rapidement un data lake",
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0398",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS CodeDeploy ?",
    "choices": [
      "Machine Learning / IA",
      "Outils de développement",
      "Gestion des coûts et facturation",
      "Sécurité, identité et conformité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0399",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour accéder de façon privée à des services sans exposer le trafic à l'Internet public ?",
    "choices": [
      "AWS PrivateLink",
      "AWS Transit Gateway",
      "AWS Storage Gateway",
      "AWS DMS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0400",
    "domain": "Security & Compliance",
    "question": "Pour automatiser la collecte de preuves pour les audits de conformité, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Cognito",
      "AWS Firewall Manager",
      "AWS IAM",
      "AWS Audit Manager"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0401",
    "domain": "Cloud Technology",
    "question": "Quelle fonctionnalité S3 déplace les objets entre classes selon des règles temporelles ?",
    "choices": [
      "S3 Transfer Acceleration",
      "S3 Object Lock",
      "S3 Lifecycle Policy",
      "S3 Versioning"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0402",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement ?",
    "choices": [
      "Amazon QuickSight",
      "Amazon EBS",
      "Amazon Rekognition",
      "Amazon QLDB"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0403",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS CodeBuild ?",
    "choices": [
      "Compiler le code, exécuter des tests et produire des artefacts (build)",
      "Créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle",
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS",
      "Fournir une base de données de documents compatible MongoDB"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0404",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud offre l'exécution de fonctions à la demande sans gérer de serveur (ex : Lambda) ?",
    "choices": [
      "FaaS",
      "IaaS",
      "PaaS",
      "SaaS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0405",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de gérer les identités, les accès et les permissions aux ressources AWS ?",
    "choices": [
      "AWS Shield",
      "Amazon Inspector",
      "AWS CloudHSM",
      "AWS IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0406",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de centraliser et automatiser les sauvegardes de plusieurs services AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Backup",
      "AWS Organizations",
      "Amazon DocumentDB",
      "AWS CodePipeline"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0407",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Compute Optimizer ?",
    "choices": [
      "Gestion et gouvernance",
      "Outils de développement",
      "Gestion des coûts et facturation",
      "Intégration d'applications"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0408",
    "domain": "Security & Compliance",
    "question": "Bonne pratique de sécurité : comment donner à un compte aws un accès temporaire aux ressources d'un autre compte ?",
    "choices": [
      "Partager le mot de passe root",
      "Copier les clés d'accès par e-mail",
      "Utiliser des rôles IAM pour l'accès inter-comptes",
      "Rendre les buckets publics"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0409",
    "domain": "Cloud Technology",
    "question": "Amazon VPC est principalement utilisé pour :",
    "choices": [
      "Gérer de façon centralisée les règles de pare-feu sur plusieurs comptes",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0410",
    "domain": "Cloud Technology",
    "question": "Pour automatiser et accélérer le transfert de données entre le sur site et AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS DataSync",
      "Amazon EFS",
      "AWS Auto Scaling",
      "Amazon API Gateway"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0411",
    "domain": "Security & Compliance",
    "question": "AWS CloudHSM est principalement utilisé pour :",
    "choices": [
      "Migrer des bases de données vers AWS avec un temps d'arrêt minimal",
      "Fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible",
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0412",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'analyser des images et vidéos (détection d'objets, visages, modération). Quel service AWS choisir ?",
    "choices": [
      "Amazon CloudWatch",
      "Amazon Translate",
      "Amazon Rekognition",
      "AWS CodeCommit"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0413",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Audit Manager ?",
    "choices": [
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Construire, entraîner et déployer des modèles de machine learning",
      "Automatiser la collecte de preuves pour les audits de conformité",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0414",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon MQ ?",
    "choices": [
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS",
      "Fournir une base de données de documents compatible MongoDB",
      "Fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS)",
      "Fournir un broker de messages managé compatible ActiveMQ et RabbitMQ"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0415",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour exécuter des requêtes SQL directement sur des données stockées dans Amazon S3 ?",
    "choices": [
      "Amazon EventBridge",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0416",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'exécuter des requêtes SQL directement sur des données stockées dans Amazon S3. Quel service AWS choisir ?",
    "choices": [
      "Amazon Kendra",
      "Amazon Athena",
      "Amazon Aurora",
      "Amazon OpenSearch Service"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0417",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « une application ajoute puis retire automatiquement des serveurs selon les pics de trafic » ?",
    "choices": [
      "Haute disponibilité",
      "Durabilité",
      "Élasticité",
      "Tolérance aux pannes"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0418",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : centraliser la gestion des accès SSO à plusieurs comptes et applications ?",
    "choices": [
      "AWS KMS",
      "AWS IAM",
      "AWS Secrets Manager",
      "AWS IAM Identity Center"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0419",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de gérer l'authentification et les identités des utilisateurs d'applications web et mobiles ?",
    "choices": [
      "AWS Artifact",
      "AWS WAF",
      "Amazon Cognito",
      "AWS IAM Identity Center"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0420",
    "domain": "Cloud Technology",
    "question": "Pour construire des interfaces conversationnelles (chatbots) vocales et textuelles, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon MSK",
      "Elastic Load Balancing",
      "Amazon Lex",
      "AWS Direct Connect"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0421",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon S3 Glacier ?",
    "choices": [
      "Machine Learning / IA",
      "Gestion des coûts et facturation",
      "Intégration d'applications",
      "Stockage"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0422",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet d'automatiser la collecte de preuves pour les audits de conformité ?",
    "choices": [
      "AWS Shield",
      "AWS Directory Service",
      "Amazon Macie",
      "AWS Audit Manager"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0423",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution. Quel service AWS choisir ?",
    "choices": [
      "AWS Lambda",
      "AWS Site-to-Site VPN",
      "Amazon Bedrock",
      "Amazon EFS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0424",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir une base en mémoire compatible Redis, durable et persistante ?",
    "choices": [
      "AWS Step Functions",
      "Amazon Keyspaces",
      "Amazon Kinesis",
      "Amazon MemoryDB"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0425",
    "domain": "Cloud Technology",
    "question": "Amazon EBS est principalement utilisé pour :",
    "choices": [
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2",
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)",
      "Construire, entraîner et déployer des modèles de machine learning"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0426",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'exécuter des travaux de traitement par lots à grande échelle. Quel service AWS choisir ?",
    "choices": [
      "AWS PrivateLink",
      "AWS Batch",
      "AWS CodeCommit",
      "Amazon Rekognition"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0427",
    "domain": "Cloud Technology",
    "question": "Pour construire et sécuriser rapidement un data lake, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Lake Formation",
      "Amazon SNS",
      "AWS Outposts",
      "Amazon Lex"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0428",
    "domain": "Cloud Technology",
    "question": "Pour convertir du texte en parole réaliste (text-to-speech), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Kinesis",
      "Amazon SQS",
      "Amazon MQ",
      "Amazon Polly"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0429",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : automatiser le déploiement de code vers EC2, Lambda ou sur site ?",
    "choices": [
      "AWS CodeDeploy",
      "Amazon DocumentDB",
      "Amazon Kendra",
      "Amazon Route 53"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0430",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de rechercher, analyser et visualiser des logs et données en quasi temps réel ?",
    "choices": [
      "AWS Step Functions",
      "Amazon OpenSearch Service",
      "Amazon Kinesis",
      "Amazon Bedrock"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0431",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour centraliser et prioriser les alertes de sécurité et l'état de conformité ?",
    "choices": [
      "AWS Config",
      "AWS Security Hub",
      "AWS Shield",
      "AWS Audit Manager"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0432",
    "domain": "Cloud Technology",
    "question": "Amazon Lightsail est principalement utilisé pour :",
    "choices": [
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible",
      "Migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0433",
    "domain": "Cloud Concepts",
    "question": "Quelle stratégie de reprise après sinistre correspond à : « garder une version minimale du cœur du système toujours active, à démarrer en cas de sinistre » ?",
    "choices": [
      "Sauvegarde et restauration (Backup & Restore)",
      "Pilot Light",
      "Multi-site actif/actif",
      "Warm Standby"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0434",
    "domain": "Security & Compliance",
    "question": "AWS Security Hub est principalement utilisé pour :",
    "choices": [
      "Accéder à des modèles de fondation (IA générative) via une API managée",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS",
      "Centraliser et prioriser les alertes de sécurité et l'état de conformité",
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0435",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon ElastiCache ?",
    "choices": [
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance",
      "Accéder à un shell en ligne de commande préauthentifié depuis la console AWS",
      "Mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures",
      "Gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0436",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Glue ?",
    "choices": [
      "Construire et sécuriser rapidement un data lake",
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Analyser et investiguer la cause racine d'incidents de sécurité",
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0437",
    "domain": "Cloud Technology",
    "question": "Pour « des données peu consultées mais devant rester rapidement accessibles », quelle classe S3 choisir ?",
    "choices": [
      "S3 Standard-IA",
      "S3 Intelligent-Tiering",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Instant Retrieval"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0438",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'analyser et déboguer les applications distribuées (tracing). Quel service AWS choisir ?",
    "choices": [
      "Amazon EventBridge",
      "AWS X-Ray",
      "Amazon Athena",
      "Amazon DynamoDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0439",
    "domain": "Cloud Technology",
    "question": "Amazon ECS est principalement utilisé pour :",
    "choices": [
      "Mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures",
      "Construire des interfaces conversationnelles (chatbots) vocales et textuelles",
      "Fournir un moteur de recherche d'entreprise intelligent",
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0440",
    "domain": "Cloud Concepts",
    "question": "Pourquoi déployer une application sur plusieurs zones de disponibilité (AZ) ?",
    "choices": [
      "Assurer la haute disponibilité : si une AZ tombe, les autres continuent de servir l'application",
      "Contourner le besoin de sauvegardes",
      "Éviter toute configuration réseau",
      "Réduire le coût du transfert de données à zéro"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0441",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La configuration du système d'exploitation et des applications » ?",
    "choices": [
      "Le client",
      "Personne, c'est automatique",
      "Un fournisseur tiers non AWS",
      "AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0442",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Inspector ?",
    "choices": [
      "Créer des tableaux de bord et de la Business Intelligence (BI)",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs)",
      "Orchestrer des workflows en coordonnant plusieurs services via des machines à états"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0443",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'accéder à un shell en ligne de commande préauthentifié depuis la console AWS ?",
    "choices": [
      "AWS CloudShell",
      "Amazon Route 53",
      "Amazon ElastiCache",
      "Amazon DynamoDB"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0444",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide ?",
    "choices": [
      "AWS Health Dashboard",
      "Amazon Polly",
      "Amazon S3 Glacier",
      "Amazon Aurora"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0445",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Pricing Calculator ?",
    "choices": [
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS",
      "Estimer le coût d'une architecture AWS avant son déploiement",
      "Orchestrer des workflows en coordonnant plusieurs services via des machines à états",
      "Automatiser la collecte de preuves pour les audits de conformité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0446",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : créer des tableaux de bord et de la Business Intelligence (BI) ?",
    "choices": [
      "Amazon API Gateway",
      "Amazon QuickSight",
      "Amazon Kendra",
      "AWS Fargate"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0447",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de filtrer le trafic web et protéger contre les injections SQL et le XSS. Quel service AWS choisir ?",
    "choices": [
      "AWS Shield",
      "AWS WAF",
      "AWS IAM Identity Center",
      "AWS Security Hub"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0448",
    "domain": "Cloud Concepts",
    "question": "Quel est l'intérêt de découpler les composants (ex : via SQS) ?",
    "choices": [
      "Réduire les interdépendances pour qu'une panne d'un composant n'affecte pas les autres",
      "Supprimer le besoin de sécurité",
      "Augmenter volontairement la latence",
      "Garantir un coût nul"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0449",
    "domain": "Cloud Concepts",
    "question": "Parmi les avantages du cloud, lequel décrit : « vous provisionnez la capacité exacte nécessaire et l'ajustez à la demande » ?",
    "choices": [
      "Arrêter de deviner la capacité",
      "Bénéficier d'économies d'échelle massives",
      "Augmenter la vitesse et l'agilité",
      "Échanger des dépenses d'investissement (CapEx) contre des dépenses variables (OpEx)"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0450",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS IAM ?",
    "choices": [
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Gérer les identités, les accès et les permissions aux ressources AWS",
      "Traduire du texte entre langues automatiquement",
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0451",
    "domain": "Billing & Pricing",
    "question": "AWS Billing Conductor est principalement utilisé pour :",
    "choices": [
      "Extraire des informations et du sens d'un texte via le NLP",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)",
      "Créer un tunnel VPN chiffré entre un réseau sur site et un VPC",
      "Personnaliser la facturation et la refacturation entre équipes ou clients"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0452",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour archiver des données à très faible coût pour un accès peu fréquent ?",
    "choices": [
      "Amazon MQ",
      "AWS Organizations",
      "Amazon S3 Glacier",
      "Amazon SQS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0453",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés ?",
    "choices": [
      "AWS Secrets Manager",
      "AWS Audit Manager",
      "AWS CloudHSM",
      "Amazon GuardDuty"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0454",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin d'évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs). Quel service AWS choisir ?",
    "choices": [
      "AWS Firewall Manager",
      "AWS CloudTrail",
      "Amazon Cognito",
      "Amazon Inspector"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0455",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS DataSync ?",
    "choices": [
      "Fournir Microsoft Active Directory managé dans le cloud AWS",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Analyser des images et vidéos (détection d'objets, visages, modération)",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0456",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet d'évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs) ?",
    "choices": [
      "AWS Shield",
      "AWS Artifact",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0457",
    "domain": "Cloud Technology",
    "question": "AWS CloudFormation sert à :",
    "choices": [
      "Filtrer le trafic web",
      "Analyser les coûts",
      "Surveiller la performance",
      "Provisionner l'infrastructure via des templates JSON/YAML (IaC)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0458",
    "domain": "Cloud Technology",
    "question": "Pour distribuer du contenu avec faible latence via un réseau CDN d'emplacements Edge, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon CloudFront",
      "AWS Outposts",
      "Amazon FSx",
      "AWS CodeCommit"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0459",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : analyser et déboguer les applications distribuées (tracing) ?",
    "choices": [
      "Amazon EMR",
      "AWS Storage Gateway",
      "AWS X-Ray",
      "Amazon QuickSight"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0460",
    "domain": "Cloud Technology",
    "question": "Pour automatiser des pipelines d'intégration et de livraison continues (CI/CD), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon MSK",
      "Amazon SQS",
      "AWS Systems Manager",
      "AWS CodePipeline"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0461",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'étendre l'infrastructure et les services AWS dans votre propre data center sur site ?",
    "choices": [
      "AWS X-Ray",
      "Amazon Neptune",
      "AWS Outposts",
      "AWS CloudFormation"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0462",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de gérer, configurer et exploiter les instances et ressources à grande échelle. Quel service AWS choisir ?",
    "choices": [
      "AWS Systems Manager",
      "Amazon CloudFront",
      "Amazon Keyspaces",
      "Amazon Rekognition"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0463",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : provisionner et gérer des certificats SSL/TLS pour les services AWS ?",
    "choices": [
      "Amazon Cognito",
      "AWS Artifact",
      "Amazon Macie",
      "AWS Certificate Manager"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0464",
    "domain": "Security & Compliance",
    "question": "AWS KMS s'intègre à de nombreux services pour :",
    "choices": [
      "Sauvegarder les bases de données",
      "Créer des tableaux de bord BI",
      "Chiffrer les données au repos à l'aide de clés gérées de manière centralisée",
      "Router le trafic Internet"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0465",
    "domain": "Billing & Pricing",
    "question": "Pour personnaliser la facturation et la refacturation entre équipes ou clients, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Billing Conductor",
      "AWS Compute Optimizer",
      "AWS Pricing Calculator",
      "AWS Budgets"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0466",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La configuration des Security Groups et des règles de pare-feu » ?",
    "choices": [
      "Le client",
      "Un fournisseur tiers non AWS",
      "Personne, c'est automatique",
      "AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0467",
    "domain": "Cloud Concepts",
    "question": "Quel avantage du cloud AWS correspond à : « vous déployez dans plusieurs régions AWS en quelques clics » ?",
    "choices": [
      "Arrêter de dépenser pour exploiter des data centers",
      "Se déployer mondialement en quelques minutes",
      "Bénéficier d'économies d'échelle massives",
      "Arrêter de deviner la capacité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0468",
    "domain": "Cloud Technology",
    "question": "AWS Glue est principalement utilisé pour :",
    "choices": [
      "Fournir une base en mémoire compatible Redis, durable et persistante",
      "Évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs)",
      "Router des événements entre applications via un bus d'événements serverless",
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0469",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Cost and Usage Report ?",
    "choices": [
      "Construire et sécuriser rapidement un data lake",
      "Exécuter des travaux de traitement par lots à grande échelle",
      "Convertir de la parole en texte (speech-to-text)",
      "Fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0470",
    "domain": "Cloud Concepts",
    "question": "Qu'apporte l'automatisation (IaC, scripts) dans le cloud ?",
    "choices": [
      "La suppression du besoin de sécurité",
      "Un ralentissement des déploiements",
      "Des déploiements reproductibles, rapides et moins sujets aux erreurs manuelles",
      "Une augmentation garantie des coûts"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0471",
    "domain": "Security & Compliance",
    "question": "Amazon Cognito sert principalement à :",
    "choices": [
      "Stocker des objets volumineux",
      "Chiffrer les volumes EBS",
      "Router le trafic DNS",
      "Gérer l'authentification et les identités des utilisateurs d'applications web/mobiles"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0472",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Application Migration Service ?",
    "choices": [
      "Migration et transfert",
      "Calcul (Compute)",
      "Stockage",
      "Machine Learning / IA"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0473",
    "domain": "Security & Compliance",
    "question": "AWS Directory Service est principalement utilisé pour :",
    "choices": [
      "Fournir Microsoft Active Directory managé dans le cloud AWS",
      "Automatiser la collecte de preuves pour les audits de conformité",
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3",
      "Fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0474",
    "domain": "Security & Compliance",
    "question": "AWS Secrets Manager est principalement utilisé pour :",
    "choices": [
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)",
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure",
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0475",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud offre un logiciel complet prêt à l'emploi accessible via Internet ?",
    "choices": [
      "SaaS",
      "PaaS",
      "IaaS",
      "FaaS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0476",
    "domain": "Cloud Concepts",
    "question": "Combien de piliers compte le AWS Well-Architected Framework ?",
    "choices": [
      "5 piliers",
      "7 piliers",
      "6 piliers",
      "4 piliers"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0477",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : distribuer du contenu avec faible latence via un réseau CDN d'emplacements Edge ?",
    "choices": [
      "AWS Lambda",
      "Amazon CloudFront",
      "Amazon Aurora",
      "Amazon ElastiCache"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0478",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de convertir du texte en parole réaliste (text-to-speech) ?",
    "choices": [
      "Amazon S3",
      "Amazon Polly",
      "Amazon EKS",
      "Amazon MemoryDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0479",
    "domain": "Billing & Pricing",
    "question": "Avantage principal de la facturation consolidée d'AWS Organizations ?",
    "choices": [
      "Suppression des coûts de transfert",
      "Une facture unique et des tarifs dégressifs par volume grâce à l'usage agrégé",
      "Support Enterprise gratuit",
      "Doublement du Free Tier"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0480",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « on augmente la capacité d'une ressource ou le nombre de ressources pour absorber la croissance » ?",
    "choices": [
      "Haute disponibilité",
      "Tolérance aux pannes",
      "Durabilité",
      "Scalabilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0481",
    "domain": "Cloud Technology",
    "question": "Entrepôt de données analytique (pétaoctets, SQL) : quel service ?",
    "choices": [
      "Amazon ElastiCache",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon DynamoDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0482",
    "domain": "Cloud Technology",
    "question": "Quelle est la durabilité d'Amazon S3 Standard ?",
    "choices": [
      "100 % contractuel",
      "99,99 %",
      "99,999999999 % (onze 9)",
      "99,9 %"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0483",
    "domain": "Billing & Pricing",
    "question": "Pour fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Marketplace",
      "AWS Billing Conductor",
      "AWS Trusted Advisor",
      "AWS Cost and Usage Report"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0484",
    "domain": "Cloud Technology",
    "question": "Amazon Route 53 est principalement utilisé pour :",
    "choices": [
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2",
      "Analyser et investiguer la cause racine d'incidents de sécurité",
      "Fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0485",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Outposts ?",
    "choices": [
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS",
      "Étendre l'infrastructure et les services AWS dans votre propre data center sur site",
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance",
      "Créer et gérer des catalogues de produits IT approuvés pour le déploiement"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0486",
    "domain": "Cloud Concepts",
    "question": "Le pilier « réduire l'impact environnemental des charges de travail » du Well-Architected Framework est :",
    "choices": [
      "Efficacité des performances",
      "Durabilité (Sustainability)",
      "Excellence opérationnelle",
      "Fiabilité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0487",
    "domain": "Billing & Pricing",
    "question": "Pour acheter et déployer des logiciels tiers avec une facturation via AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Budgets",
      "AWS Billing Conductor",
      "AWS Marketplace",
      "AWS Trusted Advisor"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0488",
    "domain": "Security & Compliance",
    "question": "Pour stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API), quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Network Firewall",
      "AWS Artifact",
      "AWS Certificate Manager",
      "AWS Secrets Manager"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0489",
    "domain": "Security & Compliance",
    "question": "Pour évaluer et enregistrer en continu la conformité de la configuration des ressources, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Detective",
      "AWS WAF",
      "AWS Config",
      "AWS Network Firewall"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0490",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Polly ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Machine Learning / IA",
      "Gestion et gouvernance",
      "Base de données"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0491",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API) ?",
    "choices": [
      "AWS KMS",
      "Amazon Detective",
      "AWS Secrets Manager",
      "AWS Certificate Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0492",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour analyser des images et vidéos (détection d'objets, visages, modération) ?",
    "choices": [
      "AWS Health Dashboard",
      "AWS CloudShell",
      "Amazon Aurora",
      "Amazon Rekognition"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0493",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour rechercher, analyser et visualiser des logs et données en quasi temps réel ?",
    "choices": [
      "Amazon OpenSearch Service",
      "Amazon EventBridge",
      "Amazon S3 Glacier",
      "Amazon DynamoDB"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0494",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles ?",
    "choices": [
      "Amazon EventBridge",
      "AWS Lake Formation",
      "Amazon VPC",
      "Amazon EBS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0495",
    "domain": "Security & Compliance",
    "question": "Amazon Detective est principalement utilisé pour :",
    "choices": [
      "Analyser et investiguer la cause racine d'incidents de sécurité",
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Extraire automatiquement du texte et des données de documents scannés",
      "Extraire des informations et du sens d'un texte via le NLP"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0496",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de convertir de la parole en texte (speech-to-text). Quel service AWS choisir ?",
    "choices": [
      "Amazon Transcribe",
      "AWS Elastic Beanstalk",
      "Amazon EFS",
      "Amazon OpenSearch Service"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0497",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de protéger les applications contre les attaques par déni de service distribué (DDoS). Quel service AWS choisir ?",
    "choices": [
      "AWS Config",
      "AWS Artifact",
      "AWS Shield",
      "AWS WAF"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0498",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Direct Connect ?",
    "choices": [
      "Base de données",
      "Réseau et diffusion de contenu",
      "Machine Learning / IA",
      "Outils de développement"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0499",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir une base en mémoire compatible Redis, durable et persistante. Quel service AWS choisir ?",
    "choices": [
      "Amazon Transcribe",
      "AWS Cloud9",
      "AWS CloudShell",
      "Amazon MemoryDB"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0500",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour personnaliser la facturation et la refacturation entre équipes ou clients ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Billing Conductor",
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0501",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon ECS ?",
    "choices": [
      "Créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles",
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2",
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS",
      "Gérer les identités, les accès et les permissions aux ressources AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0502",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'extraire des informations et du sens d'un texte via le NLP. Quel service AWS choisir ?",
    "choices": [
      "Amazon Comprehend",
      "Amazon S3 Glacier",
      "Amazon EKS",
      "AWS Application Migration Service"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0503",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : exécuter Kubernetes managé sur AWS ?",
    "choices": [
      "Amazon EKS",
      "Amazon Polly",
      "Amazon FSx",
      "Amazon EMR"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0504",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Security Hub ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Intégration d'applications",
      "Base de données",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0505",
    "domain": "Security & Compliance",
    "question": "Pour analyser et investiguer la cause racine d'incidents de sécurité, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS KMS",
      "Amazon Detective",
      "AWS Firewall Manager",
      "Amazon Macie"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0506",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS CloudShell ?",
    "choices": [
      "Machine Learning / IA",
      "Outils de développement",
      "Réseau et diffusion de contenu",
      "Calcul (Compute)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0507",
    "domain": "Cloud Concepts",
    "question": "Quelles sont les principales façons d'interagir avec AWS ?",
    "choices": [
      "Uniquement la console web",
      "La console de gestion, l'interface en ligne de commande (CLI) et les SDK",
      "Uniquement cURL",
      "SSH, RDP et FTP"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0508",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « Les correctifs de l'hyperviseur de virtualisation » ?",
    "choices": [
      "Le client",
      "AWS",
      "Un fournisseur tiers non AWS",
      "Personne, c'est automatique"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0509",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet d'analyser et investiguer la cause racine d'incidents de sécurité ?",
    "choices": [
      "Amazon Detective",
      "AWS Security Hub",
      "AWS IAM",
      "AWS Certificate Manager"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0510",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de créer un tunnel VPN chiffré entre un réseau sur site et un VPC ?",
    "choices": [
      "Amazon VPC",
      "Amazon Lex",
      "Amazon Kendra",
      "AWS Site-to-Site VPN"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0511",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'établir une connexion réseau dédiée et privée entre un site et AWS. Quel service AWS choisir ?",
    "choices": [
      "Amazon EKS",
      "Amazon EFS",
      "AWS Direct Connect",
      "Amazon Athena"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0512",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon EventBridge ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Intégration d'applications",
      "Sécurité, identité et conformité",
      "Calcul (Compute)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0513",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Lightsail ?",
    "choices": [
      "Automatiser des pipelines d'intégration et de livraison continues (CI/CD)",
      "Gérer l'authentification et les identités des utilisateurs d'applications web et mobiles",
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0514",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin d'estimer le coût d'une architecture AWS avant son déploiement. Quel service AWS choisir ?",
    "choices": [
      "AWS Billing Conductor",
      "AWS Compute Optimizer",
      "AWS Budgets",
      "AWS Pricing Calculator"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0515",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement ?",
    "choices": [
      "Amazon Athena",
      "Amazon Neptune",
      "Amazon QLDB",
      "AWS X-Ray"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0516",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ ?",
    "choices": [
      "Amazon Polly",
      "Amazon EC2",
      "AWS CodePipeline",
      "Elastic Load Balancing"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0517",
    "domain": "Cloud Concepts",
    "question": "Quel élément de l'infrastructure mondiale AWS correspond à : « un site du réseau mondial AWS servant à réduire la latence de diffusion » ?",
    "choices": [
      "Zone de disponibilité (AZ)",
      "Région AWS",
      "Point de présence (PoP)",
      "Local Zone"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0518",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Keyspaces ?",
    "choices": [
      "Stockage",
      "Migration et transfert",
      "Base de données",
      "Gestion et gouvernance"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0519",
    "domain": "Billing & Pricing",
    "question": "Quel plan de support AWS offre : « support technique 24/7 (téléphone, chat, e-mail) et tous les checks Trusted Advisor » ?",
    "choices": [
      "Enterprise",
      "Business",
      "Developer",
      "Enterprise On-Ramp"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0520",
    "domain": "Cloud Concepts",
    "question": "Le concept d'« élasticité » se distingue de la simple scalabilité par :",
    "choices": [
      "Une capacité fixée une fois pour toutes",
      "L'ajustement automatique de la capacité à la hausse comme à la baisse selon la demande réelle",
      "Une réduction impossible de la capacité",
      "Une mise à l'échelle uniquement manuelle"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0521",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'étendre l'infrastructure et les services AWS dans votre propre data center sur site. Quel service AWS choisir ?",
    "choices": [
      "Amazon EventBridge",
      "Amazon FSx",
      "Amazon QuickSight",
      "AWS Outposts"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0522",
    "domain": "Billing & Pricing",
    "question": "Pour définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Budgets",
      "AWS Marketplace",
      "AWS Trusted Advisor",
      "AWS Cost Explorer"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0523",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS ?",
    "choices": [
      "Amazon ECS",
      "Amazon Aurora",
      "Amazon Rekognition",
      "AWS Batch"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0524",
    "domain": "Security & Compliance",
    "question": "Pour fournir Microsoft Active Directory managé dans le cloud AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Directory Service",
      "AWS CloudHSM",
      "Amazon Inspector",
      "Amazon Macie"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0525",
    "domain": "Cloud Technology",
    "question": "Pour configurer et gouverner un environnement multi-comptes sécurisé (landing zone), quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Control Tower",
      "AWS Step Functions",
      "AWS CodeBuild",
      "AWS CodeCommit"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0526",
    "domain": "Cloud Concepts",
    "question": "Quelle est la différence entre scalabilité verticale et horizontale ?",
    "choices": [
      "La verticale ne concerne que le stockage",
      "Elles sont identiques",
      "La verticale ajoute des ressources ; l'horizontale les agrandit",
      "La verticale augmente la taille d'une ressource ; l'horizontale ajoute davantage de ressources"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0527",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Route 53 ?",
    "choices": [
      "Améliorer la performance en routant le trafic via le backbone privé AWS",
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ",
      "Fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0528",
    "domain": "Security & Compliance",
    "question": "AWS IAM est principalement utilisé pour :",
    "choices": [
      "Provisionner l'infrastructure via des templates (Infrastructure as Code)",
      "Analyser et investiguer la cause racine d'incidents de sécurité",
      "Stocker et analyser des données de séries temporelles",
      "Gérer les identités, les accès et les permissions aux ressources AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0529",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Billing Conductor ?",
    "choices": [
      "Personnaliser la facturation et la refacturation entre équipes ou clients",
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site",
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS",
      "Gérer les identités, les accès et les permissions aux ressources AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0530",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Global Accelerator ?",
    "choices": [
      "Gestion et gouvernance",
      "Intégration d'applications",
      "Réseau et diffusion de contenu",
      "Base de données"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0531",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Neptune ?",
    "choices": [
      "Gérer une base de données de graphes managée",
      "Créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle",
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Fournir un moteur de recherche d'entreprise intelligent"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0532",
    "domain": "Security & Compliance",
    "question": "Bonne pratique de sécurité : une instance ec2 doit accéder à un bucket s3 sans stocker de clés en dur ?",
    "choices": [
      "Encoder les clés en base64 dans l'environnement",
      "Attacher un rôle IAM à l'instance EC2",
      "Coder les clés dans le user data",
      "Utiliser les credentials root"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0533",
    "domain": "Cloud Technology",
    "question": "AWS Direct Connect est principalement utilisé pour :",
    "choices": [
      "Établir une connexion réseau dédiée et privée entre un site et AWS",
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS",
      "Orchestrer des workflows en coordonnant plusieurs services via des machines à états",
      "Fournir Microsoft Active Directory managé dans le cloud AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0534",
    "domain": "Cloud Technology",
    "question": "Amazon Kinesis est principalement utilisé pour :",
    "choices": [
      "Fournir un moteur de recherche d'entreprise intelligent",
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources",
      "Collecter et traiter des flux de données en temps réel (streaming)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0535",
    "domain": "Security & Compliance",
    "question": "Quelle recommandation concerne l'usage du compte root ?",
    "choices": [
      "Générer des clés root applicatives",
      "Partager le root avec l'équipe",
      "Utiliser le root pour toutes les tâches",
      "Ne pas utiliser le compte root au quotidien"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0536",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon API Gateway ?",
    "choices": [
      "Fournir Microsoft Active Directory managé dans le cloud AWS",
      "Provisionner l'infrastructure via des templates (Infrastructure as Code)",
      "Analyser des images et vidéos (détection d'objets, visages, modération)",
      "Créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0537",
    "domain": "Cloud Concepts",
    "question": "Qu'apporte l'AWS Well-Architected Tool ?",
    "choices": [
      "Un service de facturation",
      "Un entrepôt de données",
      "Un pare-feu réseau",
      "Un outil pour évaluer une architecture face aux bonnes pratiques des piliers Well-Architected"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0538",
    "domain": "Cloud Technology",
    "question": "AWS Lambda est principalement utilisé pour :",
    "choices": [
      "Exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution",
      "Fournir Microsoft Active Directory managé dans le cloud AWS",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)",
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0539",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS KMS ?",
    "choices": [
      "Automatiser des pipelines d'intégration et de livraison continues (CI/CD)",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Créer et contrôler les clés de chiffrement utilisées pour protéger les données",
      "Fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0540",
    "domain": "Cloud Technology",
    "question": "À quoi sert Amazon S3 Transfer Acceleration ?",
    "choices": [
      "Accélérer les uploads vers S3 depuis des sites distants via les emplacements Edge et le backbone AWS",
      "Exécuter du SQL sur S3",
      "Archiver à faible coût",
      "Répliquer entre régions"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0541",
    "domain": "Cloud Technology",
    "question": "Différence entre Amazon SQS et Amazon SNS ?",
    "choices": [
      "Ils sont identiques",
      "SQS pour notifications ; SNS pour bases de données",
      "SQS = file de messages (pull, point-à-point) ; SNS = publication/abonnement (push, multi-abonnés)",
      "SNS stocke 14 jours ; SQS jamais"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0542",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL ?",
    "choices": [
      "AWS DataSync",
      "AWS Organizations",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0543",
    "domain": "Cloud Technology",
    "question": "Amazon EKS est principalement utilisé pour :",
    "choices": [
      "Fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil",
      "Exécuter Kubernetes managé sur AWS",
      "Gérer les identités, les accès et les permissions aux ressources AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0544",
    "domain": "Cloud Technology",
    "question": "Cache en mémoire pour accélérer les lectures d'une base : quel service ?",
    "choices": [
      "Amazon S3",
      "Amazon ElastiCache",
      "Amazon Athena",
      "Amazon Neptune"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0545",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon QLDB ?",
    "choices": [
      "Base de données",
      "Migration et transfert",
      "Gestion des coûts et facturation",
      "Gestion et gouvernance"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0546",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir du stockage de blocs persistant et faible latence attaché aux instances EC2 ?",
    "choices": [
      "AWS Lambda",
      "Amazon Lightsail",
      "Amazon Aurora",
      "Amazon EBS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0547",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Pricing Calculator ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Machine Learning / IA",
      "Migration et transfert",
      "Gestion et gouvernance"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0548",
    "domain": "Cloud Concepts",
    "question": "Pourquoi la mise à l'échelle horizontale est-elle privilégiée dans le cloud ?",
    "choices": [
      "Elle réduit la sécurité",
      "Ajouter des instances identiques améliore la disponibilité et évite un point unique de défaillance",
      "Elle rend le chiffrement inutile",
      "Elle supprime le besoin de réseau"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0549",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Polly ?",
    "choices": [
      "Convertir du texte en parole réaliste (text-to-speech)",
      "Fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde",
      "Gérer de façon centralisée les règles de pare-feu sur plusieurs comptes",
      "Découvrir et protéger les données sensibles (PII) stockées dans Amazon S3"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0550",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon SageMaker ?",
    "choices": [
      "Construire, entraîner et déployer des modèles de machine learning",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS",
      "Fournir une base de données compatible Apache Cassandra managée",
      "Fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS)"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0551",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin de recommander des ressources optimales pour réduire les coûts et améliorer la performance. Quel service AWS choisir ?",
    "choices": [
      "AWS Compute Optimizer",
      "AWS Cost and Usage Report",
      "AWS Marketplace",
      "AWS Budgets"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0552",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : créer et contrôler les clés de chiffrement utilisées pour protéger les données ?",
    "choices": [
      "Amazon Detective",
      "AWS IAM",
      "AWS Secrets Manager",
      "AWS KMS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0553",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « une équipe expérimente et déploie de nouvelles idées en minutes sans achat de matériel » ?",
    "choices": [
      "Élasticité",
      "Scalabilité",
      "Durabilité",
      "Agilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0554",
    "domain": "Security & Compliance",
    "question": "Quel composant IAM correspond à : « une identité temporaire assumable par des utilisateurs, services ou comptes, sans credentials permanents » ?",
    "choices": [
      "Utilisateur IAM",
      "Groupe IAM",
      "Policy IAM",
      "Rôle IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0555",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Marketplace ?",
    "choices": [
      "Gérer, configurer et exploiter les instances et ressources à grande échelle",
      "Créer un tunnel VPN chiffré entre un réseau sur site et un VPC",
      "Acheter et déployer des logiciels tiers avec une facturation via AWS",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0556",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : établir une connexion réseau dédiée et privée entre un site et AWS ?",
    "choices": [
      "AWS Direct Connect",
      "AWS Glue",
      "Amazon FSx",
      "Amazon QLDB"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0557",
    "domain": "Cloud Technology",
    "question": "Pour réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Storage Gateway",
      "Amazon EC2",
      "Amazon DocumentDB",
      "Amazon Redshift"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0558",
    "domain": "Billing & Pricing",
    "question": "Le plan de support « gratuit, inclus avec tout compte, documentation et forums, sans support technique » est le plan :",
    "choices": [
      "Basic",
      "Enterprise On-Ramp",
      "Business",
      "Developer"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0559",
    "domain": "Cloud Technology",
    "question": "Pour lancer rapidement des serveurs virtuels simples à prix fixe et prévisible, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon ElastiCache",
      "Amazon Polly",
      "Amazon Lex",
      "Amazon Lightsail"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0560",
    "domain": "Billing & Pricing",
    "question": "Quel plan offre la réponse la plus rapide (< 15 min) pour les cas critiques ?",
    "choices": [
      "Developer",
      "Enterprise",
      "Business",
      "Basic"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0561",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS) ?",
    "choices": [
      "AWS Outposts",
      "Amazon Lex",
      "Amazon SageMaker",
      "Amazon FSx"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0562",
    "domain": "Cloud Technology",
    "question": "Amazon SageMaker est principalement utilisé pour :",
    "choices": [
      "Stocker et analyser des données de séries temporelles",
      "Fournir une base en mémoire compatible Redis, durable et persistante",
      "Convertir de la parole en texte (speech-to-text)",
      "Construire, entraîner et déployer des modèles de machine learning"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0563",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon DynamoDB ?",
    "choices": [
      "Stockage",
      "Gestion des coûts et facturation",
      "Migration et transfert",
      "Base de données"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0564",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés ?",
    "choices": [
      "AWS IAM Identity Center",
      "Amazon Cognito",
      "AWS Audit Manager",
      "AWS CloudHSM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0565",
    "domain": "Cloud Technology",
    "question": "Pour accéder de façon privée à des services sans exposer le trafic à l'Internet public, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon SNS",
      "AWS PrivateLink",
      "Amazon DynamoDB",
      "AWS Control Tower"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0566",
    "domain": "Cloud Technology",
    "question": "Pour « des archives rarement lues mais nécessitant un accès en millisecondes », quelle classe S3 choisir ?",
    "choices": [
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA",
      "S3 Glacier Instant Retrieval",
      "S3 Standard"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0567",
    "domain": "Cloud Concepts",
    "question": "Que mesure le RPO (Recovery Point Objective) ?",
    "choices": [
      "Le nombre d'AZ utilisées",
      "La latence réseau",
      "Le temps de restauration du service",
      "La quantité maximale de données que l'on accepte de perdre (fenêtre de temps)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0568",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'héberger des dépôts Git privés managés. Quel service AWS choisir ?",
    "choices": [
      "AWS CodeCommit",
      "AWS Global Accelerator",
      "Amazon Timestream",
      "Amazon EFS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0569",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de configurer et gouverner un environnement multi-comptes sécurisé (landing zone). Quel service AWS choisir ?",
    "choices": [
      "AWS DMS",
      "Amazon Transcribe",
      "AWS Systems Manager",
      "AWS Control Tower"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0570",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de provisionner l'infrastructure via des templates (Infrastructure as Code) ?",
    "choices": [
      "AWS Organizations",
      "Amazon CloudWatch",
      "AWS CodeBuild",
      "AWS CloudFormation"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0571",
    "domain": "Security & Compliance",
    "question": "Quel composant IAM correspond à : « un document JSON définissant les permissions (allow/deny) » ?",
    "choices": [
      "Groupe IAM",
      "Policy IAM",
      "Rôle IAM",
      "Utilisateur IAM"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0572",
    "domain": "Cloud Technology",
    "question": "Quel service DNS gère aussi le routage (latency, failover, weighted) ?",
    "choices": [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "Amazon Route 53",
      "Elastic Load Balancing"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0573",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « la probabilité de perdre une donnée stockée est extrêmement faible sur le long terme » ?",
    "choices": [
      "Haute disponibilité",
      "Durabilité",
      "Élasticité",
      "Scalabilité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0574",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour analyser et investiguer la cause racine d'incidents de sécurité ?",
    "choices": [
      "AWS KMS",
      "Amazon Detective",
      "AWS CloudTrail",
      "AWS Directory Service"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0575",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Comprehend ?",
    "choices": [
      "Fournir Microsoft Active Directory managé dans le cloud AWS",
      "Extraire des informations et du sens d'un texte via le NLP",
      "Construire des interfaces conversationnelles (chatbots) vocales et textuelles",
      "Créer et contrôler les clés de chiffrement utilisées pour protéger les données"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0576",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de gérer et regrouper de façon centralisée plusieurs comptes AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Organizations",
      "AWS Lambda",
      "Amazon Lightsail",
      "Amazon ECS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0577",
    "domain": "Cloud Technology",
    "question": "AWS Application Migration Service est principalement utilisé pour :",
    "choices": [
      "Migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift)",
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure",
      "Orchestrer des workflows en coordonnant plusieurs services via des machines à états",
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0578",
    "domain": "Cloud Technology",
    "question": "Amazon Lex est principalement utilisé pour :",
    "choices": [
      "Construire des interfaces conversationnelles (chatbots) vocales et textuelles",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Héberger des dépôts Git privés managés"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0579",
    "domain": "Cloud Technology",
    "question": "Pour découpler les composants via une file d'attente de messages (point-à-point), quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Batch",
      "Amazon DynamoDB",
      "Amazon SQS",
      "Amazon FSx"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0580",
    "domain": "Cloud Technology",
    "question": "Pour accéder à des modèles de fondation (IA générative) via une API managée, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Bedrock",
      "AWS CloudShell",
      "Amazon Aurora",
      "Amazon EKS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0581",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : estimer le coût d'une architecture AWS avant son déploiement ?",
    "choices": [
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0582",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour recommander des ressources optimales pour réduire les coûts et améliorer la performance ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS Compute Optimizer",
      "AWS Marketplace"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0583",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Secrets Manager ?",
    "choices": [
      "Étendre l'infrastructure et les services AWS dans votre propre data center sur site",
      "Interconnecter de nombreux VPC et réseaux sur site via un hub central",
      "Établir une connexion réseau dédiée et privée entre un site et AWS",
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0584",
    "domain": "Cloud Technology",
    "question": "Amazon SNS est principalement utilisé pour :",
    "choices": [
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés",
      "Ajuster automatiquement la capacité pour maintenir performance et coûts optimaux",
      "Améliorer la performance en routant le trafic via le backbone privé AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0585",
    "domain": "Cloud Technology",
    "question": "Pour donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon API Gateway",
      "Amazon Neptune",
      "Amazon SQS",
      "AWS Health Dashboard"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0586",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de collecter et traiter des flux de données en temps réel (streaming) ?",
    "choices": [
      "AWS CodePipeline",
      "Amazon Kinesis",
      "AWS Application Migration Service",
      "AWS Batch"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0587",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Systems Manager ?",
    "choices": [
      "Gérer, configurer et exploiter les instances et ressources à grande échelle",
      "Centraliser et prioriser les alertes de sécurité et l'état de conformité",
      "Ajuster automatiquement la capacité pour maintenir performance et coûts optimaux",
      "Exécuter des travaux de traitement par lots à grande échelle"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0588",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS CodeCommit ?",
    "choices": [
      "Héberger des dépôts Git privés managés",
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)",
      "Interconnecter de nombreux VPC et réseaux sur site via un hub central",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0589",
    "domain": "Billing & Pricing",
    "question": "Exemple d'offre du niveau gratuit (Free Tier) sur 12 mois :",
    "choices": [
      "Instances GPU illimitées",
      "Transfert de données sortant illimité",
      "Support Enterprise gratuit",
      "750 heures/mois d'instance EC2 t2.micro ou t3.micro et 5 Go de stockage S3 Standard"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0590",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Systems Manager ?",
    "choices": [
      "Gestion et gouvernance",
      "Réseau et diffusion de contenu",
      "Gestion des coûts et facturation",
      "Base de données"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0591",
    "domain": "Cloud Technology",
    "question": "Pour orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Backup",
      "Amazon MSK",
      "AWS DataSync",
      "Amazon ECS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0592",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : migrer des bases de données vers AWS avec un temps d'arrêt minimal ?",
    "choices": [
      "Amazon SNS",
      "AWS Systems Manager",
      "AWS DMS",
      "Amazon Transcribe"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0593",
    "domain": "Cloud Technology",
    "question": "Quelle famille d'instances EC2 convient à : « le machine learning, le rendu graphique et le calcul GPU » ?",
    "choices": [
      "Famille C (optimisé calcul)",
      "Famille G/P (GPU/accéléré)",
      "Famille R (optimisé mémoire)",
      "Famille I (optimisé stockage)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0594",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour exécuter Kubernetes managé sur AWS ?",
    "choices": [
      "Amazon MSK",
      "Amazon EKS",
      "Amazon Redshift",
      "Amazon S3 Glacier"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0595",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs) ?",
    "choices": [
      "AWS Firewall Manager",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Security Hub"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0596",
    "domain": "Billing & Pricing",
    "question": "Quel outil VISUALISE et prévoit les dépenses déjà engagées ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "Trusted Advisor"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0597",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API). Quel service AWS choisir ?",
    "choices": [
      "AWS Secrets Manager",
      "AWS KMS",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0598",
    "domain": "Cloud Technology",
    "question": "Comment AWS Global Accelerator améliore-t-il la performance ?",
    "choices": [
      "En compressant les fichiers",
      "En routant le trafic via le backbone privé AWS plutôt que l'Internet public",
      "En réduisant les requêtes DNS",
      "En ne mettant en cache que des fichiers statiques"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0599",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de stocker et analyser des données de séries temporelles ?",
    "choices": [
      "Amazon Timestream",
      "AWS Systems Manager",
      "Amazon Comprehend",
      "AWS Elastic Beanstalk"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0600",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Compute Optimizer ?",
    "choices": [
      "Créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles",
      "Gérer les identités, les accès et les permissions aux ressources AWS",
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance",
      "Fournir une base de données compatible Apache Cassandra managée"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0601",
    "domain": "Billing & Pricing",
    "question": "Le plan de support « support 24/7, réponse < 15 min pour les cas critiques et un TAM dédié » est le plan :",
    "choices": [
      "Enterprise",
      "Basic",
      "Enterprise On-Ramp",
      "Business"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0602",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin d'accéder à la demande aux rapports de conformité et de sécurité d'AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Artifact",
      "Amazon Macie",
      "AWS Directory Service",
      "AWS Audit Manager"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0603",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Cloud9 ?",
    "choices": [
      "Migration et transfert",
      "Base de données",
      "Outils de développement",
      "Machine Learning / IA"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0604",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : extraire automatiquement du texte et des données de documents scannés ?",
    "choices": [
      "Amazon Lex",
      "Amazon Textract",
      "AWS Batch",
      "AWS Backup"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0605",
    "domain": "Security & Compliance",
    "question": "AWS Firewall Manager est principalement utilisé pour :",
    "choices": [
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Fournir une base de données compatible Apache Cassandra managée",
      "Fournir Microsoft Active Directory managé dans le cloud AWS",
      "Gérer de façon centralisée les règles de pare-feu sur plusieurs comptes"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0606",
    "domain": "Cloud Technology",
    "question": "Pour rechercher, analyser et visualiser des logs et données en quasi temps réel, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS DataSync",
      "Amazon Redshift",
      "Amazon OpenSearch Service",
      "Amazon EMR"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0607",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : protéger les applications contre les attaques par déni de service distribué (DDoS) ?",
    "choices": [
      "AWS Shield",
      "AWS Directory Service",
      "AWS Security Hub",
      "AWS Config"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0608",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour exécuter des travaux de traitement par lots à grande échelle ?",
    "choices": [
      "Amazon ECS",
      "AWS Batch",
      "Amazon Textract",
      "Amazon S3"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0609",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Rekognition ?",
    "choices": [
      "Intégration d'applications",
      "Stockage",
      "Calcul (Compute)",
      "Machine Learning / IA"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0610",
    "domain": "Cloud Concepts",
    "question": "Quelle stratégie de reprise après sinistre correspond à : « la stratégie DR la moins coûteuse mais avec le RTO/RPO le plus long » ?",
    "choices": [
      "Multi-site actif/actif",
      "Sauvegarde et restauration (Backup & Restore)",
      "Warm Standby",
      "Pilot Light"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0611",
    "domain": "Cloud Concepts",
    "question": "Quel avantage du cloud AWS correspond à : « vous ne payez que ce que vous consommez au lieu d'investir massivement à l'avance » ?",
    "choices": [
      "Arrêter de dépenser pour exploiter des data centers",
      "Augmenter la vitesse et l'agilité",
      "Échanger des dépenses d'investissement (CapEx) contre des dépenses variables (OpEx)",
      "Bénéficier d'économies d'échelle massives"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0612",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : héberger des dépôts Git privés managés ?",
    "choices": [
      "Amazon ElastiCache",
      "AWS CodeCommit",
      "AWS CodeDeploy",
      "Elastic Load Balancing"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0613",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « la probabilité de perdre une donnée stockée est extrêmement faible sur le long terme » ?",
    "choices": [
      "Scalabilité",
      "Élasticité",
      "Haute disponibilité",
      "Durabilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0614",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de fournir Microsoft Active Directory managé dans le cloud AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Security Hub",
      "Amazon Inspector",
      "AWS Directory Service",
      "AWS IAM Identity Center"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0615",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : interconnecter de nombreux VPC et réseaux sur site via un hub central ?",
    "choices": [
      "AWS Site-to-Site VPN",
      "AWS DMS",
      "AWS Transit Gateway",
      "AWS Auto Scaling"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0616",
    "domain": "Cloud Technology",
    "question": "Pour améliorer la performance en routant le trafic via le backbone privé AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon DynamoDB",
      "AWS Site-to-Site VPN",
      "AWS Global Accelerator",
      "AWS Application Migration Service"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0617",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'accéder à un shell en ligne de commande préauthentifié depuis la console AWS. Quel service AWS choisir ?",
    "choices": [
      "Amazon EC2",
      "Amazon EventBridge",
      "AWS CloudShell",
      "Amazon EKS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0618",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : acheter et déployer des logiciels tiers avec une facturation via AWS ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Marketplace",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0619",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Detective ?",
    "choices": [
      "Découpler les composants via une file d'attente de messages (point-à-point)",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Créer un tunnel VPN chiffré entre un réseau sur site et un VPC",
      "Analyser et investiguer la cause racine d'incidents de sécurité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0620",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud offre le plus de contrôle sur l'OS, le stockage et le réseau (ex : EC2) ?",
    "choices": [
      "IaaS",
      "PaaS",
      "SaaS",
      "FaaS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0621",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor",
      "AWS Budgets"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0622",
    "domain": "Billing & Pricing",
    "question": "Que recommandent les vérifications de coût de Trusted Advisor ?",
    "choices": [
      "Désactiver la sécurité",
      "Supprimer la journalisation",
      "Identifier les ressources inutilisées ou sous-utilisées pour réduire la facture",
      "Augmenter volontairement les dépenses"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0623",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin de fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites. Quel service AWS choisir ?",
    "choices": [
      "AWS Budgets",
      "AWS Marketplace",
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0624",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Timestream ?",
    "choices": [
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Fournir Microsoft Active Directory managé dans le cloud AWS",
      "Stocker et analyser des données de séries temporelles",
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0625",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Kinesis ?",
    "choices": [
      "Collecter et traiter des flux de données en temps réel (streaming)",
      "Acheter et déployer des logiciels tiers avec une facturation via AWS",
      "Centraliser et automatiser les sauvegardes de plusieurs services AWS",
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0626",
    "domain": "Security & Compliance",
    "question": "Quel service identifie les données sensibles (PII) dans S3 ?",
    "choices": [
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0627",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Directory Service ?",
    "choices": [
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Fournir une base de données compatible Apache Cassandra managée",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Fournir Microsoft Active Directory managé dans le cloud AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0628",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents ?",
    "choices": [
      "Amazon SNS",
      "AWS Fargate",
      "AWS CodeDeploy",
      "Amazon ECS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0629",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources ?",
    "choices": [
      "AWS Batch",
      "AWS DMS",
      "AWS Health Dashboard",
      "AWS Lambda"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0630",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « le système reste opérationnel avec un minimum d'interruption grâce à la redondance multi-AZ » ?",
    "choices": [
      "Haute disponibilité",
      "Scalabilité",
      "Agilité",
      "Élasticité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0631",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS WAF ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Machine Learning / IA",
      "Sécurité, identité et conformité",
      "Gestion et gouvernance"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0632",
    "domain": "Security & Compliance",
    "question": "Dans IAM, quel élément est défini comme : « une identité temporaire assumable par des utilisateurs, services ou comptes, sans credentials permanents » ?",
    "choices": [
      "Rôle IAM",
      "Utilisateur IAM",
      "Policy IAM",
      "Groupe IAM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0633",
    "domain": "Cloud Technology",
    "question": "Amazon EventBridge est principalement utilisé pour :",
    "choices": [
      "Estimer le coût d'une architecture AWS avant son déploiement",
      "Ajuster automatiquement la capacité pour maintenir performance et coûts optimaux",
      "Router des événements entre applications via un bus d'événements serverless",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0634",
    "domain": "Cloud Concepts",
    "question": "Quel pilier du AWS Well-Architected Framework vise à : « exécuter, surveiller et améliorer continuellement les processus et procédures » ?",
    "choices": [
      "Excellence opérationnelle",
      "Sécurité",
      "Optimisation des coûts",
      "Fiabilité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0635",
    "domain": "Cloud Technology",
    "question": "Diffuser des flux de données en temps réel (clics, IoT, logs) :",
    "choices": [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon Kinesis"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0636",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de centraliser et prioriser les alertes de sécurité et l'état de conformité. Quel service AWS choisir ?",
    "choices": [
      "AWS IAM",
      "AWS IAM Identity Center",
      "Amazon Inspector",
      "AWS Security Hub"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0637",
    "domain": "Security & Compliance",
    "question": "Pour centraliser la gestion des accès SSO à plusieurs comptes et applications, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CloudTrail",
      "AWS KMS",
      "AWS IAM Identity Center",
      "AWS Firewall Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0638",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle ?",
    "choices": [
      "AWS Site-to-Site VPN",
      "Amazon API Gateway",
      "Amazon ElastiCache",
      "AWS Service Catalog"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0639",
    "domain": "Cloud Technology",
    "question": "Pour archiver des données à très faible coût pour un accès peu fréquent, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon S3 Glacier",
      "Amazon S3",
      "Amazon CloudWatch",
      "AWS Snowball"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0640",
    "domain": "Cloud Technology",
    "question": "AWS Snowball est principalement utilisé pour :",
    "choices": [
      "Transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé",
      "Fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS",
      "Découvrir et protéger les données sensibles (PII) stockées dans Amazon S3",
      "Stocker des objets de manière durable et hautement disponible dans des buckets"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0641",
    "domain": "Cloud Technology",
    "question": "AWS Cloud9 est principalement utilisé pour :",
    "choices": [
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure",
      "Stocker des objets de manière durable et hautement disponible dans des buckets",
      "Extraire automatiquement du texte et des données de documents scannés",
      "Fournir un IDE de développement dans le navigateur"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0642",
    "domain": "Cloud Technology",
    "question": "Quel service répartit le trafic entrant entre plusieurs instances/AZ ?",
    "choices": [
      "Amazon CloudFront",
      "Elastic Load Balancing",
      "AWS Auto Scaling",
      "Amazon Route 53"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0643",
    "domain": "Cloud Technology",
    "question": "Quelle classe de stockage Amazon S3 convient à : « des données peu consultées et recréables, stockées dans une seule AZ à moindre coût » ?",
    "choices": [
      "S3 Glacier Instant Retrieval",
      "S3 One Zone-IA",
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0644",
    "domain": "Security & Compliance",
    "question": "Rôle d'Amazon Cognito pour une application mobile ?",
    "choices": [
      "Chiffrer les volumes du serveur",
      "Gérer l'inscription, la connexion et le contrôle d'accès des utilisateurs finaux",
      "Router les requêtes DNS",
      "Distribuer le contenu statique"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0645",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Bedrock ?",
    "choices": [
      "Archiver des données à très faible coût pour un accès peu fréquent",
      "Étendre l'infrastructure et les services AWS dans votre propre data center sur site",
      "Accéder à des modèles de fondation (IA générative) via une API managée",
      "Centraliser et automatiser les sauvegardes de plusieurs services AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0646",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'exécuter des travaux de traitement par lots à grande échelle ?",
    "choices": [
      "Amazon Timestream",
      "AWS Site-to-Site VPN",
      "AWS PrivateLink",
      "AWS Batch"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0647",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites ?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Marketplace"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0648",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de créer et gérer des catalogues de produits IT approuvés pour le déploiement. Quel service AWS choisir ?",
    "choices": [
      "AWS Service Catalog",
      "AWS Control Tower",
      "Amazon Rekognition",
      "AWS Lake Formation"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0649",
    "domain": "Cloud Technology",
    "question": "AWS Transit Gateway est principalement utilisé pour :",
    "choices": [
      "Acheter et déployer des logiciels tiers avec une facturation via AWS",
      "Interconnecter de nombreux VPC et réseaux sur site via un hub central",
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)",
      "Automatiser la collecte de preuves pour les audits de conformité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0650",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de traduire du texte entre langues automatiquement. Quel service AWS choisir ?",
    "choices": [
      "Amazon Translate",
      "AWS Cloud9",
      "Amazon Kinesis",
      "AWS Outposts"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0651",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé ?",
    "choices": [
      "AWS Step Functions",
      "Elastic Load Balancing",
      "Amazon Timestream",
      "AWS Snowball"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0652",
    "domain": "Security & Compliance",
    "question": "Où stocker en priorité les mots de passe de base de données d'une application ?",
    "choices": [
      "Dans AWS Secrets Manager (ou Parameter Store), jamais en dur dans le code",
      "Dans une variable en clair sur l'instance",
      "Dans un bucket S3 public",
      "Dans le code source du dépôt Git"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0653",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Textract ?",
    "choices": [
      "Analytique",
      "Intégration d'applications",
      "Base de données",
      "Machine Learning / IA"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0654",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'analyser des images et vidéos (détection d'objets, visages, modération) ?",
    "choices": [
      "AWS Snowball",
      "Amazon Kendra",
      "Amazon SageMaker",
      "Amazon Rekognition"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0655",
    "domain": "Cloud Technology",
    "question": "Quel stockage de blocs est attaché à une seule instance EC2 avec faible latence ?",
    "choices": [
      "Amazon Glacier",
      "Amazon EFS",
      "Amazon S3",
      "Amazon EBS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0656",
    "domain": "Cloud Concepts",
    "question": "Dans les stratégies de migration (les « 6 R »), laquelle consiste à : « mettre hors service une application devenue inutile » ?",
    "choices": [
      "Rehost (lift-and-shift)",
      "Retire",
      "Refactor / Re-architect",
      "Repurchase"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0657",
    "domain": "Cloud Technology",
    "question": "AWS Storage Gateway est principalement utilisé pour :",
    "choices": [
      "Convertir du texte en parole réaliste (text-to-speech)",
      "Connecter des applications sur site au stockage cloud AWS de façon hybride",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0658",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Elastic Beanstalk ?",
    "choices": [
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure",
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS",
      "Fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide",
      "Fournir une base de données de documents compatible MongoDB"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0659",
    "domain": "Security & Compliance",
    "question": "AWS IAM Identity Center est principalement utilisé pour :",
    "choices": [
      "Exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents",
      "Gérer, configurer et exploiter les instances et ressources à grande échelle",
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Convertir du texte en parole réaliste (text-to-speech)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0660",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : collecter et traiter des flux de données en temps réel (streaming) ?",
    "choices": [
      "Amazon Kinesis",
      "AWS Lambda",
      "Amazon Aurora",
      "AWS Step Functions"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0661",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient Amazon Cognito ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Analytique",
      "Gestion des coûts et facturation",
      "Calcul (Compute)"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0662",
    "domain": "Cloud Technology",
    "question": "Amazon Polly est principalement utilisé pour :",
    "choices": [
      "Fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic",
      "Convertir du texte en parole réaliste (text-to-speech)",
      "Exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents",
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0663",
    "domain": "Cloud Technology",
    "question": "Quelle famille d'instances EC2 convient à : « des charges gourmandes en mémoire (bases en mémoire, caches) » ?",
    "choices": [
      "Famille T (usage général, burstable)",
      "Famille I (optimisé stockage)",
      "Famille M (usage général)",
      "Famille R (optimisé mémoire)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0664",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'exécuter Apache Kafka managé pour le streaming de données. Quel service AWS choisir ?",
    "choices": [
      "Amazon SQS",
      "Amazon API Gateway",
      "Amazon Comprehend",
      "Amazon MSK"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0665",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : visualiser, analyser et prévoir les dépenses AWS historiques et futures ?",
    "choices": [
      "AWS Billing Conductor",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0666",
    "domain": "Cloud Technology",
    "question": "Amazon Textract est principalement utilisé pour :",
    "choices": [
      "Extraire automatiquement du texte et des données de documents scannés",
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS",
      "Exécuter Apache Kafka managé pour le streaming de données",
      "Extraire des informations et du sens d'un texte via le NLP"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0667",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour fournir Microsoft Active Directory managé dans le cloud AWS ?",
    "choices": [
      "AWS Directory Service",
      "AWS IAM",
      "AWS Security Hub",
      "AWS Artifact"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0668",
    "domain": "Billing & Pricing",
    "question": "Quel plan de support AWS offre : « gratuit, inclus avec tout compte, documentation et forums, sans support technique » ?",
    "choices": [
      "Basic",
      "Enterprise On-Ramp",
      "Business",
      "Developer"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0669",
    "domain": "Security & Compliance",
    "question": "Le compte root doit idéalement être utilisé :",
    "choices": [
      "Pour générer des clés applicatives",
      "Uniquement pour les tâches qui l'exigent, protégé par MFA, et non au quotidien",
      "Pour toutes les opérations quotidiennes",
      "Partagé entre administrateurs"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0670",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure ?",
    "choices": [
      "Amazon EFS",
      "Amazon EventBridge",
      "Amazon Route 53",
      "AWS Elastic Beanstalk"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0671",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon MSK ?",
    "choices": [
      "Outils de développement",
      "Migration et transfert",
      "Calcul (Compute)",
      "Analytique"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0672",
    "domain": "Security & Compliance",
    "question": "Pour protéger les applications contre les attaques par déni de service distribué (DDoS), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Detective",
      "AWS IAM",
      "Amazon Macie",
      "AWS Shield"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0673",
    "domain": "Security & Compliance",
    "question": "Les clés d'accès (access keys) servent surtout à :",
    "choices": [
      "Le chiffrement des volumes",
      "L'accès programmatique via la CLI, les SDK et les API",
      "La configuration DNS",
      "La connexion à la console web"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0674",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : accéder de façon privée à des services sans exposer le trafic à l'Internet public ?",
    "choices": [
      "Amazon RDS",
      "AWS PrivateLink",
      "AWS Outposts",
      "Amazon Keyspaces"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0675",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La classification des données et le chiffrement côté client » ?",
    "choices": [
      "Un fournisseur tiers non AWS",
      "Personne, c'est automatique",
      "Le client",
      "AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0676",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Translate ?",
    "choices": [
      "Calcul (Compute)",
      "Machine Learning / IA",
      "Gestion des coûts et facturation",
      "Analytique"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0677",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Artifact ?",
    "choices": [
      "Calcul (Compute)",
      "Réseau et diffusion de contenu",
      "Migration et transfert",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0678",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : stocker et analyser des données de séries temporelles ?",
    "choices": [
      "Amazon Timestream",
      "Amazon Kinesis",
      "AWS DMS",
      "AWS Organizations"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0679",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de fournir Microsoft Active Directory managé dans le cloud AWS ?",
    "choices": [
      "AWS Artifact",
      "AWS Directory Service",
      "AWS Network Firewall",
      "Amazon Cognito"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0680",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Certificate Manager ?",
    "choices": [
      "Gestion et gouvernance",
      "Sécurité, identité et conformité",
      "Machine Learning / IA",
      "Calcul (Compute)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0681",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de déployer un pare-feu réseau managé et à état pour protéger un VPC. Quel service AWS choisir ?",
    "choices": [
      "Amazon Cognito",
      "AWS Firewall Manager",
      "AWS Network Firewall",
      "AWS CloudTrail"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0682",
    "domain": "Cloud Technology",
    "question": "AWS Systems Manager est principalement utilisé pour :",
    "choices": [
      "Mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures",
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents",
      "Gérer, configurer et exploiter les instances et ressources à grande échelle"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0683",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : automatiser la collecte de preuves pour les audits de conformité ?",
    "choices": [
      "AWS Artifact",
      "AWS Certificate Manager",
      "AWS Audit Manager",
      "AWS Directory Service"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0684",
    "domain": "Cloud Technology",
    "question": "Base NoSQL clé-valeur, latence en ms, sans serveur : quel service ?",
    "choices": [
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon RDS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0685",
    "domain": "Cloud Technology",
    "question": "Pour exécuter des requêtes SQL directement sur des données stockées dans Amazon S3, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Athena",
      "Amazon DynamoDB",
      "Amazon Route 53",
      "AWS DMS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0686",
    "domain": "Security & Compliance",
    "question": "Pour centraliser et prioriser les alertes de sécurité et l'état de conformité, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Certificate Manager",
      "AWS Artifact",
      "Amazon Cognito",
      "AWS Security Hub"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0687",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet de visualiser, analyser et prévoir les dépenses AWS historiques et futures ?",
    "choices": [
      "AWS Marketplace",
      "AWS Billing Conductor",
      "AWS Cost and Usage Report",
      "AWS Cost Explorer"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0688",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin de personnaliser la facturation et la refacturation entre équipes ou clients. Quel service AWS choisir ?",
    "choices": [
      "AWS Cost and Usage Report",
      "AWS Billing Conductor",
      "AWS Marketplace",
      "AWS Budgets"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0689",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : accéder à la demande aux rapports de conformité et de sécurité d'AWS ?",
    "choices": [
      "AWS Security Hub",
      "AWS IAM",
      "AWS Artifact",
      "AWS Firewall Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0690",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents ?",
    "choices": [
      "AWS Fargate",
      "Amazon Bedrock",
      "AWS CodeCommit",
      "Amazon Athena"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0691",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Organizations ?",
    "choices": [
      "Fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS)",
      "Gérer et regrouper de façon centralisée plusieurs comptes AWS",
      "Gérer, configurer et exploiter les instances et ressources à grande échelle",
      "Router des événements entre applications via un bus d'événements serverless"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0692",
    "domain": "Security & Compliance",
    "question": "Bonne pratique de sécurité : quelle bonne pratique protège en priorité le compte root aws ?",
    "choices": [
      "Activer l'authentification multifacteur (MFA) sur le compte root",
      "Désactiver CloudTrail",
      "Créer des clés d'accès root pour un usage quotidien",
      "Partager les credentials root"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0693",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Aurora ?",
    "choices": [
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide",
      "Créer des tableaux de bord et de la Business Intelligence (BI)",
      "Compiler le code, exécuter des tests et produire des artefacts (build)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0694",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de construire des interfaces conversationnelles (chatbots) vocales et textuelles. Quel service AWS choisir ?",
    "choices": [
      "Amazon Lex",
      "AWS Lake Formation",
      "Amazon SNS",
      "AWS Glue"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0695",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS CloudHSM ?",
    "choices": [
      "Sécurité, identité et conformité",
      "Base de données",
      "Migration et transfert",
      "Machine Learning / IA"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0696",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'établir une connexion réseau dédiée et privée entre un site et AWS ?",
    "choices": [
      "AWS Elastic Beanstalk",
      "AWS Snowball",
      "AWS Direct Connect",
      "AWS Outposts"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0697",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Storage Gateway ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Migration et transfert",
      "Stockage",
      "Réseau et diffusion de contenu"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0698",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : gérer l'authentification et les identités des utilisateurs d'applications web et mobiles ?",
    "choices": [
      "AWS WAF",
      "AWS Artifact",
      "AWS Firewall Manager",
      "Amazon Cognito"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0699",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS répond au besoin suivant : définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil ?",
    "choices": [
      "AWS Cost and Usage Report",
      "AWS Budgets",
      "AWS Billing Conductor",
      "AWS Trusted Advisor"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0700",
    "domain": "Cloud Technology",
    "question": "Amazon Athena est principalement utilisé pour :",
    "choices": [
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil",
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0701",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon GuardDuty ?",
    "choices": [
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données",
      "Traiter du big data avec des frameworks comme Apache Spark et Hadoop",
      "Établir une connexion réseau dédiée et privée entre un site et AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0702",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour évaluer et enregistrer en continu la conformité de la configuration des ressources ?",
    "choices": [
      "AWS Config",
      "Amazon Macie",
      "AWS Artifact",
      "AWS IAM Identity Center"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0703",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé ?",
    "choices": [
      "AWS Snowball",
      "Amazon Lightsail",
      "Amazon Transcribe",
      "AWS CloudFormation"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0704",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Aurora ?",
    "choices": [
      "Base de données",
      "Réseau et diffusion de contenu",
      "Gestion et gouvernance",
      "Analytique"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0705",
    "domain": "Security & Compliance",
    "question": "Pour journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Macie",
      "AWS Secrets Manager",
      "AWS CloudTrail",
      "AWS Security Hub"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0706",
    "domain": "Cloud Technology",
    "question": "Pour connecter des applications sur site au stockage cloud AWS de façon hybride, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon VPC",
      "Amazon CloudWatch",
      "AWS Storage Gateway",
      "Amazon API Gateway"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0707",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin d'évaluer et enregistrer en continu la conformité de la configuration des ressources. Quel service AWS choisir ?",
    "choices": [
      "AWS Config",
      "Amazon Detective",
      "Amazon Macie",
      "AWS IAM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0708",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon OpenSearch Service ?",
    "choices": [
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Créer des tableaux de bord et de la Business Intelligence (BI)",
      "Créer et contrôler les clés de chiffrement utilisées pour protéger les données",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0709",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS ?",
    "choices": [
      "AWS Directory Service",
      "AWS Secrets Manager",
      "Amazon Cognito",
      "AWS CloudTrail"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0710",
    "domain": "Cloud Concepts",
    "question": "Quel avantage du cloud AWS correspond à : « vous provisionnez la capacité exacte nécessaire et l'ajustez à la demande » ?",
    "choices": [
      "Bénéficier d'économies d'échelle massives",
      "Échanger des dépenses d'investissement (CapEx) contre des dépenses variables (OpEx)",
      "Augmenter la vitesse et l'agilité",
      "Arrêter de deviner la capacité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0711",
    "domain": "Cloud Concepts",
    "question": "Dans les stratégies de migration (les « 6 R »), laquelle consiste à : « déplacer une application telle quelle vers le cloud sans modification » ?",
    "choices": [
      "Repurchase",
      "Rehost (lift-and-shift)",
      "Refactor / Re-architect",
      "Retain"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0712",
    "domain": "Cloud Technology",
    "question": "AWS Site-to-Site VPN est principalement utilisé pour :",
    "choices": [
      "Évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs)",
      "Créer un tunnel VPN chiffré entre un réseau sur site et un VPC",
      "Centraliser la gestion des accès SSO à plusieurs comptes et applications",
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0713",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir une base en mémoire compatible Redis, durable et persistante ?",
    "choices": [
      "AWS CloudFormation",
      "Amazon Redshift",
      "Amazon Transcribe",
      "Amazon MemoryDB"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0714",
    "domain": "Security & Compliance",
    "question": "Qu'est-ce que MFA (authentification multifacteur) ?",
    "choices": [
      "Un type d'instance EC2",
      "Un service de chiffrement de disque",
      "Une couche de sécurité exigeant un second facteur en plus du mot de passe",
      "Un pare-feu réseau"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0715",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de gérer de façon centralisée les règles de pare-feu sur plusieurs comptes ?",
    "choices": [
      "AWS IAM Identity Center",
      "AWS WAF",
      "Amazon Macie",
      "AWS Firewall Manager"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0716",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : filtrer le trafic web et protéger contre les injections SQL et le XSS ?",
    "choices": [
      "AWS WAF",
      "Amazon Detective",
      "AWS Directory Service",
      "Amazon GuardDuty"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0717",
    "domain": "Billing & Pricing",
    "question": "Quels plans donnent accès à la totalité des vérifications Trusted Advisor ?",
    "choices": [
      "Developer uniquement",
      "Tous les plans, y compris Basic",
      "Business, Enterprise On-Ramp et Enterprise",
      "Basic uniquement"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0718",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de provisionner l'infrastructure via des templates (Infrastructure as Code). Quel service AWS choisir ?",
    "choices": [
      "AWS Lambda",
      "AWS Health Dashboard",
      "AWS CloudFormation",
      "Amazon Comprehend"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0719",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour interconnecter de nombreux VPC et réseaux sur site via un hub central ?",
    "choices": [
      "Amazon Lex",
      "Amazon RDS",
      "AWS CodeBuild",
      "AWS Transit Gateway"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0720",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient Amazon Macie ?",
    "choices": [
      "Gestion et gouvernance",
      "Sécurité, identité et conformité",
      "Gestion des coûts et facturation",
      "Migration et transfert"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0721",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : fournir Microsoft Active Directory managé dans le cloud AWS ?",
    "choices": [
      "AWS Artifact",
      "Amazon Detective",
      "AWS CloudHSM",
      "AWS Directory Service"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0722",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin de visualiser, analyser et prévoir les dépenses AWS historiques et futures. Quel service AWS choisir ?",
    "choices": [
      "AWS Compute Optimizer",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Trusted Advisor"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0723",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : automatiser des pipelines d'intégration et de livraison continues (CI/CD) ?",
    "choices": [
      "AWS Transit Gateway",
      "Amazon Translate",
      "AWS CodePipeline",
      "Elastic Load Balancing"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0724",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : construire des interfaces conversationnelles (chatbots) vocales et textuelles ?",
    "choices": [
      "Amazon Lex",
      "AWS Lake Formation",
      "Amazon OpenSearch Service",
      "AWS Batch"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0725",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir une base de données compatible Apache Cassandra managée ?",
    "choices": [
      "Amazon Athena",
      "Amazon Keyspaces",
      "Amazon SQS",
      "Amazon DynamoDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0726",
    "domain": "Security & Compliance",
    "question": "Quel service détecte des menaces via l'analyse des logs (VPC Flow, DNS, CloudTrail) ?",
    "choices": [
      "Amazon Macie",
      "Amazon Inspector",
      "Amazon GuardDuty",
      "AWS Config"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0727",
    "domain": "Billing & Pricing",
    "question": "Combien coûte le plan de support Basic ?",
    "choices": [
      "3 % de la facture",
      "Gratuit, inclus avec chaque compte",
      "29 $/mois",
      "100 $/mois"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0728",
    "domain": "Billing & Pricing",
    "question": "À quoi servent les cost allocation tags ?",
    "choices": [
      "Répartir et suivre les coûts par projet, équipe ou environnement",
      "Augmenter la durabilité",
      "Chiffrer les ressources",
      "Remplacer les rôles IAM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0729",
    "domain": "Security & Compliance",
    "question": "Un employé quitte l'entreprise : quelle action IAM est prioritaire ?",
    "choices": [
      "Changer la politique de mot de passe globale",
      "Supprimer seulement les groupes",
      "Activer MFA sur le root",
      "Désactiver/supprimer ses clés d'accès et son compte IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0730",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet d'accéder à la demande aux rapports de conformité et de sécurité d'AWS ?",
    "choices": [
      "AWS Artifact",
      "Amazon Inspector",
      "AWS IAM",
      "AWS Config"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0731",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin de fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Billing Conductor",
      "AWS Trusted Advisor",
      "AWS Cost and Usage Report"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0732",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « un service de streaming s'adapte seul à la hausse du nombre de spectateurs le soir » ?",
    "choices": [
      "Haute disponibilité",
      "Tolérance aux pannes",
      "Scalabilité",
      "Élasticité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0733",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Service Catalog ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Gestion et gouvernance",
      "Outils de développement",
      "Calcul (Compute)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0734",
    "domain": "Security & Compliance",
    "question": "Quelle affirmation sur AWS CloudTrail est correcte ?",
    "choices": [
      "Il enregistre les appels d'API du compte à des fins d'audit et de gouvernance",
      "Il distribue le contenu via un CDN",
      "Il équilibre la charge",
      "Il mesure l'utilisation CPU des instances"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0735",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS KMS ?",
    "choices": [
      "Stockage",
      "Outils de développement",
      "Réseau et diffusion de contenu",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0736",
    "domain": "Cloud Technology",
    "question": "Requêtes SQL directement sur des fichiers dans S3, sans charger de base :",
    "choices": [
      "Amazon Athena",
      "Amazon RDS",
      "AWS Glue",
      "Amazon Redshift"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0737",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « Amazon S3 conserve les objets sans perte grâce à une réplication (11 neuf) » ?",
    "choices": [
      "Tolérance aux pannes",
      "Agilité",
      "Scalabilité",
      "Durabilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0738",
    "domain": "Cloud Technology",
    "question": "Comment AWS Lambda est-il facturé ?",
    "choices": [
      "À la requête et à la durée d'exécution (à la ms), sans coût au repos",
      "Abonnement mensuel fixe",
      "Tarif horaire fixe par fonction",
      "Coût unique au déploiement"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0739",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS CloudTrail ?",
    "choices": [
      "Archiver des données à très faible coût pour un accès peu fréquent",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS",
      "Analyser et déboguer les applications distribuées (tracing)",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0740",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS CodePipeline ?",
    "choices": [
      "Calcul (Compute)",
      "Outils de développement",
      "Stockage",
      "Gestion et gouvernance"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0741",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour lancer rapidement des serveurs virtuels simples à prix fixe et prévisible ?",
    "choices": [
      "Amazon ECS",
      "Amazon Lightsail",
      "AWS Transit Gateway",
      "Amazon CloudFront"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0742",
    "domain": "Cloud Technology",
    "question": "Amazon Rekognition est principalement utilisé pour :",
    "choices": [
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données",
      "Analyser des images et vidéos (détection d'objets, visages, modération)",
      "Centraliser et automatiser les sauvegardes de plusieurs services AWS",
      "Héberger des dépôts Git privés managés"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0743",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic. Quel service AWS choisir ?",
    "choices": [
      "Amazon Comprehend",
      "Amazon Route 53",
      "AWS Application Migration Service",
      "Amazon SageMaker"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0744",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir du stockage de blocs persistant et faible latence attaché aux instances EC2 ?",
    "choices": [
      "Amazon EBS",
      "AWS Site-to-Site VPN",
      "AWS CodeCommit",
      "Amazon S3 Glacier"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0745",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ. Quel service AWS choisir ?",
    "choices": [
      "Elastic Load Balancing",
      "AWS Lake Formation",
      "AWS DataSync",
      "AWS Direct Connect"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0746",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Direct Connect ?",
    "choices": [
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3",
      "Établir une connexion réseau dédiée et privée entre un site et AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0747",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents ?",
    "choices": [
      "AWS Fargate",
      "AWS CloudShell",
      "Amazon EFS",
      "AWS CloudFormation"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0748",
    "domain": "Cloud Technology",
    "question": "Amazon CloudWatch est principalement utilisé pour :",
    "choices": [
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Surveiller les métriques, journaux et alarmes des ressources et applications AWS",
      "Découpler les composants via une file d'attente de messages (point-à-point)",
      "Établir une connexion réseau dédiée et privée entre un site et AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0749",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : centraliser et automatiser les sauvegardes de plusieurs services AWS ?",
    "choices": [
      "AWS Backup",
      "AWS Global Accelerator",
      "AWS Systems Manager",
      "AWS Transit Gateway"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0750",
    "domain": "Billing & Pricing",
    "question": "Quel outil ESTIME les coûts AVANT déploiement ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0751",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour construire et sécuriser rapidement un data lake ?",
    "choices": [
      "Amazon Translate",
      "Amazon Transcribe",
      "AWS Lake Formation",
      "AWS X-Ray"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0752",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour gérer et regrouper de façon centralisée plusieurs comptes AWS ?",
    "choices": [
      "AWS Direct Connect",
      "Amazon QuickSight",
      "AWS Organizations",
      "AWS Application Migration Service"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0753",
    "domain": "Cloud Concepts",
    "question": "Quelle stratégie de reprise après sinistre correspond à : « maintenir une version réduite mais fonctionnelle du système, prête à monter en charge » ?",
    "choices": [
      "Sauvegarde et restauration (Backup & Restore)",
      "Warm Standby",
      "Pilot Light",
      "Multi-site actif/actif"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0754",
    "domain": "Cloud Technology",
    "question": "Pour exécuter du code sans provisionner ni gérer de serveurs (serverless), facturé à l'exécution, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon MSK",
      "AWS Lambda",
      "Amazon DocumentDB",
      "Amazon ElastiCache"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0755",
    "domain": "Cloud Concepts",
    "question": "Que signifie éliminer le « undifferentiated heavy lifting » ?",
    "choices": [
      "Chiffrer manuellement chaque fichier",
      "Déléguer à AWS les tâches banales d'infrastructure pour se concentrer sur ce qui différencie l'entreprise",
      "Doubler le personnel IT",
      "Supprimer toute l'informatique"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0756",
    "domain": "Cloud Concepts",
    "question": "Parmi les avantages du cloud, lequel décrit : « AWS gère l'infrastructure physique à votre place » ?",
    "choices": [
      "Bénéficier d'économies d'échelle massives",
      "Arrêter de dépenser pour exploiter des data centers",
      "Arrêter de deviner la capacité",
      "Augmenter la vitesse et l'agilité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0757",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'améliorer la performance en routant le trafic via le backbone privé AWS ?",
    "choices": [
      "AWS Global Accelerator",
      "Amazon CloudWatch",
      "Amazon Redshift",
      "Amazon Timestream"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0758",
    "domain": "Billing & Pricing",
    "question": "Pour recommander des ressources optimales pour réduire les coûts et améliorer la performance, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report",
      "AWS Compute Optimizer",
      "AWS Cost Explorer"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0759",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS CloudShell ?",
    "choices": [
      "Accéder à un shell en ligne de commande préauthentifié depuis la console AWS",
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site",
      "Traduire du texte entre langues automatiquement",
      "Fournir du stockage de blocs persistant et faible latence attaché aux instances EC2"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0760",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin de définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil. Quel service AWS choisir ?",
    "choices": [
      "AWS Marketplace",
      "AWS Compute Optimizer",
      "AWS Budgets",
      "AWS Cost and Usage Report"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0761",
    "domain": "Cloud Technology",
    "question": "Pour interconnecter de nombreux VPC et réseaux sur site via un hub central, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Transit Gateway",
      "Elastic Load Balancing",
      "Amazon SageMaker",
      "AWS CodeDeploy"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0762",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon CloudFront ?",
    "choices": [
      "Distribuer du contenu avec faible latence via un réseau CDN d'emplacements Edge",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Migrer des bases de données vers AWS avec un temps d'arrêt minimal"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0763",
    "domain": "Cloud Technology",
    "question": "Pour transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Snowball",
      "Amazon SQS",
      "Amazon CloudWatch",
      "AWS Outposts"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0764",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'automatiser des pipelines d'intégration et de livraison continues (CI/CD) ?",
    "choices": [
      "AWS CodePipeline",
      "Amazon MSK",
      "AWS Health Dashboard",
      "AWS Organizations"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0765",
    "domain": "Cloud Technology",
    "question": "Pour déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Health Dashboard",
      "AWS Cloud9",
      "AWS Elastic Beanstalk",
      "Amazon MemoryDB"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0766",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour accéder à la demande aux rapports de conformité et de sécurité d'AWS ?",
    "choices": [
      "AWS IAM",
      "AWS IAM Identity Center",
      "AWS Artifact",
      "Amazon Macie"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0767",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'archiver des données à très faible coût pour un accès peu fréquent. Quel service AWS choisir ?",
    "choices": [
      "Amazon EC2",
      "Amazon OpenSearch Service",
      "Amazon S3 Glacier",
      "Amazon MSK"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0768",
    "domain": "Security & Compliance",
    "question": "Quelle est la règle d'évaluation des policies IAM en cas de conflit ?",
    "choices": [
      "La dernière policy créée gagne",
      "La policy la plus courte gagne",
      "Une autorisation l'emporte sur un refus",
      "Un refus explicite (explicit deny) l'emporte toujours sur une autorisation"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0769",
    "domain": "Billing & Pricing",
    "question": "Pourquoi le transfert de données entre AZ différentes est-il facturé ?",
    "choices": [
      "Tout trafic interne est gratuit",
      "Le trafic inter-AZ est payant, alors que le trafic dans la même AZ via IP privée est généralement gratuit",
      "Seul le trafic vers Internet est concerné",
      "Tout trafic interne est payant"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0770",
    "domain": "Cloud Technology",
    "question": "Différence entre Security Group et Network ACL ?",
    "choices": [
      "La NACL est stateful (instance) ; le SG stateless (sous-réseau)",
      "Le SG est stateful et s'applique à l'instance ; la NACL est stateless et s'applique au sous-réseau",
      "Les deux sont identiques",
      "Le SG s'applique au VPC entier"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0771",
    "domain": "Security & Compliance",
    "question": "Bonne pratique pour un trail CloudTrail à l'échelle de l'organisation ?",
    "choices": [
      "Activer un trail multi-régions couvrant tous les comptes pour un audit centralisé",
      "Désactiver la journalisation en production",
      "Stocker les logs uniquement en local",
      "N'activer CloudTrail que ponctuellement"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0772",
    "domain": "Cloud Technology",
    "question": "Pour analyser et déboguer les applications distribuées (tracing), quel service AWS est le plus approprié ?",
    "choices": [
      "AWS X-Ray",
      "Amazon EventBridge",
      "Amazon Route 53",
      "Amazon Kinesis"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0773",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de protéger les applications contre les attaques par déni de service distribué (DDoS) ?",
    "choices": [
      "AWS KMS",
      "AWS Shield",
      "AWS CloudHSM",
      "Amazon Macie"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0774",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de construire, entraîner et déployer des modèles de machine learning. Quel service AWS choisir ?",
    "choices": [
      "Amazon CloudFront",
      "Amazon Keyspaces",
      "AWS Auto Scaling",
      "Amazon SageMaker"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0775",
    "domain": "Billing & Pricing",
    "question": "Les trois types de Savings Plans sont :",
    "choices": [
      "Horaire, mensuel et annuel",
      "Basic, Business et Enterprise",
      "Compute Savings Plans, EC2 Instance Savings Plans et SageMaker Savings Plans",
      "Standard, Convertible et Spot"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0776",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Step Functions ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Intégration d'applications",
      "Stockage",
      "Base de données"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0777",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS CloudFormation ?",
    "choices": [
      "Créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle",
      "Provisionner l'infrastructure via des templates (Infrastructure as Code)",
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Accéder à des modèles de fondation (IA générative) via une API managée"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0778",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet d'acheter et déployer des logiciels tiers avec une facturation via AWS ?",
    "choices": [
      "AWS Cost and Usage Report",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Marketplace"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0779",
    "domain": "Cloud Technology",
    "question": "Quelle classe de stockage Amazon S3 convient à : « l'archivage long terme au coût le plus bas, récupération en heures » ?",
    "choices": [
      "S3 Glacier Flexible Retrieval",
      "S3 One Zone-IA",
      "S3 Glacier Deep Archive",
      "S3 Glacier Instant Retrieval"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0780",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « Les correctifs du système d'exploitation invité d'une instance EC2 » ?",
    "choices": [
      "Le client",
      "AWS",
      "Un fournisseur tiers non AWS",
      "Personne, c'est automatique"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0781",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud offre une plateforme managée pour déployer des applications sans gérer l'infrastructure (ex : Elastic Beanstalk) ?",
    "choices": [
      "PaaS",
      "SaaS",
      "IaaS",
      "FaaS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0782",
    "domain": "Security & Compliance",
    "question": "Dans IAM, quel élément est défini comme : « une identité représentant une personne/application avec des credentials à long terme » ?",
    "choices": [
      "Groupe IAM",
      "Utilisateur IAM",
      "Policy IAM",
      "Rôle IAM"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0783",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé. Quel service AWS choisir ?",
    "choices": [
      "AWS CodeCommit",
      "Amazon Kinesis",
      "Amazon Translate",
      "AWS Snowball"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0784",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS Shield ?",
    "choices": [
      "Calcul (Compute)",
      "Réseau et diffusion de contenu",
      "Sécurité, identité et conformité",
      "Migration et transfert"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0785",
    "domain": "Cloud Technology",
    "question": "Quelle famille d'instances EC2 convient à : « du calcul intensif (HPC, encodage, serveurs de jeux) » ?",
    "choices": [
      "Famille G/P (GPU/accéléré)",
      "Famille M (usage général)",
      "Famille I (optimisé stockage)",
      "Famille C (optimisé calcul)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0786",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'orchestrer des workflows en coordonnant plusieurs services via des machines à états ?",
    "choices": [
      "Amazon EBS",
      "Amazon Timestream",
      "AWS DataSync",
      "AWS Step Functions"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0787",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Transit Gateway ?",
    "choices": [
      "Intégration d'applications",
      "Gestion des coûts et facturation",
      "Gestion et gouvernance",
      "Réseau et diffusion de contenu"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0788",
    "domain": "Cloud Concepts",
    "question": "Quel avantage du cloud AWS correspond à : « de nouvelles ressources sont disponibles en minutes plutôt qu'en semaines » ?",
    "choices": [
      "Augmenter la vitesse et l'agilité",
      "Arrêter de dépenser pour exploiter des data centers",
      "Échanger des dépenses d'investissement (CapEx) contre des dépenses variables (OpEx)",
      "Arrêter de deviner la capacité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0789",
    "domain": "Cloud Technology",
    "question": "AWS PrivateLink est principalement utilisé pour :",
    "choices": [
      "Automatiser des pipelines d'intégration et de livraison continues (CI/CD)",
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures",
      "Accéder de façon privée à des services sans exposer le trafic à l'Internet public",
      "Personnaliser la facturation et la refacturation entre équipes ou clients"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0790",
    "domain": "Security & Compliance",
    "question": "Que décrit le chiffrement « au repos » (at rest) ?",
    "choices": [
      "Les données sont chiffrées lorsqu'elles sont stockées sur disque (S3, EBS, RDS…)",
      "Seuls les mots de passe sont concernés",
      "Les données ne sont jamais chiffrées",
      "Uniquement pendant le transit réseau"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0791",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir une base de données de documents compatible MongoDB ?",
    "choices": [
      "Amazon Athena",
      "Amazon DocumentDB",
      "AWS DMS",
      "Amazon Redshift"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0792",
    "domain": "Security & Compliance",
    "question": "Quel service fournit un pare-feu d'applications web managé côté périphérie/ALB ?",
    "choices": [
      "AWS WAF",
      "AWS KMS",
      "AWS Config",
      "Amazon Macie"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0793",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Cost Explorer ?",
    "choices": [
      "Base de données",
      "Gestion des coûts et facturation",
      "Sécurité, identité et conformité",
      "Stockage"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0794",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'améliorer la performance en routant le trafic via le backbone privé AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS PrivateLink",
      "Amazon QLDB",
      "AWS Global Accelerator",
      "Amazon CloudWatch"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0795",
    "domain": "Security & Compliance",
    "question": "AWS Shield est principalement utilisé pour :",
    "choices": [
      "Étendre l'infrastructure et les services AWS dans votre propre data center sur site",
      "Automatiser la collecte de preuves pour les audits de conformité",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0796",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon EMR ?",
    "choices": [
      "Migration et transfert",
      "Intégration d'applications",
      "Calcul (Compute)",
      "Analytique"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0797",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La gestion des identités et permissions IAM des utilisateurs » ?",
    "choices": [
      "Un fournisseur tiers non AWS",
      "Personne, c'est automatique",
      "Le client",
      "AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0798",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : surveiller les métriques, journaux et alarmes des ressources et applications AWS ?",
    "choices": [
      "Amazon CloudWatch",
      "AWS Lake Formation",
      "AWS Systems Manager",
      "Amazon SNS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0799",
    "domain": "Cloud Technology",
    "question": "Amazon OpenSearch Service est principalement utilisé pour :",
    "choices": [
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Fournir un broker de messages managé compatible ActiveMQ et RabbitMQ",
      "Surveiller les métriques, journaux et alarmes des ressources et applications AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0800",
    "domain": "Cloud Technology",
    "question": "Amazon MemoryDB est principalement utilisé pour :",
    "choices": [
      "Fournir une base en mémoire compatible Redis, durable et persistante",
      "Collecter et traiter des flux de données en temps réel (streaming)",
      "Gérer et regrouper de façon centralisée plusieurs comptes AWS",
      "Lancer rapidement des serveurs virtuels simples à prix fixe et prévisible"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0801",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour créer un tunnel VPN chiffré entre un réseau sur site et un VPC ?",
    "choices": [
      "AWS Health Dashboard",
      "AWS Site-to-Site VPN",
      "Amazon EC2",
      "Amazon Neptune"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0802",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS est conçu pour fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS ?",
    "choices": [
      "AWS Budgets",
      "AWS Billing Conductor",
      "AWS Cost and Usage Report",
      "AWS Pricing Calculator"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0803",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de surveiller les métriques, journaux et alarmes des ressources et applications AWS ?",
    "choices": [
      "Amazon Aurora",
      "AWS Systems Manager",
      "Amazon CloudWatch",
      "AWS Backup"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0804",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Artifact",
      "AWS CloudTrail",
      "AWS Directory Service",
      "Amazon Inspector"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0805",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet de fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS ?",
    "choices": [
      "AWS Marketplace",
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0806",
    "domain": "Cloud Technology",
    "question": "Pour construire, entraîner et déployer des modèles de machine learning, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Kendra",
      "Amazon CloudWatch",
      "Amazon SageMaker",
      "AWS Health Dashboard"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0807",
    "domain": "Billing & Pricing",
    "question": "Différence entre RI Standard et RI Convertible ?",
    "choices": [
      "La Standard offre la plus forte remise mais peu de flexibilité ; la Convertible permet de changer d'attributs d'instance",
      "La Convertible est toujours moins chère",
      "Elles sont identiques",
      "La Standard permet de changer de famille à volonté"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0808",
    "domain": "Cloud Technology",
    "question": "Pour accéder à un shell en ligne de commande préauthentifié depuis la console AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CloudShell",
      "AWS Lambda",
      "Amazon DocumentDB",
      "AWS Health Dashboard"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0809",
    "domain": "Billing & Pricing",
    "question": "Pour une charge de travail expérimentale de quelques heures, quel modèle est adapté ?",
    "choices": [
      "On-Demand (aucun engagement, paiement à l'usage)",
      "Savings Plan 3 ans",
      "Reserved Instance 3 ans",
      "Dedicated Host annuel"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0810",
    "domain": "Security & Compliance",
    "question": "Pour gérer de façon centralisée les règles de pare-feu sur plusieurs comptes, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS KMS",
      "AWS IAM Identity Center",
      "AWS Security Hub",
      "AWS Firewall Manager"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0811",
    "domain": "Security & Compliance",
    "question": "Pour gérer l'authentification et les identités des utilisateurs d'applications web et mobiles, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Audit Manager",
      "AWS Firewall Manager",
      "Amazon GuardDuty",
      "Amazon Cognito"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0812",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de construire, entraîner et déployer des modèles de machine learning ?",
    "choices": [
      "Amazon SageMaker",
      "AWS Batch",
      "AWS Application Migration Service",
      "Amazon OpenSearch Service"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0813",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API) ?",
    "choices": [
      "AWS Secrets Manager",
      "Amazon Macie",
      "AWS Audit Manager",
      "Amazon Cognito"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0814",
    "domain": "Security & Compliance",
    "question": "Amazon Macie est principalement utilisé pour :",
    "choices": [
      "Créer et gérer des catalogues de produits IT approuvés pour le déploiement",
      "Évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs)",
      "Centraliser et automatiser les sauvegardes de plusieurs services AWS",
      "Découvrir et protéger les données sensibles (PII) stockées dans Amazon S3"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0815",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour centraliser la gestion des accès SSO à plusieurs comptes et applications ?",
    "choices": [
      "AWS Config",
      "AWS IAM",
      "AWS Certificate Manager",
      "AWS IAM Identity Center"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0816",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'accéder de façon privée à des services sans exposer le trafic à l'Internet public ?",
    "choices": [
      "AWS PrivateLink",
      "AWS Lambda",
      "AWS Batch",
      "Amazon S3"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0817",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle. Quel service AWS choisir ?",
    "choices": [
      "AWS X-Ray",
      "Amazon API Gateway",
      "Amazon EKS",
      "AWS Storage Gateway"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0818",
    "domain": "Security & Compliance",
    "question": "Différence entre chiffrement SSE-S3 et SSE-KMS pour S3 ?",
    "choices": [
      "SSE-S3 utilise des clés gérées entièrement par S3 ; SSE-KMS utilise KMS avec contrôle et journalisation des clés",
      "SSE-S3 utilise vos propres HSM",
      "Ils sont identiques",
      "SSE-KMS ne chiffre pas les données"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0819",
    "domain": "Billing & Pricing",
    "question": "AWS Budgets est principalement utilisé pour :",
    "choices": [
      "Personnaliser la facturation et la refacturation entre équipes ou clients",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Définir des budgets et recevoir des alertes lorsque les coûts dépassent un seuil",
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0820",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift) ?",
    "choices": [
      "AWS Transit Gateway",
      "AWS Health Dashboard",
      "AWS Application Migration Service",
      "Amazon EFS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0821",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : convertir de la parole en texte (speech-to-text) ?",
    "choices": [
      "AWS Lambda",
      "AWS CodeBuild",
      "AWS Site-to-Site VPN",
      "Amazon Transcribe"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0822",
    "domain": "Billing & Pricing",
    "question": "Quand privilégier l'achat On-Demand ?",
    "choices": [
      "Pour le coût le plus bas possible",
      "Pour des tâches interruptibles",
      "Pour des charges imprévisibles, de courte durée ou en phase de test, sans engagement",
      "Pour une charge stable pendant 3 ans"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0823",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « Le chiffrement des données applicatives stockées dans Amazon S3 » ?",
    "choices": [
      "Personne, c'est automatique",
      "AWS",
      "Un fournisseur tiers non AWS",
      "Le client"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0824",
    "domain": "Cloud Technology",
    "question": "Pour migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Athena",
      "Amazon RDS",
      "AWS Application Migration Service",
      "AWS Organizations"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0825",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de réaliser l'ETL managé sans serveur pour préparer et transformer les données. Quel service AWS choisir ?",
    "choices": [
      "Amazon DynamoDB",
      "AWS X-Ray",
      "AWS Glue",
      "AWS Direct Connect"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0826",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift). Quel service AWS choisir ?",
    "choices": [
      "Amazon API Gateway",
      "AWS Application Migration Service",
      "Amazon EMR",
      "Amazon Lex"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0827",
    "domain": "Cloud Concepts",
    "question": "Le pilier « récupérer des défaillances et répondre dynamiquement à la demande » du Well-Architected Framework est :",
    "choices": [
      "Fiabilité",
      "Durabilité (Sustainability)",
      "Efficacité des performances",
      "Sécurité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0828",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de centraliser et prioriser les alertes de sécurité et l'état de conformité ?",
    "choices": [
      "AWS Security Hub",
      "AWS Network Firewall",
      "AWS Secrets Manager",
      "AWS Artifact"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0829",
    "domain": "Security & Compliance",
    "question": "Pour gérer les identités, les accès et les permissions aux ressources AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Detective",
      "AWS Artifact",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0830",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde ?",
    "choices": [
      "AWS Transit Gateway",
      "Amazon DynamoDB",
      "Amazon EBS",
      "Elastic Load Balancing"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0831",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de créer des tableaux de bord et de la Business Intelligence (BI). Quel service AWS choisir ?",
    "choices": [
      "Amazon EFS",
      "AWS Backup",
      "Amazon VPC",
      "Amazon QuickSight"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0832",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour améliorer la performance en routant le trafic via le backbone privé AWS ?",
    "choices": [
      "AWS Health Dashboard",
      "Amazon Timestream",
      "AWS PrivateLink",
      "AWS Global Accelerator"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0833",
    "domain": "Cloud Technology",
    "question": "Se connecter à une instance EC2 sans ouvrir de port SSH ni gérer de clés :",
    "choices": [
      "Stocker la clé privée sur l'instance",
      "Ouvrir le port 22 à 0.0.0.0/0",
      "AWS Systems Manager Session Manager",
      "Utiliser un bastion public sans contrôle"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0834",
    "domain": "Security & Compliance",
    "question": "Pour fournir des modules matériels de sécurité (HSM) dédiés pour la gestion des clés, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CloudHSM",
      "AWS Artifact",
      "AWS Network Firewall",
      "AWS CloudTrail"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0835",
    "domain": "Cloud Concepts",
    "question": "Quel concept du cloud décrit le mieux : « une application continue de répondre même pendant la maintenance d'un composant » ?",
    "choices": [
      "Haute disponibilité",
      "Scalabilité",
      "Durabilité",
      "Tolérance aux pannes"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0836",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de créer et gérer des catalogues de produits IT approuvés pour le déploiement ?",
    "choices": [
      "AWS Service Catalog",
      "Amazon Neptune",
      "Amazon Polly",
      "Amazon EFS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0837",
    "domain": "Security & Compliance",
    "question": "Amazon GuardDuty est principalement utilisé pour :",
    "choices": [
      "Convertir de la parole en texte (speech-to-text)",
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Surveiller les métriques, journaux et alarmes des ressources et applications AWS",
      "Construire, entraîner et déployer des modèles de machine learning"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0838",
    "domain": "Billing & Pricing",
    "question": "Où acheter des logiciels tiers facturés via votre compte AWS ?",
    "choices": [
      "AWS Budgets",
      "AWS Config",
      "AWS Artifact",
      "AWS Marketplace"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0839",
    "domain": "Cloud Technology",
    "question": "Amazon RDS est principalement utilisé pour :",
    "choices": [
      "Donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources",
      "Collecter et traiter des flux de données en temps réel (streaming)",
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance",
      "Gérer des bases de données relationnelles managées (MySQL, PostgreSQL, etc.)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0840",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient Amazon GuardDuty ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Gestion et gouvernance",
      "Calcul (Compute)",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0841",
    "domain": "Cloud Technology",
    "question": "Quel service met en cache le contenu près des utilisateurs (CDN) ?",
    "choices": [
      "Amazon Route 53",
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "Elastic Load Balancing"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0842",
    "domain": "Cloud Technology",
    "question": "Amazon QuickSight est principalement utilisé pour :",
    "choices": [
      "Compiler le code, exécuter des tests et produire des artefacts (build)",
      "Créer un tunnel VPN chiffré entre un réseau sur site et un VPC",
      "Protéger les applications contre les attaques par déni de service distribué (DDoS)",
      "Créer des tableaux de bord et de la Business Intelligence (BI)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0843",
    "domain": "Billing & Pricing",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Trusted Advisor ?",
    "choices": [
      "Gérer de façon centralisée les règles de pare-feu sur plusieurs comptes",
      "Fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites",
      "Exécuter Kubernetes managé sur AWS",
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0844",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Artifact ?",
    "choices": [
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Provisionner l'infrastructure via des templates (Infrastructure as Code)",
      "Gérer une base de données de graphes managée",
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0845",
    "domain": "Billing & Pricing",
    "question": "Tarification du transfert de données : quelle affirmation est correcte ?",
    "choices": [
      "Facturé seulement hors USA",
      "Le trafic entrant depuis Internet est généralement gratuit ; le trafic sortant est facturé par Go",
      "Tout transfert est gratuit",
      "L'entrant est payant, le sortant gratuit"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0846",
    "domain": "Security & Compliance",
    "question": "Comment donner à un compte AWS un accès temporaire aux ressources d'un autre compte ?",
    "choices": [
      "Copier les clés d'accès par e-mail",
      "Utiliser des rôles IAM pour l'accès inter-comptes",
      "Rendre les buckets publics",
      "Partager le mot de passe root"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0847",
    "domain": "Cloud Concepts",
    "question": "Parmi les avantages du cloud, lequel décrit : « de nouvelles ressources sont disponibles en minutes plutôt qu'en semaines » ?",
    "choices": [
      "Augmenter la vitesse et l'agilité",
      "Échanger des dépenses d'investissement (CapEx) contre des dépenses variables (OpEx)",
      "Arrêter de deviner la capacité",
      "Arrêter de dépenser pour exploiter des data centers"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0848",
    "domain": "Billing & Pricing",
    "question": "À quoi sert le tableau de bord de facturation (Billing Dashboard) ?",
    "choices": [
      "Déployer des instances EC2",
      "Configurer un VPC",
      "Suivre les dépenses courantes, les prévisions et l'historique de facturation du compte",
      "Créer des rôles IAM"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0849",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La gestion de l'infrastructure des services managés (ex : matériel de S3) » ?",
    "choices": [
      "Un fournisseur tiers non AWS",
      "Le client",
      "AWS",
      "Personne, c'est automatique"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0850",
    "domain": "Cloud Concepts",
    "question": "Que permet la reproductibilité de l'Infrastructure as Code ?",
    "choices": [
      "Supprimer la journalisation",
      "Empêcher toute modification future",
      "Recréer des environnements identiques de façon fiable et automatisée",
      "Rendre le déploiement manuel obligatoire"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0851",
    "domain": "Cloud Technology",
    "question": "Amazon EC2 est principalement utilisé pour :",
    "choices": [
      "Extraire automatiquement du texte et des données de documents scannés",
      "Fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0852",
    "domain": "Cloud Technology",
    "question": "Pour établir une connexion réseau dédiée et privée entre un site et AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon SQS",
      "AWS Direct Connect",
      "AWS Global Accelerator",
      "AWS Fargate"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0853",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources ?",
    "choices": [
      "Amazon Bedrock",
      "Amazon Timestream",
      "AWS Systems Manager",
      "AWS Health Dashboard"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0854",
    "domain": "Cloud Technology",
    "question": "Amazon SQS est principalement utilisé pour :",
    "choices": [
      "Filtrer le trafic web et protéger contre les injections SQL et le XSS",
      "Découpler les composants via une file d'attente de messages (point-à-point)",
      "Accéder à la demande aux rapports de conformité et de sécurité d'AWS",
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0855",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : configurer et gouverner un environnement multi-comptes sécurisé (landing zone) ?",
    "choices": [
      "Amazon Bedrock",
      "AWS Control Tower",
      "AWS Organizations",
      "Amazon Redshift"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0856",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde ?",
    "choices": [
      "Amazon DynamoDB",
      "AWS Batch",
      "AWS Fargate",
      "Amazon Timestream"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0857",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon ECS ?",
    "choices": [
      "Machine Learning / IA",
      "Stockage",
      "Calcul (Compute)",
      "Sécurité, identité et conformité"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0858",
    "domain": "Security & Compliance",
    "question": "Quel service AWS répond au besoin suivant : déployer un pare-feu réseau managé et à état pour protéger un VPC ?",
    "choices": [
      "AWS Network Firewall",
      "AWS Certificate Manager",
      "Amazon GuardDuty",
      "AWS CloudTrail"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0859",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour protéger les applications contre les attaques par déni de service distribué (DDoS) ?",
    "choices": [
      "AWS IAM",
      "AWS CloudHSM",
      "AWS Shield",
      "Amazon Cognito"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0860",
    "domain": "Cloud Concepts",
    "question": "Quelle caractéristique du cloud correspond à : « le système reste opérationnel avec un minimum d'interruption grâce à la redondance multi-AZ » ?",
    "choices": [
      "Agilité",
      "Élasticité",
      "Scalabilité",
      "Haute disponibilité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0861",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de distribuer du contenu avec faible latence via un réseau CDN d'emplacements Edge ?",
    "choices": [
      "Amazon EC2",
      "Amazon CloudFront",
      "AWS Fargate",
      "Amazon Lightsail"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0862",
    "domain": "Security & Compliance",
    "question": "Pour filtrer le trafic web et protéger contre les injections SQL et le XSS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Certificate Manager",
      "AWS CloudHSM",
      "AWS Directory Service",
      "AWS WAF"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0863",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon ElastiCache ?",
    "choices": [
      "Base de données",
      "Gestion et gouvernance",
      "Intégration d'applications",
      "Gestion des coûts et facturation"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0864",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La sécurité physique des régions et zones de disponibilité » ?",
    "choices": [
      "Le client",
      "Personne, c'est automatique",
      "AWS",
      "Un fournisseur tiers non AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0865",
    "domain": "Security & Compliance",
    "question": "Rôle d'AWS IAM Access Analyzer ?",
    "choices": [
      "Créer des sauvegardes automatiques",
      "Chiffrer les volumes EBS",
      "Router le trafic DNS",
      "Identifier les ressources partagées avec des entités externes pour repérer les accès non intentionnels"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0866",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Outposts ?",
    "choices": [
      "Outils de développement",
      "Réseau et diffusion de contenu",
      "Calcul (Compute)",
      "Sécurité, identité et conformité"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0867",
    "domain": "Cloud Concepts",
    "question": "Quelle stratégie de reprise après sinistre correspond à : « exécuter la charge simultanément sur plusieurs sites pour un RTO/RPO quasi nul (le plus coûteux) » ?",
    "choices": [
      "Pilot Light",
      "Multi-site actif/actif",
      "Sauvegarde et restauration (Backup & Restore)",
      "Warm Standby"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0868",
    "domain": "Cloud Technology",
    "question": "Quelle classe de stockage Amazon S3 convient à : « des données aux accès inconnus/variables, avec optimisation automatique des coûts » ?",
    "choices": [
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Standard",
      "S3 Intelligent-Tiering"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0869",
    "domain": "Security & Compliance",
    "question": "Pour accéder à la demande aux rapports de conformité et de sécurité d'AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Inspector",
      "AWS Directory Service",
      "AWS Artifact",
      "AWS Secrets Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0870",
    "domain": "Cloud Technology",
    "question": "Pour gérer une base de données de graphes managée, quel service AWS est le plus approprié ?",
    "choices": [
      "Elastic Load Balancing",
      "Amazon Neptune",
      "Amazon MemoryDB",
      "Amazon Aurora"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0871",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour convertir du texte en parole réaliste (text-to-speech) ?",
    "choices": [
      "Amazon Route 53",
      "Amazon CloudWatch",
      "AWS Auto Scaling",
      "Amazon Polly"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0872",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de connecter des applications sur site au stockage cloud AWS de façon hybride. Quel service AWS choisir ?",
    "choices": [
      "Amazon RDS",
      "AWS Storage Gateway",
      "Amazon Transcribe",
      "AWS CodeDeploy"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0873",
    "domain": "Cloud Concepts",
    "question": "Quel élément de l'infrastructure mondiale AWS correspond à : « une zone géographique distincte contenant plusieurs zones de disponibilité isolées » ?",
    "choices": [
      "Zone de disponibilité (AZ)",
      "Région AWS",
      "Point de présence (PoP)",
      "Emplacement périphérique (Edge location)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0874",
    "domain": "Cloud Technology",
    "question": "Pour « l'archivage long terme au coût le plus bas, récupération en heures », quelle classe S3 choisir ?",
    "choices": [
      "S3 One Zone-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Instant Retrieval",
      "S3 Glacier Deep Archive"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0875",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS) ?",
    "choices": [
      "Amazon FSx",
      "AWS Elastic Beanstalk",
      "Amazon ECS",
      "Amazon EBS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0876",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'automatiser le déploiement de code vers EC2, Lambda ou sur site. Quel service AWS choisir ?",
    "choices": [
      "AWS Step Functions",
      "AWS Glue",
      "Amazon Redshift",
      "AWS CodeDeploy"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0877",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS CloudTrail ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Sécurité, identité et conformité",
      "Migration et transfert",
      "Intégration d'applications"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0878",
    "domain": "Cloud Technology",
    "question": "AWS Fargate est principalement utilisé pour :",
    "choices": [
      "Stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API)",
      "Gérer et regrouper de façon centralisée plusieurs comptes AWS",
      "Exécuter des conteneurs sans gérer les serveurs ou clusters sous-jacents",
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0879",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS IAM Identity Center ?",
    "choices": [
      "Base de données",
      "Calcul (Compute)",
      "Outils de développement",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0880",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour stocker et analyser des données de séries temporelles ?",
    "choices": [
      "AWS Site-to-Site VPN",
      "Amazon Redshift",
      "Amazon Timestream",
      "AWS Backup"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0881",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS X-Ray ?",
    "choices": [
      "Machine Learning / IA",
      "Outils de développement",
      "Sécurité, identité et conformité",
      "Migration et transfert"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0882",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Lake Formation ?",
    "choices": [
      "Machine Learning / IA",
      "Analytique",
      "Stockage",
      "Sécurité, identité et conformité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0883",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon EC2 ?",
    "choices": [
      "Extraire automatiquement du texte et des données de documents scannés",
      "Collecter et traiter des flux de données en temps réel (streaming)",
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Accéder à des modèles de fondation (IA générative) via une API managée"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0884",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Organizations ?",
    "choices": [
      "Gestion et gouvernance",
      "Migration et transfert",
      "Gestion des coûts et facturation",
      "Outils de développement"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0885",
    "domain": "Cloud Technology",
    "question": "Pour automatiser le déploiement de code vers EC2, Lambda ou sur site, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Bedrock",
      "AWS Service Catalog",
      "Amazon MSK",
      "AWS CodeDeploy"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0886",
    "domain": "Security & Compliance",
    "question": "Quel principe consiste à segmenter l'accès pour limiter l'impact d'une compromission ?",
    "choices": [
      "Le moindre privilège combiné à la séparation des rôles",
      "Le partage total des permissions",
      "La désactivation de la journalisation",
      "L'usage unique du compte root"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0887",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour déployer un pare-feu réseau managé et à état pour protéger un VPC ?",
    "choices": [
      "AWS KMS",
      "AWS IAM Identity Center",
      "AWS Network Firewall",
      "Amazon GuardDuty"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0888",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : gérer, configurer et exploiter les instances et ressources à grande échelle ?",
    "choices": [
      "AWS Systems Manager",
      "Amazon SQS",
      "Amazon ElastiCache",
      "AWS Lambda"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0889",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir une base de données compatible Apache Cassandra managée ?",
    "choices": [
      "AWS CodeBuild",
      "Amazon ElastiCache",
      "Amazon RDS",
      "Amazon Keyspaces"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0890",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde ?",
    "choices": [
      "Amazon EC2",
      "Amazon QLDB",
      "AWS Glue",
      "Amazon DynamoDB"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0891",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : orchestrer des workflows en coordonnant plusieurs services via des machines à états ?",
    "choices": [
      "AWS Step Functions",
      "Amazon MSK",
      "AWS Batch",
      "Amazon Comprehend"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0892",
    "domain": "Cloud Technology",
    "question": "Pour héberger des dépôts Git privés managés, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CodeCommit",
      "AWS Step Functions",
      "AWS DMS",
      "AWS CloudFormation"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0893",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'accéder à des modèles de fondation (IA générative) via une API managée. Quel service AWS choisir ?",
    "choices": [
      "Amazon Bedrock",
      "Amazon CloudWatch",
      "AWS CodeBuild",
      "Amazon EFS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0894",
    "domain": "Billing & Pricing",
    "question": "Une entreprise a besoin d'acheter et déployer des logiciels tiers avec une facturation via AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor",
      "AWS Marketplace",
      "AWS Compute Optimizer"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0895",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés. Quel service AWS choisir ?",
    "choices": [
      "Amazon SNS",
      "AWS Fargate",
      "Amazon CloudWatch",
      "Amazon S3"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0896",
    "domain": "Billing & Pricing",
    "question": "Quel outil ALERTE quand les dépenses dépassent un seuil ?",
    "choices": [
      "AWS Cost and Usage Report",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0897",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour automatiser des pipelines d'intégration et de livraison continues (CI/CD) ?",
    "choices": [
      "Amazon Rekognition",
      "AWS CodePipeline",
      "Amazon Lightsail",
      "Amazon QLDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0898",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de filtrer le trafic web et protéger contre les injections SQL et le XSS ?",
    "choices": [
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Firewall Manager",
      "AWS KMS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0899",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin d'ajuster automatiquement la capacité pour maintenir performance et coûts optimaux. Quel service AWS choisir ?",
    "choices": [
      "AWS Auto Scaling",
      "Amazon MQ",
      "AWS DMS",
      "AWS Direct Connect"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0900",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour traiter du big data avec des frameworks comme Apache Spark et Hadoop ?",
    "choices": [
      "Amazon EMR",
      "Amazon QLDB",
      "Amazon Polly",
      "Amazon Transcribe"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0901",
    "domain": "Cloud Concepts",
    "question": "Quels critères guident le choix d'une région AWS ?",
    "choices": [
      "Uniquement la couleur du logo",
      "Uniquement le fuseau horaire",
      "Uniquement le nom de la région",
      "La latence vers les utilisateurs, la conformité/résidence des données, le coût et la disponibilité des services"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0902",
    "domain": "Security & Compliance",
    "question": "Une entreprise a besoin de provisionner et gérer des certificats SSL/TLS pour les services AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS Network Firewall",
      "AWS Certificate Manager",
      "AWS Security Hub",
      "AWS Config"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0903",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Firewall Manager ?",
    "choices": [
      "Visualiser, analyser et prévoir les dépenses AWS historiques et futures",
      "Gérer de façon centralisée les règles de pare-feu sur plusieurs comptes",
      "Stocker et analyser des données de séries temporelles",
      "Donner de la visibilité sur l'état des services AWS et les événements affectant vos ressources"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0904",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : convertir du texte en parole réaliste (text-to-speech) ?",
    "choices": [
      "Amazon Polly",
      "Amazon Neptune",
      "Amazon VPC",
      "Amazon SNS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0905",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : accéder à des modèles de fondation (IA générative) via une API managée ?",
    "choices": [
      "AWS DMS",
      "Amazon EKS",
      "Amazon Bedrock",
      "Amazon OpenSearch Service"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0906",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour centraliser et automatiser les sauvegardes de plusieurs services AWS ?",
    "choices": [
      "AWS CodeCommit",
      "Amazon DynamoDB",
      "AWS Backup",
      "Amazon Athena"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0907",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir un IDE de développement dans le navigateur. Quel service AWS choisir ?",
    "choices": [
      "AWS Elastic Beanstalk",
      "Amazon QLDB",
      "AWS X-Ray",
      "AWS Cloud9"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0908",
    "domain": "Cloud Technology",
    "question": "Pour créer des tableaux de bord et de la Business Intelligence (BI), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon DynamoDB",
      "Amazon EventBridge",
      "Amazon Lightsail",
      "Amazon QuickSight"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0909",
    "domain": "Billing & Pricing",
    "question": "Qu'est-ce que le principe de tarification dégressive (volume) de S3 ?",
    "choices": [
      "Le prix unitaire par Go diminue à mesure que le volume stocké augmente",
      "Le prix augmente avec le volume",
      "Le stockage est toujours gratuit",
      "Le prix dépend du nombre d'utilisateurs IAM"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0910",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Billing Conductor ?",
    "choices": [
      "Analytique",
      "Gestion des coûts et facturation",
      "Stockage",
      "Outils de développement"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0911",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour gérer une base de données de graphes managée ?",
    "choices": [
      "AWS Outposts",
      "AWS Control Tower",
      "AWS Site-to-Site VPN",
      "Amazon Neptune"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0912",
    "domain": "Cloud Technology",
    "question": "Quelle classe de stockage Amazon S3 convient à : « des données fréquemment consultées nécessitant une faible latence » ?",
    "choices": [
      "S3 One Zone-IA",
      "S3 Glacier Deep Archive",
      "S3 Glacier Instant Retrieval",
      "S3 Standard"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0913",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de stocker des objets de manière durable et hautement disponible dans des buckets ?",
    "choices": [
      "Amazon Keyspaces",
      "AWS Service Catalog",
      "AWS Batch",
      "Amazon S3"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0914",
    "domain": "Security & Compliance",
    "question": "Comportement par défaut d'un Security Group nouvellement créé ?",
    "choices": [
      "Il refuse tout le trafic sortant",
      "Il autorise tout dans les deux sens",
      "Il refuse tout le trafic entrant et autorise tout le trafic sortant",
      "Il autorise tout le trafic entrant"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0915",
    "domain": "Cloud Technology",
    "question": "Pour créer un réseau virtuel isolé avec sous-réseaux, tables de routage et passerelles, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon VPC",
      "Amazon Comprehend",
      "Amazon Lightsail",
      "AWS Glue"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0916",
    "domain": "Security & Compliance",
    "question": "Bonne pratique de sécurité : un employé quitte l'entreprise : quelle action iam est prioritaire ?",
    "choices": [
      "Changer la politique de mot de passe globale",
      "Activer MFA sur le root",
      "Supprimer seulement les groupes",
      "Désactiver/supprimer ses clés d'accès et son compte IAM"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0917",
    "domain": "Security & Compliance",
    "question": "Un Security Group agit comme :",
    "choices": [
      "Un pare-feu à état (stateful) au niveau de l'instance, autorisant explicitement le trafic",
      "Un service DNS",
      "Un pare-feu sans état au niveau du sous-réseau",
      "Un équilibreur de charge"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0918",
    "domain": "Cloud Technology",
    "question": "AWS CloudFormation est principalement utilisé pour :",
    "choices": [
      "Provisionner l'infrastructure via des templates (Infrastructure as Code)",
      "Centraliser et automatiser les sauvegardes de plusieurs services AWS",
      "Analyser des images et vidéos (détection d'objets, visages, modération)",
      "Ajuster automatiquement la capacité pour maintenir performance et coûts optimaux"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0919",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La maintenance de l'infrastructure réseau mondiale » ?",
    "choices": [
      "Personne, c'est automatique",
      "Un fournisseur tiers non AWS",
      "Le client",
      "AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0920",
    "domain": "Cloud Concepts",
    "question": "Quel avantage du cloud AWS correspond à : « AWS gère l'infrastructure physique à votre place » ?",
    "choices": [
      "Arrêter de deviner la capacité",
      "Augmenter la vitesse et l'agilité",
      "Bénéficier d'économies d'échelle massives",
      "Arrêter de dépenser pour exploiter des data centers"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0921",
    "domain": "Billing & Pricing",
    "question": "Modes de paiement d'une Reserved Instance ?",
    "choices": [
      "Uniquement mensuel",
      "Uniquement horaire",
      "Tout à l'avance, partiel à l'avance, ou sans paiement initial",
      "Uniquement total à l'avance"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0922",
    "domain": "Billing & Pricing",
    "question": "AWS Compute Optimizer est principalement utilisé pour :",
    "choices": [
      "Router des événements entre applications via un bus d'événements serverless",
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance",
      "Construire, entraîner et déployer des modèles de machine learning",
      "Analyser et investiguer la cause racine d'incidents de sécurité"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0923",
    "domain": "Cloud Technology",
    "question": "Amazon Transcribe est principalement utilisé pour :",
    "choices": [
      "Fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Convertir de la parole en texte (speech-to-text)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0924",
    "domain": "Billing & Pricing",
    "question": "AWS Trusted Advisor est principalement utilisé pour :",
    "choices": [
      "Fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS",
      "Détecter les menaces en analysant en continu l'activité malveillante et anormale",
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Fournir des recommandations sur les coûts, la sécurité, la performance, la tolérance aux pannes et les limites"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0925",
    "domain": "Security & Compliance",
    "question": "Quelle approche IAM n'accorde que les permissions strictement nécessaires ?",
    "choices": [
      "Donner tout puis retirer plus tard",
      "Utiliser un seul admin partagé",
      "Appliquer le principe du moindre privilège",
      "Attribuer AdministratorAccess à tous"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0926",
    "domain": "Billing & Pricing",
    "question": "Quel outil recommande le redimensionnement des ressources pour réduire les coûts ?",
    "choices": [
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Artifact",
      "AWS Compute Optimizer"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0927",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS CloudFormation ?",
    "choices": [
      "Gestion et gouvernance",
      "Outils de développement",
      "Intégration d'applications",
      "Réseau et diffusion de contenu"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0928",
    "domain": "Cloud Technology",
    "question": "AWS X-Ray est principalement utilisé pour :",
    "choices": [
      "Personnaliser la facturation et la refacturation entre équipes ou clients",
      "Créer un tunnel VPN chiffré entre un réseau sur site et un VPC",
      "Répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ",
      "Analyser et déboguer les applications distribuées (tracing)"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0929",
    "domain": "Cloud Concepts",
    "question": "Quel avantage du cloud AWS correspond à : « l'usage agrégé de nombreux clients AWS fait baisser les prix (pay-as-you-go) » ?",
    "choices": [
      "Bénéficier d'économies d'échelle massives",
      "Arrêter de dépenser pour exploiter des data centers",
      "Arrêter de deviner la capacité",
      "Augmenter la vitesse et l'agilité"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0930",
    "domain": "Billing & Pricing",
    "question": "Pour visualiser, analyser et prévoir les dépenses AWS historiques et futures, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "AWS Compute Optimizer",
      "AWS Pricing Calculator"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0931",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS ?",
    "choices": [
      "Amazon ECS",
      "Amazon Redshift",
      "Amazon Lex",
      "AWS Organizations"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0932",
    "domain": "Security & Compliance",
    "question": "Bonne pratique de sécurité : quelle recommandation concerne l'usage du compte root ?",
    "choices": [
      "Ne pas utiliser le compte root au quotidien",
      "Utiliser le root pour toutes les tâches",
      "Partager le root avec l'équipe",
      "Générer des clés root applicatives"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0933",
    "domain": "Cloud Technology",
    "question": "Pour convertir de la parole en texte (speech-to-text), quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon OpenSearch Service",
      "AWS Control Tower",
      "Amazon Transcribe",
      "AWS Batch"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0934",
    "domain": "Cloud Technology",
    "question": "Amazon Aurora est principalement utilisé pour :",
    "choices": [
      "Fournir des serveurs virtuels redimensionnables (machines virtuelles) dans le cloud",
      "Estimer le coût d'une architecture AWS avant son déploiement",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS",
      "Fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0935",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés ?",
    "choices": [
      "Amazon S3",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon CloudFront"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0936",
    "domain": "Cloud Technology",
    "question": "Quel service ajoute/retire automatiquement des instances selon la demande ?",
    "choices": [
      "AWS Auto Scaling",
      "Elastic Load Balancing",
      "AWS Lambda",
      "Amazon CloudFront"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0937",
    "domain": "Cloud Technology",
    "question": "Pour stocker et analyser des données de séries temporelles, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Step Functions",
      "AWS CodeCommit",
      "Amazon Timestream",
      "Amazon SageMaker"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0938",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet d'héberger des dépôts Git privés managés ?",
    "choices": [
      "Amazon MSK",
      "AWS PrivateLink",
      "AWS CodeCommit",
      "Elastic Load Balancing"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0939",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour extraire des informations et du sens d'un texte via le NLP ?",
    "choices": [
      "Amazon SQS",
      "AWS Application Migration Service",
      "AWS Elastic Beanstalk",
      "Amazon Comprehend"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0940",
    "domain": "Cloud Technology",
    "question": "Amazon ElastiCache est principalement utilisé pour :",
    "choices": [
      "Mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures",
      "Provisionner et gérer des certificats SSL/TLS pour les services AWS",
      "Automatiser des pipelines d'intégration et de livraison continues (CI/CD)",
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0941",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour stocker, gérer et faire tourner automatiquement des secrets (mots de passe, clés API) ?",
    "choices": [
      "AWS IAM Identity Center",
      "AWS Secrets Manager",
      "AWS Firewall Manager",
      "AWS Artifact"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0942",
    "domain": "Cloud Concepts",
    "question": "Parmi les avantages du cloud, lequel décrit : « vous ne payez que ce que vous consommez au lieu d'investir massivement à l'avance » ?",
    "choices": [
      "Augmenter la vitesse et l'agilité",
      "Échanger des dépenses d'investissement (CapEx) contre des dépenses variables (OpEx)",
      "Arrêter de dépenser pour exploiter des data centers",
      "Bénéficier d'économies d'échelle massives"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0943",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de compiler le code, exécuter des tests et produire des artefacts (build) ?",
    "choices": [
      "AWS CodeBuild",
      "Amazon Rekognition",
      "Amazon Translate",
      "Amazon EFS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0944",
    "domain": "Billing & Pricing",
    "question": "AWS Cost and Usage Report est principalement utilisé pour :",
    "choices": [
      "Améliorer la performance en routant le trafic via le backbone privé AWS",
      "Fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS",
      "Étendre l'infrastructure et les services AWS dans votre propre data center sur site",
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0945",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Transit Gateway ?",
    "choices": [
      "Établir une connexion réseau dédiée et privée entre un site et AWS",
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Interconnecter de nombreux VPC et réseaux sur site via un hub central",
      "Gérer l'authentification et les identités des utilisateurs d'applications web et mobiles"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0946",
    "domain": "Cloud Concepts",
    "question": "Dans le modèle de responsabilité partagée AWS, qui est responsable de : « La gestion des données côté client et le contrôle d'accès applicatif » ?",
    "choices": [
      "Le client",
      "Un fournisseur tiers non AWS",
      "AWS",
      "Personne, c'est automatique"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0947",
    "domain": "Cloud Technology",
    "question": "Pour stocker des objets de manière durable et hautement disponible dans des buckets, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon S3",
      "Amazon Lightsail",
      "Amazon Keyspaces",
      "AWS Global Accelerator"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0948",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir un broker de messages managé compatible ActiveMQ et RabbitMQ. Quel service AWS choisir ?",
    "choices": [
      "Amazon EFS",
      "Amazon MQ",
      "AWS Direct Connect",
      "AWS Fargate"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0949",
    "domain": "Cloud Technology",
    "question": "Amazon Translate est principalement utilisé pour :",
    "choices": [
      "Fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS)",
      "Évaluer et enregistrer en continu la conformité de la configuration des ressources",
      "Traduire du texte entre langues automatiquement",
      "Accéder à un shell en ligne de commande préauthentifié depuis la console AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0950",
    "domain": "Security & Compliance",
    "question": "Différence entre clé KMS gérée par le client et clé gérée par AWS ?",
    "choices": [
      "La clé client ne peut pas tourner",
      "Elles sont identiques",
      "La clé AWS est toujours payante et manuelle",
      "La clé gérée par le client offre plus de contrôle (rotation, politiques) ; la clé gérée par AWS est automatique et transparente"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0951",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de surveiller les métriques, journaux et alarmes des ressources et applications AWS. Quel service AWS choisir ?",
    "choices": [
      "AWS DataSync",
      "AWS Application Migration Service",
      "AWS Organizations",
      "Amazon CloudWatch"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0952",
    "domain": "Security & Compliance",
    "question": "Quel service AWS est conçu pour évaluer automatiquement les vulnérabilités des charges de travail (EC2, conteneurs) ?",
    "choices": [
      "Amazon Macie",
      "AWS Shield",
      "Amazon Inspector",
      "Amazon GuardDuty"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0953",
    "domain": "Security & Compliance",
    "question": "Qu'est-ce qu'une Service Control Policy (SCP) dans AWS Organizations ?",
    "choices": [
      "Un pare-feu réseau",
      "Un plan de support",
      "Une politique qui fixe les permissions maximales autorisées pour les comptes d'une organisation",
      "Une policy qui accorde des permissions supplémentaires aux utilisateurs"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0954",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour connecter des applications sur site au stockage cloud AWS de façon hybride ?",
    "choices": [
      "AWS Storage Gateway",
      "Amazon FSx",
      "Amazon API Gateway",
      "Amazon CloudFront"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0955",
    "domain": "Cloud Technology",
    "question": "AWS CodeDeploy est principalement utilisé pour :",
    "choices": [
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure",
      "Migrer des bases de données vers AWS avec un temps d'arrêt minimal",
      "Migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift)",
      "Automatiser le déploiement de code vers EC2, Lambda ou sur site"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0956",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon DynamoDB ?",
    "choices": [
      "Fournir une base de données compatible Apache Cassandra managée",
      "Fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde",
      "Gérer les identités, les accès et les permissions aux ressources AWS",
      "Fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0957",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de compiler le code, exécuter des tests et produire des artefacts (build). Quel service AWS choisir ?",
    "choices": [
      "Amazon EFS",
      "Amazon Route 53",
      "AWS CodeBuild",
      "Amazon DocumentDB"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0958",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour accéder à un shell en ligne de commande préauthentifié depuis la console AWS ?",
    "choices": [
      "Amazon EFS",
      "AWS Elastic Beanstalk",
      "AWS CloudShell",
      "AWS Health Dashboard"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0959",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de stocker et analyser des données de séries temporelles. Quel service AWS choisir ?",
    "choices": [
      "Amazon Timestream",
      "Amazon OpenSearch Service",
      "AWS Backup",
      "Amazon CloudWatch"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0960",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour mettre en cache des données en mémoire (Redis/Memcached) pour accélérer les lectures ?",
    "choices": [
      "AWS Elastic Beanstalk",
      "Amazon MQ",
      "Amazon ElastiCache",
      "Amazon EKS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0961",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS CodeBuild ?",
    "choices": [
      "Outils de développement",
      "Analytique",
      "Migration et transfert",
      "Machine Learning / IA"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0962",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de lancer rapidement des serveurs virtuels simples à prix fixe et prévisible ?",
    "choices": [
      "AWS Lambda",
      "Amazon Lightsail",
      "Amazon S3 Glacier",
      "AWS Fargate"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0963",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour compiler le code, exécuter des tests et produire des artefacts (build) ?",
    "choices": [
      "Amazon DynamoDB",
      "Amazon ECS",
      "AWS CodeBuild",
      "Amazon Kendra"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0964",
    "domain": "Cloud Technology",
    "question": "Pour fournir une base NoSQL clé-valeur managée à latence de l'ordre de la milliseconde, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon Kinesis",
      "Amazon DynamoDB",
      "Amazon Timestream",
      "Amazon QLDB"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0965",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de fournir du stockage de blocs persistant et faible latence attaché aux instances EC2. Quel service AWS choisir ?",
    "choices": [
      "Amazon EBS",
      "Amazon MSK",
      "Amazon QLDB",
      "Elastic Load Balancing"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0966",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de créer un tunnel VPN chiffré entre un réseau sur site et un VPC. Quel service AWS choisir ?",
    "choices": [
      "Amazon SQS",
      "AWS X-Ray",
      "Amazon EC2",
      "AWS Site-to-Site VPN"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0967",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet d'évaluer et enregistrer en continu la conformité de la configuration des ressources ?",
    "choices": [
      "AWS Certificate Manager",
      "Amazon GuardDuty",
      "AWS Config",
      "Amazon Inspector"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0968",
    "domain": "Security & Compliance",
    "question": "AWS CloudTrail est principalement utilisé pour :",
    "choices": [
      "Réaliser l'ETL managé sans serveur pour préparer et transformer les données",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Interconnecter de nombreux VPC et réseaux sur site via un hub central",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0969",
    "domain": "Security & Compliance",
    "question": "Quel service AWS permet de journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS ?",
    "choices": [
      "Amazon Macie",
      "AWS Firewall Manager",
      "AWS Audit Manager",
      "AWS CloudTrail"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0970",
    "domain": "Cloud Technology",
    "question": "Une entreprise a besoin de convertir du texte en parole réaliste (text-to-speech). Quel service AWS choisir ?",
    "choices": [
      "Amazon EMR",
      "Amazon Polly",
      "Amazon VPC",
      "Amazon Comprehend"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0971",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient AWS Control Tower ?",
    "choices": [
      "Réseau et diffusion de contenu",
      "Intégration d'applications",
      "Gestion et gouvernance",
      "Calcul (Compute)"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0972",
    "domain": "Security & Compliance",
    "question": "La politique AWS sur les tests d'intrusion (pentest) prévoit :",
    "choices": [
      "Il faut acheter le plan Enterprise",
      "Le client peut tester certains services autorisés sans approbation préalable, selon la politique AWS",
      "Seul AWS peut tester quoi que ce soit",
      "Tout test est strictement interdit"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0973",
    "domain": "Security & Compliance",
    "question": "Contre quel type d'attaque AWS Shield protège-t-il principalement ?",
    "choices": [
      "Les attaques par déni de service distribué (DDoS)",
      "Le vol de credentials par phishing",
      "Les erreurs de configuration IAM",
      "Les injections SQL applicatives"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0974",
    "domain": "Cloud Technology",
    "question": "Transférer physiquement plusieurs To vers AWS (bande passante limitée) :",
    "choices": [
      "AWS Snowball",
      "Direct Connect uniquement",
      "S3 Transfer Acceleration seul",
      "CloudFront"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0975",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic ?",
    "choices": [
      "AWS Direct Connect",
      "Amazon MemoryDB",
      "Amazon Route 53",
      "AWS Systems Manager"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0976",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon SNS ?",
    "choices": [
      "Améliorer la performance en routant le trafic via le backbone privé AWS",
      "Envoyer des notifications en mode publication/abonnement (pub/sub) vers plusieurs abonnés",
      "Réaliser de l'analytique (data warehouse) sur des pétaoctets de données via SQL",
      "Orchestrer des conteneurs Docker via un service d'orchestration propriétaire AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0977",
    "domain": "Cloud Concepts",
    "question": "Quel modèle de service cloud est illustré par : « l'exécution de fonctions à la demande sans gérer de serveur (ex : Lambda) » ?",
    "choices": [
      "PaaS",
      "IaaS",
      "SaaS",
      "FaaS"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0978",
    "domain": "Billing & Pricing",
    "question": "À quelle catégorie de services AWS appartient AWS Trusted Advisor ?",
    "choices": [
      "Machine Learning / IA",
      "Gestion des coûts et facturation",
      "Sécurité, identité et conformité",
      "Calcul (Compute)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0979",
    "domain": "Billing & Pricing",
    "question": "Pour fournir le rapport le plus détaillé sur l'utilisation et les coûts AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Marketplace",
      "AWS Cost and Usage Report"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0980",
    "domain": "Cloud Technology",
    "question": "Quel service AWS répond au besoin suivant : fournir un IDE de développement dans le navigateur ?",
    "choices": [
      "Amazon Timestream",
      "Amazon S3 Glacier",
      "AWS Cloud9",
      "Amazon EMR"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0981",
    "domain": "Cloud Technology",
    "question": "À quelle catégorie de services AWS appartient Amazon Transcribe ?",
    "choices": [
      "Stockage",
      "Gestion des coûts et facturation",
      "Machine Learning / IA",
      "Gestion et gouvernance"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0982",
    "domain": "Security & Compliance",
    "question": "Pour créer et contrôler les clés de chiffrement utilisées pour protéger les données, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS Audit Manager",
      "AWS KMS",
      "AWS Firewall Manager",
      "AWS Certificate Manager"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0983",
    "domain": "Cloud Technology",
    "question": "Pour fournir une base relationnelle compatible MySQL/PostgreSQL jusqu'à 5x plus rapide, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS DMS",
      "Amazon Aurora",
      "Amazon Polly",
      "Amazon Timestream"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0984",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour surveiller les métriques, journaux et alarmes des ressources et applications AWS ?",
    "choices": [
      "AWS CodeDeploy",
      "AWS CloudFormation",
      "Amazon CloudWatch",
      "Amazon Bedrock"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0985",
    "domain": "Cloud Technology",
    "question": "AWS CodeCommit est principalement utilisé pour :",
    "choices": [
      "Construire, entraîner et déployer des modèles de machine learning",
      "Héberger des dépôts Git privés managés",
      "Fournir une base de données de registre (ledger) immuable et vérifiable cryptographiquement",
      "Fournir un service DNS managé, l'enregistrement de domaines et le routage du trafic"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0986",
    "domain": "Cloud Technology",
    "question": "Pour réaliser l'ETL managé sans serveur pour préparer et transformer les données, quel service AWS est le plus approprié ?",
    "choices": [
      "AWS CodeDeploy",
      "AWS Glue",
      "AWS Step Functions",
      "AWS Service Catalog"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0987",
    "domain": "Cloud Technology",
    "question": "AWS Outposts est principalement utilisé pour :",
    "choices": [
      "Créer, publier et sécuriser des API REST, HTTP et WebSocket à grande échelle",
      "Étendre l'infrastructure et les services AWS dans votre propre data center sur site",
      "Déployer et faire évoluer des applications web en gérant automatiquement l'infrastructure",
      "Améliorer la performance en routant le trafic via le backbone privé AWS"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0988",
    "domain": "Cloud Technology",
    "question": "Amazon FSx est principalement utilisé pour :",
    "choices": [
      "Fournir des systèmes de fichiers managés (Windows, Lustre, NetApp, OpenZFS)",
      "Analyser et investiguer la cause racine d'incidents de sécurité",
      "Répartir automatiquement le trafic entrant entre plusieurs cibles dans plusieurs AZ",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS"
    ],
    "answer": 0,
    "timeLimit": 10
  },
  {
    "id": "q0989",
    "domain": "Cloud Technology",
    "question": "Quel service AWS est conçu pour fournir un IDE de développement dans le navigateur ?",
    "choices": [
      "Amazon S3 Glacier",
      "AWS CloudFormation",
      "AWS Cloud9",
      "Amazon QLDB"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0990",
    "domain": "Cloud Technology",
    "question": "Pour router des événements entre applications via un bus d'événements serverless, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon DynamoDB",
      "Amazon EventBridge",
      "AWS Auto Scaling",
      "AWS Fargate"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0991",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'AWS Auto Scaling ?",
    "choices": [
      "Provisionner l'infrastructure via des templates (Infrastructure as Code)",
      "Rechercher, analyser et visualiser des logs et données en quasi temps réel",
      "Journaliser les appels d'API (qui a fait quoi, quand) sur le compte AWS",
      "Ajuster automatiquement la capacité pour maintenir performance et coûts optimaux"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0992",
    "domain": "Cloud Concepts",
    "question": "Quel élément de l'infrastructure mondiale AWS correspond à : « une extension d'une région rapprochant calcul et stockage des grandes agglomérations » ?",
    "choices": [
      "Région AWS",
      "Local Zone",
      "Point de présence (PoP)",
      "Zone de disponibilité (AZ)"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0993",
    "domain": "Security & Compliance",
    "question": "À quelle catégorie de services AWS appartient AWS IAM ?",
    "choices": [
      "Gestion des coûts et facturation",
      "Base de données",
      "Stockage",
      "Sécurité, identité et conformité"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0994",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Kendra ?",
    "choices": [
      "Déployer un pare-feu réseau managé et à état pour protéger un VPC",
      "Gérer les identités, les accès et les permissions aux ressources AWS",
      "Fournir un moteur de recherche d'entreprise intelligent",
      "Automatiser et accélérer le transfert de données entre le sur site et AWS"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0995",
    "domain": "Cloud Technology",
    "question": "Pour gérer et regrouper de façon centralisée plusieurs comptes AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon SQS",
      "Amazon MQ",
      "AWS CodeDeploy",
      "AWS Organizations"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0996",
    "domain": "Security & Compliance",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Macie ?",
    "choices": [
      "Analyser et déboguer les applications distribuées (tracing)",
      "Transférer physiquement de grands volumes de données vers AWS via un boîtier sécurisé",
      "Découvrir et protéger les données sensibles (PII) stockées dans Amazon S3",
      "Recommander des ressources optimales pour réduire les coûts et améliorer la performance"
    ],
    "answer": 2,
    "timeLimit": 10
  },
  {
    "id": "q0997",
    "domain": "Cloud Technology",
    "question": "Quel service AWS permet de réaliser l'ETL managé sans serveur pour préparer et transformer les données ?",
    "choices": [
      "AWS Backup",
      "AWS Glue",
      "Amazon S3 Glacier",
      "Amazon Textract"
    ],
    "answer": 1,
    "timeLimit": 10
  },
  {
    "id": "q0998",
    "domain": "Cloud Technology",
    "question": "Pour surveiller les métriques, journaux et alarmes des ressources et applications AWS, quel service AWS est le plus approprié ?",
    "choices": [
      "Amazon QuickSight",
      "AWS Systems Manager",
      "Amazon Kendra",
      "Amazon CloudWatch"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q0999",
    "domain": "Billing & Pricing",
    "question": "Quel service AWS permet d'estimer le coût d'une architecture AWS avant son déploiement ?",
    "choices": [
      "AWS Cost and Usage Report",
      "AWS Marketplace",
      "AWS Budgets",
      "AWS Pricing Calculator"
    ],
    "answer": 3,
    "timeLimit": 10
  },
  {
    "id": "q1000",
    "domain": "Cloud Technology",
    "question": "Quelle proposition décrit le mieux le rôle d'Amazon Athena ?",
    "choices": [
      "Migrer des serveurs sur site vers AWS par réhébergement (lift-and-shift)",
      "Gérer les identités, les accès et les permissions aux ressources AWS",
      "Créer et contrôler les clés de chiffrement utilisées pour protéger les données",
      "Exécuter des requêtes SQL directement sur des données stockées dans Amazon S3"
    ],
    "answer": 3,
    "timeLimit": 10
  }

];

/**
 * Retourne N questions aléatoires mélangées depuis la banque complète.
 * @param {number} count - Nombre de questions
 * @param {number|null} timeLimitOverride - Remplace le timeLimit de chaque question si fourni
 */
function generateQuiz(count = 15, timeLimitOverride = null) {
  const shuffled = [...ALL_QUESTIONS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return selected.map((q) => {
    const correctText = q.choices[q.answer];
    const shuffledChoices = [...q.choices];
    for (let i = shuffledChoices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
    }
    const newAnswerIndex = shuffledChoices.indexOf(correctText);
    return {
      id: q.id,
      domain: q.domain,
      question: q.question,
      choices: shuffledChoices,
      answer: newAnswerIndex,
      timeLimit: timeLimitOverride !== null ? timeLimitOverride : q.timeLimit
    };
  });
}

module.exports = { generateQuiz, ALL_QUESTIONS };
