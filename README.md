# Wordpress login clone
Visual clone of wordpress login page
![Screenshot](https://i.imgur.com/7gpdEpU.png)

### **Installation steps**
Check Node and NPM installation
```
> node -v     // Expect version 10.x or higher
> npm -v      // Expect version 6.x
```
To install Node, [follow instructions here](https://github.com/nvm-sh/nvm#install--update-script). Once installed, run the following commands to get necessary versions of required softwares:
```
> nvm install v10.5.0 // Installs v10 of NodeJS with default bundled NPM version
> npm install -g npm // Updates NPM version
```

Clone repository to local system
```
> git clone https://github.com/shreeshkatyayan/wordpress-login-clone.git shreesh-assignment

> cd shreesh-assignment
```

Install necessary dependencies and run server
```
npm ci // Installs dependencies via lockfile
npm start
```