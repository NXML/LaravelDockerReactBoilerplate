# Laravel React bowsersync Docker

This is my boylerplate for a 7.x laravel application using React.js front end using Docker.

> Avaiable on my github [@NXML](https://github.com/nxml).



## Usage

Build image

```docker 
docker-compose build
```





Installing  dependencies composer

```docker 
docker run --rm composer $(pwd):/app composer install
```

Installing  dependencies npm

```docker 
docker-compose exec app npm install
```




## Run command in app

```docker
docker-compose exec app yourCommand yourArguments
```





## License

The Laravel framework and this boilerplate is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).