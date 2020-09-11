# Laravel React bowsersync Docker

This is my boylerplate for a 7.x laravel application using React.js front end using Docker.

> Avaiable on my github [@NXML](github.com/nxml).



## Usage

Build image

``docker-compose build``





Installing  dependencies composer

``docker run --rm composer $(pwd):/app composer install``

Installing  dependencies npm

``docker-compose exec app npm install``




## Run command in app

``docker-compose exec app yourcommand your arguments``





## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).