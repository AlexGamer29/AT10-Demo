# AT10-Demo
## NOTES
- The application only runs on localhost

### Installation
1. Go to repository: https://github.com/AlexGamer29/AT10-Demo/
2. Clone the repository
   ```sh
   git clone https://github.com/AlexGamer29/AT10-Demo.git
   ```
#### Back-end
3. Change the directory to backend folder
   ```sh
   cd backend
   ```
4. Create a copy of .env file from .env.example with DB_DATABASE=at-web-backend
5. Install Composer packages
   ```sh
   composer install
   ```
6. Start the laravel app at localhost
   ```sh
   php artisan serve
   ```
   
#### Front-end
7. Change the directory to frontend folder
   ```sh
   cd frontend
   ```
8. Dont' forget to create .env.local file in the root of frontend folder and add REACT_APP_API_URL=http://127.0.0.1:8000
9. Install NPM packages
   ```sh
   npm install
   ```
10. Start the web at localhost
   ```sh
   npm start
   ```
