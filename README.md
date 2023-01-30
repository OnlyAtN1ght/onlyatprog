# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.


### Deployement 

Build docker :
```
sudo docker build -t onlyatprog .
```

Run Docker :
```
sudo docker run -it -d -p 8000:8000 onlyatprog
```
