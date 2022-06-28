export class User {

    username: string|null;
    email: string|null;
    password: string|null;
    admin: boolean|false;
    loggedIn: boolean|false;

    constructor(username: string, email: string, password: string, admin: boolean, loggedIn: boolean) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.admin = admin;
      this.loggedIn = loggedIn;

      this.init();
    }

    /**
     * @var username string
     * @var email string
     * @var admin boolean
     * @var loggedIn string
     */
    init() {
      this.username = localStorage.getItem('userName');
      this.email = localStorage.getItem('userEmail');
      this.admin = localStorage.getItem('userAdmin') === 'true' ? true : false;
      this.loggedIn = localStorage.getItem('userLoggedIn') ? true : false;
    }

    /**
     *
     * @param data object
     * @param data.name string
     * @param data.email string
     * @param data.role number
     * @param callback function
     */
    authenticated(data:any, callback: any) {
      localStorage.setItem('userName', data.username);
      localStorage.setItem('userEmail', data.email);
      localStorage.setItem('userAdmin', (data.role <= 2) ? new Boolean(true).toString() : new Boolean(false).toString());
      localStorage.setItem('userLoggedIn', new Boolean(true).toString());

      this.init();

      callback();
    }

    /**
     *
     * @return {boolean}
     */
    isLoggedIn() {
      return Boolean(this.loggedIn) === true;
    }

    /**
     *
     * @return {boolean}
     */
    isAdmin() {
      return Boolean(this.admin) === true;
    }

    /**
    * Remove all user's data from local storage
    */
    destroy() {
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userAdmin');
      localStorage.removeItem('userLoggedIn');
    }

    /**
     *
     * @param callback function
     */
    logout(callback: any) {
      this.destroy();
      callback();
    }
  }

  export default new User('', '', '', false, false)