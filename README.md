# Pitch deck uploader

This project is composed by the frontend client and the backend.
It's goal is to allow a user to upload a PDF file and a company name. The backend would process the file by splitting it into images. After that, the images will be saved in the filesystem and the paths with the company name will be stored in the database.
In the frontend after uploading a pitch deck and in a different page, the user should be able to search for different companies that uploaded a pitch deck. Once a company is chosen, its page should display the company name, date of registration and the images generated from the pitch deck file.

## Setup

### Docker Backend

- Copy the file `.docker.env.example` and rename it to `.docker.env`. That file contains the information needed to connect the backend and the database as well as other configuration
- In the server folder execute the command `docker-compose build` to build the images required.
- Once the images are built, execute `docker-compose up` to boot the container and start running the backend.

### Backend

- If you are not using docker, please use Ubuntu 20 and run the following commands to install some project dependencies:
  - `$ sudo apt-get install ghostscript`
  - `$ sudo apt-get -y install graphicsmagick`
- After that, install the modules required using `yarn` to install them
- Copy the `.env.example` file and rename it to `.env`. Inside the new file, fill the variables with the values needed to connect to the database as in the example.

**Please don't forget to create a folder named `media` in the server folder. If you changed the `MEDIA_PATH` variable, please create the folder with the same name you set in that variable**

### Frontend

- Copy the `.env.example` file and rename it to `.env`. Inside the new file please set the correct `REACT_APP_API_BASE_URL` variable to connect with the backend
- Install the dependencies by running `yarn`
- tun the project by executing `yarn start` command
