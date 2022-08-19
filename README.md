
# Elastic-Fuzzy-Search




## API Reference

#### Get all Searched items

```http
  POST /search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**|




## System Requirement

Node, Elastic Search, Java Runtime Environment

## Ports

3000 - React App

5000 - Backend 

9200 - elastic search

## Flow

User will search for product ... In our local database we have product title which will map to search data based on fuzzy searching .

We have kept fuzziness to 1 (that is edit distance can me max 1) so if user mispelled something by one edit distance then also he will get relevant data 

We have 1 title Proties Shake,  user search for Protien, Proten, Protin he will get same answer that will be displayed in the card in our React app


Note: elastic server should be running (at 9200)


