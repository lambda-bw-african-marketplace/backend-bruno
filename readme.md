[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="">
    <img src="bruno.jpg" alt="Logo" >
  </a>

  <h3 align="center">African Marketplace</h3>
   <h5 align="center">by</h5>

  <p align="center">
  <a href="https://brunopaula.com">Bruno Paula</a>
  
 
  
</p>

  <p align="center">
    An awesome Backend project!
    <br />
    <a href="https://expressjs.com/en/4x/api.html"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://africa-mkplace.herokuapp.com/api/">View Demo</a>
    ·
    <a href="https://github.com/devbrunopaula">Report Bug</a>
    ·
    <a href="https://github.com/devbrunopaula">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#Setup)
  - [Installation](#Migrations)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/lambda-bw-african-marketplace/backend-bruno/blob/main/african-marketplace-2-irene-jonker.jpg)

Learn How a CRM System Can Help Your Business Today..

Here's why:

- Africa empowers small business owners,
- Ease of use
- Easy reporting & overviews

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.

You will build a platform to enable these business owners to create listing for items they have for sale.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Express JS](https://expressjs.com/)

1. Express JS
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. bcrypt
7. Knex ORM
8. JWT Token

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Setup

Use the adonis command to install the blueprint

```bash
npm i
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
node index.js
```

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://expressjs.com/)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/devbrunopaula) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@devbrunopaula](https://twitter.com/your_username) - devbrunopaula@gmail.com.com

Project Link: [bw-african-marketplace](https://github.com/lambda-bw-african-marketplace/backend-bruno)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Bruno Paula](https://brunopaula.com)
- [Adonis JS](https://adonisjs.com/)
- [Knex](http://knexjs.org/)
- [Postgres](https://www.postgresql.org/)
- [ChanceJS](http://chancejs.com/)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/lambda-bw-african-marketplace/backend-bruno/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/devbrunopaula
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bruno-paula/
[product-screenshot]: screenshot.png

---

# African Marketplace - Back End.

Base URL: https://africa-mkplace.herokuapp.com

#################################################

# API ENDPOINTS

# Marketplace Register/Login/

| DESCRIPTION            | TYPE | ENDPOINT           |
| ---------------------- | ---- | ------------------ |
| Register User or Owner | POST | /api/auth/register |

| DESCRIPTION | TYPE | ENDPOINT        |
| ----------- | ---- | --------------- |
| Login Users | POST | /api/auth/login |

<br>
<br>
Private Routes
**  Endpoint will required a JWT Token in the HEADER
<br>
<br>

# Prodcuts CRUD

| DESCRIPTION               | TYPE | ENDPOINT         |
| ------------------------- | ---- | ---------------- |
| \*\* get list of products | GET  | /api/products    |
| \*\* get products by ID   | GET  | /api/product/:id |
| \*\* add product          | POST | api/products     |
| \*\* update product       | PUT  | /api/product/:id |
| \*\* delete product       | DEL  | /api/product/:id |

<br>
<br>

# Users

| DESCRIPTION                  | TYPE | ENDPOINT                |
| ---------------------------- | ---- | ----------------------- |
| \*\* get user profile        | GET  | /api/profile/           |
| \*\* upadate user profile    | PUT  | /api/profile/:id        |
| \*\* get users products list | GET  | /api/users/:id/products |

<br>
<br>

# locations

\* Cities with two names **Use %20** for spaces EX: San Francisco = san%20francisco
<br>

| DESCRIPTION                    | TYPE | ENDPOINT            |
| ------------------------------ | ---- | ------------------- |
| \*\* get all locations         | GET  | /api/locations      |
| \*\* get location by city name | GET  | /api/locations/city |

<br>
<br>

# Logout

| DESCRIPTION | TYPE | ENDPOINT         |
| ----------- | ---- | ---------------- |
| logout      | GET  | /api/auth/logout |

<br>
<br>
Product

| NAME      | TYPE    | REQUIRED | DETAILS                        |
| --------- | ------- | -------- | ------------------------------ |
| id        | integer | no       | auto generated and incremented |
| name      | string  | yes      | product name                   |
| price     | float   | yes      | product price                  |
| city      | string  | yes      | product location               |
| category  | string  | yes      | product category               |
| unit      | string  | yes      | product unit / measurement     |
| image_url | string  | no       | image url                      |
| user_id   | integer | yes      | User Foreign key               |

<br>

EXAMPLE

```
{
    "id": 14,
    "product_name": "Rice",
    "price": 1.98,
    "city": "Boston",
    "category": "Grain",
    "description": "Long Grain Jasmine Rice",
    "unit": "pounds",
    "image_url": "https://tinyurl.com/y6jr6etj",
    "user_id": 1
  },

```

<br>
<br>

User

| NAME       | TYPE    | REQUIRED | DETAILS                        |
| ---------- | ------- | -------- | ------------------------------ |
| id         | integer | no       | auto generated and incremented |
| email      | string  | yes      | email (required for login)     |
| password   | string  | yes      | password (required for login)  |
| first_name | string  | yes      | users first name               |
| last_name  | string  | yes      | users last name                |
| isAdmin    | bollean | no       | default to false               |

<br>

EXAMPLE

```
{
  "id": 1,
  "email": "brunopaula@test.com",
  "isAdmin": false,
  "first_name": "bruno",
  "last_name": "paula",
  "created_at": "2020-11-13T05:01:25.552Z",
  "updated_at": "2020-11-13T05:01:25.552Z"
}

```
