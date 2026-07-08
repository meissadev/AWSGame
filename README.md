# AWS Quiz Live 🎮

Quiz en temps réel façon Kahoot, basé sur le programme AWS Cloud Practitioner (CLF-C02).

## Installation

```bash
npm install
```

## Lancement

```bash
npm start
```

Puis ouvrez :
- **Modérateur** → http://localhost:3000/host.html
- **Joueurs** → http://localhost:3000/

## Fonctionnement

1. Le modérateur crée une session sur `/host.html` → obtient un code à 6 caractères
2. Les joueurs entrent le code + leur pseudo sur la page principale
3. Le modérateur démarre le quiz
4. Questions AWS générées automatiquement depuis la banque (50 questions couvrant les 4 domaines CLF-C02)
5. Score dégressif : 1000 pts (réponse instantanée) → 500 pts (juste avant la fin du timer)
6. Classement en temps réel après chaque question
7. Podium final avec les 3 premiers

## Domaines couverts

- **Cloud Concepts** (24%) : modèles cloud, régions, AZ, élasticité
- **Security & Compliance** (30%) : IAM, Shield, GuardDuty, responsabilité partagée
- **Cloud Technology** (34%) : EC2, S3, Lambda, RDS, VPC, CloudWatch...
- **Billing & Pricing** (12%) : Free Tier, plans de support, Cost Explorer, Reserved Instances
