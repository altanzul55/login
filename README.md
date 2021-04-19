# blog
  Node.js ашиглан бүрэн ажилгаатай мэдээний site
  
  <img src="https://scontent.fuln4-2.fna.fbcdn.net/v/t1.15752-9/175067337_734233787254698_4384030950351178399_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=0ihAWwyVnhQAX8EzG41&_nc_ht=scontent.fuln4-2.fna&oh=f6b1b706e800c055766eebc5cc868a8d&oe=60A09152" />
 
# Ашиглах заавар:

  1. ZIP Download хийнэ: login file

  2. file->  Open Folder in Visual Studio
 
    Visual download npm install in terminal:

  #3.MySql open Database: User table name accounts

    CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
    USE `nodelogin`;

    CREATE TABLE IF NOT EXISTS `accounts` (
    `id` int(11) NOT NULL,
    `username` varchar(50) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL
    ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

    INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

    ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
    ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
    
    select*from accounts;

  4.MySql open Database: Blog table name blogPost

   CREATE DATABASE IF NOT EXISTS nodelogin DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; USE nodelogin;

    CREATE TABLE IF NOT EXISTS `blogPost` (
    `id` int(11) NOT NULL,
    `title` varchar(250) NOT NULL,
    `description` varchar(500) NOT NULL,
    `blogPhoto` varchar(255) NOT NULL
    ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

    ALTER TABLE `blogPost` ADD PRIMARY KEY (`id`);
    ALTER TABLE `blogPost` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
    
    select*from blogPost;

  5.Create file: .env

    DB_HOST = ‘localhost’
    DB_USERNAME = 'root'
    DB_PASSWORD = 'password'//enter your password//
    DB_NAME = 'nodelogin'

    SERVER_PORT = 3000
    
 6.Open Terminal Start : 
  
    npm start
       
 7.Open browser: write

    localhost:3000


