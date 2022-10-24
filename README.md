# Next JS | Mini Jira

1 . You need a database

```text
docker compose up -d
```

* ' -d ', meanings __detached__

2 . MongoDB url local:

```text
mongodb://localhost:27017/minijiradb
```

## Configure environment variables

rename the file __.env.template__ to __.env__

* Rebuild node_modules with ```yarn install```, next lift NextJS with ```yarn dev```

## Fill the database with test information

Call URL:

```text
http://localhost:3000/api/seed
```
